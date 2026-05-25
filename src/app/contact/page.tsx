export default function ContactPage() {
  return (
    <div className="pt-25 pb-16 sm:pb-section-gap overflow-hidden">
      {/* Achievements Section */}
      <section className="py-16 md:py-section-gap px-4 sm:px-margin-page max-w-7xl mx-auto">
        <div className="text-center mb-stack-lg relative">
          <h2 className="font-headline-lg md:font-headline-xl text-3xl sm:text-4xl md:text-headline-xl uppercase tracking-tighter inline-block relative z-10 bg-background px-4">Achievements</h2>
          <div className="absolute top-1/2 left-0 w-full h-px bg-primary z-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
          {/* Certifications Bento */}
          <div className="bg-surface-container-low border border-primary p-stack-md flex flex-col gap-stack-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[100px]">workspace_premium</span>
            </div>
            <h3 className="font-headline-md text-headline-md relative z-10 mb-stack-sm">Certifications</h3>
            <div className="flex flex-col gap-4 relative z-10">
              <div className="border-l-2 border-primary pl-4 hover:pl-6 transition-all cursor-default">
                <h4 className="font-body-lg text-body-lg font-bold">AWS Certified Solutions Architect</h4>
                <p className="font-label-code text-label-code text-on-surface-variant mt-1">Amazon Web Services • 2023</p>
              </div>
              <div className="border-l-2 border-primary pl-4 hover:pl-6 transition-all cursor-default">
                <h4 className="font-body-lg text-body-lg font-bold">Meta Front-End Developer Professional Certificate</h4>
                <p className="font-label-code text-label-code text-on-surface-variant mt-1">Coursera • 2022</p>
              </div>
              <div className="border-l-2 border-primary pl-4 hover:pl-6 transition-all cursor-default">
                <h4 className="font-body-lg text-body-lg font-bold">Google Data Analytics</h4>
                <p className="font-label-code text-label-code text-on-surface-variant mt-1">Coursera • 2022</p>
              </div>
            </div>
          </div>

          {/* Hackathons Bento */}
          <div className="bg-surface-container-low border border-primary p-stack-md flex flex-col gap-stack-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[100px]">emoji_events</span>
            </div>
            <h3 className="font-headline-md text-headline-md relative z-10 mb-stack-sm">Hackathons</h3>
            <div className="grid grid-cols-1 gap-4 relative z-10">
              <div className="bg-background border border-primary p-4 neo-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-body-lg text-body-lg font-bold">HackMIT 2023</h4>
                  <span className="bg-primary text-on-primary font-label-code text-label-code px-2 py-1 text-xs">Winner</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Built an AI-driven accessibility tool for visually impaired users.</p>
              </div>
              <div className="bg-background border border-primary p-4 hover:neo-shadow transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-body-lg text-body-lg font-bold">Global AI Hackathon</h4>
                  <span className="bg-surface-variant text-on-surface-variant font-label-code text-label-code px-2 py-1 text-xs border border-outline">Finalist</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Developed a predictive model for urban resource allocation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-section-gap px-4 sm:px-margin-page bg-primary text-on-primary w-full relative overflow-hidden">
        {/* Decorative Large Text Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none whitespace-nowrap">
          <span className="font-headline-xl text-[16vw] sm:text-[20vw] leading-none font-black tracking-tighter">HELLO WORLD</span>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center relative z-10">
          <div className="flex flex-col gap-stack-sm min-w-0">
            <h2 className="font-headline-xl text-5xl sm:text-6xl md:text-[100px] leading-[0.9] font-black tracking-tighter lowercase">
              just<br />send it.
            </h2>
            <p className="font-label-code text-label-code text-on-primary/70 max-w-sm mt-4">
              Open for freelance opportunities, open-source collaborations, or just a chat about code.
            </p>
          </div>

          <div className="w-full min-w-0">
            <form className="flex flex-col gap-4">
              <div className="relative group">
                <label htmlFor="name" className="font-label-code text-label-code text-xs text-on-primary/70 uppercase tracking-wider absolute -top-2 left-4 bg-primary px-1 transition-colors group-focus-within:text-on-primary">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full bg-transparent border border-outline-variant text-on-primary p-4 focus:ring-0 focus:border-on-primary transition-colors font-body-md rounded-none placeholder-on-primary/30"
                />
              </div>
              <div className="relative group">
                <label htmlFor="email" className="font-label-code text-label-code text-xs text-on-primary/70 uppercase tracking-wider absolute -top-2 left-4 bg-primary px-1 transition-colors group-focus-within:text-on-primary">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent border border-outline-variant text-on-primary p-4 focus:ring-0 focus:border-on-primary transition-colors font-body-md rounded-none placeholder-on-primary/30"
                />
              </div>
              <div className="relative group">
                <label htmlFor="message" className="font-label-code text-label-code text-xs text-on-primary/70 uppercase tracking-wider absolute -top-2 left-4 bg-primary px-1 transition-colors group-focus-within:text-on-primary">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Let's build something..."
                  className="w-full bg-transparent border border-outline-variant text-on-primary p-4 focus:ring-0 focus:border-on-primary transition-colors font-body-md rounded-none placeholder-on-primary/30 resize-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="mt-4 bg-background text-on-background border border-background font-label-code text-label-code px-8 py-4 uppercase tracking-widest hover:bg-transparent hover:text-background transition-colors self-stretch sm:self-start"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
