export default function ProjectsExperience() {
  return (
    <section id="projects" className="py-16 sm:py-section-gap overflow-hidden">
      {/* Header Section */}
      <section className="max-w-360 mx-auto px-4 sm:px-gutter md:px-margin-page mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          <div className="col-span-1 md:col-span-8 min-w-0">
            <h1 className="font-headline-xl text-4xl sm:text-5xl md:text-headline-xl text-headline-lg-mobile font-bold tracking-tighter uppercase mb-4 wrap-break-word">
              Build.<br />Iterate.<br />Deploy.
            </h1>
            <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-2xl">
              A curated selection of technical projects, highlighting system architecture, performance optimization, and clean code principles.
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-primary mt-stack-lg"></div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-360 mx-auto px-4 sm:px-gutter md:px-margin-page mb-section-gap">
        <div className="flex items-center gap-4 mb-stack-lg">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <h2 className="font-headline-md text-headline-md font-bold uppercase tracking-tight">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          <article className="pixel-border bg-surface-container-lowest overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="h-64 bg-surface-variant border-b border-primary relative overflow-hidden">
              <img
                alt="Velocity - Ride Booking"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-stack-md flex flex-col h-full">
              <div className="flex justify-between items-start mb-stack-sm">
                <div>
                  <h3 className="font-headline-md text-[24px] font-bold">Velocity</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">React</span>
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">Leaflet.js</span>
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">Node.js</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href="https://uberwebsite-dusky.vercel.app/" target="_blank" rel="noreferrer" className="p-2 border border-primary hover:bg-primary hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">launch</span>
                  </a>
                  <a href="https://github.com/pratik-galave/uberwebsite.git" target="_blank" rel="noreferrer" className="p-2 border border-primary hover:bg-primary hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">code</span>
                  </a>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md grow">
                An Uber-inspired ride booking and navigation platform with interactive maps, route visualization, and real-time trip management. Built with React, Node.js, Express, MongoDB and Leaflet.js.
              </p>
              <div className="flex flex-wrap gap-2 font-label-code text-[12px]">
                <span className="px-2 py-1 border border-primary bg-surface-variant">React</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Node.js</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">MongoDB</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Leaflet.js</span>
              </div>
            </div>
          </article>

          <article className="pixel-border bg-surface-container-lowest overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="h-64 bg-surface-variant border-b border-primary relative overflow-hidden">
              <img
                alt="DevConnect - Developer Social Platform"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://images.unsplash.com/photo-1526378723547-8e3b6d9a6f4b?auto=format&fit=crop&w=1400&q=60"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-stack-md flex flex-col h-full">
              <div className="flex justify-between items-start mb-stack-sm">
                <div>
                  <h3 className="font-headline-md text-[24px] font-bold">DevConnect</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">MERN</span>
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">JWT</span>
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">Responsive</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/pratik-galave/devconnect" target="_blank" rel="noreferrer" className="p-2 border border-primary hover:bg-primary hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">code</span>
                  </a>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md grow">
                DevConnect is a MERN-stack social platform for developers to create profiles, share posts, and collaborate. It includes JWT-based authentication, protected routes, and reusable component patterns for rapid UI development.
              </p>
              <div className="flex flex-wrap gap-2 font-label-code text-[12px]">
                <span className="px-2 py-1 border border-primary bg-surface-variant">React</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Node.js</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Express</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">MongoDB</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">JWT</span>
              </div>
            </div>
          </article>

          <article className="pixel-border bg-surface-container-lowest overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="h-64 bg-surface-variant border-b border-primary relative overflow-hidden">
              <img
                alt="Realtime Chat App"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=60"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-stack-md flex flex-col h-full">
              <div className="flex justify-between items-start mb-stack-sm">
                <div>
                  <h3 className="font-headline-md text-[24px] font-bold">Realtime Chat</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">WebSockets</span>
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">Realtime</span>
                  </div>
                </div>
                <a href="https://github.com/pratik-galave/realtime-chat" target="_blank" rel="noreferrer" className="p-2 border border-primary hover:bg-primary hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md grow">
                A socket-based messaging platform supporting private and group chats, built with WebSockets and a synchronized React frontend. Focused on low-latency message delivery and scalable room management.
              </p>
              <div className="flex flex-wrap gap-2 font-label-code text-[12px]">
                <span className="px-2 py-1 border border-primary bg-surface-variant">WebSockets</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Node.js</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">React</span>
              </div>
            </div>
          </article>

          <article className="pixel-border bg-surface-container-lowest overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="h-64 bg-surface-variant border-b border-primary relative overflow-hidden">
              <img
                alt="TaskFlow - Productivity"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-stack-md flex flex-col h-full">
              <div className="flex justify-between items-start mb-stack-sm">
                <div>
                  <h3 className="font-headline-md text-[24px] font-bold">TaskFlow</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">React</span>
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">REST APIs</span>
                  </div>
                </div>
                <a href="https://github.com/pratik-galave/taskflow" target="_blank" rel="noreferrer" className="p-2 border border-primary hover:bg-primary hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md grow">
                TaskFlow is a task management dashboard with CRUD operations, deadline tracking, and progress workflows. Built with a RESTful Node.js backend and a responsive React frontend focused on UX.
              </p>
              <div className="flex flex-wrap gap-2 font-label-code text-[12px]">
                <span className="px-2 py-1 border border-primary bg-surface-variant">React</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Node.js</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">REST APIs</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Technical Arsenal */}
      <section className="max-w-360 mx-auto px-4 sm:px-gutter md:px-margin-page mb-section-gap relative">
        <div className="absolute top-0 right-margin-page opacity-10 pointer-events-none">
          <span className="font-headline-xl text-[200px] font-bold leading-none select-none">{"{}"}</span>
        </div>
        <div className="flex items-center gap-4 mb-stack-lg relative z-10">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>code_blocks</span>
          <h2 className="font-headline-md text-headline-md font-bold uppercase tracking-tight">Technical Arsenal</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-stack-sm relative z-10">
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

      {/* Experience removed — now a separate component to match navbar order */}
    </section>
  );
}
