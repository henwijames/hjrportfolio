import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedScrollSection from "./AnimatedScrollSection";
import { PROJECTS_DATA } from "../data/projectsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function ProjectsSection() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <AnimatedScrollSection
      id="projects"
      sectionNumber="02"
      title="FEATURED WORKS"
      sectionHeight="h-[450vh]"
    >
      <div className="w-full space-y-6 bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 p-4 sm:p-8 backdrop-blur-md">
        {/* SHADCN CAROUSEL CONTAINER */}
        <Carousel setApi={setApi} className="w-full">
          {/* HEADER & SLIDER CONTROLS */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-6 gap-4">
            <div>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block">
                // SELECTED PORTFOLIO
              </span>
              <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-mono">
                SYSTEM ARCHITECTURE & APPLICATIONS
              </h3>
            </div>

            {/* SHADCN CAROUSEL NAVIGATION CONTROLS */}
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-neutral-500 mr-2">
                [ 0{current} / 0{count || PROJECTS_DATA.length} ]
              </span>
              <CarouselPrevious className="static translate-y-0 h-9 px-3 rounded-none border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-neutral-900 transition-colors uppercase font-mono text-xs" />
              <CarouselNext className="static translate-y-0 h-9 px-3 rounded-none border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100 hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-neutral-900 transition-colors uppercase font-mono text-xs" />
            </div>
          </div>

          {/* CAROUSEL CONTENT ITEMS */}
          <CarouselContent className="-ml-0">
            {PROJECTS_DATA.map((project, idx) => (
              <CarouselItem key={project.id} className="pl-0">
                <div className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
                  {/* IMAGE COLUMN */}
                  <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800 relative min-h-[220px] sm:min-h-[350px]">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-neutral-900/90 text-neutral-100 font-mono text-[10px] px-2.5 py-1 uppercase tracking-wider">
                      0{idx + 1} // {project.category}
                    </span>
                  </div>

                  {/* DETAILS COLUMN */}
                  <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between font-mono text-xs text-neutral-400 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                        <span>{project.company}</span>
                        <span>{project.period}</span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-bold font-mono text-neutral-900 dark:text-neutral-50">
                        {project.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                        {project.summary}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                      <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-neutral-200/70 dark:bg-neutral-800/70 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center justify-between w-full font-mono text-xs font-semibold py-3 px-5 bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors uppercase tracking-wider"
                      >
                        <span>VIEW FULL PROJECT SPECIFICATIONS</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* DOT INDICATOR BAR */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {PROJECTS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 ${
                current === idx + 1
                  ? "w-8 bg-neutral-900 dark:bg-neutral-100"
                  : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </AnimatedScrollSection>
  );
}
