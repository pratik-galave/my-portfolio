export default function Hero() {
  return (
    <section className="relative pt-[100px] pb-0 md:pt-[120px] overflow-hidden bg-background" id="home">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between h-[600px]">
        {/* Text Content */}
        <div className="w-full md:w-1/2 z-20 pt-20 md:pt-0">
          <h1 className="font-pixel text-4xl md:text-5xl lg:text-7xl mb-6 tracking-tighter text-on-background">&lt;coder&gt;</h1>
          <p className="text-on-surface-variant text-lg max-w-md">Building digital experiences with clean code.</p>
        </div>
        {/* Hero Image */}
        <div className="w-full md:w-1/2 absolute bottom-0 right-0 md:relative flex justify-end items-end h-full opacity-90 md:opacity-100">
          <img
            alt="Vruti Portrait"
            className="h-auto max-h-full object-cover object-bottom z-10 filter grayscale contrast-125"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuBNB5X724gD_ZKTdB3QhVOzqcW48nOODtw22N07w6FQieWMqDj6Yp031RzoW2jf8e4AO5iJueFt_RT7_1e2EhRe22QXHHv5VFDN3Bsot9MvBwuCaRsG1SsMumu8wMVK_ZOJCtFR_GKPB__mMu6i3u0zChOqTHJXKK2nHvHN87y3SiHz1ZqVu2m6n14qe0wTFYgj2A2kuUGpybCMAfKHX1FjpvyEufxq0pugCqdcVQtIw7hrK7a_OuFSkDjXLEzKM5ekgkfV7RWMo"
          />
        </div>
      </div>
      {/* Tech Marquee Separator */}
      <div className="tech-marquee relative z-20 border-t border-b border-[#333]">
        <div className="tech-marquee-content">
          {/* Repeating icons for marquee effect */}
          <i className="fa-brands fa-html5 tech-icon"></i>
          <i className="fa-brands fa-css3-alt tech-icon"></i>
          <i className="fa-brands fa-js tech-icon"></i>
          <i className="fa-brands fa-react tech-icon"></i>
          <i className="fa-brands fa-node-js tech-icon"></i>
          <i className="fa-brands fa-python tech-icon"></i>
          <i className="fa-brands fa-github tech-icon"></i>
          <i className="fa-brands fa-figma tech-icon"></i>
          <i className="fa-solid fa-database tech-icon"></i>
          {/* Duplicate for seamless scroll */}
          <i className="fa-brands fa-html5 tech-icon"></i>
          <i className="fa-brands fa-css3-alt tech-icon"></i>
          <i className="fa-brands fa-js tech-icon"></i>
          <i className="fa-brands fa-react tech-icon"></i>
          <i className="fa-brands fa-node-js tech-icon"></i>
          <i className="fa-brands fa-python tech-icon"></i>
          <i className="fa-brands fa-github tech-icon"></i>
          <i className="fa-brands fa-figma tech-icon"></i>
          <i className="fa-solid fa-database tech-icon"></i>
        </div>
      </div>
    </section>
  );
}
