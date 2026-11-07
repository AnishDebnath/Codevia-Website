import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      quote:
        'Brought structure to a complex product challenge. Incredibly thoughtful collaborators from the first discovery workshop right through to final production launch.',
      author: 'Ellie Brooks',
      role: 'Design Lead',
      company: 'Kinetiq Systems',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces',
      rating: 5,
    },
    {
      id: '2',
      quote:
        'We came in with a messy brief and left with a brand system our whole team actually uses. Six months on, it still feels fresh.',
      author: 'Amara Okafor',
      role: 'CMO',
      company: 'Lumen Health',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=faces',
      rating: 5,
    },
    {
      id: '3',
      quote:
        'Craftriva rebuilt our website in eight weeks. Demo requests doubled in the first quarter and our sales team finally has a story to tell.',
      author: 'Marcus Lindqvist',
      role: 'CEO',
      company: 'Fjord Capital',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces',
      rating: 5,
    },
    {
      id: '4',
      quote:
        'Their design sprint model is the most effective agency collaboration we’ve had in 10 years. Inbound conversion spiked 142% post-launch with zero friction.',
      author: 'Elena Rostova',
      role: 'Partner',
      company: 'Horizon Wealth',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces',
      rating: 5,
    },
    {
      id: '5',
      quote:
        'The attention to typography, micro-interactions, and engineering discipline completely transformed our Series A presentation and customer onboarding.',
      author: 'David Chen',
      role: 'Founder & CTO',
      company: 'Synapse Labs',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces',
      rating: 5,
    },
  ];

  // ponytail: 3x buffer creates seamless infinite loop in both directions with zero 3rd-party slider packages
  const items = [...testimonials, ...testimonials, ...testimonials];
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Normalized display index (0..4) for counter indicator
  const activeRealIndex =
    ((currentIndex % testimonials.length) + testimonials.length) % testimonials.length;

  // ponytail: unified movement function used for both auto-play loop and arrow navigation
  const handleNext = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPaused) {
      timerRef.current = window.setInterval(handleNext, 3800);
    }
  };

  const onUserNext = () => {
    handleNext();
    resetTimer();
  };

  const onUserPrev = () => {
    handlePrev();
    resetTimer();
  };

  // ponytail: automatic looping slide with pause-on-hover
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Seamless wrap-around: silent normalization back to center set once transition completes
  const handleTransitionEnd = () => {
    if (currentIndex >= testimonials.length * 2 || currentIndex < testimonials.length) {
      setWithTransition(false);
      const normalized =
        (((currentIndex % testimonials.length) + testimonials.length) % testimonials.length) +
        testimonials.length;
      setCurrentIndex(normalized);
    }
  };

  // Re-enable smooth transition after silent position normalization
  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-28 relative select-none overflow-hidden">
      {/* Background ambient lighting matching Hero palette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-purple-200/15 blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Centered Section Header matching previous sections font style */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">Client Perspective</span>
          </div>

          {/* Section Heading with clean sans-serif font style matching previous sections */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.15] font-sans">
            Trusted by teams{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7]">
              who care about the details.
            </span>
          </h2>

          {/* Carousel Navigation Controls with Counter & Arrows */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={onUserPrev}
              className="w-10 h-10 rounded-full border border-gray-200/90 bg-white hover:border-purple-300 text-gray-700 hover:text-purple-600 flex items-center justify-center transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold text-gray-500 font-mono px-2">
              0{activeRealIndex + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={onUserNext}
              className="w-10 h-10 rounded-full border border-gray-200/90 bg-white hover:border-purple-300 text-gray-700 hover:text-purple-600 flex items-center justify-center transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track with Screen Edge Overflow & Subtle Fades */}
      {/* ponytail: generous vertical padding and explicit stacking contexts prevent card shadow from clipping or hiding under sibling divs */}
      <div
        className="relative w-full overflow-hidden pt-6 pb-14 sm:pt-8 sm:pb-16 [--card-w:320px] sm:[--card-w:380px] lg:[--card-w:420px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left and Right Edge Fade Gradients matching aesthetic */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-44 bg-gradient-to-r from-[#FAFAFA] to-transparent z-25 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-44 bg-gradient-to-l from-[#FAFAFA] to-transparent z-25 pointer-events-none" />

        {/* Carousel Container Track */}
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex ${withTransition ? 'transition-transform duration-500 ease-out' : ''}`}
          style={{
            transform: `translateX(calc(50% - (var(--card-w) / 2) - (${currentIndex} * var(--card-w))))`,
          }}
        >
          {items.map((item, index) => {
            const isCentered = index === currentIndex;

            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => {
                  setWithTransition(true);
                  setCurrentIndex(index);
                  resetTimer();
                }}
                className={`w-[var(--card-w)] shrink-0 px-3 cursor-pointer transition-all duration-300 ${
                  isCentered ? 'relative z-20' : 'relative z-10 hover:z-20'
                }`}
              >
                <div
                  className={`h-full rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                    isCentered
                      ? 'bg-[#F9F8F5] border-purple-300/80 shadow-[0_20px_45px_-10px_rgba(139,92,246,0.22),0_8px_16px_-4px_rgba(0,0,0,0.06)] scale-[1.02]'
                      : 'bg-[#FBFBF9] border-gray-200/70 shadow-[0_4px_16px_rgba(0,0,0,0.04)] opacity-85 hover:opacity-100 hover:border-purple-200/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
                  }`}
                >
                  <div>
                    {/* Top Row: Quotation mark on Left, 5 Stars on Right */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl sm:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#A855F7] leading-none select-none">
                        “
                      </span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-gray-900 font-medium text-base sm:text-[17px] leading-relaxed font-sans mb-8 min-h-[96px]">
                      {item.quote}
                    </p>
                  </div>

                  <div>
                    {/* Hairline Divider */}
                    <div className="w-full h-px bg-gray-200/80 mb-5" />

                    {/* Author Row: Avatar + Name & Company */}
                    <div className="flex items-center gap-3.5">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white shadow-2xs"
                      />
                      <div>
                        <h4 className="text-sm sm:text-[15px] font-bold text-gray-950 font-sans tracking-tight">
                          {item.author}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-gray-500 font-medium">
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Rating Pill */}
      <div className="mt-2 sm:mt-4 flex items-center justify-center">
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-gray-200/80 shadow-2xs text-xs sm:text-sm text-gray-600 font-medium">
          <div className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span className="font-bold text-gray-950">4.9/5</span>
          <span className="text-gray-400">•</span>
          <span>from 60+ brand partners</span>
        </div>
      </div>
    </section>
  );
};
