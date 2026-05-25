import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 sm:py-section-gap bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container border-t border-primary dark:border-outline mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-margin-page w-full max-w-360 mx-auto gap-stack-md md:gap-0 text-center md:text-left">
        <div className="font-headline-md text-headline-md text-on-primary font-black tracking-tighter">
          &lt;coder&gt;
        </div>
        
        <div className="font-label-code text-label-code opacity-70">
          © {new Date().getFullYear()} DEV_PORTFOLIO. ALL RIGHTS RESERVED.
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 font-label-code text-label-code">
          <Link href="#" className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline">
            Github
          </Link>
          <Link href="#" className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline">
            LinkedIn
          </Link>
          <Link href="#" className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline">
            Twitter
          </Link>
          <Link href="#" className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
