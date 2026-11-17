import React, { useRef, useState } from 'react';
import { projectCategories, codeviaProjects } from '../../data/projects';

interface HeroProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    isDown.current = false;
    setTimeout(() => {
      hasDragged.current = false;
      setIsDragging(false);
    }, 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    if (Math.abs(x - startX.current) > 5) {
      hasDragged.current = true;
      setIsDragging(true);
    }
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  // Compute count of cards for each category
  const getCategoryCount = (category: string) => {
    if (category === 'All Projects') {
      return codeviaProjects.length;
    }
    return codeviaProjects.filter(
      (p) => p.category === category || (p.subcategories && p.subcategories.includes(category))
    ).length;
  };

  return (
    <section className="pt-6 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 w-full relative">
      {/* Background ambient lighting matching website color theme */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-100/25 via-purple-100/30 to-pink-100/20 blur-[140px] pointer-events-none rounded-full -z-10" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[300px] bg-gradient-to-l from-amber-100/20 via-pink-100/20 to-transparent blur-[130px] pointer-events-none rounded-full -z-10" />

      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          {/* Section Tag Badge matching other sections */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]" />
              <span className="text-xs md:text-sm font-semibold text-gray-800 tracking-wide font-sans">
                Featured Projects
              </span>
            </div>
          </div>

          {/* Section Heading matching website info */}
          <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-5xl font-bold tracking-tight text-[#000534] leading-[1.14] font-sans">
            Built across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
              technologies &amp; industries.
            </span>
          </h1>

          {/* Sub-heading supporting text taken from PDF overview */}
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl font-sans pt-0.5">
            Explore 11 production and prototype systems engineered by Codevia — spanning high-volume web platforms, real-time collaboration engines, LLM knowledge assistants, time-series forecasting, and computer vision automation.
          </p>

          {/* Filter Pills: Single scrollable line on mobile with drag support, wrapping on tablet/desktop */}
          <div className="pt-2 sm:pt-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className={`flex items-center gap-2 sm:gap-3 overflow-x-auto sm:flex-wrap scrollbar-none py-1.5 touch-pan-x ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab sm:cursor-default'
              }`}
            >
              {projectCategories.map((category) => {
                const isActive = selectedCategory === category;
                const count = getCategoryCount(category);

                return (
                  <button
                    key={category}
                    onClick={() => {
                      if (!hasDragged.current) {
                        onSelectCategory(category);
                      }
                    }}
                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 ${isActive
                      ? 'bg-[#1F232B] hover:bg-black text-white shadow-md'
                      : 'bg-white hover:bg-gray-50 border border-gray-200/90 text-gray-700 hover:text-black shadow-2xs hover:shadow-xs'
                      }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold transition-colors ${isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                        }`}
                    >
                      {count}
                    </span>
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
