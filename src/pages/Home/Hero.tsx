import React, { useState } from 'react';
import { Star, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
// ponytail: imported directly from local assets for high-speed bundled delivery
import agencyModernPortfolio from '../../assets/images/agency_modern_portfolio.jpg';

interface HeroProps {
  onNavigateContact?: () => void;
  onNavigateProjects?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateContact, onNavigateProjects }) => {
  const [selectedWord, setSelectedWord] = useState('Products');

  const handleStartProject = () => {
    window.history.pushState({}, '', '/contact');
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleExploreWork = () => {
    const el = document.querySelector('#works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigateProjects) {
      onNavigateProjects();
    } else {
      window.history.pushState({}, '', '/projects');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section className="pt-2 sm:pt-4 pb-8 sm:pb-12 lg:pb-14 w-full flex justify-center">
      {/* Contained Hero Box Container with background based on website color theme */}
      <div
        className="relative rounded-[24px] md:rounded-[36px] lg:rounded-[44px] border border-purple-200/60 bg-gradient-to-br from-[#F0F5FF] via-[#F8F2FF] to-[#FFF5F2] shadow-[0_4px_35px_rgba(110,12,248,0.05)] py-8 md:py-10 lg:py-12 xl:py-16 overflow-hidden min-h-[500px] md:min-h-[520px] lg:min-h-[620px] xl:min-h-[700px] flex flex-col justify-between w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[min(95vw,1440px)]"
      >
        {/* Full-width bottom logo-spectrum ambient gradient spreading across the whole hero box */}
        <div className="absolute inset-x-0 bottom-0 h-[280px] md:h-[420px] lg:h-[500px] bg-gradient-to-t from-purple-200/30 via-pink-100/20 to-transparent pointer-events-none rounded-b-[24px] md:rounded-b-[36px] lg:rounded-b-[44px]" />

        {/* Right-side glowing golden-yellow/coral/magenta radiant aura from logo (all-time ambient breathing) */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute -bottom-16 -right-16 w-[350px] md:w-[550px] lg:w-[750px] h-[300px] md:h-[450px] lg:h-[550px] bg-gradient-to-tl from-[#FFC802]/15 via-[#FD4918]/20 via-[#FF0485]/20 to-transparent blur-3xl pointer-events-none rounded-full"
        />

        {/* Left-side electric blue ambient glow from logo (all-time ambient breathing) */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.65, 0.95, 0.65] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-10 left-10 w-[300px] md:w-[450px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[380px] bg-gradient-to-tr from-[#0127F2]/20 via-[#6E0CF8]/20 to-transparent blur-3xl pointer-events-none rounded-full"
        />

        {/* =========================================================================
            BACKGROUND TYPOGRAPHY: "Codevia" positioned at the bottom-left inside the box
            Hidden on mobile (< 640px), displayed on tablet and desktop (sm: and above)
           ========================================================================= */}
        <div className="hidden sm:block absolute bottom-[-16px] md:bottom-[-20px] lg:bottom-[-30px] left-6 sm:left-8 lg:left-14 select-none pointer-events-none z-0">
          <span
            className="text-[120px] md:text-[140px] lg:text-[220px] xl:text-[290px] font-black tracking-tight leading-none block select-none font-sans whitespace-nowrap"
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
           ========================================================================= */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-10 xl:gap-14 items-start">
            {/* Left Column: Heading, Tilted Bounding Box, and Action CTAs */}
            <div className="md:col-span-7 flex flex-col items-start space-y-4 md:space-y-4 lg:space-y-6 xl:space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="text-3xl sm:text-5xl md:text-[44px] lg:text-6xl xl:text-[84px] font-bold tracking-tight text-[#000534] leading-tight md:leading-none sm:whitespace-nowrap"
              >
                Building Better
              </motion.h1>

              {/* Tilted Bounding Box around "Products" styled with logo gradient */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
                className="relative inline-block transform -rotate-[2deg] origin-top-left"
              >
                {/* Outer Electric Blue Selection Wireframe Box */}
                <div className="relative p-1.5 md:p-2 border-[1.5px] border-[#0127F2] rounded-sm">
                  {/* 4 Corner Square Handles */}
                  <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#0127F2] border border-white absolute -top-1 md:-top-1.5 -left-1 md:-left-1.5 shadow-xs" />
                  <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#0127F2] border border-white absolute -top-1 md:-top-1.5 -right-1 md:-right-1.5 shadow-xs" />
                  <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#0127F2] border border-white absolute -bottom-1 md:-bottom-1.5 -left-1 md:-left-1.5 shadow-xs" />
                  <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#0127F2] border border-white absolute -bottom-1 md:-bottom-1.5 -right-1 md:-right-1.5 shadow-xs" />

                  {/* Inner 3D Clay / Frosted Card */}
                  <div className="bg-white/95 backdrop-blur-md rounded-[20px] md:rounded-[24px] lg:rounded-[28px] px-5 py-2.5 sm:px-8 sm:py-3.5 md:px-8 md:py-3 lg:px-11 lg:py-4 xl:py-5 shadow-[0_16px_36px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.03)] border border-white/80">
                    <span className="text-4xl sm:text-6xl md:text-[48px] lg:text-7xl xl:text-[92px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802] block leading-none py-1">
                      {selectedWord}
                    </span>
                  </div>

                  {/* FLOATING CREATIVE TAG & MOUSE ARROW (All-time floating animation) */}
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [0, 1.5, 0] }}
                    transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                    className="absolute -bottom-1 -right-1 z-30 pointer-events-none"
                  >
                    <div className="relative">
                      {/* Brand Purple Cursor Arrow pointing directly at bottom-right handle */}
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-[#6E0CF8] drop-shadow-[0_2px_8px_rgba(110,12,248,0.55)] transform -translate-x-1 -translate-y-1"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                      </svg>

                      {/* Glowing "Creative" Pill Tag anchored beside the cursor */}
                      <div className="absolute top-2.5 left-3 md:top-3 md:left-4 bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] to-[#FF0485] text-white text-[10px] md:text-xs font-semibold px-2.5 py-0.5 md:px-3.5 md:py-1 rounded-full shadow-[0_4px_16px_rgba(110,12,248,0.45)] border border-white/70 ring-2 ring-purple-300/40 tracking-wide whitespace-nowrap">
                        Creative
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Subtitle Value Proposition */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
                className="text-sm md:text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed max-w-md lg:max-w-prose pt-1 font-normal"
              >
                We transform ambitious ideas into beautiful, scalable and high-performing digital products that help businesses grow.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1"
              >
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleStartProject();
                  }}
                  className="px-5 py-2.5 md:px-5 md:py-2.5 lg:px-7 lg:py-3.5 bg-[#1F232B] hover:bg-black text-white text-xs md:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group active:scale-95"
                >
                  <span>Start a Project</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>

                <a
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleExploreWork();
                  }}
                  className="px-5 py-2.5 md:px-5 md:py-2.5 lg:px-7 lg:py-3.5 bg-white hover:bg-gray-50 border border-gray-200/90 text-gray-800 text-xs md:text-sm font-semibold rounded-full shadow-2xs hover:shadow-sm transition-all flex items-center gap-2 cursor-pointer group active:scale-95"
                >
                  <span>Explore Selected Work</span>
                  <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-200 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Clean Reviews with Maintained Generous Space Above Media Card */}
            <div className="md:col-span-5 flex flex-col items-start md:items-end justify-between space-y-4 md:space-y-4 lg:space-y-8 xl:space-y-12 w-full">
              {/* Clean Reviews Stack & Statement */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
                className="max-w-xs text-left md:text-right"
              >
                <div className="flex items-center md:justify-end gap-3 mb-2 md:mb-2.5">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&q=80"
                      alt="Verified client review"
                      loading="lazy"
                      decoding="async"
                      className="w-7 h-7 md:w-7 md:h-7 rounded-full border-2 border-white object-cover shadow-xs"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&q=80"
                      alt="Verified client review"
                      loading="lazy"
                      decoding="async"
                      className="w-7 h-7 md:w-7 md:h-7 rounded-full border-2 border-white object-cover shadow-xs"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces&q=80"
                      alt="Verified client review"
                      loading="lazy"
                      decoding="async"
                      className="w-7 h-7 md:w-7 md:h-7 rounded-full border-2 border-white object-cover shadow-xs"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-0.5 text-[#000534]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-gray-950 text-[#000534]" />
                      ))}
                    </div>
                    <p className="text-[9px] md:text-[10px] font-bold tracking-wider text-gray-500 uppercase mt-0.5 font-sans">
                      BASED ON REVIEWS
                    </p>
                  </div>
                </div>

                <p className="text-xs md:text-xs lg:text-[13px] text-gray-600 leading-relaxed font-normal">
                  We craft bold, strategy-driven designs that help businesses stand out and connect with their audiences.
                </p>
              </motion.div>

              {/* Responsive Modern Digital Product & Engineering Showcase Image */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.4, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="w-full max-w-[320px] sm:max-w-[340px] md:w-[260px] md:max-w-[260px] lg:w-[330px] lg:max-w-[330px] xl:w-[380px] xl:max-w-[380px] aspect-[16/10] rounded-2xl md:rounded-3xl border border-gray-200/90 overflow-hidden shadow-xl bg-white relative group z-20"
              >
                <img
                  src={agencyModernPortfolio}
                  alt="Modern digital product engineering and enterprise analytics platform"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl transform group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-black/5 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
