"use client";

import { useEffect, useRef, useState } from "react";

const scenes = ["01-offline", "02-connect", "03-orders", "04-expand"];
const perScene = 160;
const totalFrames = scenes.length * perScene;
function source(frame: number) {
  return `/story/${scenes[Math.floor(frame / perScene)]}/${String(frame % perScene + 1).padStart(3, "0")}.webp`;
}

/** Decoded frames make the film reversible without video seek delays. */
export function ScrollFilm({ progress, reduced }: { progress: number; reduced: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const desired = useRef(0);
  const reducedMotion = useRef(reduced);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    reducedMotion.current = reduced;
    desired.current = reduced ? Math.min(3, Math.floor(progress * 4)) * perScene : progress * (totalFrames - 1);
  }, [progress, reduced]);

  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    const ctx = el.getContext("2d", { alpha: false });
    if (!ctx) return;
    let alive = true, raf = 0, visible = true, current = desired.current, last = -1;
    let width = 0, height = 0, dirty = true, readyOnce = false;
    const cache = new Map<number, HTMLImageElement>();
    function load(n: number) {
      if (n < 0 || n >= totalFrames || cache.has(n)) return;
      const img = new Image();
      cache.set(n, img);
      img.onload = () => { if (alive) dirty = true; };
      img.onerror = () => { if (alive && n === 0) setFailed(true); };
      img.src = source(n);
    }
    const resize = new ResizeObserver(() => {
      const bounds = el.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      width = el.width = Math.round(bounds.width * dpr);
      height = el.height = Math.round(bounds.height * dpr);
      dirty = true;
    });
    resize.observe(el);
    function tick() {
      if (!alive) return;
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      current = reducedMotion.current ? desired.current : current + (desired.current - current) * .22;
      if (Math.abs(current - desired.current) < .1) current = desired.current;
      const n = Math.max(0, Math.min(totalFrames - 1, Math.round(current)));
      load(n);
      const withinScene = n % perScene;
      const previousEnd = n - withinScene - 1;
      if (n >= perScene && withinScene < 8) load(previousEnd);
      if (n !== last || dirty) {
        const direction = desired.current >= current ? 1 : -1;
        for (let i = 1; i <= 18; i++) { load(n + i * direction); if (i <= 5) load(n - i * direction); }
        // Use the closest decoded neighbour while a new frame arrives.
        let img = cache.get(n);
        if (!img?.complete || !img.naturalWidth) {
          img = undefined;
          for (let offset = 1; offset <= 12 && !img; offset++) {
            for (const candidate of [n - offset, n + offset]) {
              const entry = cache.get(candidate);
              if (entry?.complete && entry.naturalWidth) { img = entry; break; }
            }
          }
        }
        if (img && width && height) {
          const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
          const w = img.naturalWidth * scale, h = img.naturalHeight * scale;
          ctx!.drawImage(img, (width - w) / 2, (height - h) / 2, w, h);
          // Briefly dissolve across the independently generated clip boundaries.
          const previous = cache.get(previousEnd);
          if (n >= perScene && withinScene < 8 && previous?.complete && previous.naturalWidth) {
            const oldScale = Math.max(width / previous.naturalWidth, height / previous.naturalHeight);
            const oldW = previous.naturalWidth * oldScale, oldH = previous.naturalHeight * oldScale;
            ctx!.globalAlpha = 1 - withinScene / 8;
            ctx!.drawImage(previous, (width - oldW) / 2, (height - oldH) / 2, oldW, oldH);
            ctx!.globalAlpha = 1;
          }
          if (!readyOnce) { readyOnce = true; setReady(true); }
        }
        last = n; dirty = false;
        if (cache.size > 90) for (const key of cache.keys()) if (Math.abs(key - n) > 35) cache.delete(key);
      }
    }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { rootMargin: "100px" });
    observer.observe(el);
    load(0); tick();
    return () => { alive = false; cancelAnimationFrame(raf); resize.disconnect(); observer.disconnect(); cache.clear(); };
  }, []);

  return <div className="cinema-film" aria-hidden="true">
    {/* The poster remains available if frames fail or JavaScript is slow. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/story/01-offline/001.webp" alt="" className="cinema-poster" />
    {!failed && <canvas ref={canvas} className={ready ? "is-ready" : ""} />}
  </div>;
}
