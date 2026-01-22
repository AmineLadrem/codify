'use client';

import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative p-8 bg-zinc-900/30 hover:bg-zinc-900/60 border border-white/[0.03] hover:border-teal-400/20 rounded-2xl cursor-pointer transition-all duration-500 ease-out-expo hover:shadow-2xl hover:shadow-teal-900/10 flex flex-col h-full overflow-hidden hover:scale-[1.015] active:scale-[0.98] transform-gpu"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <div className="flex justify-between items-start mb-6 shrink-0">
        <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400/80 px-3 py-1 border border-teal-400/20 rounded-full bg-teal-400/5">
          {project.category}
        </span>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-teal-400"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.5488 3.45118 11.8655 3.64645 12.0607C3.84171 12.2559 4.15829 12.2559 4.35355 12.0607L3.64645 11.3536ZM12.5 3.5C12.5 3.22386 12.2761 3 12 3L7.5 3C7.22386 3 7 3.22386 7 3.5C7 3.77614 7.22386 4 7.5 4L11.5 4V8C11.5 8.27614 11.7239 8.5 12 8.5C12.2761 8.5 12.5 8.27614 12.5 8V3.5ZM4.35355 12.0607L12.3536 4.06066L11.6464 3.35355L3.64645 11.3536L4.35355 12.0607Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-teal-50 transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-zinc-500 leading-relaxed font-light group-hover:text-zinc-400 transition-colors line-clamp-2 flex-grow">
        {project.shortDesc}
      </p>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 ease-out-expo">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-400">
          View Case
        </span>
        <div className="flex items-center gap-2">
          {project.stack.slice(0, 2).map((s) => (
            <span
              key={s}
              className="text-[9px] text-zinc-600 font-bold uppercase tracking-tighter border border-white/5 px-2 py-0.5 rounded bg-white/[0.01]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
    </div>
  );
}
