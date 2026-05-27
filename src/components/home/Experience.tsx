export default function Experience() {
  return (
    <section id="experience" className="max-w-360 mx-auto px-4 sm:px-gutter md:px-margin-page">
      <div className="flex items-center gap-4 mb-stack-lg">
        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>work_history</span>
        <h2 className="font-headline-md text-headline-md font-bold uppercase tracking-tight">Experience</h2>
      </div>
      <div className="relative border-l-2 border-primary ml-stack-sm md:ml-0 md:pl-stack-lg">
        <div className="mb-stack-lg relative pl-4 sm:pl-stack-md md:pl-0">
          <div className="absolute w-4 h-4 bg-primary border-2 border-surface rounded-full left-[-1.35rem] md:-left-10 top-1"></div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2 min-w-0">
            <h3 className="font-headline-md text-[20px] font-bold">Frontend Developer Intern</h3>
            <span className="font-label-code text-[14px] text-on-surface-variant bg-surface-variant px-2 py-1 border border-outline-variant inline-block w-fit">TechNova Solutions</span>
            <span className="font-label-code text-[12px] text-outline md:ml-auto">Jan 2023 - Present</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Developed and maintained user-facing features using React.js and Tailwind CSS. Collaborated with UX/UI designers to implement responsive and accessible web applications. Optimized component rendering, improving load times by 15%.
          </p>
        </div>

        <div className="relative pl-4 sm:pl-stack-md md:pl-0">
          <div className="absolute w-4 h-4 bg-surface border-2 border-primary rounded-full left-[-1.35rem] md:-left-10 top-1"></div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2 min-w-0">
            <h3 className="font-headline-md text-[20px] font-bold">Open Source Contributor</h3>
            <span className="font-label-code text-[14px] text-on-surface-variant bg-surface-variant px-2 py-1 border border-outline-variant inline-block w-fit">Various Projects</span>
            <span className="font-label-code text-[12px] text-outline md:ml-auto">Jun 2022 - Dec 2022</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Contributed to several open-source libraries in the JavaScript ecosystem. Fixed bugs, improved documentation, and added test coverage. Gained experience in version control workflows and collaborative development.
          </p>
        </div>
      </div>
    </section>
  );
}
