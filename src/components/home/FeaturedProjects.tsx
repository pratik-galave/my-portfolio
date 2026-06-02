import Link from "next/link";
import projects from "@/config/projects";

export default function FeaturedProjects() {
  const project = projects[0];

  return (
    <section className="bg-[#050505] pt-24 pb-20 md:pb-32 overflow-hidden" id="projects-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hanging Sign Header */}
        <div className="text-center mb-24 relative">
          <div className="hanging-sign bg-white text-black font-space text-3xl md:text-5xl font-black uppercase tracking-widest py-4 px-12 rounded-b-3xl shadow-lg border-b-4 border-gray-300">
            Projects
          </div>
        </div>

        {/* Project Showcase Area */}
        <div className="relative w-full max-w-5xl mx-auto h-auto md:h-100 flex flex-col md:flex-row items-center gap-12 md:gap-0">
          {/* Project Info (Left) */}
          <div className="w-full md:w-1/2 md:pr-12 z-20 min-w-0 text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl text-gray-500 font-bold mb-6">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6 mx-auto md:mx-0">{project.description}</p>
            <div className="flex items-center gap-4">
              <Link href="/#projects" className="text-white border-b border-white pb-1 hover:text-gray-300 transition-colors uppercase tracking-widest text-sm font-bold">
                View All Projects
              </Link>
              {/* Video button opens Drive link in new tab */}
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 bg-white text-black rounded-md text-sm font-semibold hover:opacity-90"
              >
                Play Video
              </a>
            </div>
          </div>

          {/* Project Images (Right - Overlapping) */}
          <div className="relative md:absolute right-0 top-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-3/5 h-64 md:h-full z-10 flex items-center justify-center md:justify-end min-w-0">
            <img
              alt={`${project.title} Dashboard`}
              className="rounded-xl shadow-2xl md:absolute md:right-10 top-0 w-[80%] opacity-80 md:scale-90 md:translate-y-[-20%]"
              src={project.imagePrimary}
            />
            <img
              alt={`${project.title} App`}
              className="rounded-xl shadow-2xl relative z-20 w-[90%] border border-gray-800"
              src={project.imageSecondary}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
