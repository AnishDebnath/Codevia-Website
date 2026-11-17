import React, { useRef, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

// ponytail: proper sizing, strictly contained within div boundaries, drag to see full timeline on mobile/tablet
interface Milestone {
  week: number;
  category: string;
  title: string;
  position: 'top' | 'bottom';
  isFinal?: boolean;
  avatar: string;
}

export const Process: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const milestones: Milestone[] = [
    {
      week: 1,
      category: 'Discover',
      title: 'Kickoff & Research',
      position: 'top',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces',
    },
    {
      week: 2,
      category: 'Define',
      title: 'Roadmap & Scope',
      position: 'bottom',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
    },
    {
      week: 3,
      category: 'Design',
      title: 'UI/UX Prototypes',
      position: 'top',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces',
    },
    {
      week: 5,
      category: 'Build',
      title: 'Engineering & Code',
      position: 'bottom',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces',
    },
    {
      week: 7,
      category: 'Build',
      title: 'QA & Final Review',
      position: 'top',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
    },
    {
      week: 8,
      category: 'Scale',
      title: 'Launch & Scale',
      position: 'bottom',
      isFinal: true,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
    },
  ];

  const weeks = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section
      id="process"
      className="w-full bg-gradient-to-br from-[#F0F5FF] via-[#F8F2FF] to-[#FFF5F2] py-12 sm:py-16 lg:py-20 relative select-none border-y border-purple-200/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.9)] overflow-hidden"
    >
      {/* Subtle geometric dot grid pattern for depth & texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C4B5FD_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Top-Right Glowing Coral/Pink Aura from logo (all-time breathing) */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.95, 0.65] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute -top-12 -right-12 w-[650px] h-[450px] bg-gradient-to-bl from-[#FD4918]/15 via-[#FF0485]/15 to-transparent blur-3xl pointer-events-none rounded-full"
      />

      {/* Bottom-Left Ambient Electric Blue/Violet Glow from logo (all-time breathing) */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 7.5, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-12 -left-12 w-[650px] h-[450px] bg-gradient-to-tr from-[#0127F2]/15 via-[#6E0CF8]/15 to-transparent blur-3xl pointer-events-none rounded-full"
      />

      {/* Center Soft Radial Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[380px] bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20 relative z-10">
        {/* Top Header Section: Section Tag & Heading on Left, 8 Weeks Stat on Right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10"
        >
          {/* Left Side: Tag Line, Heading, Sub-heading */}
          <div className="space-y-3 md:space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.75, 1, 0.75] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]"
              />
              <span className="text-xs md:text-sm font-semibold text-gray-800 tracking-wide font-sans">How We Work</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-[#000534] leading-[1.18] md:leading-[1.14] font-sans sm:whitespace-nowrap">
              From first idea{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
                to real impact.
              </span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 font-normal leading-relaxed max-w-prose font-sans">
              A transparent, milestone-driven roadmap from first discovery to launch and ongoing scale — so nothing is a surprise.
            </p>
          </div>

          {/* Right Side: Big 8 Weeks Stat matching Statistics.tsx typography */}
          <div className="flex flex-col md:items-end space-y-1 shrink-0">
            <div className="text-4xl sm:text-5xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802] font-sans leading-none tabular-nums py-1">
              8 weeks
            </div>
            <p className="text-xs md:text-sm text-gray-600 font-medium font-sans">
              Kickoff to launch &amp; scale
            </p>
          </div>
        </motion.div>

        {/* Timeline Showcase Card Container: Drag to see full process */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`bg-white rounded-3xl border border-gray-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.03)] p-5 sm:p-6 lg:p-8 overflow-x-auto scrollbar-none select-none touch-pan-x transition-colors ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          <div className="min-w-[820px] lg:min-w-0 w-full relative py-2 px-2 sm:px-3">
            {/* Top Cards Row */}
            <div className="grid grid-cols-8 gap-2.5 sm:gap-3 items-end h-[110px]">
              {weeks.map((w) => {
                const milestone = milestones.find((m) => m.week === w && m.position === 'top');
                if (!milestone) return <div key={w} className="w-full" />;

                // Pull boundary cards inward so they never spill outside the div
                const alignmentClass =
                  w === 1 ? 'translate-x-3.5' : w === 8 ? '-translate-x-3.5' : '';

                return (
                  <div key={w} className="col-span-1 w-full flex flex-col items-center">
                    {/* Top Card with proper proportional width */}
                    <div
                      className={`w-[148px] sm:w-[162px] bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all p-3 space-y-1 text-left relative z-10 hover:z-20 ${alignmentClass}`}
                    >
                      <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider block font-sans">
                        {milestone.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#000534] font-sans tracking-tight leading-snug">
                        {milestone.title}
                      </h4>
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <img
                          src={milestone.avatar}
                          alt={`${milestone.title} milestone lead`}
                          className="w-4 h-4 rounded-full object-cover ring-1 ring-white"
                        />
                        <span className="text-xs text-gray-500 font-medium font-sans">
                          Week {milestone.week}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connecting Vertical Stems (Top to Track) */}
            <div className="grid grid-cols-8 gap-2.5 sm:gap-3 h-4">
              {weeks.map((w) => {
                const hasTop = milestones.some((m) => m.week === w && m.position === 'top');
                return (
                  <div key={w} className="col-span-1 flex justify-center">
                    {hasTop && <div className="w-px h-full bg-gray-300" />}
                  </div>
                );
              })}
            </div>

            {/* Center Track Line with Week Pills */}
            <div className="relative flex items-center my-0.5">
              <div className="absolute inset-x-0 h-0.5 bg-gray-200" />
              <div className="relative w-full grid grid-cols-8 gap-2.5 sm:gap-3">
                {weeks.map((w) => (
                  <div key={w} className="col-span-1 flex justify-center z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-white border border-gray-200/90 shadow-2xs text-xs font-semibold text-gray-700 font-sans">
                      Week {w}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connecting Vertical Stems (Track to Bottom) */}
            <div className="grid grid-cols-8 gap-2.5 sm:gap-3 h-4">
              {weeks.map((w) => {
                const hasBottom = milestones.some((m) => m.week === w && m.position === 'bottom');
                return (
                  <div key={w} className="col-span-1 flex justify-center">
                    {hasBottom && <div className="w-px h-full bg-gray-300" />}
                  </div>
                );
              })}
            </div>

            {/* Bottom Cards Row */}
            <div className="grid grid-cols-8 gap-2.5 sm:gap-3 items-start h-[110px]">
              {weeks.map((w) => {
                const milestone = milestones.find((m) => m.week === w && m.position === 'bottom');
                if (!milestone) return <div key={w} className="w-full" />;

                const isFinal = milestone.isFinal;
                // Pull boundary cards inward so they never spill outside the div
                const alignmentClass =
                  w === 1 ? 'translate-x-3.5' : w === 8 ? '-translate-x-3.5' : '';

                return (
                  <div key={w} className="col-span-1 w-full flex flex-col items-center">
                    {/* Bottom Card with proper proportional width */}
                    <div
                      className={`w-[148px] sm:w-[162px] rounded-xl transition-all p-3 space-y-1 text-left border relative z-10 hover:z-20 ${alignmentClass} ${
                        isFinal
                          ? 'bg-gradient-to-br from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802] text-white shadow-md shadow-pink-500/20 border-pink-400/40 ring-1 ring-amber-300/30'
                          : 'bg-white border-gray-200/90 shadow-2xs hover:shadow-md hover:border-purple-300 text-gray-900'
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider block font-sans ${
                          isFinal ? 'text-white/80' : 'text-purple-600'
                        }`}
                      >
                        {milestone.category}
                      </span>
                      <h4
                        className={`text-sm font-bold font-sans tracking-tight leading-snug ${
                          isFinal ? 'text-white' : 'text-[#000534]'
                        }`}
                      >
                        {milestone.title}
                      </h4>
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <img
                          src={milestone.avatar}
                          alt={`${milestone.title} milestone lead`}
                          className="w-4 h-4 rounded-full object-cover ring-1 ring-white"
                        />
                        <span
                          className={`text-xs font-medium font-sans ${
                            isFinal ? 'text-white/90' : 'text-gray-500'
                          }`}
                        >
                          Week {milestone.week}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Drag to explore hint text: After timeline card, centered, with subtle all-time oscillating arrow */}
        <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500 font-medium font-sans mt-3.5 sm:mt-4 text-center select-none">
          <motion.span
            animate={{ x: [-2.5, 2.5, -2.5] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="inline-flex"
          >
            <MoveHorizontal className="w-3.5 h-3.5 text-gray-400" />
          </motion.span>
          <span>Drag to see full process</span>
        </p>
      </div>
    </section>
  );
};
