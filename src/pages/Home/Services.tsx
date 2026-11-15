import React, { useState, useRef, useEffect } from 'react';
import { Code2, Smartphone, PenTool, Sparkles, Lightbulb, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigateContact?: () => void;
}

// ponytail: exactly 3 cards fit cleanly within section width on desktop, with generous margin/padding so card shadows are never clipped or hidden
export const Services: React.FC<ServicesProps> = ({ onNavigateContact }) => {
  // Start with index 1 (Mobile App Development) highlighted, matching the showcase
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStartProject = () => {
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      window.history.pushState({}, '', '/contact');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  // 5 Core Services directly from codeviaai.com
  const services = [
    {
      number: '01.',
      title: 'Website Design &\nDevelopment',
      descLine1: 'Fast. Responsive.',
      descLine2: 'Scalable.',
      icon: Code2,
    },
    {
      number: '02.',
      title: 'Mobile App\nDevelopment',
      descLine1: 'Intuitive. Native.',
      descLine2: 'iOS & Android.',
      icon: Smartphone,
    },
    {
      number: '03.',
      title: 'UI / UX\nDesign',
      descLine1: 'Human-Centered.',
      descLine2: 'Conversion-Led.',
      icon: PenTool,
    },
    {
      number: '04.',
      title: 'Artificial\nIntelligence',
      descLine1: 'Practical AI.',
      descLine2: 'Process Automation.',
      icon: Sparkles,
    },
    {
      number: '05.',
      title: 'Digital\nStrategy',
      descLine1: 'Clear Roadmap.',
      descLine2: 'Measurable Impact.',
      icon: Lightbulb,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(services.length - 1, prev + 1));
  };

  // Keyboard navigation with ArrowLeft / ArrowRight keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement as HTMLElement)?.tagName;
      if (['INPUT', 'TEXTAREA'].includes(activeTag)) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch swipe support for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Responsive layout: 3 cards on desktop, 2 on tablet, 1 on mobile
  const isDesktop = windowWidth >= 1024;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  // On desktop, keep active card centered: cards [0,1,2] for idx 0-1, [1,2,3] for idx 2, [2,3,4] for idx 3-4
  const offsetIndex = isDesktop
    ? Math.max(0, Math.min(currentIndex - 1, services.length - 3))
    : isTablet
      ? Math.min(currentIndex, services.length - 2)
      : currentIndex;

  const getTranslateX = () => {
    if (isDesktop) {
      return offsetIndex === 0 ? '0px' : `calc(-${offsetIndex} * (100% + 24px) / 3)`;
    }
    if (isTablet) {
      return offsetIndex === 0 ? '0px' : `calc(-${offsetIndex} * (100% + 24px) / 2)`;
    }
    return offsetIndex === 0 ? '0px' : `calc(-${offsetIndex} * (100% + 16px))`;
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 relative select-none">
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-r from-blue-100/20 via-purple-100/25 to-pink-100/20 blur-[130px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Top Header Section matching design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 sm:mb-12">
          {/* Left Pill Badge */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">Our Services</span>
            </div>
          </div>

          {/* Right Heading with Inline Images sized to fill text size & Actions */}
          <div className="lg:col-span-9 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[42px] font-bold tracking-tight text-gray-950 leading-[1.24] font-sans">
                <span className="block">We transform ideas into digital products</span>
                <span className="block mt-1 sm:mt-1.5">
                  &amp; experiences{' '}
                  {/* Overlapping inline circular images scaled with em units to properly fill the text size */}
                  <span className="inline-flex items-center -space-x-[0.38em] align-middle mx-[0.2em] transform -translate-y-[0.08em]">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces"
                      alt="Creative design specialist"
                      referrerPolicy="no-referrer"
                      className="w-[1.12em] h-[1.12em] rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-black/5 shrink-0"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces"
                      alt="Product UI designer"
                      referrerPolicy="no-referrer"
                      className="w-[1.12em] h-[1.12em] rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-black/5 shrink-0"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&h=160&fit=crop&crop=faces"
                      alt="Web engineering lead"
                      referrerPolicy="no-referrer"
                      className="w-[1.12em] h-[1.12em] rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-black/5 shrink-0"
                    />
                  </span>{' '}
                  that{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
                    make an impact.
                  </span>
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-3xl font-sans">
                We combine strategy, design and technology to build scalable digital products, web applications and intelligent solutions that help businesses grow.
              </p>
            </div>

            {/* Action Row: Start a Project + Arrow Key Navigation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              {/* Action Button: Start a Project matching Hero button style */}
              <button
                onClick={handleStartProject}
                className="px-7 py-3.5 bg-[#1F232B] hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group active:scale-95"
              >
                <span>Start a Project</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>

              {/* Arrow Keys Navigation Controls that Move the Highlighted Card */}
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-semibold text-gray-500 tabular-nums mr-1">
                  0{currentIndex + 1} / 0{services.length}
                </span>

                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 rounded-full border border-gray-200/90 bg-white hover:bg-gray-50 disabled:opacity-35 disabled:cursor-not-allowed active:scale-95 shadow-2xs flex items-center justify-center text-gray-700 hover:text-black transition-all cursor-pointer"
                  aria-label="Previous card"
                  title="Previous service (Left Arrow key)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === services.length - 1}
                  className="w-10 h-10 rounded-full border border-gray-200/90 bg-white hover:bg-gray-50 disabled:opacity-35 disabled:cursor-not-allowed active:scale-95 shadow-2xs flex items-center justify-center text-gray-700 hover:text-black transition-all cursor-pointer"
                  aria-label="Next card"
                  title="Next service (Right Arrow key)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel / Slider Container: 3 Cards Displayed Cleanly on Desktop, Generous Padding for Unclipped Shadows */}
        <div
          className="relative overflow-hidden pt-6 pb-16 px-4 -mx-4 select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex items-stretch gap-4 sm:gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${getTranslateX()})`,
            }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHighlighted = currentIndex === index;

              return (
                <div
                  key={service.number}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full max-w-[340px] sm:max-w-none sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] aspect-square shrink-0 bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 lg:p-8 flex flex-col overflow-hidden cursor-pointer transition-all duration-300 border ${isHighlighted
                    ? 'relative z-20 border-purple-200/90 shadow-[0_20px_45px_-10px_rgba(124,58,237,0.22),0_8px_20px_-4px_rgba(253,73,24,0.08)] -translate-y-1.5 ring-1 ring-purple-100'
                    : 'relative z-10 hover:z-20 border-gray-100 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_35px_-8px_rgba(0,0,0,0.1)] hover:border-gray-200'
                    }`}
                >
                  {/* Background Giant Watermark Numeral: Perfectly Contained Within Div */}
                  <div
                    className={`absolute bottom-1 right-3 text-[100px] sm:text-[115px] lg:text-[125px] font-bold select-none tracking-tighter leading-none pointer-events-none font-sans transition-colors duration-300 ${isHighlighted ? 'text-purple-100/70' : 'text-gray-100/90'
                      }`}
                  >
                    {service.number}
                  </div>

                  {/* Top Row: Soft Clay Icon Box on Left, Multi-line Descriptors on Right */}
                  <div className="flex items-start justify-between relative z-10 w-full">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${isHighlighted
                        ? 'bg-gradient-to-br from-[#0127F2] via-[#FF0485] to-[#FFC802] text-white shadow-lg shadow-purple-500/25 border border-purple-400/40'
                        : 'bg-gradient-to-b from-gray-50 to-gray-200/80 text-gray-700 border border-gray-200/50 shadow-[0_4px_14px_rgba(0,0,0,0.05),inset_0_1.5px_2px_rgba(255,255,255,1)]'
                        }`}
                    >
                      <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                    </div>

                    <div className="text-right text-xs sm:text-[12.5px] font-semibold text-gray-800 leading-tight shrink-0 ml-2">
                      <div>{service.descLine1}</div>
                      <div>{service.descLine2}</div>
                    </div>
                  </div>

                  {/* Title: Positioned Directly Under Top-Left Icon, Fully Contained with No Clipping */}
                  <div className="relative z-10 mt-5 sm:mt-6 text-left max-w-full">
                    <h3
                      className={`text-2xl sm:text-[27px] lg:text-[30px] font-bold tracking-tight leading-[1.18] whitespace-pre-line font-sans break-words transition-all duration-300 py-0.5 ${isHighlighted
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]'
                        : 'text-gray-950'
                        }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
