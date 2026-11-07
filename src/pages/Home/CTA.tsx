import React from 'react';
import { ArrowRight } from 'lucide-react';

// ponytail: self-contained CTA matching Hero box container aesthetic with zero extraneous dependencies
export const CTA: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-20 w-full flex justify-center select-none">
      {/* Contained Hero-like Box Container with reduced width */}
      <div
        className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] border border-gray-200/90 bg-[#F4F5F8] shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-14 sm:py-20 lg:py-24 overflow-hidden min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] flex flex-col items-center justify-center text-center"
        style={{ width: 'min(92vw, 1080px)' }}
      >
        {/* Full-width bottom purple/lavender gradient spreading across the whole box */}
        <div className="absolute inset-x-0 bottom-0 h-[380px] sm:h-[450px] bg-gradient-to-t from-[#C4B5FD]/50 via-[#E9D5FF]/20 to-transparent pointer-events-none rounded-b-[28px] sm:rounded-b-[36px] lg:rounded-b-[44px]" />

        {/* Right-side glowing purple radiant aura */}
        <div className="absolute -bottom-16 -right-16 w-[700px] h-[500px] bg-gradient-to-tl from-[#A855F7]/40 via-[#C084FC]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

        {/* Left-side ambient glow */}
        <div className="absolute -bottom-10 left-10 w-[600px] h-[350px] bg-gradient-to-tr from-[#E0E7FF]/40 via-[#EDE9FE]/25 to-transparent blur-3xl pointer-events-none rounded-full" />

        {/* Background 3D Typography: Centered "Codevia" along the bottom */}
        <div className="absolute -bottom-4 sm:-bottom-8 lg:-bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
          <span
            className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[240px] font-black tracking-tight leading-none block select-none font-sans text-center whitespace-nowrap opacity-90"
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

        {/* Foreground Content Stack shifted upwards to match layout */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl px-6 space-y-6 sm:space-y-8 -translate-y-6 sm:-translate-y-10 lg:-translate-y-14">
          {/* Top Title: "Let's Crafting" */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-gray-950 leading-none font-sans">
            Let’s Crafting
          </h2>

          {/* Frosted 3D Card around "Visual Impact" with Larger Floating Tags and Cursors indicating the div */}
          <div className="relative inline-block transform -rotate-[1.5deg] my-2">
            {/* The Frosted 3D Capsule */}
            <div className="bg-white/95 backdrop-blur-md rounded-[28px] sm:rounded-[36px] px-7 py-3.5 sm:px-12 sm:py-5 shadow-[0_20px_45px_rgba(0,0,0,0.07),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.03)] border border-white/80">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] block leading-none py-1 font-sans">
                Visual Impact
              </span>
            </div>

            {/* FLOATING INDICATOR 1 (Left): Larger "Impactful" tag + Mouse pointer pointing towards "Visual Impact" */}
            <div className="absolute -bottom-4 sm:-bottom-5 -left-10 sm:-left-16 md:-left-20 z-30 pointer-events-none animate-float-left">
              <div className="relative flex items-center gap-2 sm:gap-2.5">
                {/* 3D soft levitation ambient shadow underneath */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-purple-500/20 blur-md rounded-full pointer-events-none" />

                {/* Glowing "Impactful" Tag */}
                <div className="relative bg-gradient-to-r from-[#8B5CF6] via-[#9333EA] to-[#A855F7] text-white text-xs sm:text-sm md:text-[15px] font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-[0_6px_20px_rgba(139,92,246,0.5)] border-[1.5px] border-white/80 ring-2 ring-purple-300/40 tracking-wide select-none whitespace-nowrap">
                  Impactful
                </div>
                {/* Larger Purple Cursor pointing up-right directly at Visual Impact */}
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-[#8B5CF6] drop-shadow-[0_3px_10px_rgba(139,92,246,0.65)] transform rotate-[80deg] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                </svg>
              </div>
            </div>

            {/* FLOATING INDICATOR 2 (Right): Mouse pointer pointing towards "Visual Impact" + Larger "Creative" tag */}
            <div className="absolute -top-4 sm:-top-5 -right-10 sm:-right-16 md:-right-20 z-30 pointer-events-none animate-float-right">
              <div className="relative flex items-center gap-2 sm:gap-2.5">
                {/* 3D soft levitation ambient shadow underneath */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-purple-500/20 blur-md rounded-full pointer-events-none" />

                {/* Larger Purple Cursor pointing down-left directly at Visual Impact */}
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-[#8B5CF6] drop-shadow-[0_3px_10px_rgba(139,92,246,0.65)] transform -rotate-[75deg] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                </svg>
                {/* Glowing "Creative" Tag */}
                <div className="relative bg-gradient-to-r from-[#8B5CF6] via-[#9333EA] to-[#A855F7] text-white text-xs sm:text-sm md:text-[15px] font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-[0_6px_20px_rgba(139,92,246,0.5)] border-[1.5px] border-white/80 ring-2 ring-purple-300/40 tracking-wide select-none whitespace-nowrap">
                  Creative
                </div>
              </div>
            </div>
          </div>

          {/* Centered Action Button: "Start a Project" matching Hero button style */}
          <div className="pt-4 sm:pt-6">
            <button
              onClick={scrollToContact}
              className="px-7 sm:px-8 py-3.5 bg-[#1F232B] hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95 group"
            >
              <span>Start a Project</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
