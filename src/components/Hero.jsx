import meImg from "@/assets/me.jpeg";

export default function Hero() {
  return (
    <section className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans transition-colors">
      <div className="max-w-7xl mx-auto border-x border-neutral-200 dark:border-neutral-800 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] items-stretch min-h-screen">
          <div className="relative shrink-0 w-full sm:w-64 md:w-120 min-h-[280px] border-b sm:border-b-0 sm:border-r border-neutral-200 dark:border-neutral-800 bg-neutral-200/50 dark:bg-neutral-800/50 flex flex-col items-center justify-center text-center p-4 group self-stretch">
            <img
              src={meImg}
              alt="Henry James Ribano"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
          </div>

          <div className="p-8 lg:p-16 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
            {/* Name */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Henry James Ribano
            </h1>

            {/* Role */}
            <p className="mt-2 text-lg sm:text-xl font-mono text-neutral-600 dark:text-neutral-400">
              Junior Full-Stack Developer
            </p>

            {/* Description */}
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
              Software developer specializing in full-stack architecture,
              high-performance UI engineering, and robust backend integrations.
              Leveraging agentic coding workflows and AI-driven automation to
              build clean, scalable, and ultra-reliable software.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center sm:justify-start items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 font-mono text-sm bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 font-medium hover:opacity-90 transition-opacity"
              >
                View Works ↓
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 font-mono text-sm border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
