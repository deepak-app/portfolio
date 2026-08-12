import React, { useState } from 'react';
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
  onUpdate: (updatedProject: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(project.title);
  const [editedDesc, setEditedDesc] = useState(project.description);
  const [editedStatus, setEditedStatus] = useState<ProjectStatus>(project.status);
  const [editedTags, setEditedTags] = useState(project.techStack.join(', '));
  const [editedGithub, setEditedGithub] = useState(project.githubUrl || '');
  const [editedDemo, setEditedDemo] = useState(project.demoUrl || '');

  const handleSave = () => {
    onUpdate({
      ...project,
      title: editedTitle,
      description: editedDesc,
      status: editedStatus,
      techStack: editedTags.split(',').map(tag => tag.trim()).filter(Boolean),
      githubUrl: editedGithub || undefined,
      demoUrl: editedDemo || undefined,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(project.title);
    setEditedDesc(project.description);
    setEditedStatus(project.status);
    setEditedTags(project.techStack.join(', '));
    setEditedGithub(project.githubUrl || '');
    setEditedDemo(project.demoUrl || '');
    setIsEditing(false);
  };

  return (
    <div className="group relative filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)] hover:-translate-y-[3px]">
      {/* Clipped background card */}
      <div className="clip-deckled bg-gradient-to-br from-[#1C1A17] to-[#161412] border border-faded-ash/20 p-8 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
        
        {/* Subtle background parchment lines (vellum effect) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {isEditing ? (
          /* EDIT MODE */
          <div className="flex flex-col gap-3 z-10 w-full text-left">
            <div>
              <label className="block text-[10px] font-mono text-scribe-teal uppercase tracking-widest mb-1">Folio Title</label>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="w-full bg-[#272420] border border-faded-ash/40 rounded px-2.5 py-1 text-aged-vellum font-fraunces focus:outline-none focus:border-manuscript-gold"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-scribe-teal uppercase tracking-widest mb-1">Annotation (Description)</label>
              <textarea
                value={editedDesc}
                onChange={(e) => setEditedDesc(e.target.value)}
                rows={3}
                className="w-full bg-[#272420] border border-faded-ash/40 rounded px-2.5 py-1 text-aged-vellum text-sm font-inter focus:outline-none focus:border-manuscript-gold resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-mono text-scribe-teal uppercase tracking-widest mb-1">Status</label>
                <select
                  value={editedStatus}
                  onChange={(e) => setEditedStatus(e.target.value as ProjectStatus)}
                  className="w-full bg-[#272420] border border-faded-ash/40 rounded px-2 py-1 text-aged-vellum font-mono text-xs focus:outline-none focus:border-manuscript-gold"
                >
                  <option value="LIVE">LIVE</option>
                  <option value="IN PROGRESS">IN PROGRESS</option>
                  <option value="ARCHIVED">ARCHIVED</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-mono text-scribe-teal uppercase tracking-widest mb-1">Tech Stack (comma separated)</label>
                <input
                  type="text"
                  value={editedTags}
                  onChange={(e) => setEditedTags(e.target.value)}
                  className="w-full bg-[#272420] border border-faded-ash/40 rounded px-2.5 py-1 text-aged-vellum font-mono text-xs focus:outline-none focus:border-manuscript-gold"
                  placeholder="Python, React, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-mono text-scribe-teal uppercase tracking-widest mb-1">Github URL</label>
                <input
                  type="text"
                  value={editedGithub}
                  onChange={(e) => setEditedGithub(e.target.value)}
                  className="w-full bg-[#272420] border border-faded-ash/40 rounded px-2.5 py-1 text-aged-vellum font-mono text-xs focus:outline-none focus:border-manuscript-gold"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-scribe-teal uppercase tracking-widest mb-1">Demo URL</label>
                <input
                  type="text"
                  value={editedDemo}
                  onChange={(e) => setEditedDemo(e.target.value)}
                  className="w-full bg-[#272420] border border-faded-ash/40 rounded px-2.5 py-1 text-aged-vellum font-mono text-xs focus:outline-none focus:border-manuscript-gold"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="flex gap-2 justify-end mt-2">
              <button
                onClick={handleCancel}
                className="px-3 py-1 border border-faded-ash/40 rounded text-xs font-mono text-faded-ash hover:text-aged-vellum hover:border-aged-vellum transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-scribe-teal text-aged-vellum rounded text-xs font-mono hover:bg-teal-700 transition-colors"
              >
                Save Folio
              </button>
            </div>
          </div>
        ) : (
          /* READ MODE */
          <>
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

              {/* Links and Edit trigger */}
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

                {typeof window !== 'undefined' && (window.location.search.includes('edit=true') || import.meta.env.DEV) && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-[10px] font-mono text-faded-ash hover:text-scribe-teal transition-colors flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-scribe-teal"
                    title="Edit project details"
                  >
                    <span>✏️ [edit_folio]</span>
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
