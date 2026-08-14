"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export function HeroBackdrop() {
  const reduce = useReducedMotion();
  const layer = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !layer.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    layer.current.style.transform = `translate3d(${x * -22}px, ${y * -14}px, 0)`;
  }

  function onLeave() {
    if (!layer.current) return;
    layer.current.style.transform = "translate3d(0,0,0)";
  }

  return (
    <div className="absolute inset-0 overflow-hidden" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={layer} className="absolute -inset-10 transition-transform duration-300 ease-out will-change-transform">
        <div className={`absolute inset-0 ${reduce ? "" : "hero-kenburns"}`}>
          <Image
            src="/hero-3d.png"
            alt="3D scene of a Pakistani shop going digital"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center]"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/78 to-green-950/15" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-green-950/30" />
      {!reduce && (
        <div className="absolute inset-0">
          <HeroScene />
        </div>
      )}
    </div>
  );
}
