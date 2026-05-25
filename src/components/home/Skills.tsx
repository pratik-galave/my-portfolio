export default function Skills() {
  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden" id="skills">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-space text-3xl md:text-4xl font-black uppercase tracking-widest text-on-surface mb-16 md:mb-20">Skills</h2>
        
        {/* Hexagonal / Staggered Skill Grid */}
        <div className="relative max-w-3xl mx-auto">
          {/* Row 1 */}
          <div className="flex justify-center flex-wrap gap-8 sm:gap-12 mb-8">
            <div className="text-center group">
              <div className="skill-hex"><i className="fa-brands fa-html5 text-3xl text-orange-500"></i></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">HTML</p>
            </div>
            <div className="text-center group">
              <div className="skill-hex"><span className="font-bold text-gray-700">MDB</span></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">MongoDB</p>
            </div>
            <div className="text-center group">
              <div className="skill-hex"><span className="font-bold text-gray-700">EX</span></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">Express</p>
            </div>
            <div className="text-center group">
              <div className="skill-hex"><span className="font-bold text-gray-700 text-xl">C++</span></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">C++</p>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="flex justify-center flex-wrap gap-8 sm:gap-12 mb-8">
            <div className="text-center group">
              <div className="skill-hex"><i className="fa-brands fa-css3-alt text-3xl text-blue-500"></i></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">CSS</p>
            </div>
            <div className="text-center group md:mt-12">
              <div className="skill-hex"><i className="fa-solid fa-person-running text-3xl text-green-500"></i></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">GSAP</p>
            </div>
            <div className="text-center group">
              <div className="skill-hex"><i className="fa-brands fa-node-js text-3xl text-green-600"></i></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">Node.js</p>
            </div>
          </div>
          
          {/* Row 3 */}
          <div className="flex justify-center flex-wrap gap-8 sm:gap-12 mb-8">
            <div className="text-center group">
              <div className="skill-hex"><i className="fa-brands fa-react text-3xl text-cyan-400"></i></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">React</p>
            </div>
            <div className="text-center group md:mt-12">
              <div className="skill-hex"><span className="font-bold text-gray-700">PAN</span></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">Pandas</p>
            </div>
          </div>
          
          {/* Row 4 */}
          <div className="flex justify-center flex-wrap gap-8 sm:gap-12">
            <div className="text-center group">
              <div className="skill-hex"><i className="fa-brands fa-git-alt text-3xl text-orange-600"></i></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">Git</p>
            </div>
            <div className="text-center group">
              <div className="skill-hex"><i className="fa-brands fa-js text-3xl text-yellow-400"></i></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">JavaScript</p>
            </div>
            <div className="text-center group">
              <div className="skill-hex"><span className="font-bold text-gray-700 text-xl">C</span></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">C</p>
            </div>
            <div className="text-center group">
              <div className="skill-hex"><i className="fa-brands fa-python text-3xl text-blue-500"></i></div>
              <p className="text-xs font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors">Python</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
