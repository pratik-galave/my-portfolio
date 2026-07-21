"use client";

import { useEffect, useRef } from "react";
import aboutImg from "../../assets/about.png";
import SOCIALS from "../../config/socials";

export default function About() {
  useEffect(() => {
    const wrap = document.querySelector('.about-eye-wrap') as HTMLElement | null;
    if (!wrap) return;
    const eyes = Array.from(wrap.querySelectorAll('.eye')) as HTMLElement[];
    if (!eyes.length) return;

    let raf = 0;

    const onMove = (clientX: number, clientY: number) => {
      eyes.forEach((eye) => {
        const pupil = eye.querySelector('.pupil') as HTMLElement | null;
        if (!pupil) return;
        const eyeRect = eye.getBoundingClientRect();
        const cx = eyeRect.left + eyeRect.width / 2;
        const cy = eyeRect.top + eyeRect.height / 2;
        const dx = clientX - cx;
        const dy = clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        const max = Math.min(eyeRect.width, eyeRect.height) * 0.28; // max pupil offset
        const offset = Math.min(max, dist * 0.08 + 2);
        const px = Math.cos(angle) * offset;
        const py = Math.sin(angle) * offset;
        pupil.style.transform = `translate(${px}px, ${py}px)`;
      });
    };

    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => onMove(e.clientX, e.clientY));
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const t = e.touches[0];
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => onMove(t.clientX, t.clientY));
      }
    };

    wrap.addEventListener('mousemove', handleMove);
    wrap.addEventListener('touchmove', handleTouch, { passive: true });

    // reset pupils on leave
    const reset = () => {
      eyes.forEach((eye) => {
        const pupil = eye.querySelector('.pupil') as HTMLElement | null;
        if (pupil) pupil.style.transform = '';
      });
    };
    wrap.addEventListener('mouseleave', reset);

    return () => {
      wrap.removeEventListener('mousemove', handleMove);
      wrap.removeEventListener('touchmove', handleTouch as any);
      wrap.removeEventListener('mouseleave', reset);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-surface" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 relative">
          <h2 className="font-space text-4xl md:text-5xl font-black uppercase tracking-widest text-on-surface">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-center">
          {/* Left Bio */}
          <div className="space-y-6 relative">
            <span className="hidden md:block absolute -top-6 -right-6 text-2xl text-on-surface-variant font-serif">+</span>
            <h3 className="text-2xl font-bold text-on-surface">Who am I?</h3>

            <p className="text-on-surface-variant leading-relaxed text-sm">I'm a second-year engineering student who enjoys building software, learning new technologies, and turning ideas into real projects.</p>

            <p className="text-on-surface-variant leading-relaxed text-sm">Over time, I've discovered that programming is basically a conversation between me and my computer:</p>

            <p className="text-on-surface-variant leading-relaxed text-sm"><em>Me:</em> "Do exactly what I want."<br /><em>Computer:</em> "I did exactly what you wrote."<br /><em>Me:</em> "That's the problem."</p>

            <p className="text-on-surface-variant leading-relaxed text-sm">When I'm not coding, you'll usually find me exploring new tools, working on projects, preparing for exams, or learning something new that seemed impossible a week ago.</p>

            <p className="text-on-surface-variant leading-relaxed text-sm">This portfolio is a collection of what I've built, what I've learned, and where I'm headed next. Feel free to explore—and if you find a bug, just know it's a premium hidden feature. 😄</p>
            
          </div>

          {/* Center Image (Archway shape) */}
          <div className="flex justify-center relative">
            <div className="w-56 sm:w-64 h-72 sm:h-80 rounded-t-[100px] overflow-hidden bg-surface-variant border-8 border-surface shadow-xl relative z-10 about-eye-wrap" data-eyes="true">
              <img
                alt="Pratik Galave portrait"
                className="w-full h-full object-cover"
                src={aboutImg.src}
              />
              {/* pupil overlays — absolute positioned, move via JS */}
              <div className="eye eye-left"><div className="pupil" /></div>
              <div className="eye eye-right"><div className="pupil" /></div>
            </div>
            {/* Decorative arch outline behind */}
            <div className="absolute -top-2.5 w-60 sm:w-67.5 h-77.5 sm:h-85 rounded-t-[110px] border-2 border-outline-variant z-0"></div>
          </div>

          {/* Right Info Details */}
          <div className="space-y-8 text-center md:text-right relative">
            <span className="hidden md:block absolute -top-6 -left-6 text-2xl text-on-surface-variant font-serif">+</span>
            
            <div>
              <h4 className="text-xl font-bold text-on-surface mb-1">Name</h4>
              <p className="text-on-surface-variant text-sm">Pratik Galave</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-on-surface mb-1">Email</h4>
              <p className="text-on-surface-variant text-sm wrap-break-word">pratikgalave@outlook.com</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-on-surface mb-1">Location</h4>
              <p className="text-on-surface-variant text-sm">Pune, Maharashtra, India</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-on-surface mb-1">College</h4>
              <p className="text-on-surface-variant text-sm">Army Institute of Technology, Pune<br /><span className="text-xs font-mono text-primary font-semibold">B.E. IT — CGPA: 8.42</span></p>
            </div>

            <a href={SOCIALS.resume} download className="inline-flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-on-primary transition-colors group">
              <span className="text-sm">Download Resume</span>
              <span className="bg-primary text-on-primary p-1 rounded group-hover:bg-on-primary group-hover:text-primary transition-colors">
                <i className="fa-solid fa-download text-xs"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
