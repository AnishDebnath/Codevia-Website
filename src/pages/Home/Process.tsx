import React from 'react';

// ponytail: proper sizing, strictly contained within div boundaries, zero horizontal overflow on desktop
interface Milestone {
  week: number;
  category: 'Strategy' | 'Design' | 'Build';
  title: string;
  position: 'top' | 'bottom';
  isFinal?: boolean;
  avatar: string;
}

export const Process: React.FC = () => {
  const milestones: Milestone[] = [
    {
      week: 1,
      category: 'Strategy',
      title: 'Kickoff workshop',
      position: 'top',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces',
    },
    {
      week: 2,
      category: 'Strategy',
      title: 'Sitemap signed off',
      position: 'bottom',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
    },
    {
      week: 3,
      category: 'Design',
      title: 'Wireframes approved',
      position: 'top',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces',
    },
    {
      week: 5,
      category: 'Design',
      title: 'Visual design approved',
      position: 'bottom',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces',
    },
    {
      week: 7,
      category: 'Build',
      title: 'Build ready for review',
      position: 'top',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
    },
    {
      week: 8,
      category: 'Build',
      title: 'Launch',
      position: 'bottom',
      isFinal: true,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
    },
  ];

  const weeks = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section
      id="process"
      className="w-full bg-gradient-to-br from-[#F5F3FF] via-[#EEF2FF] to-[#FAF5FF] py-14 sm:py-18 lg:py-20 relative select-none border-y border-purple-200/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.9)] overflow-hidden"
    >
      {/* Subtle geometric dot grid pattern for depth & texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C4B5FD_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Top-Right Glowing Purple Aura */}
      <div className="absolute -top-12 -right-12 w-[650px] h-[450px] bg-gradient-to-bl from-[#8B5CF6]/20 via-[#C084FC]/15 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Bottom-Left Ambient Indigo Glow */}
      <div className="absolute -bottom-12 -left-12 w-[650px] h-[450px] bg-gradient-to-tr from-[#6366F1]/20 via-[#A855F7]/15 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Center Soft Radial Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[380px] bg-gradient-to-r from-purple-200/25 via-indigo-200/20 to-violet-200/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top Header Section: Section Tag & Heading on Left, 8 Weeks Stat on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          {/* Left Side: Tag Line, Heading, Sub-heading */}
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide font-sans">Our Process</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.14] font-sans">
              Eight weeks,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7]">
                six sign-offs
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-md font-sans">
              You approve each milestone before we move on, so nothing is a surprise on launch day.
            </p>
          </div>

          {/* Right Side: Big 8 Weeks Stat matching Statistics.tsx typography */}
          <div className="flex flex-col lg:items-end space-y-1">
            <div className="text-5xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] font-sans leading-none tabular-nums py-1">
              8 weeks
            </div>
            <p className="text-xs sm:text-sm text-gray-600 font-medium font-sans">
              Typical website, kickoff to launch
            </p>
          </div>
        </div>

        {/* Timeline Showcase Card Container: Fully contained with no overflow on desktop */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.03)] p-5 sm:p-6 lg:p-8 overflow-x-auto scrollbar-none">
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
                      className={`w-[148px] sm:w-[162px] bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-purple-300 transition-all p-3 space-y-1 text-left ${alignmentClass}`}
                    >
                      <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider block font-sans">
                        {milestone.category}
                      </span>
                      <h4 className="text-sm font-bold text-gray-950 font-sans tracking-tight leading-snug">
                        {milestone.title}
                      </h4>
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <img
                          src={milestone.avatar}
                          alt="Lead"
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
                      className={`w-[148px] sm:w-[162px] rounded-xl transition-all p-3 space-y-1 text-left border ${alignmentClass} ${
                        isFinal
                          ? 'bg-gradient-to-br from-[#6366F1] via-[#7C3AED] to-[#9333EA] text-white shadow-md shadow-purple-500/20 border-purple-400/40 ring-1 ring-purple-300/30'
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
                          isFinal ? 'text-white' : 'text-gray-950'
                        }`}
                      >
                        {milestone.title}
                      </h4>
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <img
                          src={milestone.avatar}
                          alt="Lead"
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
        </div>
      </div>
    </section>
  );
};
