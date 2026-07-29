import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import GithubHeatmap from "./components/GithubHeatmap";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./components/Contact";

import { Analytics } from "@vercel/analytics/react";
import { TooltipProvider } from "./components/ui/tooltip";

function MainPortfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectsSection />
        <GithubHeatmap />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Analytics />
        <div className="min-h-screen  bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans border-t border-neutral-200 dark:border-neutral-800">
          <Routes>
            <Route path="/" element={<MainPortfolio />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </div>
      </TooltipProvider>
    </BrowserRouter>
  );
}
