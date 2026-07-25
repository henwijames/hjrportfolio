import { useState } from "react";
import AnimatedScrollSection from "./AnimatedScrollSection";

// MOCK DATA OBJECTS
const PERSONAL_INFO = {
  fullName: "Henry James Ribano",
  role: "Full-Stack Software Developer & Systems Engineer",
  location: "Remote / Available Worldwide",
  primaryFocus:
    "High-performance web architecture, type-safe API integration, responsive user interfaces, and database optimization.",
};

const EXPERIENCES = [
  {
    id: "exp-1",
    role: "Full Stack Developer / IT Support",
    company: "Erick Trading Co. L.L.C",
    location: "Sharjah, United Arab Emirates",
    period: "August 2025 — Present",
    description:
      "Providing IT support for head office and 40 salon branches. Developed Salon POS system with CRM & WhatsApp API integration, solely built a logistics driver scheduling system, and created a restaurant POS system.",
    isCurrent: true,
  },
  {
    id: "exp-2",
    role: "Web Developer Intern",
    company: "Bear Digital Non-Voices Outsourcing Services",
    location: "Taal, Philippines",
    period: "February 2025 — May 2025",
    description:
      "Created customized WordPress pages for international clients and managed product catalogs.",
    isCurrent: false,
  },
];

const EDUCATION = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Information Technology",
    institution: "Lemery Colleges",
    status: "Graduated",
    location: "Lemery, Batangas, Philippines",
  },
];

const TECH_STACK_CATEGORIES = [
  {
    category: "// FRONTEND",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Inertia.js",
      "shadcn.ui",
    ],
  },
  {
    category: "// BACKEND & DATABASE",
    skills: [
      "Node.js",
      "Express",
      "Nest.js",
      "Laravel",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
    ],
  },
  {
    category: "// TOOLING & INFRA",
    skills: [
      "Git / GitHub",
      "Docker",
      "Vercel",
      "ESLint",
      "VPS",
      "CI/CD Pipelines",
    ],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <AnimatedScrollSection
      id="about"
      sectionNumber="01"
      title="ABOUT ME"
      sectionHeight="h-[450vh]"
    >
      {/* Main content grid */}
      <div className="p-4 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 backdrop-blur-md">
        {/* Left Narrative Column */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6 flex flex-col justify-between">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Passionate about building robust web software and intuitive user
              interfaces.
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I specialize in full-stack development with a strong emphasis on
              clean architecture, type-safe APIs, and responsive design systems.
              My focus is on crafting efficient and maintainable digital
              solutions.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Whether optimizing database queries, building internal dispatch &
              logistics applications, or configuring multi-point POS terminal
              networks, I prioritize performance and user experience.
            </p>
          </div>

          {/* System Footer Status */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between font-mono text-xs text-neutral-500">
            <span>[SYS_STATUS]: READY</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-wider uppercase text-neutral-400">
                Available
              </span>
              <span className="h-1.5 w-1.5 bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Right Side: Tabbed Information Panel */}
        <div className="lg:col-span-6 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 flex flex-col justify-between font-mono text-xs">
          {/* Tab Headers */}
          <div className="flex border-b border-neutral-200 dark:border-neutral-800 text-xs">
            <button
              onClick={() => setActiveTab("info")}
              className={`flex-1 py-3 px-4 text-center font-mono transition-colors border-r border-neutral-200 dark:border-neutral-800 ${
                activeTab === "info"
                  ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
              }`}
            >
              01. INFO
            </button>

            <button
              onClick={() => setActiveTab("qualifications")}
              className={`flex-1 py-3 px-4 text-center font-mono transition-colors border-r border-neutral-200 dark:border-neutral-800 ${
                activeTab === "qualifications"
                  ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
              }`}
            >
              02. QUALIFICATIONS
            </button>

            <button
              onClick={() => setActiveTab("tech")}
              className={`flex-1 py-3 px-4 text-center font-mono transition-colors ${
                activeTab === "tech"
                  ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
              }`}
            >
              03. TECH STACK
            </button>
          </div>

          {/* Tab Body Content */}
          <div className="p-5 sm:p-6 min-h-[300px] max-h-[340px] overflow-y-auto custom-scrollbar">
            {/* TAB 1: PERSONAL INFO */}
            {activeTab === "info" && (
              <div className="space-y-4 font-sans">
                <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                  <span className="font-mono text-neutral-400 text-[10px] uppercase block mb-1">
                    FULL NAME
                  </span>
                  <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                    {PERSONAL_INFO.fullName}
                  </span>
                </div>

                <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                  <span className="font-mono text-neutral-400 text-[10px] uppercase block mb-1">
                    ROLE / POSITION
                  </span>
                  <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                    {PERSONAL_INFO.role}
                  </span>
                </div>

                <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                  <span className="font-mono text-neutral-400 text-[10px] uppercase block mb-1">
                    LOCATION
                  </span>
                  <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-neutral-400 text-[10px] uppercase block mb-1">
                    PRIMARY FOCUS
                  </span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono">
                    {PERSONAL_INFO.primaryFocus}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: QUALIFICATIONS (TIMELINE) */}
            {activeTab === "qualifications" && (
              <div className="space-y-6 font-sans">
                {/* WORK EXPERIENCE TIMELINE */}
                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest block font-bold">
                    // WORK EXPERIENCE
                  </span>

                  <div className="relative border-l border-neutral-300 dark:border-neutral-700 pl-4 space-y-4 ml-1">
                    {EXPERIENCES.map((exp) => (
                      <div key={exp.id} className="relative">
                        <span
                          className={`absolute -left-[21px] top-1 h-2 w-2 ${
                            exp.isCurrent
                              ? "bg-neutral-900 dark:bg-neutral-100"
                              : "bg-neutral-400 dark:bg-neutral-600"
                          }`}
                        />
                        <div className="flex justify-between items-baseline">
                          <span className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100">
                            {exp.role}
                          </span>
                          <span className="font-mono text-[10px] text-neutral-400">
                            {exp.period}
                          </span>
                        </div>
                        <span className="text-xs text-neutral-500 block">
                          {exp.company} • {exp.location}
                        </span>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-normal">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EDUCATION TIMELINE */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest block font-bold">
                    // EDUCATION
                  </span>

                  <div className="relative border-l border-neutral-300 dark:border-neutral-700 pl-4 space-y-3 ml-1">
                    {EDUCATION.map((edu) => (
                      <div key={edu.id} className="relative">
                        <span className="absolute -left-[21px] top-1 h-2 w-2 bg-neutral-900 dark:bg-neutral-100" />
                        <div className="flex justify-between items-baseline">
                          <span className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100">
                            {edu.degree}
                          </span>
                          <span className="font-mono text-[10px] text-neutral-400">
                            {edu.status}
                          </span>
                        </div>
                        <span className="text-xs text-neutral-500 block font-mono">
                          {edu.institution} ({edu.location})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: TECH STACK */}
            {activeTab === "tech" && (
              <div className="space-y-4 font-mono text-xs">
                {TECH_STACK_CATEGORIES.map((cat) => (
                  <div key={cat.category}>
                    <span className="text-neutral-400 text-[10px] uppercase block mb-2">
                      {cat.category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-neutral-200/70 dark:bg-neutral-800/70 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedScrollSection>
  );
}
