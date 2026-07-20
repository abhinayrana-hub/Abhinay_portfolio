const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-24 px-4 bg-gradient-to-b from-slate-50 via-emerald-50 to-teal-50"
    >
      <div className="mb-8 animate-bounce">
        <img
          src="/profile.png"
          className="w-40 h-40 rounded-full mb-6 border-4 border-emerald-500 shadow-xl object-cover"
        />
      </div>
      <h1 className="text-2xl md:text-3xl font-medium text-emerald-700 mb-2">
        ⛰️ Hi! I'm Abhinay Rana
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
        Full Stack Developer & Explorer
      </h2>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed">
        7+ years architecting cloud-native solutions with{" "}
        <strong>Java, Spring Boot, React, FastAPI & Azure</strong>. Passionate
        about building scalable systems and exploring mountains. 🏔️
      </p>
      <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-600">
        Transforming ideas into elegant code • Cloud Architecture • AI-Powered
        Solutions • Developer Communities
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
        >
          Let's Connect 🚀
        </a>
        <a
          href="/Abhinay_Rana_Resume.pdf"
          className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-semibold transition-all"
          download
        >
          📄 Download Resume
        </a>
        <a
          href="https://abhinayrana.blog"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg font-semibold transition-all"
        >
          📖 Read My Blog
        </a>
      </div>

      <div className="mt-12 animate-pulse">
        <p className="text-gray-500">↓ Scroll to explore</p>
      </div>
    </section>
  );
};
export default Hero;
