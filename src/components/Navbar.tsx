import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-primary dark:border-outline-variant">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center w-full px-4 sm:px-gutter py-4 max-w-360 mx-auto">
        <Link
          href="/"
          className="font-headline-md text-headline-md font-black tracking-tighter text-primary dark:text-inverse-primary hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
        >
          &lt;coder&gt;
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-label-code text-label-code min-w-0 flex-wrap justify-end">
          <Link
            href="/#about"
            className="text-on-surface-variant dark:text-on-secondary-fixed-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-primary dark:text-inverse-primary font-bold hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            className="text-on-surface-variant dark:text-on-secondary-fixed-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className="text-on-surface-variant dark:text-on-secondary-fixed-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
          >
            Experience & Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center gap-2 px-4 py-2 bg-primary text-on-primary font-label-code text-label-code border border-primary hover:bg-surface hover:text-primary transition-all duration-200 neo-shadow">
            Resume
          </button>
          <button
            aria-label="Toggle Dark Mode"
            className="p-2 text-primary hover:bg-surface-variant transition-colors rounded-full"
          >
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
