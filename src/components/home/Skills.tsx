export default function Skills() {
  const categories = [
    {
      title: 'Programming & Core',
      items: ['C++', 'JavaScript', 'TypeScript', 'Data Structures'],
    },
    {
      title: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend & Systems',
      items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT', 'WebSockets', 'Leaflet.js'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Docker', 'Postman', 'Vite', 'VS Code', 'Vercel', 'Railway'],
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
      case 'Next.js':
        return <span className="font-space font-black text-on-surface text-lg">NEXT</span>;
      case 'Tailwind CSS':
        return <span className="font-space font-extrabold text-[#38BDF8] text-sm">TW</span>;
      case 'Node.js':
        return <i className="fa-brands fa-node-js text-3xl text-[#339933]"></i>;
      case 'Express.js':
        return <span className="font-space font-extrabold text-on-surface text-lg">EX</span>;
      case 'REST APIs':
        return <span className="font-space font-bold text-on-surface text-xs tracking-tight border border-primary px-1 rounded bg-surface-variant">API</span>;
      case 'MongoDB':
        return <i className="fa-solid fa-database text-3xl text-[#47A248]"></i>;
      case 'Git':
        return <i className="fa-brands fa-git-alt text-3xl text-[#F05032]"></i>;
      case 'GitHub':
        return <i className="fa-brands fa-github text-3xl text-on-surface"></i>;
      case 'Docker':
        return <i className="fa-brands fa-docker text-3xl text-[#2496ED]"></i>;
      case 'Postman':
        return <i className="fa-solid fa-paper-plane text-3xl text-[#FF6C37]"></i>;
      case 'Vite':
        return <i className="fa-solid fa-bolt text-3xl text-[#646CFF]"></i>;
      case 'VS Code':
        return <i className="fa-solid fa-code text-3xl text-[#007ACC]"></i>;
      case 'JWT':
        return <span className="font-space font-bold text-on-surface text-xs tracking-tight border border-primary px-1 rounded bg-surface-variant">JWT</span>;
      case 'WebSockets':
        return <i className="fa-solid fa-circle-nodes text-3xl text-indigo-500"></i>;
      case 'Leaflet.js':
        return <i className="fa-solid fa-map-location-dot text-3xl text-[#7FAF1B]"></i>;
      case 'Vercel':
        return <span className="font-space font-bold text-on-surface text-xl">▲</span>;
      case 'Railway':
        return <i className="fa-solid fa-train text-3xl text-on-surface"></i>;
      case 'C++':
        return <span className="font-space font-extrabold text-[#00599C] text-lg">C++</span>;
      case 'Data Structures':
        return <i className="fa-solid fa-sitemap text-3xl text-[#8E44AD]"></i>;
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
