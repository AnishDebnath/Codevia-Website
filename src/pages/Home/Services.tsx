import React, { useState, useRef, useEffect } from 'react';
import { PenTool, Monitor, Lightbulb, Code2, ChevronLeft, ChevronRight } from 'lucide-react';

export const Services: React.FC = () => {
  // Start with index 1 (UI/UX Design) highlighted, matching the reference screenshot
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToWorks = () => {
    const el = document.querySelector('#works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      number: '01.',
      title: 'Branding &\nStrategy',
      descLine1: 'Define. Design.',
      descLine2: 'Distinguish.',
      icon: PenTool,
    },
    {
      number: '02.',
      title: 'UI/UX\nDesign',
      descLine1: 'Intuitive. Engaging.',
      descLine2: 'Seamless.',
      icon: Monitor,
    },
    {
      number: '03.',
      title: 'Creative\nDirection',
      descLine1: 'Vision. Style.',
      descLine2: 'Impact.',
      icon: Lightbulb,
    },
    {
      number: '04.',
      title: 'Web\nDevelopment',
      descLine1: 'Beautiful. Functional.',
      descLine2: 'Fast.',
      icon: Code2,
    },
  ];

  const scrollToIndex = (idx: number) => {
    if (!scrollRef.current) return;
    const clamped = Math.max(0, Math.min(idx, services.length - 1));
    setCurrentIndex(clamped);

    const container = scrollRef.current;
    const cardEl = container.children[clamped] as HTMLElement;
    if (cardEl) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = cardEl.getBoundingClientRect();
      if (cardRect.left < containerRect.left) {
        container.scrollBy({ left: cardRect.left - containerRect.left - 12, behavior: 'smooth' });
      } else if (cardRect.right > containerRect.right) {
        container.scrollBy({ left: cardRect.right - containerRect.right + 12, behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => {
    scrollToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(currentIndex + 1);
  };

  // Keyboard navigation with ArrowLeft / ArrowRight keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement as HTMLElement)?.tagName;
      if (['INPUT', 'TEXTAREA'].includes(activeTag)) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToIndex(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToIndex(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative select-none">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Header Section matching image_fa1ecd2b.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 sm:mb-12">
          {/* Left Pill Badge */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">Our Services</span>
            </div>
          </div>

          {/* Right Heading with Inline Images sized to fill text size & Actions */}
          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-gray-950 leading-[1.24] font-sans">
              Our mission is to shape meaningful
              <br className="hidden sm:inline" />
              brands and experiences{' '}
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
              that
              <br className="hidden sm:inline" />
              make an impact.
            </h2>

            {/* Action Row: Start a Project + Arrow Key Navigation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <button
                onClick={scrollToWorks}
                className="px-6 py-3 text-xs sm:text-[13px] font-semibold text-white bg-[#1F232B] hover:bg-black active:scale-95 transition-all rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.18)] cursor-pointer"
              >
                Start a Project
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
        <div className="relative overflow-visible">
          <div
            ref={scrollRef}
            className="flex items-stretch gap-6 overflow-x-auto pt-6 pb-16 px-3 -mx-3 scroll-smooth scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              // Highlight is moved strictly by the buttons/arrow navigation
              const isHighlighted = currentIndex === index;

              return (
                <div
                  key={service.number}
                  onClick={() => scrollToIndex(index)}
                  className={`relative w-[85vw] max-w-[340px] sm:w-[calc((100%-24px)/2)] sm:max-w-none lg:w-[calc((100%-48px)/3)] aspect-square shrink-0 snap-start bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 lg:p-8 flex flex-col overflow-hidden cursor-pointer transition-all duration-300 border ${
                    isHighlighted
                      ? 'border-purple-200/90 shadow-[0_20px_45px_rgba(139,92,246,0.14)] -translate-y-1.5 ring-1 ring-purple-100'
                      : 'border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-200'
                  }`}
                >
                  {/* Background Giant Watermark Numeral: Perfectly Contained Within Div */}
                  <div
                    className={`absolute bottom-1 right-3 text-[100px] sm:text-[115px] lg:text-[125px] font-bold select-none tracking-tighter leading-none pointer-events-none font-sans transition-colors duration-300 ${
                      isHighlighted ? 'text-purple-100/70' : 'text-gray-100/90'
                    }`}
                  >
                    {service.number}
                  </div>

                  {/* Top Row: Soft Clay Icon Box on Left, Multi-line Descriptors on Right */}
                  <div className="flex items-start justify-between relative z-10 w-full">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isHighlighted
                          ? 'bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] text-white shadow-lg shadow-purple-500/25 border border-purple-400/40'
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
                      className={`text-2xl sm:text-[27px] lg:text-[30px] font-bold tracking-tight leading-[1.18] whitespace-pre-line font-sans break-words transition-all duration-300 py-0.5 ${
                        isHighlighted
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7]'
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
