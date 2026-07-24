import { SOCIALS } from "../config/socials";

export default function Footer() {
  return (
    <footer className="w-full py-6 sm:py-8 bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container border-t border-primary dark:border-outline mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-margin-page w-full max-w-360 mx-auto gap-6 md:gap-0 text-center md:text-left">
        <div className="font-headline-md text-headline-md text-on-primary font-black tracking-tighter">
          Pratik.Galave
        </div>
        
        <div className="font-label-code text-sm sm:text-label-code opacity-70 max-w-xs sm:max-w-none leading-relaxed">
          © {new Date().getFullYear()} DEV_PORTFOLIO. ALL RIGHTS RESERVED.
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2 font-label-code text-sm sm:text-label-code">
          {SOCIALS.github && (
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .5C5.65.5.25 5.9.25 12.25c0 5.27 3.425 9.74 8.185 11.3.6.11.82-.26.82-.58 0-.29-.01-1.05-.016-2.06-3.33.724-4.035-1.61-4.035-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.808 1.305 3.492.997.108-.776.418-1.305.76-1.605-2.66-.306-5.466-1.33-5.466-5.915 0-1.307.467-2.376 1.235-3.213-.123-.305-.535-1.535.117-3.197 0 0 1.01-.323 3.31 1.23a11.52 11.52 0 0 1 3.015-.405c1.02.005 2.045.138 3.015.405 2.3-1.553 3.31-1.23 3.31-1.23.652 1.662.24 2.892.117 3.197.77.837 1.234 1.906 1.234 3.213 0 4.596-2.81 5.606-5.486 5.905.43.37.816 1.096.816 2.21 0 1.596-.014 2.882-.014 3.276 0 .32.216.7.825.58C20.58 22 24 17.53 24 12.25 24 5.9 18.35.5 12 .5z" />
              </svg>
              Github
            </a>
          )}

          {SOCIALS.linkedin ? (
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.06 19H4.12V9.33h2.94V19zM5.59 7.94c-.94 0-1.7-.76-1.7-1.7 0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7c0 .94-.76 1.7-1.7 1.7zM20 19h-2.94v-5.5c0-1.31-.03-2.99-1.82-2.99-1.82 0-2.1 1.42-2.1 2.89V19H9.6V9.33h2.94v1.46h.04c.42-.8 1.45-1.64 2.99-1.64 3.2 0 3.79 2.11 3.79 4.86V19z" />
              </svg>
              LinkedIn
            </a>
          ) : null}

          {SOCIALS.email && (
            <a
              href={`mailto:${SOCIALS.email}`}
              className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zM4.5 6.75l7.5 5.25L19.5 6.75" />
              </svg>
              Email
            </a>
          )}

          {SOCIALS.resume && (
            <a
              href={SOCIALS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-primary/70 dark:text-on-primary-container/70 hover:text-on-primary dark:hover:text-white transition-opacity hover:underline flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 3.5V9h5.5L14 3.5zM8 13h8v2H8v-2zm0 4h8v2H8v-2z" />
              </svg>
              Resume
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
