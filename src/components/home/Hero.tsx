"use client";

import { useEffect, useRef } from "react";
import heroImg from "../../assets/hero.jpg";

export default function Hero() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const wrapper = track.parentElement as HTMLElement | null;
    if (!wrapper) return;

    const ensureClones = () => {
      // total width of all child tracks
      const children = Array.from(wrapper.children) as HTMLElement[];
      let totalWidth = children.reduce((sum, el) => sum + (el.scrollWidth || 0), 0);
      const viewportWidth = wrapper.parentElement?.offsetWidth || window.innerWidth;
      // append clones until we have at least twice the viewport width
      let safety = 20; // avoid infinite loops
      while (totalWidth < viewportWidth * 2 && safety-- > 0) {
        const clone = track.cloneNode(true) as HTMLElement;
        wrapper.appendChild(clone);
        totalWidth += clone.scrollWidth || 0;
      }
    };

    ensureClones();

    const ro = new ResizeObserver(() => ensureClones());
    if (wrapper.parentElement) ro.observe(wrapper.parentElement);
    window.addEventListener("resize", ensureClones);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", ensureClones);
    };
  }, []);
  return (
    <section className="relative pt-25 pb-0 md:pt-30 overflow-hidden bg-background" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 min-h-[auto] md:h-150 py-16 md:py-0">
        {/* Text Content */}
        <div className="w-full md:w-1/2 z-20 pt-0 md:pt-0 text-center md:text-left">
          <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 tracking-tighter text-on-background">Pratik Galave</h1>
          <p className="text-on-surface-variant text-base sm:text-lg max-w-md mx-auto md:mx-0">Full‑stack developer — React · Node.js · MongoDB · Real‑time systems</p>
        </div>
        {/* Hero Image */}
        <div className="w-full md:w-1/2 relative md:absolute md:bottom-0 md:right-0 md:relative flex justify-center md:justify-end items-end h-[320px] sm:h-[420px] md:h-full opacity-90 md:opacity-100">
          <img
            alt="Pratik Galave Portrait"
            className="h-auto max-h-[320px] sm:max-h-[420px] md:max-h-full object-cover object-bottom z-10 filter grayscale contrast-125"
            src={heroImg.src}
          />
        </div>
      </div>
      {/* Tech Marquee Separator */}
      <div className="tech-marquee relative z-20 border-t border-b border-[#333]">
        <div className="tech-marquee-content">
          <div className="marquee-track" ref={trackRef}>
            {/* Repeating icons for marquee effect */}
            <i className="fa-brands fa-html5 tech-icon"></i>
            <i className="fa-brands fa-css3-alt tech-icon"></i>
            <i className="fa-brands fa-js tech-icon"></i>
            <i className="fa-brands fa-react tech-icon"></i>
            <i className="fa-brands fa-node-js tech-icon"></i>
            <i className="fa-brands fa-python tech-icon"></i>
            <i className="fa-brands fa-github tech-icon"></i>
            <i className="fa-brands fa-figma tech-icon"></i>
            <i className="fa-solid fa-database tech-icon"></i>
            {/* Duplicate for seamless scroll */}
            <i className="fa-brands fa-html5 tech-icon"></i>
            <i className="fa-brands fa-css3-alt tech-icon"></i>
            <i className="fa-brands fa-js tech-icon"></i>
            <i className="fa-brands fa-react tech-icon"></i>
            <i className="fa-brands fa-node-js tech-icon"></i>
            <i className="fa-brands fa-python tech-icon"></i>
            <i className="fa-brands fa-github tech-icon"></i>
            <i className="fa-brands fa-figma tech-icon"></i>
            <i className="fa-solid fa-database tech-icon"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
