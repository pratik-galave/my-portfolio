import Link from "next/link";
import { SOCIALS } from "../config/socials";

export default function Footer() {
  return (
    <footer className="w-full py-12 sm:py-section-gap bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container border-t border-primary dark:border-outline mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-margin-page w-full max-w-360 mx-auto gap-stack-md md:gap-0 text-center md:text-left">
        <div className="font-headline-md text-headline-md text-on-primary font-black tracking-tighter">
          &lt;coder&gt;
        </div>
        
        <div className="font-label-code text-sm sm:text-label-code opacity-70 max-w-xs sm:max-w-none leading-relaxed">
          © {new Date().getFullYear()} DEV_PORTFOLIO. ALL RIGHTS RESERVED.
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 font-label-code text-sm sm:text-label-code">
          {SOCIALS.github && (
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline">
              Github
            </a>
          )}

          {SOCIALS.linkedin ? (
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline">
              LinkedIn
            </a>
          ) : null}

          {SOCIALS.email && (
            <a href={`mailto:${SOCIALS.email}`} className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline">
              Email
            </a>
          )}

          {SOCIALS.resume && (
            <a href={SOCIALS.resume} target="_blank" rel="noopener noreferrer" className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline">
              Resume
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
