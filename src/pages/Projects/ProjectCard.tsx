import React, { useState } from 'react';
import {
  Code,
  Layers,
  Cpu,
  Brain,
  Database,
  BarChart3,
  Bot,
  Eye,
  Sparkles,
  Search,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Zap,
  Gem,
  Mic,
  Users,
  FileText,
} from 'lucide-react';
import { ProjectDetail } from '../../data/projectsData';

interface ProjectCardProps {
  project: ProjectDetail;
  onNavigateContact?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  // Return contextual icon based on project type using Codevia primary logo gradient
  const renderIcon = () => {
    switch (project.iconName) {
      case 'web':
        return <Code className="w-5 h-5 text-[#6E0CF8]" />;
      case 'search':
        return <Search className="w-5 h-5 text-[#0127F2]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#6E0CF8]" />;
      case 'realtime':
        return <Zap className="w-5 h-5 text-[#FF0485]" />;
      case 'assistant':
        return <Bot className="w-5 h-5 text-[#6E0CF8]" />;
      case 'feedback':
        return <FileText className="w-5 h-5 text-[#FF0485]" />;
      case 'finance':
        return <BarChart3 className="w-5 h-5 text-[#0127F2]" />;
      case 'vision':
        return <Eye className="w-5 h-5 text-[#6E0CF8]" />;
      case 'diamond':
        return <Gem className="w-5 h-5 text-[#FD4918]" />;
      case 'automation':
        return <Cpu className="w-5 h-5 text-[#0127F2]" />;
      case 'speech':
        return <Mic className="w-5 h-5 text-[#6E0CF8]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#6E0CF8]" />;
    }
  };

  return (
    <article
      className="group relative rounded-[28px] sm:rounded-[32px] bg-white border border-gray-200/90 shadow-[0_6px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(110,12,248,0.1)] hover:border-purple-300 transition-all duration-300 overflow-hidden p-6 sm:p-8 lg:p-9 flex flex-col justify-between"
    >
      {/* Top accent logo-gradient border line that illuminates on the card */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802] opacity-75 group-hover:opacity-100 transition-opacity" />

      <div className="space-y-6">
        {/* Top Meta Bar: Category Badge with logo dot indicator + Project Index Number */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50/80 border border-purple-100/90 flex items-center justify-center shrink-0 shadow-2xs">
              {renderIcon()}
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200/90 bg-white shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802] shrink-0" />
              <span className="text-xs font-semibold text-gray-800 tracking-wide font-sans">
                {project.category}
              </span>
            </div>
          </div>

          {/* Logo-gradient stylized project number */}
          <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802] font-mono select-none">
            {project.number}
          </span>
        </div>

        {/* Title & Tagline with signature logo gradient */}
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-[#000534] tracking-tight font-sans leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0127F2] group-hover:to-[#6E0CF8] transition-all">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802] font-sans tracking-wide">
            {project.tagline}
          </p>
        </div>

        {/* Project Overview */}
        <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed font-sans">
          {project.overview}
        </p>

        {/* Key Capabilities List */}
        <div className="space-y-2.5 pt-1">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 font-sans block">
            Key Capabilities
          </span>
          <ul className="space-y-1.5">
            {(expanded ? project.keyCapabilities : project.keyCapabilities.slice(0, 4)).map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0127F2] to-[#6E0CF8] shrink-0 mt-2" />
                <span className="leading-snug">{cap}</span>
              </li>
            ))}
          </ul>

          {project.keyCapabilities.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors inline-flex items-center gap-1 pt-1 cursor-pointer"
            >
              <span>{expanded ? 'Show less capabilities' : `+${project.keyCapabilities.length - 4} more capabilities`}</span>
              {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>

        {/* Engineering Focus Box with subtle logo gradient accent border */}
        <div className="p-4 rounded-2xl bg-[#FAFAFC] border border-gray-100 relative overflow-hidden group/box">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0127F2] via-[#6E0CF8] to-[#FF0485]" />
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block font-sans mb-1">
            Engineering Focus
          </span>
          <p className="text-xs sm:text-[13px] text-gray-800 font-medium leading-relaxed font-sans pl-1">
            {project.engineeringFocus}
          </p>
        </div>
      </div>

      {/* Bottom Footer: Technologies Pill Cloud */}
      <div className="pt-6 mt-6 border-t border-gray-100 space-y-3">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block font-sans">
          Technologies &amp; Architecture
        </span>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg bg-gray-50 hover:bg-white hover:border-purple-300 border border-gray-200/80 shadow-2xs text-[11px] sm:text-xs font-medium text-gray-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
