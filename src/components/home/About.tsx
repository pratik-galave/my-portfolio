export default function About() {
  return (
    <section className="py-16 md:py-24 bg-surface" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 relative">
          <h2 className="font-space text-4xl md:text-5xl font-black uppercase tracking-widest text-on-surface">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left Bio */}
          <div className="space-y-6 relative">
            <span className="absolute -top-6 -right-6 text-2xl text-on-surface-variant font-serif">+</span>
            <h3 className="text-2xl font-bold text-on-surface">Who am I?</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              I am <strong className="text-on-surface">Vruti Moradiya</strong>, a B.Tech student at MIT ADT, Pune, passionate about coding, problem-solving, and web development. I enjoy building responsive and interactive web applications using technologies like <strong>HTML, CSS, and JavaScript, C, C++, Python</strong>. Currently, I am also exploring <strong>Artificial Intelligence and Machine Learning</strong> to expand my skills and build innovative real-world solutions.
            </p>
            <a href="#" className="inline-flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-on-primary transition-colors group">
              <span className="text-sm">Download Resume</span>
              <span className="bg-primary text-on-primary p-1 rounded group-hover:bg-on-primary group-hover:text-primary transition-colors">
                <i className="fa-solid fa-download text-xs"></i>
              </span>
            </a>
          </div>

          {/* Center Image (Archway shape) */}
          <div className="flex justify-center relative">
            <div className="w-56 sm:w-64 h-72 sm:h-80 rounded-t-[100px] overflow-hidden bg-surface-variant border-8 border-surface shadow-xl relative z-10">
              <img
                alt="Vruti Reading"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTX4wyGdh5Gvd7axepuMRmD2Hb25J36dkpCy1zSzOHrsHjFa9P52tKdffkUUqvs-SV1RqADdKAc6KaXyLKDX1sdOpRR7ZAVqEkTQHdp3xf6WEMCrMfHAhNLD4VFZCHWfPXG59NKQVMsvMBtCTErOAu6MNEClhwpmEhp2Vf2ET0qqqkzhz7DgsOgHqdb9a4E1WGqyOKYQz1ldaNaEW31bW72Jv2cka9S_smTN9-y4GWh0AAWYyIRbYQQC2pT8r4-OnqsBmifPxIU2k"
              />
            </div>
            {/* Decorative arch outline behind */}
            <div className="absolute -top-2.5 w-[240px] sm:w-67.5 h-[310px] sm:h-85 rounded-t-[110px] border-2 border-outline-variant z-0"></div>
          </div>

          {/* Right Info Details */}
          <div className="space-y-8 text-right relative">
            <span className="absolute -top-6 -left-6 text-2xl text-on-surface-variant font-serif">+</span>
            
            <div>
              <h4 className="text-xl font-bold text-on-surface mb-1">Name</h4>
              <p className="text-on-surface-variant text-sm">Vruti Moradiya</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-on-surface mb-1">Email</h4>
              <p className="text-on-surface-variant text-sm">vrutimoradiya999@gmail.com</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-on-surface mb-1">Location</h4>
              <p className="text-on-surface-variant text-sm">Pune, India</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-on-surface mb-1">College</h4>
              <p className="text-on-surface-variant text-sm">MIT ADT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
