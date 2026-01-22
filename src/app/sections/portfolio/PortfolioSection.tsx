'use client';

import { useState, useMemo } from 'react';
import { PROJECTS } from '../../constants/projects';
import type { Category, Project } from '../../types/portfolio';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const FILTERS: Category[] = ['All', 'AI Systems', 'Web & Apps', 'Design', 'Video & Motion'];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-zinc-950 rounded-[20px] border border-white/5 teal-border-glow shadow-2xl shadow-black overflow-hidden flex flex-col h-[780px] group/window">
      {/* OS-Style Window Bar */}
      <div className="h-12 border-b border-white/5 bg-zinc-950/80 backdrop-blur flex items-center justify-between px-6 shrink-0 z-30">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-teal-400/20" />
          <div className="w-3 h-3 rounded-full bg-zinc-800" />
          <div className="w-3 h-3 rounded-full bg-zinc-800" />
        </div>
        <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em] pointer-events-none">
          codify / selected_work
        </div>
        <div className="w-12" />
      </div>

      {/* Filter Navigation with teal accents */}
      <div className="flex items-center justify-center gap-8 px-8 py-6 border-b border-white/5 bg-zinc-950/30 backdrop-blur z-20 shrink-0">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`text-[11px] font-bold uppercase tracking-widest transition-all duration-300 relative py-1 ${
              activeFilter === filter ? 'text-teal-400' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {filter}
            {activeFilter === filter && (
              <div
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]"
                aria-hidden
              />
            )}
          </button>
        ))}
      </div>

      {/* Scrollable Project Grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-8 lg:p-12 bg-zinc-950/20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              index={idx}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="h-full flex items-center justify-center text-zinc-600 font-light italic text-sm">
            No matching projects in this category.
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
