import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
// ponytail: imported directly from assets folder for bundled asset optimization
import aboutWorkspace from '../../assets/images/about_workspace.jpg';

export const Hero: React.FC = () => {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces',
  ];

  return (
    <section className="pt-6 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 w-full relative select-none">
      {/* Background ambient lighting matching website color theme */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-r from-blue-100/20 via-purple-100/25 to-pink-100/20 blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header Stack */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5 mb-10 sm:mb-12">
          {/* Section Tag Badge matching Home page headers */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide font-sans">
                About Us
              </span>
            </div>
          </div>

          {/* Heading with website brand gradient accent */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950 font-sans leading-[1.12]">
            Building digital{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
              experiences
            </span>{' '}
            that move business.
          </h1>

          {/* Supporting paragraph matching reference text */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto font-sans">
            We partner with ambitious businesses to turn complex ideas into simple, scalable and meaningful digital products.
          </p>

          {/* Social Proof Row: Larger Avatars on Left, Stars on Top with Reviews Link Below */}
          <div className="pt-3 sm:pt-4 flex items-center justify-center gap-4 sm:gap-5">
            {/* Enlarged Overlapping Avatars */}
            <div className="flex items-center">
              {avatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`Team member / client ${i + 1}`}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover shadow-sm -ml-3 first:ml-0 ring-1 ring-black/5"
                />
              ))}
            </div>

            {/* Column: Increased Stars on Top, Reviews Link Below */}
            <div className="flex flex-col items-start gap-1">
              {/* Increased Rating Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-[18px] sm:h-[18px] fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              {/* Reviews Link placed below the rating stars */}
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('testimonials');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs sm:text-sm font-semibold text-gray-800 hover:text-purple-600 transition-colors inline-flex items-center gap-1.5 group cursor-pointer font-sans"
              >
                <span>See all reviews!</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Large Workspace Showcase Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-purple-100/80 shadow-[0_16px_45px_rgba(0,0,0,0.06)] bg-gray-100 group">
          <img
            src={aboutWorkspace}
            alt="Codevia creative workspace desk"
            className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};
