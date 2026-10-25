"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, MessageCircle, Maximize } from "lucide-react";
import { ScrollFilm } from "./ScrollFilm";
import { services } from "@/data/services";
import { waLink } from "@/data/site";

const chapters = [
  { label: "01 / A familiar beginning", title: "Achi dukaan.\nNaye customers kahan?", text: "Beautiful clothes. An owner who cares. But only the people passing by know this little boutique exists.", note: "A good business deserves to be discovered." },
  { label: "02 / A new possibility", title: "Phir saath aaya\nPyara Pakistan.", text: "A clear identity. Content worth stopping for. An online shopfront that brings the boutique to your customers.", note: "Branding · Content · Website" },
  { label: "03 / Customers, not just views", title: "Ab dukaan,\nhar phone par.", text: "Inquiries become conversations. Conversations become orders. Your next customer is already online.", note: "Local ads · WhatsApp · Follow-up" },
  { label: "04 / Room for bigger dreams", title: "Choti dukaan.\nBaray khwab.", text: "The same owner. The same care. A bigger boutique. And a whole new world of customers.", note: "Your next chapter starts here." },
];
export function BoutiqueStory() {
  const root = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const motion = () => setReduced(query.matches);
    motion(); query.addEventListener("change", motion);
    let frame = 0;
    const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => {
      const el = root.current;
      if (el) setProgress(Math.max(0, Math.min(1, -el.getBoundingClientRect().top / (el.offsetHeight - innerHeight))));
    }); };
    update(); addEventListener("scroll", update, { passive: true }); addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); removeEventListener("scroll", update); removeEventListener("resize", update); query.removeEventListener("change", motion); };
  }, []);
  const index = Math.min(3, Math.floor(progress * 4));
  const chapter = chapters[index];
  return <div className="boutique-experience cinema-experience">
    <section className="story-track" ref={root} aria-label="One boutique’s journey from offline to online">
      <div className="story-stage">
        <ScrollFilm progress={progress} reduced={reduced} />
        <div className="cinema-shade" />
        <div className="story-topline"><span><i /> A PAKISTANI BUSINESS STORY</span><a href="#our-services">Skip to services <ArrowUpRight size={13} /></a></div>
        <div className="story-copy" key={index}>
          <p className="story-eyebrow">{chapter.label}</p><h1>{chapter.title}</h1><p className="story-description">{chapter.text}</p>
          {(index === 0 || index === 2) && <p className="cinema-reference">Illustrative monthly figures: sales Rs {index === 0 ? "2" : "20"} lakh · expenses Rs 1.9 lakh.</p>}
          <p className="story-note">{chapter.note}</p>
          {index === 3 && <a className="story-button" href={waLink()}>Let’s grow your business <ArrowUpRight size={18} /></a>}
        </div>
        <button className="cinema-fullscreen" aria-label="Toggle fullscreen story" onClick={() => {
          const stage = document.documentElement;
          if (document.fullscreenElement) { void document.exitFullscreen().catch(() => {}); }
          else if (stage?.requestFullscreen) { void stage.requestFullscreen().catch(() => {}); }
        }}><Maximize size={15} /><span>Fullscreen</span></button>
        <div className="story-bottom"><span><ArrowDown size={15} /> Scroll to explore</span><span>EK DUKAAN. NAYE IMKAAN.</span><span>0{index + 1} <i>/ 04</i></span></div>
        <nav className="story-chapters" aria-label="Story chapters">{chapters.map((c, i) => <button key={c.label} aria-label={c.label} aria-current={i === index ? "step" : undefined} onClick={() => {
          const el = root.current;
          if (el) window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top + (el.offsetHeight - window.innerHeight) * (i / 4 + .01), behavior: "instant" });
        }}><span style={{ transform: `scaleX(${Math.max(0, Math.min(1, progress * 4 - i))})` }} /></button>)}</nav>
        <small className="story-disclaimer">An illustrative business journey, not a promise of sales or fixed costs.</small>
      </div>
    </section>
    <section className="story-invitation"><p className="story-eyebrow">YOUR BUSINESS COULD BE NEXT</p><h2>Apna business barhayein.<br /><em>Pyara Pakistan ke saath.</em></h2><p>You bring the ambition. We bring your business online — and build the path from discovery to customer.</p><a className="story-button" href={waLink()}><MessageCircle size={18} /> Connect on WhatsApp <ArrowUpRight size={18} /></a><Link href="/packages" className="story-text-link">Explore our packages →</Link></section>
    <section id="our-services" className="story-services"><div className="story-service-heading"><div><p className="story-eyebrow">THE WORK BEHIND THE GROWTH</p><h2>Our services.</h2></div><p>From your first digital identity to your next customer.<br />One connected system for your business.</p></div><div className="story-service-list">{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}><span>{s.number}</span><h3>{s.title}</h3><p>{s.short}</p><ArrowUpRight size={22} /></Link>)}</div></section>
    <div className="sr-only">{chapters.map(c => <section key={c.label}><h2>{c.title}</h2><p>{c.text} {c.note}</p></section>)}</div>
  </div>;
}
