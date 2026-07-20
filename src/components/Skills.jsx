const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      emoji: "💻",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Frontend Development",
      emoji: "🎨",
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Responsive Web Design",
        "Material-UI",
      ],
    },
    {
      category: "Backend Development",
      emoji: "⚙️",
      skills: [
        "Spring Boot",
        "FastAPI",
        "RESTful API Design",
        "Hibernate",
        "Microservices Architecture",
      ],
    },
    {
      category: "Cloud & DevOps",
      emoji: "☁️",
      skills: [
        "Microsoft Azure",
        "Azure App Service",
        "Docker",
        "Kubernetes",
        "Helm",
        "ArgoCD",
        "GitHub Actions",
        "CI/CD Pipelines",
      ],
    },
    {
      category: "Data & AI/ML",
      emoji: "🤖",
      skills: [
        "PySpark",
        "LLM Integration",
        "Glean AI",
        "Data Engineering",
        "Enterprise Search",
        "IBM Cognos",
      ],
    },
    {
      category: "Databases",
      emoji: "🗄️",
      skills: [
        "MySQL",
        "PostgreSQL",
        "SQL Server",
        "Azure Databricks",
        "Query Optimization",
        "MongoDB",
      ],
    },
    {
      category: "Microsoft Ecosystem",
      emoji: "🪟",
      skills: ["SharePoint Online", "Microsoft Graph API", "Azure Automation"],
    },
    {
      category: "Tools & Practices",
      emoji: "🛠️",
      skills: [
        "Git",
        "Maven",
        "Postman",
        "Insomnia",
        "VS Code",
        "IntelliJ IDEA",
        "Agile/Scrum",
        "SDLC",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 px-6 py-16 sm:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-100/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 rounded-[2rem] border border-emerald-100 bg-white/90 p-8 shadow-xl backdrop-blur">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
            Technical Toolkit
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Skills & Expertise
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            A comprehensive toolkit built through years of real-world
            application development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              <h3 className="mb-4 flex items-center text-xl font-bold text-emerald-600">
                <span className="mr-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-2xl transition group-hover:scale-110">
                  {category.emoji}
                </span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:from-emerald-200 hover:to-teal-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50 p-8 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            🏆 Certifications & Achievements
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white bg-white p-5 shadow-sm">
              <p className="font-bold text-emerald-600">
                Databricks Lakehouse Platform
              </p>
              <p className="text-sm text-gray-600">
                Fundamentals Accreditation - 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
