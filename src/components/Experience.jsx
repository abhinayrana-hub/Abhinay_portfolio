const Experience = () => {
  const experiences = [
    {
      role: "Consultant",
      company: "EXL Services Pvt. Ltd.",
      period: "Jan 2022 - Present",
      highlights: [
        "Led cloud-focused product initiatives combining frontend and backend engineering.",
        "Built enterprise automation solutions using microservices and scalable APIs.",
        "Delivered integrations across collaboration platforms, search services, and data pipelines.",
        "Improved deployment reliability with containerization and CI/CD workflows.",
      ],
    },
    {
      role: "Developer",
      company: "Velocis System Pvt. Ltd.",
      period: "Jan 2020 - Dec 2021",
      highlights: [
        "Developed business-critical Java applications and RESTful backend services.",
        "Implemented frontend interfaces and backend logic for data-driven workflows.",
        "Collaborated in Agile teams to ship maintainable, production-ready software.",
      ],
    },
    {
      role: "Android Developer Intern",
      company: "MCT India Infotech Pvt. Ltd.",
      period: "Feb 2019 - Jun 2019",
      highlights: [
        "Built a native Android application with Java and modern mobile patterns.",
        "Focused on user experience, app performance, and mobile-first design.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 px-6 sm:px-8 bg-gradient-to-b from-slate-50 to-emerald-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 rounded-[2rem] bg-white p-10 shadow-2xl border border-slate-100 overflow-hidden relative">
          <div className="absolute -right-24 top-8 h-48 w-48 rounded-full bg-emerald-100 blur-3xl"></div>
          <div className="absolute -left-24 bottom-10 h-40 w-40 rounded-full bg-teal-100 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Professional Experience
            </h2>
            <p className="text-gray-600 text-lg">
              Solving product and enterprise challenges with reliable software
              systems.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-slate-500 opacity-80"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-teal-600">
                      {exp.role}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {exp.company}
                    </h3>
                  </div>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-4">
                  {exp.highlights.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <div className="mt-1 text-emerald-600">•</div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
