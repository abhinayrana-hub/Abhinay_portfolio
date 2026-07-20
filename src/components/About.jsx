const About = () => {
  return (
    <section id="about" className="py-16 px-6 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] items-start">
          <div className="space-y-8">
            <div className="rounded-[2rem] bg-gradient-to-br from-emerald-100 via-slate-50 to-teal-100 p-10 shadow-2xl border border-emerald-100">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-emerald-700 shadow-sm">
                <span className="text-2xl">⛰️</span>
                Adventure-minded developer blending code with mountain-inspired
                design
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                I build resilient web experiences using modern cloud tooling,
                clean frontend design, and reliable backend systems. My work is
                informed by real-world developer experience and a love of hiking
                — both require endurance, planning, and detail.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    Focus Areas
                  </p>
                  <p className="mt-3 text-gray-700">
                    Full-stack development, cloud automation, and scalable APIs.
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    Approach
                  </p>
                  <p className="mt-3 text-gray-700">
                    Simple interfaces, efficient systems, and reliable
                    launch-ready code.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-emerald-100 bg-emerald-50 p-6 shadow-lg">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">
                  Experience
                </p>
                <p className="mt-3 text-2xl font-bold text-gray-900">
                  7+ Years
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-teal-100 bg-teal-50 p-6 shadow-lg">
                <p className="text-sm uppercase tracking-[0.2em] text-teal-700">
                  Industry
                </p>
                <p className="mt-3 text-2xl font-bold text-gray-900">
                  Enterprise & Product
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-slate-900 p-8 shadow-2xl text-white">
              <h3 className="mb-4 text-2xl font-bold">Quick Info</h3>
              <div className="space-y-4 text-sm text-slate-200">
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="font-semibold">Location</p>
                  <p>New Delhi, India</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="font-semibold">Contact</p>
                  <a
                    href="mailto:er.abhinayrana@gmail.com"
                    className="text-emerald-300 hover:text-emerald-100"
                  >
                    er.abhinayrana@gmail.com
                  </a>
                </div>
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="font-semibold">Education</p>
                  <p>B.Tech in Computer Science</p>
                  <p className="text-xs text-slate-400">
                    Sri Sukhmani Institute of Engineering & Technology
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-gray-100">
              <h3 className="mb-4 text-xl font-bold text-gray-800">
                What I Bring
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="rounded-3xl bg-emerald-50 p-4">
                  Designing elegant UI experiences with React and Tailwind.
                </li>
                <li className="rounded-3xl bg-teal-50 p-4">
                  Implementing stable backend APIs with Spring Boot and cloud
                  services.
                </li>
                <li className="rounded-3xl bg-slate-50 p-4">
                  Delivering systems that are easy to operate, scale, and
                  maintain.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
