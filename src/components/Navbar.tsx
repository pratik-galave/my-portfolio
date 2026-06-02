"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/image.png";

export default function Navbar() {
  // default to light so server and initial client render match
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // initialize from stored preference / system on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      let desired: "light" | "dark" = "light";
      if (stored === "dark") {
        desired = "dark";
      } else if (stored === "light") {
        desired = "light";
      } else {
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        desired = prefersDark ? "dark" : "light";
      }
      if (desired === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      // defer state update to avoid sync setState inside effect
      setTimeout(() => setTheme(desired), 0);
    } catch {
      // ignore
    }
  }, []);
  const navLinkClass = "text-on-navbar font-medium hover:opacity-90 transition-colors duration-200";
  const resumeBtnClass = "hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 bg-surface text-on-surface font-label-code text-label-code border border-primary hover:bg-primary hover:text-on-primary transition-all duration-200 neo-shadow";

  return (
    <nav className="fixed top-0 w-full z-50 navbar-bg border-b border-primary dark:border-outline-variant">
      <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" aria-label="Go to homepage" className="inline-flex items-center hover:opacity-90 transition-opacity duration-200 flex-shrink-0">
          <Image
            src={logo}
            alt="Pratik Galave logo"
            width={230}
            height={69}
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            priority
          />
        </Link>
        
        <div className="hidden md:flex md:flex-1 items-center gap-6 font-label-code text-label-code min-w-0 flex-wrap md:justify-center lg:justify-end">
          <Link href="/#about" className={navLinkClass}>About</Link>
          <Link href="/#projects" className={navLinkClass}>Projects</Link>
          <Link href="/#skills" className={navLinkClass}>Skills</Link>
          <Link href="/#contact" className={navLinkClass}>Experience & Contact</Link>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <a href="/Pratik_Galave_Resume.pdf" target="_blank" rel="noopener noreferrer" className={resumeBtnClass}>
            Resume
          </a>
          <button
            aria-label="Toggle color theme"
            aria-pressed={theme === "dark"}
            onClick={() => {
              const next = theme === "dark" ? "light" : "dark";
              setTheme(next);
              try {
                if (next === "dark") {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
                localStorage.setItem("theme", next);
              } catch {
                // ignore
              }
            }}
            className="p-2 text-primary hover:bg-surface-variant transition-colors rounded-full"
          >
            <span className="material-symbols-outlined">{theme === "dark" ? "light_mode" : "dark_mode"}</span>
          </button>

          <details className="relative md:hidden group">
            <summary className="list-none flex items-center justify-center p-2 text-primary border border-primary rounded cursor-pointer hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </summary>

            <div className="absolute right-0 mt-2 w-64 bg-background border border-primary shadow-lg p-4 flex flex-col gap-3 font-label-code text-label-code">
              <Link href="/#about" className={navLinkClass}>
                About
              </Link>
              <Link href="/#projects" className={navLinkClass}>
                Projects
              </Link>
              <Link href="/#skills" className={navLinkClass}>
                Skills
              </Link>
              <Link href="/#contact" className={navLinkClass}>
                Experience & Contact
              </Link>
              <a href="/Pratik_Galave_Resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-primary text-on-primary border border-primary hover:bg-surface hover:text-primary transition-all duration-200 text-center">
                Resume
              </a>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}

// theme initialization handled in component useEffect
