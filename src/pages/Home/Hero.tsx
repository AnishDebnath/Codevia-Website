import React, { useState } from 'react';
import { Star, ArrowRight, ArrowUpRight } from 'lucide-react';
// ponytail: imported directly from assets folder for bundled asset optimization
import agencyModernPortfolio from '../../assets/images/agency_modern_portfolio_1794011098022.jpg';

export const Hero: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState('Products');

  const scrollToWorks = () => {
    const el = document.querySelector('#works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-2 pb-14 md:pb-20 w-full flex justify-center select-none">
      {/* Contained Hero Box Container using vw property according to screen size */}
      <div
        className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] border border-gray-200/90 bg-[#F4F5F8] shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-8 sm:py-12 lg:py-16 overflow-hidden min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] flex flex-col justify-between"
        style={{ width: 'min(95vw, 1440px)' }}
      >
        {/* Full-width bottom purple/lavender gradient spreading across the whole hero box */}
        <div className="absolute inset-x-0 bottom-0 h-[420px] sm:h-[500px] bg-gradient-to-t from-[#C4B5FD]/50 via-[#E9D5FF]/20 to-transparent pointer-events-none rounded-b-[28px] sm:rounded-b-[36px] lg:rounded-b-[44px]" />

        {/* Right-side glowing purple radiant aura */}
        <div className="absolute -bottom-16 -right-16 w-[750px] h-[550px] bg-gradient-to-tl from-[#A855F7]/40 via-[#C084FC]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

        {/* Left-side ambient glow */}
        <div className="absolute -bottom-10 left-10 w-[600px] h-[380px] bg-gradient-to-tr from-[#E0E7FF]/40 via-[#EDE9FE]/25 to-transparent blur-3xl pointer-events-none rounded-full" />

        {/* =========================================================================
            BACKGROUND TYPOGRAPHY: "Codevia" at bottom-left inside the rounded box
           ========================================================================= */}
        <div className="absolute bottom-[-15px] sm:bottom-[-25px] lg:bottom-[-35px] left-4 sm:left-10 lg:left-14 select-none pointer-events-none z-0">
          <span
            className="text-[140px] sm:text-[200px] md:text-[250px] lg:text-[300px] font-black tracking-tight leading-none block select-none font-sans"
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

        {/* =========================================================================
            CENTERED FOREGROUND CONTENT LAYER:
            Exact same width & padding as Navbar (max-w-6xl mx-auto px-6)
           ========================================================================= */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading, Tilted Bounding Box, and Action CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-bold tracking-tight text-gray-950 leading-none whitespace-nowrap">
                Building Better
              </h1>

              {/* Tilted Bounding Box around "Products" */}
              <div className="relative inline-block transform -rotate-[2deg] origin-top-left">
                {/* Outer Blue Selection Wireframe Box */}
                <div className="relative p-2 border-[1.5px] border-[#3B82F6] rounded-sm">
                  {/* 4 Corner Blue Square Handles */}
                  <div className="w-2.5 h-2.5 bg-[#3B82F6] border border-white absolute -top-1.5 -left-1.5 shadow-xs" />
                  <div className="w-2.5 h-2.5 bg-[#3B82F6] border border-white absolute -top-1.5 -right-1.5 shadow-xs" />
                  <div className="w-2.5 h-2.5 bg-[#3B82F6] border border-white absolute -bottom-1.5 -left-1.5 shadow-xs" />
                  <div className="w-2.5 h-2.5 bg-[#3B82F6] border border-white absolute -bottom-1.5 -right-1.5 shadow-xs" />

                  {/* Inner 3D Clay / Frosted Card */}
                  <div className="bg-white/95 backdrop-blur-md rounded-[28px] px-8 py-3.5 sm:px-12 sm:py-5 shadow-[0_16px_36px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.03)] border border-white/80">
                    <span className="text-6xl sm:text-7xl lg:text-[86px] xl:text-[92px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] block leading-none py-1">
                      {selectedWord}
                    </span>
                  </div>

                  {/* FLOATING CREATIVE TAG & MOUSE ARROW */}
                  <div className="absolute -bottom-1 -right-1 z-30 pointer-events-none animate-float">
                    <div className="relative">
                      {/* Purple Cursor Arrow tip pointing directly at the bottom-right blue handle */}
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 fill-[#8B5CF6] drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)] transform -translate-x-1 -translate-y-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                      </svg>

                      {/* Glowing "Creative" Pill Tag anchored beside the cursor */}
                      <div className="absolute top-3 left-4 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white text-xs font-semibold px-3.5 py-1 rounded-full shadow-[0_4px_16px_rgba(139,92,246,0.5)] border border-white/70 ring-2 ring-purple-300/40 tracking-wide select-none whitespace-nowrap">
                        Creative
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtitle Value Proposition */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg pt-1 font-normal">
                We transform ambitious ideas into beautiful, scalable and high-performing digital products that help businesses grow.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={scrollToWorks}
                  className="px-7 py-3.5 bg-[#1F232B] hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group active:scale-95"
                >
                  <span>Start a Project</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>

                <button
                  onClick={scrollToWorks}
                  className="px-7 py-3.5 bg-white hover:bg-gray-50 border border-gray-200/90 text-gray-800 text-xs sm:text-sm font-semibold rounded-full shadow-2xs hover:shadow-sm transition-all flex items-center gap-2 cursor-pointer group active:scale-95"
                >
                  <span>Explore Selected Work</span>
                  <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-200 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Clean Reviews with Maintained Generous Space Above Media Card */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between space-y-12 sm:space-y-16 lg:space-y-20">
              {/* Clean Reviews Stack & Statement */}
              <div className="max-w-xs text-left">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                      alt="Reviewer avatar"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                      alt="Reviewer avatar"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
                      alt="Reviewer avatar"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-0.5 text-gray-950">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-gray-950 text-gray-950" />
                      ))}
                    </div>
                    <p className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mt-0.5 font-sans">
                      BASED ON 230 REVIEWS
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
                  We craft bold, strategy-driven designs that help businesses stand out and connect with their audiences.
                </p>
              </div>

              {/* Simple and Modern Website Development Agency Image */}
              <div className="w-full sm:w-[420px] aspect-[16/10] rounded-3xl border border-gray-200/90 overflow-hidden shadow-xl bg-white relative group z-20">
                <img
                  src={agencyModernPortfolio}
                  alt="Modern minimalist website development agency portfolio"
                  className="w-full h-full object-cover rounded-3xl transform group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
