import AnimatedScrollSection from "./AnimatedScrollSection";

export default function Contact() {
  return (
    <AnimatedScrollSection
      id="contact"
      sectionNumber="04"
      title="CONTACT ME"
    >
      <div className="w-full bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 p-4 sm:p-8 backdrop-blur-md">
        {/* Contact Info Grid */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 w-full">
          <div className="space-y-4 max-w-xl flex-1">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block">
              // INITIATE TRANSMISSION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-neutral-900 dark:text-neutral-50">
              GET IN TOUCH
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              Whether you have an upcoming project, architectural inquiry, or
              opportunity, feel free to drop a message or reach out through
              direct channels.
            </p>
          </div>

          <div className="w-full lg:w-80 space-y-3 font-mono text-xs shrink-0">
            <div className="p-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex flex-col">
              <span className="text-[10px] text-neutral-400 uppercase">
                // EMAIL DIRECT
              </span>
              <a
                href="mailto:henryjamesribano27@gmail.com"
                className="font-semibold text-neutral-900 dark:text-neutral-100 hover:underline mt-1 break-all sm:break-normal"
              >
                henryjamesribano27@gmail.com
              </a>
            </div>

            <div className="p-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex flex-col">
              <span className="text-[10px] text-neutral-400 uppercase">
                // LOCATION
              </span>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                Ajman, United Arab Emirates
              </span>
            </div>

            <div className="p-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex flex-col">
              <span className="text-[10px] text-neutral-400 uppercase">
                // SOCIAL & NETWORK
              </span>
              <div className="flex gap-4 mt-1 font-semibold">
                <a
                  href="https://github.com/henwijames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-neutral-900 dark:text-neutral-100"
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/henry-james-ribano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-neutral-900 dark:text-neutral-100"
                >
                  LINKEDIN ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedScrollSection>
  );
}
