import React from 'react';
import { motion } from 'framer-motion';

// ponytail: reusable stats section displaying key agency milestones with brand gradient styling
export const Statistics: React.FC = () => {
  const stats = [
    {
      value: '12+',
      label: 'Projects shaped',
    },
    {
      value: '6',
      label: 'Industries explored',
    },
    {
      value: '4',
      label: 'Countries collaborated across',
    },
    {
      value: '4.9/5',
      label: 'Average client satisfaction rating',
    },
  ];

  return (
    <section id="stats" className="relative w-full py-8 md:py-12 lg:py-14">
      {/* Subtle ambient glow in background with all-time breathing motion */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[300px] md:w-[600px] h-[160px] md:h-[220px] bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20 blur-3xl pointer-events-none -z-10"
      />

      {/* Content Container aligned with standard responsive edge padding */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        {/* Editorial Statement styled with Hero typography and logo signature gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-6 md:mb-8 lg:mb-10 max-w-2xl"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold tracking-tight text-[#000534] leading-[1.2] font-sans">
            A trusted creative partner for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
              teams building what comes next.
            </span>
          </h2>
        </motion.div>

        {/* Statistics Grid: 2x2 format on mobile/tablet, 4 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="group border-t border-gray-200/90 hover:border-purple-300/80 pt-3 md:pt-4 lg:pt-5 transition-colors duration-300"
            >
              {/* Stat Value matching Hero font design & logo signature gradient */}
              <div className="text-3xl min-[380px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802] tabular-nums font-sans leading-none py-1">
                {stat.value}
              </div>

              {/* Stat Label matching Hero body typography */}
              <p className="mt-2 md:mt-3 text-xs md:text-sm text-gray-600 font-medium font-sans leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
