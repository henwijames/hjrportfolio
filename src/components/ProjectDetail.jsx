import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS_DATA } from "../data/projectsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = PROJECTS_DATA.find((p) => p.id === projectId);

  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const projectImages = project?.images && project.images.length > 0
    ? project.images
    : project?.coverImage
    ? [project.coverImage]
    : [];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center font-mono space-y-4">
        <h2 className="text-2xl font-bold text-red-400">[404_NOT_FOUND]</h2>
        <p className="text-sm text-neutral-400">Project identifier does not exist.</p>
        <Link
          to="/"
          className="px-4 py-2 bg-neutral-100 text-neutral-900 font-bold hover:bg-neutral-200 transition-colors uppercase text-xs"
        >
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto border-x border-neutral-200 dark:border-neutral-800 min-h-screen flex flex-col">
        {/* TOP BACK BAR */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 p-4 sm:p-6 flex items-center justify-between font-mono text-xs bg-neutral-100/40 dark:bg-neutral-900/40">
          <Link
            to="/"
            className="inline-flex items-center gap-2 hover:text-emerald-500 font-bold transition-colors uppercase tracking-wider"
          >
            <span>←</span> BACK TO MAIN PORTFOLIO
          </Link>
          <span className="text-neutral-400 font-mono hidden sm:inline">
            [PROJECT_ID: {project.id.toUpperCase()}]
          </span>
        </div>

        {/* HERO BANNER & HEADER */}
        <div className="p-6 sm:p-12 border-b border-neutral-200 dark:border-neutral-800 space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-500">{project.period}</span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-500">{project.company} ({project.location})</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold font-mono tracking-tight text-neutral-900 dark:text-neutral-50 uppercase">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-400 font-mono">
            {project.subtitle}
          </p>

          {/* PROJECT MULTI-IMAGE CAROUSEL */}
          <div className="space-y-3">
            <Carousel setApi={setApi} className="w-full relative border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-900">
              <CarouselContent className="-ml-0">
                {projectImages.map((imgUrl, idx) => (
                  <CarouselItem key={idx} className="pl-0">
                    <div className="w-full h-[320px] sm:h-[480px] relative">
                      <img
                        src={imgUrl}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-3 left-3 bg-neutral-900/90 text-neutral-100 font-mono text-[10px] px-2.5 py-1 uppercase tracking-wider">
                        IMAGE 0{idx + 1} / 0{projectImages.length}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* NAVIGATION OVERLAY CONTROLS */}
              {projectImages.length > 1 && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <CarouselPrevious className="static translate-y-0 h-9 px-3 rounded-none border border-neutral-700 bg-neutral-900/90 text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 transition-colors uppercase font-mono text-xs" />
                  <CarouselNext className="static translate-y-0 h-9 px-3 rounded-none border border-neutral-700 bg-neutral-900/90 text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900 transition-colors uppercase font-mono text-xs" />
                </div>
              )}
            </Carousel>

            {/* CAROUSEL THUMBNAILS / INDICATOR BAR */}
            {projectImages.length > 1 && (
              <div className="flex items-center justify-center gap-2 pt-1">
                {projectImages.map((_, idx) => (
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
            )}
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1">
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800 space-y-8">
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                // SYSTEM OVERVIEW
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                {project.summary}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-xs text-emerald-500 uppercase tracking-widest font-bold">
                // KEY HIGHLIGHTS & ARCHITECTURE
              </h3>
              <ul className="space-y-3 font-sans">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50"
                  >
                    <span className="font-mono text-xs text-emerald-500 font-bold mt-0.5">
                      0{index + 1}.
                    </span>
                    <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Tech Specs */}
          <div className="lg:col-span-4 p-6 sm:p-8 space-y-6 font-mono text-xs bg-neutral-100/30 dark:bg-neutral-900/30">
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <span className="text-neutral-400 uppercase block mb-2">TECHNOLOGY STACK</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <span className="text-neutral-400 uppercase block mb-1">COMPANY / CLIENT</span>
              <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                {project.company}
              </span>
            </div>

            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4">
              <span className="text-neutral-400 uppercase block mb-1">DEVELOPMENT PERIOD</span>
              <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                {project.period}
              </span>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-center w-full py-3 px-4 bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors uppercase tracking-wider"
              >
                LIVE DEMO ↗
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-center w-full py-3 px-4 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors uppercase tracking-wider"
              >
                VIEW SOURCE CODE ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
