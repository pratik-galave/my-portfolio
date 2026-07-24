import velocityImg from "@/assets/uberwebsite-dusky.vercel.app_.png";
import Image from "next/image";

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
              <Image
                alt="Velocity - Ride Booking"
                className="w-full h-full object-cover"
                src={velocityImg}
                width={velocityImg.width}
                height={velocityImg.height}
                unoptimized
              />
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
                  <a href="https://drive.google.com/file/d/1eZDnrHfsbk-fXaepMzex3TUYMUFXBnq_/view?usp=drive_link" target="_blank" rel="noreferrer" className="p-2 border border-primary hover:bg-primary hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">ondemand_video</span>
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
            <div className="h-64 bg-surface-variant border-b border-primary relative overflow-hidden flex items-center justify-center p-6 bg-gradient-to-br from-surface-variant to-surface">
              <div className="text-center space-y-2">
                <span className="material-symbols-outlined text-5xl text-primary">smart_toy</span>
                <h4 className="font-headline-md text-xl font-bold uppercase tracking-wider text-on-surface">SmartDraft AI</h4>
                <p className="text-xs font-mono text-on-surface-variant">AI Email Reply Assistant</p>
              </div>
            </div>
            <div className="p-stack-md flex flex-col h-full">
              <div className="flex justify-between items-start mb-stack-sm">
                <div>
                  <h3 className="font-headline-md text-[24px] font-bold">SmartDraft AI</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">FastAPI</span>
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">Groq API</span>
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">React</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com/pratik-galave/smartdraft-ai.git" target="_blank" rel="noreferrer" className="p-2 border border-primary hover:bg-primary hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">code</span>
                  </a>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md grow">
                An LLM-powered email assistant using Groq API and FastAPI that classifies emails by intent and generates context-aware reply drafts. Integrated with Gmail API (OAuth 2.0) and a React dashboard featuring an LLM-as-a-judge review pipeline.
              </p>
              <div className="flex flex-wrap gap-2 font-label-code text-[12px]">
                <span className="px-2 py-1 border border-primary bg-surface-variant">Python</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">FastAPI</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Groq API</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Gmail API</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">React.js</span>
              </div>
            </div>
          </article>

          <article className="pixel-border bg-surface-container-lowest overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="h-64 bg-surface-variant border-b border-primary relative overflow-hidden flex items-center justify-center p-6 bg-gradient-to-br from-surface-variant to-surface">
              <div className="text-center space-y-2">
                <span className="material-symbols-outlined text-5xl text-primary">local_laundry_service</span>
                <h4 className="font-headline-md text-xl font-bold uppercase tracking-wider text-on-surface">CampusLaundry</h4>
                <p className="text-xs font-mono text-on-surface-variant">College Laundry Management System</p>
              </div>
            </div>
            <div className="p-stack-md flex flex-col h-full">
              <div className="flex justify-between items-start mb-stack-sm">
                <div>
                  <h3 className="font-headline-md text-[24px] font-bold">CampusLaundry</h3>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">MERN</span>
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">MongoDB</span>
                    <span className="px-2 py-1 bg-surface-variant border border-primary text-xs">JWT</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href="https://campus-laundary.vercel.app/" target="_blank" rel="noreferrer" className="p-2 border border-primary hover:bg-primary hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">launch</span>
                  </a>
                  <a href="https://github.com/pratik-galave/CampusLaundary.git" target="_blank" rel="noreferrer" className="p-2 border border-primary hover:bg-primary hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">code</span>
                  </a>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md grow">
                A multi-role (Student, Staff, Supervisor) laundry management system with JWT authentication, registration-number login, 7-collection MongoDB schema, hostel-wise aggregation pipelines, issue reporting, and staff rating.
              </p>
              <div className="flex flex-wrap gap-2 font-label-code text-[12px]">
                <span className="px-2 py-1 border border-primary bg-surface-variant">React.js</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Node.js</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">Express.js</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">MongoDB</span>
                <span className="px-2 py-1 border border-primary bg-surface-variant">JWT</span>
              </div>
            </div>
          </article>
        </div>
      </section>


      {/* Experience removed — now a separate component to match navbar order */}
    </section>
  );
}
