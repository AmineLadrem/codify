'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function getLabels(category: string) {
  switch (category) {
    case 'Design':
      return { l1: 'Objective', l2: 'Direction', l3: 'Result' };
    case 'Video & Motion':
      return { l1: 'Concept', l2: 'Execution', l3: 'Reach' };
    default:
      return { l1: 'Problem', l2: 'Solution', l3: 'Outcome' };
  }
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 20);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 400);
  };

  const labels = getLabels(project.category);

  return (
    <div
      className={`absolute inset-0 z-50 bg-zinc-950 transition-all duration-500 ease-out-expo flex flex-col ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="h-16 border-b border-white/5 flex items-center justify-between px-8 shrink-0 bg-zinc-950/90 backdrop-blur-xl">
        <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-teal-400/80">
          {project.category}
        </span>
        <button
          type="button"
          onClick={handleClose}
          className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all group"
        >
          <span>Back to Grid</span>
          <div className="p-2 rounded-xl bg-zinc-900 border border-white/5 group-hover:border-teal-400/30 transition-all">
            <svg
              width="14"
              height="14"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
            >
              <path
                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.34171 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar p-10 md:p-20 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-400/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto space-y-20 relative z-10">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-tight">
              {project.title}
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-snug max-w-3xl">
              {project.shortDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 border-t border-white/5 pt-20">
            <div className="md:col-span-2 space-y-20">
              <section className="space-y-6">
                <h4 className="text-[11px] uppercase tracking-[0.4em] text-teal-400/60 font-bold">
                  01 / {labels.l1}
                </h4>
                <p className="text-xl text-zinc-300 leading-relaxed font-light">
                  {project.problem}
                </p>
              </section>

              <section className="space-y-6">
                <h4 className="text-[11px] uppercase tracking-[0.4em] text-teal-400/60 font-bold">
                  02 / {labels.l2}
                </h4>
                <p className="text-xl text-zinc-300 leading-relaxed font-light">
                  {project.solution}
                </p>
                {project.image && (
                  <div className="w-full rounded-xl overflow-hidden border border-white/5 bg-zinc-900/30 mt-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover min-h-[280px]"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                )}
              </section>
            </div>

            <aside className="space-y-16">
              <section className="space-y-6 p-8 bg-zinc-900/40 border border-teal-400/10 rounded-3xl">
                <h4 className="text-[11px] uppercase tracking-[0.4em] text-teal-400/60 font-bold">
                  03 / {labels.l3}
                </h4>
                <p className="text-xl text-white leading-snug font-medium">
                  {project.outcome}
                </p>
              </section>

              <section className="space-y-6">
                <h4 className="text-[11px] uppercase tracking-[0.4em] text-zinc-600 font-bold">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-white/5 px-3 py-1.5 rounded-full bg-zinc-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </aside>
          </div>

          <div className="h-2" />
        </div>
      </div>
    </div>
  );
}
