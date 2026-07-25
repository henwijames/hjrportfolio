import { motion } from "framer-motion";

/**
 * AnimatedScrollSection Component
 * Reusable wrapper that locks a section title in the center during scroll,
 * moves the title up smoothly to become the header, and reveals main content.
 * Fully mobile responsive.
 */
export default function AnimatedScrollSection({
  id,
  sectionNumber = "01",
  title = "SECTION TITLE",
  children,
}) {
  return (
    <section
      id={id}
      className="relative w-full border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans transition-colors scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto border-x border-neutral-200 dark:border-neutral-800 px-4 sm:px-8 py-12 sm:py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 border-b border-neutral-200 dark:border-neutral-800 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2"
        >
          <div>
            <span className="font-mono text-xs sm:text-sm tracking-widest text-neutral-400 block mb-1">
              {sectionNumber} //
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-mono tracking-tight text-neutral-900 dark:text-neutral-50 uppercase">
              {title}
            </h2>
          </div>
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
            [SECTION_{sectionNumber}]
          </span>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
