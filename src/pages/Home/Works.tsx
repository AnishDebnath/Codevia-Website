import React from 'react';
import { ArrowRight, Code, Search, Bot, BarChart3, Zap } from 'lucide-react';
import { codeviaProjects, ProjectDetail } from '../../data/projectsData';

interface WorksProps {
  onNavigateProjects?: () => void;
}

// 4 high-impact showcase projects representing core pillars:
// 1. Web Platform (02 International Business Search & Data Platform)
// 2. AI & LLM (05 AI Knowledge & Expert Assistance Platform)
// 3. Real-Time Full-Stack (04 Real-Time Collaborative Notes)
// 4. ML & Analytics (07 Financial Transaction Forecasting System)
const featuredProjectIds = [
  'business-search-platform',
  'ai-knowledge-assistant',
  'collaborative-notes',
  'financial-forecasting',
];

export const Works: React.FC<WorksProps> = ({ onNavigateProjects }) => {
  const featuredProjects: ProjectDetail[] = featuredProjectIds
    .map((id) => codeviaProjects.find((p) => p.id === id))
    .filter((p): p is ProjectDetail => Boolean(p));

  const handleCardClick = () => {
    if (onNavigateProjects) {
      onNavigateProjects();
    } else {
      window.history.pushState({}, '', '/projects');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-5 h-5 text-[#0127F2]" />;
      case 'assistant':
        return <Bot className="w-5 h-5 text-[#6E0CF8]" />;
      case 'realtime':
        return <Zap className="w-5 h-5 text-[#FF0485]" />;
      case 'finance':
        return <BarChart3 className="w-5 h-5 text-[#059669]" />;
      default:
        return <Code className="w-5 h-5 text-[#6E0CF8]" />;
    }
  };

  return (
    <section id="works" className="py-12 sm:py-16 lg:py-20 relative select-none">
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-gradient-to-r from-blue-100/20 via-purple-100/25 to-pink-100/15 blur-[130px] pointer-events-none rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[300px] bg-gradient-to-l from-amber-100/20 via-pink-100/15 to-purple-100/20 blur-[120px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Top Header Section: Section Tag & Heading on Left, Sub-heading & Button on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-14">
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
              Explore highlight engineering systems delivered across enterprise platforms, AI assistants, and predictive workflows.
            </p>

            {/* Action Button: View all work linking directly to the dedicated Projects page */}
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                handleCardClick();
              }}
              className="px-7 py-3.5 bg-[#1F232B] hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group active:scale-95 shrink-0"
            >
              <span>View all 11 projects</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </div>

        {/* 2x2 Clean Compact Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={handleCardClick}
              className="group relative rounded-[26px] sm:rounded-[30px] bg-white border border-gray-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(110,12,248,0.1)] hover:border-purple-300 transition-all duration-300 overflow-hidden p-6 sm:p-7 flex flex-col justify-between cursor-pointer"
            >
              {/* Subtle top logo-gradient accent line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802] opacity-75 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Meta Bar: Icon, Category & Project Number */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-50/80 border border-purple-100/90 flex items-center justify-center shrink-0 shadow-2xs">
                      {renderIcon(project.iconName)}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-200/90 bg-white shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802] shrink-0" />
                      <span className="text-[11px] sm:text-xs font-semibold text-gray-800 font-sans">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802] font-mono select-none">
                    {project.number}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight font-sans leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0127F2] group-hover:to-[#6E0CF8] transition-all">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] to-[#FF0485] font-sans tracking-wide">
                    {project.tagline}
                  </p>
                </div>

                {/* Overview - 2 lines max with truncation for clean compact height */}
                <p className="text-xs sm:text-[13px] text-gray-600 font-normal leading-relaxed font-sans line-clamp-2">
                  {project.overview}
                </p>

                {/* Key Capabilities: Only top 2 major highlights */}
                <div className="space-y-1.5 pt-1">
                  {project.keyCapabilities.slice(0, 2).map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0127F2] to-[#6E0CF8] shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Top Tech Badges & "Explore" Link */}
              <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200/80 text-[10px] sm:text-[11px] font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 group-hover:text-purple-900 group-hover:translate-x-0.5 transition-all shrink-0">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
