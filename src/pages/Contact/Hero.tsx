import React from 'react';

// ponytail: Contact page Hero section with typography, badge, and gradient accent matching all site section headers
export const Hero: React.FC = () => {
  return (
    <section className="pt-6 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 w-full relative">
      {/* Background ambient lighting matching website color theme */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-100/25 via-purple-100/30 to-pink-100/20 blur-[140px] pointer-events-none rounded-full -z-10" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[300px] bg-gradient-to-l from-amber-100/20 via-pink-100/20 to-transparent blur-[130px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          {/* Section Tag Badge matching Home page section tags */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide font-sans">
                Get in Touch
              </span>
            </div>
          </div>

          {/* Section Heading matching Home and Projects font style (Plus Jakarta Sans, bold, tracking-tight, no serif/italic) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#000534] leading-[1.14] font-sans">
            Have an idea?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
              Let's talk.
            </span>
          </h1>

          {/* Sub-heading supporting text matching Home section typography */}
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl font-sans pt-0.5">
            Tell us what you're building, what you're trying to achieve, or simply what you're imagining.
          </p>
        </div>
      </div>
    </section>
  );
};
