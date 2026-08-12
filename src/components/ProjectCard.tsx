import React from 'react';
import { WaxSeal } from './WaxSeal';
import type { ProjectStatus } from './WaxSeal';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)] hover:-translate-y-[3px]">
      {/* Clipped background card */}
      <div className="clip-deckled bg-gradient-to-br from-[#1C1A17] to-[#161412] border border-faded-ash/20 p-8 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
        
        {/* Subtle background parchment lines (vellum effect) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Top row: Title and Wax Seal */}
        <div className="flex justify-between items-start gap-4 z-10 w-full mb-4">
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-aged-vellum tracking-wide leading-tight group-hover:text-manuscript-gold transition-colors">
              {project.title}
            </h3>
          </div>
          
          {/* Wax Seal status badge */}
          <div className="flex-shrink-0">
            <WaxSeal status={project.status} />
          </div>
        </div>

        {/* Middle: Description */}
        <p className="text-sm text-aged-vellum/80 font-inter text-left leading-relaxed z-10 mb-6 italic">
          "{project.description}"
        </p>

        {/* Bottom row: Tech Stack and Links */}
        <div className="z-10 w-full mt-auto">
          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-4 justify-start">
            {project.techStack.map((tech, i) => (
              <span 
                key={i}
                className="font-mono text-[10px] text-scribe-teal border border-scribe-teal/30 bg-scribe-teal/5 px-2 py-0.5 rounded-sm tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex justify-between items-center border-t border-faded-ash/10 pt-3">
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-manuscript-gold hover:text-yellow-500 transition-colors flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-manuscript-gold"
                >
                  <span>[git]</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-manuscript-gold hover:text-yellow-500 transition-colors flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-manuscript-gold"
                >
                  <span>[live_demo]</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
