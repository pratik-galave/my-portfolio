export default function Skills() {
  const categories = [
    {
      title: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'WebSockets', 'Leaflet.js', 'C++'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'Docker', 'Vercel', 'Railway'],
    },
  ];

  function renderSkillIcon(label: string) {
    switch (label) {
      case 'HTML5':
        return <i className="fa-brands fa-html5 text-3xl text-[#E34F26]"></i>;
      case 'CSS3':
        return <i className="fa-brands fa-css3-alt text-3xl text-[#1572B6]"></i>;
      case 'JavaScript':
        return <i className="fa-brands fa-js text-3xl text-[#F7DF1E]"></i>;
      case 'TypeScript':
        return <span className="font-space font-extrabold text-[#3178C6] text-lg">TS</span>;
      case 'React':
        return <i className="fa-brands fa-react text-3xl text-[#61DAFB]"></i>;
      case 'Node.js':
        return <i className="fa-brands fa-node-js text-3xl text-[#339933]"></i>;
      case 'Express.js':
        return <span className="font-space font-extrabold text-[#303030] text-lg">EX</span>;
      case 'MongoDB':
        return <i className="fa-solid fa-database text-3xl text-[#47A248]"></i>;
      case 'Git':
        return <i className="fa-brands fa-git-alt text-3xl text-[#F05032]"></i>;
      case 'Docker':
        return <i className="fa-brands fa-docker text-3xl text-[#2496ED]"></i>;
      case 'JWT':
        return <span className="font-space font-bold text-[#303030] text-xs tracking-tight border border-primary px-1 rounded bg-[#E0E0E0]">JWT</span>;
      case 'WebSockets':
        return <i className="fa-solid fa-circle-nodes text-3xl text-indigo-500"></i>;
      case 'Leaflet.js':
        return <i className="fa-solid fa-map-location-dot text-3xl text-[#7FAF1B]"></i>;
      case 'Vercel':
        return <span className="font-space font-bold text-black text-xl">▲</span>;
      case 'Railway':
        return <i className="fa-solid fa-train text-3xl text-[#0B0D0E]"></i>;
      case 'C++':
        return <span className="font-space font-extrabold text-[#00599C] text-lg">C++</span>;
      default:
        return <i className="fa-solid fa-code text-3xl text-gray-700"></i>;
    }
  }

  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden" id="skills">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-space text-3xl md:text-4xl font-black uppercase tracking-widest text-on-surface mb-16 md:mb-20 text-center">Skills</h2>
        
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.title} className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className="font-space text-lg sm:text-xl font-black uppercase tracking-wider text-primary">{category.title}</h3>
                <div className="grow h-px bg-primary/20"></div>
              </div>
              
              <div className="flex flex-wrap gap-8 sm:gap-12 justify-center sm:justify-start">
                {category.items.map((item) => (
                  <div key={item} className="text-center group w-20 sm:w-24">
                    <div className="skill-hex border border-primary/20 hover:border-primary transition-all duration-300">
                      {renderSkillIcon(item)}
                    </div>
                    <p className="text-[10px] sm:text-xs font-label-code font-bold mt-3 text-on-surface-variant group-hover:text-primary transition-colors uppercase truncate">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
