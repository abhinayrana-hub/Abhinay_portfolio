const Hero = () => {
    return (
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
        <img src="/profile.png" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-2xl font-medium">Hi! I'm Abhinay Rana 👋</h1>
        <h2 className="text-4xl font-bold mt-2">Full Stack Developer based in New Delhi</h2>
        <p className="mt-4 max-w-xl">I have 4+ years of experience in Java, Spring Boot, React Js, and MySQL. I've worked with EXL and Velocis, building scalable enterprise applications.</p>
        <div className="mt-6 flex gap-4">
          <a href="#contact" className="bg-black text-white px-4 py-2 rounded">Contact Me</a>
          <a href="/Abhinay_Rana_Resume.pdf" className="border border-black px-4 py-2 rounded" download>Download Resume</a>
        </div>
      </section>
    )
  }
  export default Hero