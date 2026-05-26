export default function Skills() {
  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden" id="skills">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-space text-3xl md:text-4xl font-black uppercase tracking-widest text-on-surface mb-16 md:mb-20">Skills</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest p-6 border border-primary">
              <h4 className="font-bold mb-3">Programming & Problem Solving</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">C++</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">JavaScript</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">TypeScript</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Data Structures</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Algorithms</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 border border-primary">
              <h4 className="font-bold mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">HTML</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">CSS</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">React</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Next.js</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Tailwind CSS</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Responsive Design</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 border border-primary">
              <h4 className="font-bold mb-3">Backend & Real-time</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Node.js</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Express.js</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">REST APIs</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">JWT</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">WebSockets</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Leaflet.js</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 border border-primary">
              <h4 className="font-bold mb-3">Databases, Deployment & Tools</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">MongoDB</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Vercel</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Railway</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Git</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Docker</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">Postman</span>
                <span className="px-3 py-1 border border-primary bg-surface-variant text-xs">npm / Vite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
