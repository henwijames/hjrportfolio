import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  sectionHeight = "h-[450vh]",
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Auto-reset content scroll position to top whenever user enters the section
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.15 && contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Title fades in as section enters (0 -> 0.06), stays visible (0.06 -> 0.12), then completely vanishes to 0 (0.12 -> 0.18)
  const titleScale = useTransform(scrollYProgress, [0, 0.12, 0.18], [0.95, 1, 1.05]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.12, 0.18],
    [0, 1, 1, 0],
  );

  // Main content fades in only AFTER title has completely vanished to 0 (0.18 -> 0.28)
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.28, 0.9, 1],
    [0, 1, 1, 1],
  );
  const contentY = useTransform(scrollYProgress, [0.18, 0.28], ["30px", "0px"]);

  return (
    <section
      ref={containerRef}
      id={id}
      className={`relative w-full border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans transition-colors ${sectionHeight}`}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden max-w-7xl mx-auto border-x border-neutral-200 dark:border-neutral-800 px-4 sm:px-8">
        {/* CENTER TITLE THAT FADES OUT DIRECTLY */}
        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="z-20 text-center pointer-events-none transition-transform"
        >
          <p className="font-mono text-xs sm:text-sm tracking-widest text-neutral-400 mb-1">
            {sectionNumber} //
          </p>
          <h2 className="text-4xl sm:text-7xl md:text-8xl font-extrabold font-mono tracking-tight text-neutral-900 dark:text-neutral-50 uppercase">
            {title}
          </h2>
        </motion.div>

        {/* REVEALED MAIN CONTENT WRAPPER */}
        <motion.div
          ref={contentRef}
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute inset-x-0 top-16 bottom-4 sm:inset-0 flex items-start sm:items-center justify-start sm:justify-center max-w-6xl mx-auto px-4 sm:px-6 max-h-[calc(100vh-5rem)] sm:max-h-[80vh] sm:my-auto overflow-y-auto custom-scrollbar z-10"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
