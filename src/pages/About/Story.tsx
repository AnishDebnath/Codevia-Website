import React from 'react';
// ponytail: cropped directly from design showcase and bundled as local assets
import collaborateImg from '../../assets/images/about_collaborate.jpg';
import valuesImg from '../../assets/images/about_values.jpg';

// ponytail: Two alternating feature showcase sections for Company and Values with brand gradient theme
export const Story: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 select-none">
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-100/15 via-purple-100/20 to-pink-100/15 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-purple-100/15 via-pink-100/15 to-amber-100/15 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 space-y-16 sm:space-y-24 lg:space-y-28">
        {/* Section 1: Our Company (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-5 max-w-xl">
            {/* Tag Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-200/90 bg-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 tracking-wide font-sans">
                  Our company
                </span>
              </div>
            </div>

            {/* Heading with brand gradient accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-gray-950 font-sans leading-[1.2]">
              We love to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
                collaborate
              </span>
            </h2>

            {/* Paragraph matching design text */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed font-sans">
              We believe great websites come from a mix of thoughtful design, smart strategy, and reliable development. That's why we work closely with you to understand your goals, your audience, and what makes your brand unique. Whether you're just starting out or refreshing an existing site, we help turn ideas into digital experiences that feel effortless and intuitive.
            </p>
          </div>

          {/* Image Showcase Column */}
          <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-purple-100/80 shadow-[0_14px_40px_rgba(0,0,0,0.06)] bg-gray-100 aspect-[4/3] sm:aspect-[14/10] group">
            <img
              src={collaborateImg}
              alt="Team collaborating around conference table"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Subtle light vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Section 2: Our Values (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Image Showcase Column (Order 2 on mobile, Order 1 on desktop) */}
          <div className="order-2 lg:order-1 relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-purple-100/80 shadow-[0_14px_40px_rgba(0,0,0,0.06)] bg-gray-100 aspect-[4/3] sm:aspect-[14/10] group">
            <img
              src={valuesImg}
              alt="Creative designer working with focus on laptop"
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
                  Our values
                </span>
              </div>
            </div>

            {/* Heading with brand gradient accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-gray-950 font-sans leading-[1.2]">
              Simplicity &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
                Clarity
              </span>
            </h2>

            {/* Paragraph matching design text */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed font-sans">
              We value simplicity, clarity, and doing things the right way. That means putting users first, communicating honestly, and caring about the details — from pixel to performance. We're here to make the web a better, more usable place, one project at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
