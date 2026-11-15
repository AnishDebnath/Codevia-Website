import React from 'react';

// ponytail: Hero section for Projects page with styling matching Home section headers
interface HeroProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const categories = [
  'All Work',
  'Branding',
  'Digital Experience',
  'E-commerce',
  'Product Design',
  'Campaigns',
];

export const Hero: React.FC<HeroProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="pt-6 sm:pt-10 lg:pt-12 pb-2 sm:pb-4 w-full relative select-none">
      {/* Background ambient lighting matching website color theme */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-100/25 via-purple-100/30 to-pink-100/20 blur-[140px] pointer-events-none rounded-full -z-10" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[300px] bg-gradient-to-l from-amber-100/20 via-pink-100/20 to-transparent blur-[130px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          {/* Section Tag Badge matching Home page headers */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide font-sans">
                Featured Projects
              </span>
            </div>
          </div>

          {/* Section Heading matching Home page font style */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.14] font-sans">
            Good work gets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
              remembered.
            </span>
          </h1>

          {/* Sub-heading supporting text matching Home section typography */}
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl font-sans pt-0.5">
            From emerging businesses to established organisations, we've worked alongside teams building what matters. Explore our recent digital products, web platforms, and mobile apps.
          </p>

          {/* Filter Pills */}
          <div className="pt-2 sm:pt-4">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer active:scale-95 ${
                      isActive
                        ? 'bg-[#1F232B] hover:bg-black text-white shadow-md'
                        : 'bg-white hover:bg-gray-50 border border-gray-200/90 text-gray-700 hover:text-black shadow-2xs hover:shadow-xs'
                    }`}
                  >
                    <span>{category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
