import React from 'react';
// ponytail: imported directly from local assets for high-speed bundled delivery
import collaborateImg from '../../assets/images/about_collaborate.jpg';
import valuesImg from '../../assets/images/about_values.png';

// ponytail: Two alternating feature showcase sections for Company and Values with brand gradient theme
export const Story: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20">
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-100/15 via-purple-100/20 to-pink-100/15 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-purple-100/15 via-pink-100/15 to-amber-100/15 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 space-y-16 sm:space-y-24 lg:space-y-28">
        {/* Section 1: Our Story (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-5 max-w-xl">
            {/* Tag Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-200/90 bg-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 tracking-wide font-sans">
                  Our story
                </span>
              </div>
            </div>

            {/* Heading with brand gradient accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#000534] font-sans leading-[1.2]">
              Technology should{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
                adapt to you.
              </span>
            </h2>

            {/* Paragraph matching codeviaai.com */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed font-sans">
              No two businesses are the same. That’s why we don’t believe in technology that comes off a shelf. Codevia was built around a simple idea: technology works best when it is designed around the people, processes and ambitions of the business using it. We help businesses discover, build, operate and grow through digital products that make a lasting impact.
            </p>
          </div>

          {/* Image Showcase Column */}
          <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-purple-100/80 shadow-[0_14px_40px_rgba(0,0,0,0.06)] bg-gray-100 aspect-[4/3] sm:aspect-[14/10] group">
            <img
              src={collaborateImg}
              alt="Collaborative digital product UX design and architecture planning"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Subtle light vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Section 2: Our Philosophy (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Image Showcase Column (Order 2 on mobile, Order 1 on desktop) */}
          <div className="order-2 lg:order-1 relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-purple-100/80 shadow-[0_14px_40px_rgba(0,0,0,0.06)] bg-gray-100 aspect-[4/3] sm:aspect-[14/10] group">
            <img
              src={valuesImg}
              alt="Measurable business advantage analytics, digital strategy, and software metrics"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Subtle light vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Content Column (Order 1 on mobile, Order 2 on desktop) */}
          <div className="order-1 lg:order-2 space-y-5 max-w-xl">
            {/* Tag Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-200/90 bg-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 tracking-wide font-sans">
                  Our philosophy
                </span>
              </div>
            </div>

            {/* Heading with brand gradient accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#000534] font-sans leading-[1.2]">
              We build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
                business advantage.
              </span>
            </h2>

            {/* Paragraph matching codeviaai.com */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed font-sans">
              We don’t just build software — we build measurable business advantage. Across multiple industries and markets, our experiences have shaped the way we work: practical, thoughtful, scalable and deeply connected to business outcomes where creativity, engineering discipline, and commercial strategy work together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
