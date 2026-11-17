import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTAProps {
  onNavigateContact?: () => void;
}

// ponytail: self-contained CTA matching Hero box container aesthetic with zero extraneous dependencies
export const CTA: React.FC<CTAProps> = ({ onNavigateContact }) => {
  const handleClick = () => {
    window.history.pushState({}, '', '/contact');
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section id="cta" className="pt-6 pb-4 sm:pt-10 md:pt-16 lg:pt-20 sm:pb-5 md:pb-6 lg:pb-8 w-full flex justify-center">
      {/* Contained Hero-like Box Container with background based on website color theme */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative rounded-[24px] md:rounded-[36px] lg:rounded-[44px] border border-purple-200/60 bg-gradient-to-br from-[#F0F5FF] via-[#F8F2FF] to-[#FFF5F2] shadow-[0_4px_35px_rgba(110,12,248,0.05)] py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden min-h-[320px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[600px] flex flex-col items-center justify-center text-center w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[min(92vw,1080px)]"
      >
        {/* Full-width bottom logo-spectrum ambient gradient spreading across the whole box */}
        <div className="absolute inset-x-0 bottom-0 h-[260px] md:h-[380px] lg:h-[450px] bg-gradient-to-t from-purple-200/30 via-pink-100/20 to-transparent pointer-events-none rounded-b-[24px] md:rounded-b-[36px] lg:rounded-b-[44px]" />

        {/* Right-side glowing golden-yellow/coral/magenta radiant aura from logo (all-time breathing) */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute -bottom-16 -right-16 w-[350px] md:w-[550px] lg:w-[700px] h-[280px] md:h-[400px] lg:h-[500px] bg-gradient-to-tl from-[#FFC802]/15 via-[#FD4918]/20 via-[#FF0485]/20 to-transparent blur-3xl pointer-events-none rounded-full"
        />

        {/* Left-side ambient electric blue glow from logo (all-time breathing) */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.95, 0.65] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-10 left-10 w-[300px] md:w-[450px] lg:w-[600px] h-[200px] md:h-[280px] lg:h-[350px] bg-gradient-to-tr from-[#0127F2]/20 via-[#6E0CF8]/20 to-transparent blur-3xl pointer-events-none rounded-full"
        />

        {/* Background 3D Typography: Centered "Codevia" along the bottom */}
        <div className="absolute -bottom-2 md:-bottom-8 lg:-bottom-10 left-1/2 -translate-x-1/2 pointer-events-none z-0">
          <span
            className="text-[70px] sm:text-[110px] md:text-[160px] lg:text-[210px] xl:text-[240px] font-black tracking-tight leading-none block font-sans text-center whitespace-nowrap opacity-90"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(230, 236, 255, 0.6) 50%, rgba(199, 210, 254, 0.2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.75)',
              filter:
                'drop-shadow(0 12px 35px rgba(168, 85, 247, 0.2)) drop-shadow(0 2px 2px rgba(255, 255, 255, 0.9))',
            }}
          >
            Codevia
          </span>
        </div>

        {/* Foreground Content Stack (shifted upwards on tablet/desktop to match spacious layout) */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl px-4 md:px-6 space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 sm:-translate-y-4 md:-translate-y-8 lg:-translate-y-14">
          {/* Top Title: "Let's Crafting" */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-2xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-[#000534] leading-tight md:leading-none font-sans"
          >
            Let’s Crafting
          </motion.h2>

          {/* Frosted 3D Card around "Visual Impact" with Floating Tags and Cursors */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -3, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
              scale: { duration: 0.5, delay: 0.2, ease: 'easeOut' },
              y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
            }}
            className="relative inline-block transform -rotate-[1.5deg] my-2 sm:my-3"
          >
            {/* The Frosted 3D Capsule */}
            <div className="bg-white/95 backdrop-blur-md rounded-[20px] sm:rounded-[28px] md:rounded-[36px] px-5 py-2.5 sm:px-10 sm:py-4 md:px-12 md:py-5 shadow-[0_20px_45px_rgba(0,0,0,0.07),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.03)] border border-white/80">
              <span className="text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802] block leading-none py-1 font-sans">
                Visual Impact
              </span>
            </div>

            {/* FLOATING INDICATOR 1 (Left): "Impactful" tag + Mouse pointer pointing towards "Visual Impact" */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-8 md:-left-14 lg:-left-20 -translate-x-[35%] sm:translate-x-0 z-30 pointer-events-none"
            >
              <div className="relative flex items-center gap-1 sm:gap-2 md:gap-2.5">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-3 bg-blue-500/20 blur-md rounded-full pointer-events-none" />

                {/* Glowing "Impactful" Tag */}
                <div className="relative bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] to-[#C001F6] text-white text-[9px] sm:text-xs md:text-sm font-bold px-2 py-0.5 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full shadow-[0_6px_20px_rgba(1,39,242,0.45)] border-[1.5px] border-white/80 ring-2 ring-blue-300/40 tracking-wide whitespace-nowrap">
                  Impactful
                </div>
                {/* Electric Blue Cursor pointing up-right directly at Visual Impact */}
                <svg
                  className="w-3.5 h-3.5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 fill-[#0127F2] drop-shadow-[0_3px_10px_rgba(1,39,242,0.6)] transform rotate-[80deg] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                </svg>
              </div>
            </motion.div>

            {/* FLOATING INDICATOR 2 (Right): Mouse pointer pointing towards "Visual Impact" + "Creative" tag */}
            <motion.div
              animate={{ y: [0, 6, 0], rotate: [1, -1, 1] }}
              transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut', delay: 0.2 }}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-8 md:-right-14 lg:-right-20 translate-x-[35%] sm:translate-x-0 z-30 pointer-events-none"
            >
              <div className="relative flex items-center gap-1 sm:gap-2 md:gap-2.5">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-3 bg-purple-500/20 blur-md rounded-full pointer-events-none" />

                {/* Purple Cursor pointing down-left directly at Visual Impact */}
                <svg
                  className="w-3.5 h-3.5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 fill-[#6E0CF8] drop-shadow-[0_3px_10px_rgba(110,12,248,0.55)] transform -rotate-[75deg] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                </svg>
                {/* Glowing "Creative" Tag in Logo Blue-Purple-Pink */}
                <div className="relative bg-gradient-to-r from-[#6E0CF8] via-[#C001F6] to-[#FF0485] text-white text-[9px] sm:text-xs md:text-sm font-bold px-2 py-0.5 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full shadow-[0_6px_20px_rgba(110,12,248,0.45)] border-[1.5px] border-white/80 ring-2 ring-purple-300/40 tracking-wide whitespace-nowrap">
                  Creative
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Centered Action Button: "Start a Project" */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
            className="pt-2 sm:pt-4 md:pt-6"
          >
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
              className="px-5 py-2.5 md:px-7 md:py-3.5 bg-[#1F232B] hover:bg-black text-white text-xs md:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95 group inline-flex"
            >
              <span>Start a Project</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
