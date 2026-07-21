"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../assets/image.png";
import SOCIALS from "../config/socials";

export default function Navbar() {
  const navLinkClass = "text-on-navbar font-medium hover:opacity-90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm";
  const resumeBtnClass = "hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 bg-surface text-on-surface font-label-code text-label-code border border-primary hover:bg-primary hover:text-on-primary transition-all duration-200 neo-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

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
          <a href={SOCIALS.resume} target="_blank" rel="noopener noreferrer" className={resumeBtnClass}>
            Resume
          </a>

          <details className="relative md:hidden group">
            <summary className="list-none flex items-center justify-center p-2 text-primary border border-primary rounded cursor-pointer hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </summary>

            <div className="absolute right-0 mt-2 w-64 bg-navbar border border-outline-variant shadow-xl p-4 flex flex-col gap-3 font-label-code text-label-code text-on-navbar">
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
              <a href={SOCIALS.resume} target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 bg-primary text-on-primary border border-primary hover:bg-surface hover:text-primary transition-all duration-200 text-center">
                Resume
              </a>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
