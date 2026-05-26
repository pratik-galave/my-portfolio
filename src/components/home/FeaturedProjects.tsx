import Link from "next/link";

export default function FeaturedProjects() {
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
            <h3 className="text-3xl sm:text-4xl text-gray-500 font-bold mb-6">NUTRIPOCKET</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6 mx-auto md:mx-0">
              Nutripocket is an AI-powered smart nutrition and health assistant that helps users make personalized food decisions based on their health conditions, goals, and nutritional needs. The platform combines intelligent meal planning, food scanning, and health insights to promote healthier eating habits through an interactive and user-friendly experience.
            </p>
            <Link href="/#projects" className="text-white border-b border-white pb-1 hover:text-gray-300 transition-colors uppercase tracking-widest text-sm font-bold">
              View All Projects
            </Link>
          </div>

          {/* Project Images (Right - Overlapping) */}
          <div className="relative md:absolute right-0 top-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-3/5 h-64 md:h-full z-10 flex items-center justify-center md:justify-end min-w-0">
            <img
              alt="Nutripocket Dashboard"
              className="rounded-xl shadow-2xl md:absolute md:right-10 top-0 w-[80%] opacity-80 md:scale-90 md:translate-y-[-20%]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEIKEgowHRPZNuPZEXx_TMaukQIYpR8_ls5yJAsYriE8_vItuIQ074Hm-XQbSdYJq75YpOJm5lo6fA2AF8-zP21bZm7Tj2C5L9rdtbTyW-hl7yWRZYdfzTEu7uOdnkTn52xSXS76qwt2QgG8pmzIQxSxCPZQMs3Uvxilj9pzcHkllTiCYaF0xwZyiVQBB4nzSepjxVBVEZi__vxOY-s7xsFUFS_G7UxlrGGHzi2TWcSObZWio0urcTrA-_I0UYmTncUcpEg7aTE4k"
            />
            <img
              alt="Nutripocket App"
              className="rounded-xl shadow-2xl relative z-20 w-[90%] border border-gray-800"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlgAP1rvwRwm5q6qfyTZQ2x0lHOGZ4WN_LoH9kXl7iUf8F4Ig_3OMVhY-GvL62jp5KXUba1JAsKA0azPbkSWK7PLG6AxuniYe2N9oOlCK9TO1zqnsJhSYLFidWxBr494T-cKgb3ElSDEgXNY8mwn8P6zBzV4uKhaeEQlPiLz9P60RCyM3L2q-FeK990P9JEQZF_k3NeV9S_o4KyylzmMX6FzySxpZuT9v8NRAPFnvm2afU9LOuCN8BAPvEpcgG3690nuAHD1PN5XE"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
