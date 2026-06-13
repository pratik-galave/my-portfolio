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
            <h3 className="font-headline-md text-[20px] font-bold">Full Stack Developer</h3>
            <span className="font-label-code text-[14px] text-on-surface-variant bg-surface-variant px-2 py-1 border border-outline-variant inline-block w-fit">Technical Board,AIT,Pune</span>
            <span className="font-label-code text-[12px] text-outline md:ml-auto">Aug 2025 – Present</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Designed, developed, and maintained the official website for the Technical Board Club using modern web technologies. Built responsive frontend interfaces and implemented backend functionalities to manage club activities, events, and announcements. Collaborated with club members to gather requirements and deliver user-friendly features. Gained hands-on experience in full-stack web development, database management, deployment, debugging, and working in a team-based development environment.
          </p>
        </div>

      </div>
    </section>
  );
}
