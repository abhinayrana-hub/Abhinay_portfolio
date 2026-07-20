import { useState } from "react";
import fitnessAppImage from "../assets/fitness_app.jpeg";
import expenseTrackerImage from "../assets/expense_tracker.jpeg";

const Projects = () => {
  const [activeProject, setActiveProject] = useState("fitness");

  const projects = [
    {
      id: "fitness",
      title: "Fitness Tracker App",
      image: fitnessAppImage,
      imageAlt: "Fitness tracker mobile app dashboard screenshot",
      description:
        "A comprehensive fitness tracking application designed to help users monitor workouts, track progress, and achieve health goals with real-time analytics.",
      features: [
        "Real-time workout tracking with exercise details",
        "Progress analytics & visualization with charts",
        "Personalized fitness goals & reminders",
        "Social sharing & community features",
        "Mobile-responsive design",
      ],
      tech: ["React", "FastAPI", "MongoDB", "Chart.js"],
      status: "In Development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "finance",
      title: "Personal Finance Tracker",
      image: expenseTrackerImage,
      imageAlt: "Personal finance tracker mobile app dashboard screenshot",
      description:
        "A modern finance management application that helps track expenses, create budgets, and plan your financial future with detailed insights.",
      features: [
        "Expense categorization & tracking by type",
        "Budget planning & spending alerts",
        "Investment portfolio tracking & analysis",
        "Financial reports & insights generation",
        "Multi-currency support",
      ],
      tech: ["React", "Spring Boot", "PostgreSQL", "Chart.js"],
      status: "In Development",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const activeProjectData = projects.find((p) => p.id === activeProject);

  return (
    <section
      id="projects"
      className="py-16 px-6 sm:px-8 bg-gradient-to-b from-emerald-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">
          Personal Projects
        </h2>
        <p className="text-gray-600 mb-12">
          Click to explore my work • Built with passion & code
        </p>

        <div className="flex gap-4 mb-12 flex-wrap">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeProject === project.id
                  ? `bg-gradient-to-r ${project.color} text-white shadow-lg`
                  : "bg-white text-gray-700 border-2 border-slate-200 hover:border-emerald-300"
              }`}
              aria-pressed={activeProject === project.id}
            >
              {project.title}
            </button>
          ))}
        </div>

        {activeProjectData && (
          <div className="group relative overflow-hidden rounded-[2rem] border border-emerald-700/20 bg-gradient-to-br from-emerald-800 via-teal-800 to-emerald-950 p-6 shadow-2xl sm:p-8 lg:min-h-[780px] lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(110,231,183,0.28),transparent_34%),radial-gradient(circle_at_76%_70%,rgba(45,212,191,0.22),transparent_30%)]" />

            <div className="relative flex min-h-[640px] flex-col lg:block lg:min-h-[700px]">
              <div className="relative z-10 order-2 mt-8 rounded-3xl bg-white p-7 text-left shadow-2xl transition duration-700 ease-out sm:p-8 lg:absolute lg:left-1/2 lg:top-1/2 lg:mt-0 lg:w-[440px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:scale-95 lg:opacity-0 lg:group-hover:translate-x-40 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                <div>
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <h3 className="text-3xl font-bold text-gray-800">
                      {activeProjectData.title}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full bg-gradient-to-r ${activeProjectData.color} px-4 py-2 text-sm font-semibold text-white`}
                    >
                      {activeProjectData.status}
                    </span>
                  </div>

                  <p className="mb-8 text-base leading-relaxed text-gray-700">
                    {activeProjectData.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-800">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {activeProjectData.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <span className="mr-3 mt-0.5 text-lg font-bold text-emerald-500">
                            →
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-800">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {activeProjectData.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`rounded-full bg-gradient-to-r ${activeProjectData.color} px-4 py-2 text-sm font-semibold text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative z-20 order-1 flex items-center justify-center transition duration-700 ease-out lg:absolute lg:inset-0 lg:group-hover:-translate-x-64">
                <div className="flex h-[620px] w-full max-w-[460px] items-center justify-center rounded-[2rem] bg-emerald-900/20 p-5 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm sm:h-[680px] lg:h-[710px] lg:max-w-[480px]">
                  <img
                    src={activeProjectData.image}
                    alt={activeProjectData.imageAlt}
                    className="h-full w-auto max-w-full rounded-3xl border border-white/20 object-contain shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
