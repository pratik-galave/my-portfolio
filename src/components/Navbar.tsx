import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-primary dark:border-outline-variant">
      <div className="flex items-center justify-between w-full px-4 sm:px-gutter py-4 max-w-360 mx-auto">
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
            href="/#projects"
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
            href="/#contact"
            className="text-on-surface-variant dark:text-on-secondary-fixed-variant font-medium hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
          >
            Experience & Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="/Pratik_Galave_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-on-primary font-label-code text-label-code border border-primary hover:bg-surface hover:text-primary transition-all duration-200 neo-shadow">
            Resume
          </a>
          <button
            aria-label="Toggle Dark Mode"
            className="p-2 text-primary hover:bg-surface-variant transition-colors rounded-full"
          >
            <span className="material-symbols-outlined">dark_mode</span>
          </button>

          <details className="relative md:hidden group">
            <summary className="list-none flex items-center justify-center p-2 text-primary border border-primary rounded cursor-pointer hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </summary>

            <div className="absolute right-0 mt-2 w-64 bg-background border border-primary shadow-lg p-4 flex flex-col gap-3 font-label-code text-label-code">
              <Link href="/#about" className="text-on-surface-variant hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/#projects" className="text-on-surface-variant hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/#skills" className="text-on-surface-variant hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/#contact" className="text-on-surface-variant hover:text-primary transition-colors">
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
