export default function ProjectsPage() {
  return (
    <div className="pt-[100px] pb-section-gap">
      {/* Header Section */}
      <section className="max-w-[1440px] mx-auto px-gutter md:px-margin-page mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          <div className="col-span-1 md:col-span-8">
            <h1 className="font-headline-xl text-headline-xl md:text-headline-xl text-headline-lg-mobile font-bold tracking-tighter uppercase mb-4">
              Build.<br />Iterate.<br />Deploy.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A curated selection of technical projects, highlighting system architecture, performance optimization, and clean code principles.
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-primary mt-stack-lg"></div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-[1440px] mx-auto px-gutter md:px-margin-page mb-section-gap">
        <div className="flex items-center gap-4 mb-stack-lg">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <h2 className="font-headline-md text-headline-md font-bold uppercase tracking-tight">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          {/* Project 1 */}
          <article className="pixel-border bg-surface-container-lowest overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="h-64 bg-surface-variant border-b border-primary relative overflow-hidden">
              <img
                alt="Code editor with colorful syntax highlighting"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD64Yq79__Budg7f6OMF7nXujlLLzOB3QglIKS-mOU6riCh-csNrmNta7rnvTa4MF-ntguOG2SGbbo5Sb9rwQ3foY_c0ZOafG-odS9WsUuK11AdDZE2Wp0vg7WWKsp9dqFfRI64PpmsL7wRRJtIptmZZCOASUTUVlWYoUwTA5R-edIZlPgKlgluRmxI3PdwUSnhXMTTgUUKSynUpJOZhIYV1AaQh5GXJR4s8PYx2LtSEVYh3hkAyVgeym50D_EEZaBw6-yJJXXyuuo"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-stack-md flex flex-col h-full">
              <div className="flex justify-between items-start mb-stack-sm">
                <h3 className="font-headline-md text-[24px] font-bold">NutriPocket</h3>
                <a href="#" className="p-2 border border-primary hover:bg-primary hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                </a>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
                An AI-powered smart nutrition assistant. It helps users make personalized food decisions based on health conditions, goals, and nutritional needs.
              </p>
              <div className="flex flex-wrap gap-2 font-label-code text-[12px]">
                <span className="px-2 py-1 border border-primary bg-surface-variant">React</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Node.js</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">MongoDB</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Python (AI)</span>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className="pixel-border bg-surface-container-lowest overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="h-64 bg-surface-variant border-b border-primary relative overflow-hidden">
              <img
                alt="Data visualization dashboard"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHgaoUFpkYwlF4XPXLWS3lsAy5Q9zhPhBwheaiWMVTQxJuoqlyjDJYNMPN6ESqQuxjBram7sxiRZ0GpuRrhQGoDfnhEyLb-ej_kFziTvFd8pzPtjTu3UFRcHEmVPVmFKVbXuaFLReHKjWKsFaehkrr8IquV8OqQeTxwutCx1C4t_0sDnyiWJwywx2tPbSnARP1BBqem-LiPmrVXdTFWPQ3xkB3BZFHJZbC0iOvJS_oX61UdmMPxuokMoF5fBeGK5dJFD9k0Kp1ggs"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-stack-md flex flex-col h-full">
              <div className="flex justify-between items-start mb-stack-sm">
                <h3 className="font-headline-md text-[24px] font-bold">DSA Visualizer</h3>
                <a href="#" className="p-2 border border-primary hover:bg-primary hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                </a>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md flex-grow">
                An interactive platform for visualizing complex data structures and algorithms in real-time. Built for educational purposes to simplify computer science concepts.
              </p>
              <div className="flex flex-wrap gap-2 font-label-code text-[12px]">
                <span className="px-2 py-1 border border-primary bg-surface-variant">Vue.js</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">D3.js</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">TypeScript</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Technical Arsenal (Skills) */}
      <section className="max-w-[1440px] mx-auto px-gutter md:px-margin-page mb-section-gap relative">
        <div className="absolute top-0 right-margin-page opacity-10 pointer-events-none">
          <span className="font-headline-xl text-[200px] font-bold leading-none select-none">{"{}"}</span>
        </div>
        <div className="flex items-center gap-4 mb-stack-lg relative z-10">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>code_blocks</span>
          <h2 className="font-headline-md text-headline-md font-bold uppercase tracking-tight">Technical Arsenal</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-stack-sm relative z-10">
          {/* Skill items */}
          <div className="flex flex-col items-center justify-center p-stack-md border border-primary bg-surface hover:bg-surface-variant transition-colors aspect-square group">
            <span className="material-symbols-outlined text-[40px] mb-2 group-hover:scale-110 transition-transform">html</span>
            <span className="font-label-code text-label-code font-bold uppercase">HTML5</span>
          </div>
          <div className="flex flex-col items-center justify-center p-stack-md border border-primary bg-surface hover:bg-surface-variant transition-colors aspect-square group">
            <span className="material-symbols-outlined text-[40px] mb-2 group-hover:scale-110 transition-transform">css</span>
            <span className="font-label-code text-label-code font-bold uppercase">CSS3</span>
          </div>
          <div className="flex flex-col items-center justify-center p-stack-md border border-primary bg-surface hover:bg-surface-variant transition-colors aspect-square group">
            <span className="material-symbols-outlined text-[40px] mb-2 group-hover:scale-110 transition-transform">javascript</span>
            <span className="font-label-code text-label-code font-bold uppercase">JavaScript</span>
          </div>
          <div className="flex flex-col items-center justify-center p-stack-md border border-primary bg-surface hover:bg-surface-variant transition-colors aspect-square group">
            <span className="material-symbols-outlined text-[40px] mb-2 group-hover:scale-110 transition-transform">data_object</span>
            <span className="font-label-code text-label-code font-bold uppercase">React</span>
          </div>
          <div className="flex flex-col items-center justify-center p-stack-md border border-primary bg-surface hover:bg-surface-variant transition-colors aspect-square group">
            <span className="material-symbols-outlined text-[40px] mb-2 group-hover:scale-110 transition-transform">dns</span>
            <span className="font-label-code text-label-code font-bold uppercase">Node.js</span>
          </div>
          <div className="flex flex-col items-center justify-center p-stack-md border border-primary bg-surface hover:bg-surface-variant transition-colors aspect-square group">
            <span className="material-symbols-outlined text-[40px] mb-2 group-hover:scale-110 transition-transform">database</span>
            <span className="font-label-code text-label-code font-bold uppercase">MongoDB</span>
          </div>
          <div className="flex flex-col items-center justify-center p-stack-md border border-primary bg-surface hover:bg-surface-variant transition-colors aspect-square group">
            <span className="material-symbols-outlined text-[40px] mb-2 group-hover:scale-110 transition-transform">code</span>
            <span className="font-label-code text-label-code font-bold uppercase">C++</span>
          </div>
          <div className="flex flex-col items-center justify-center p-stack-md border border-primary bg-surface hover:bg-surface-variant transition-colors aspect-square group">
            <span className="material-symbols-outlined text-[40px] mb-2 group-hover:scale-110 transition-transform">terminal</span>
            <span className="font-label-code text-label-code font-bold uppercase">Python</span>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-[1440px] mx-auto px-gutter md:px-margin-page">
        <div className="flex items-center gap-4 mb-stack-lg">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>work_history</span>
          <h2 className="font-headline-md text-headline-md font-bold uppercase tracking-tight">Experience</h2>
        </div>
        <div className="relative border-l-2 border-primary ml-stack-sm md:ml-0 md:pl-stack-lg">
          {/* Exp Item 1 */}
          <div className="mb-stack-lg relative pl-stack-md md:pl-0">
            <div className="absolute w-4 h-4 bg-primary border-2 border-surface rounded-full -left-[1.35rem] md:-left-[2.5rem] top-1"></div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
              <h3 className="font-headline-md text-[20px] font-bold">Frontend Developer Intern</h3>
              <span className="font-label-code text-[14px] text-on-surface-variant bg-surface-variant px-2 py-1 border border-outline-variant inline-block w-fit">TechNova Solutions</span>
              <span className="font-label-code text-[12px] text-outline ml-auto">Jan 2023 - Present</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              Developed and maintained user-facing features using React.js and Tailwind CSS. Collaborated with UX/UI designers to implement responsive and accessible web applications. Optimized component rendering, improving load times by 15%.
            </p>
          </div>

          {/* Exp Item 2 */}
          <div className="relative pl-stack-md md:pl-0">
            <div className="absolute w-4 h-4 bg-surface border-2 border-primary rounded-full -left-[1.35rem] md:-left-[2.5rem] top-1"></div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
              <h3 className="font-headline-md text-[20px] font-bold">Open Source Contributor</h3>
              <span className="font-label-code text-[14px] text-on-surface-variant bg-surface-variant px-2 py-1 border border-outline-variant inline-block w-fit">Various Projects</span>
              <span className="font-label-code text-[12px] text-outline ml-auto">Jun 2022 - Dec 2022</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              Contributed to several open-source libraries in the JavaScript ecosystem. Fixed bugs, improved documentation, and added test coverage. Gained experience in version control workflows and collaborative development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
