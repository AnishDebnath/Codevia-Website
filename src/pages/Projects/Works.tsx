import React from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from '../../data/projectsData';

interface WorksProps {
  projects: ProjectDetail[];
  onNavigateContact?: () => void;
}

// ponytail: Responsive Grid for PDF projects, styled to seamlessly match Codevia aesthetic
export const Works: React.FC<WorksProps> = ({ projects, onNavigateContact }) => {
  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 lg:pb-20 relative select-none">
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-gradient-to-r from-blue-100/20 via-purple-100/25 to-pink-100/15 blur-[130px] pointer-events-none rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[300px] bg-gradient-to-l from-amber-100/20 via-pink-100/15 to-purple-100/20 blur-[120px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Projects Grid: 2 columns on tablet and desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-9">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onNavigateContact={onNavigateContact}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
