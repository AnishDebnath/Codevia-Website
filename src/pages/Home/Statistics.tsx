import React from 'react';

export const Statistics: React.FC = () => {
  const stats = [
    {
      value: '40+',
      label: 'Projects shaped',
    },
    {
      value: '12',
      label: 'Industries explored',
    },
    {
      value: '9',
      label: 'Countries collaborated across',
    },
    {
      value: '4.9/5',
      label: 'Average client satisfaction rating',
    },
  ];

  return (
    <section id="stats" className="relative w-full py-6 sm:py-8 lg:py-10 select-none">
      {/* Subtle ambient glow in background matching the hero section lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[220px] bg-gradient-to-r from-purple-200/25 via-indigo-200/20 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Content Container aligned with Hero and Navbar */}
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Editorial Statement styled with Hero typography and signature gradient */}
        <div className="mb-8 sm:mb-10 max-w-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-gray-950 leading-[1.2] font-sans">
            A trusted creative partner for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7]">
              teams building what comes next.
            </span>
          </h2>
        </div>

        {/* 4-Column Statistics Row with Hairline Dividers & Hero Color Gradients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group border-t border-gray-200/90 hover:border-purple-300/80 pt-4 sm:pt-5 transition-colors duration-300"
            >
              {/* Stat Value matching Hero font design & purple-indigo gradient */}
              <div className="text-5xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] tabular-nums font-sans leading-none py-1">
                {stat.value}
              </div>

              {/* Stat Label matching Hero body typography */}
              <p className="mt-3 text-xs sm:text-sm text-gray-600 font-medium font-sans leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
