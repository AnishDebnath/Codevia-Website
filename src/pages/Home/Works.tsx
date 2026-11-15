import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, allProjects } from '../../components/product';
export type { ProjectItem } from '../../components/product';

interface WorksProps {
  onNavigateProjects?: () => void;
}

// ponytail: Selected works section using shared product Card component (first 4 featured projects)
export const Works: React.FC<WorksProps> = ({ onNavigateProjects }) => {
  const homeProjects = allProjects.slice(0, 4);

  return (
    <section id="works" className="py-12 sm:py-16 lg:py-20 relative select-none">
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-gradient-to-r from-blue-100/20 via-purple-100/25 to-pink-100/15 blur-[130px] pointer-events-none rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[300px] bg-gradient-to-l from-amber-100/20 via-pink-100/15 to-purple-100/20 blur-[120px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Top Header Section: Section Tag & Heading on Left, Sub-heading & Button on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          {/* Left Side: Tag Line + Section Heading */}
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide font-sans">Featured Projects</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.14] font-sans">
              Good work gets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
                remembered.
              </span>
            </h2>
          </div>

          {/* Right Side: Sub-heading + Button */}
          <div className="flex flex-col sm:flex-row sm:items-center lg:flex-col lg:items-end gap-4 sm:gap-5">
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-md lg:text-right font-sans">
              From emerging businesses to established organisations, we've worked alongside teams building what matters.
            </p>

            {/* Action Button: View all work linking directly to the dedicated Projects page */}
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/projects');
                if (onNavigateProjects) {
                  onNavigateProjects();
                } else {
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }}
              className="px-7 py-3.5 bg-[#1F232B] hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group active:scale-95 shrink-0"
            >
              <span>View all work</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </div>

        {/* 2x2 Projects Grid using shared Card component */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-9">
          {homeProjects.map((project) => (
            <Card
              key={project.id}
              project={project}
              onClick={() => {
                if (onNavigateProjects) {
                  onNavigateProjects();
                } else {
                  window.history.pushState({}, '', '/projects');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
