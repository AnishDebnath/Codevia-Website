import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onNavigateContact?: () => void;
}

// ponytail: self-contained CTA matching Hero box container aesthetic with zero extraneous dependencies
export const CTA: React.FC<CTAProps> = ({ onNavigateContact }) => {
  const handleClick = () => {
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      const el = document.querySelector('#contact') || document.querySelector('#works');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.history.pushState({}, '', '/contact');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  };

  return (
    <section id="cta" className="pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 lg:pb-8 w-full flex justify-center select-none">
      {/* Contained Hero-like Box Container with background based on website color theme */}
      <div
        className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] border border-purple-200/60 bg-gradient-to-br from-[#F0F5FF] via-[#F8F2FF] to-[#FFF5F2] shadow-[0_4px_35px_rgba(110,12,248,0.05)] py-14 sm:py-20 lg:py-24 overflow-hidden min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] flex flex-col items-center justify-center text-center"
        style={{ width: 'min(92vw, 1080px)' }}
      >
        {/* Full-width bottom logo-spectrum ambient gradient spreading across the whole box */}
        <div className="absolute inset-x-0 bottom-0 h-[380px] sm:h-[450px] bg-gradient-to-t from-purple-200/30 via-pink-100/20 to-transparent pointer-events-none rounded-b-[28px] sm:rounded-b-[36px] lg:rounded-b-[44px]" />

        {/* Right-side glowing golden-yellow/coral/magenta radiant aura from logo */}
        <div className="absolute -bottom-16 -right-16 w-[700px] h-[500px] bg-gradient-to-tl from-[#FFC802]/15 via-[#FD4918]/20 via-[#FF0485]/20 to-transparent blur-3xl pointer-events-none rounded-full" />

        {/* Left-side ambient electric blue glow from logo */}
        <div className="absolute -bottom-10 left-10 w-[600px] h-[350px] bg-gradient-to-tr from-[#0127F2]/20 via-[#6E0CF8]/20 to-transparent blur-3xl pointer-events-none rounded-full" />

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
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802] block leading-none py-1 font-sans">
                Visual Impact
              </span>
            </div>

            {/* FLOATING INDICATOR 1 (Left): Larger "Impactful" tag + Mouse pointer pointing towards "Visual Impact" */}
            <div className="absolute -bottom-4 sm:-bottom-5 -left-10 sm:-left-16 md:-left-20 z-30 pointer-events-none animate-float-left">
              <div className="relative flex items-center gap-2 sm:gap-2.5">
                {/* 3D soft levitation ambient shadow underneath */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-blue-500/20 blur-md rounded-full pointer-events-none" />

                {/* Glowing "Impactful" Tag */}
                <div className="relative bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] to-[#C001F6] text-white text-xs sm:text-sm md:text-[15px] font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-[0_6px_20px_rgba(1,39,242,0.45)] border-[1.5px] border-white/80 ring-2 ring-blue-300/40 tracking-wide select-none whitespace-nowrap">
                  Impactful
                </div>
                {/* Larger Electric Blue Cursor pointing up-right directly at Visual Impact */}
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-[#0127F2] drop-shadow-[0_3px_10px_rgba(1,39,242,0.6)] transform rotate-[80deg] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                </svg>
              </div>
            </div>

            {/* FLOATING INDICATOR 2 (Right): Mouse pointer pointing towards "Visual Impact" + Larger "Creative" tag (No yellow) */}
            <div className="absolute -top-4 sm:-top-5 -right-10 sm:-right-16 md:-right-20 z-30 pointer-events-none animate-float-right">
              <div className="relative flex items-center gap-2 sm:gap-2.5">
                {/* 3D soft levitation ambient shadow underneath */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-purple-500/20 blur-md rounded-full pointer-events-none" />

                {/* Brand Purple Cursor pointing down-left directly at Visual Impact */}
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-[#6E0CF8] drop-shadow-[0_3px_10px_rgba(110,12,248,0.55)] transform -rotate-[75deg] shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                </svg>
                {/* Glowing "Creative" Tag in Logo Blue-Purple-Pink (No yellow) */}
                <div className="relative bg-gradient-to-r from-[#6E0CF8] via-[#C001F6] to-[#FF0485] text-white text-xs sm:text-sm md:text-[15px] font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-[0_6px_20px_rgba(110,12,248,0.45)] border-[1.5px] border-white/80 ring-2 ring-purple-300/40 tracking-wide select-none whitespace-nowrap">
                  Creative
                </div>
              </div>
            </div>
          </div>

          {/* Centered Action Button: "Start a Project" matching Hero button style */}
          <div className="pt-4 sm:pt-6">
            <button
              onClick={handleClick}
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
