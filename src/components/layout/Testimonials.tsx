import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

// ponytail: reusable testimonial carousel with zero external slider dependencies and infinite loop
export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      quote:
        'Codevia has been so attentive, caring from the day one for the development of our website.\n\nBest wishes. Go ahead.',
      author: 'Verified Client',
      role: 'Client',
      company: 'Website Development',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces',
      rating: 5,
    },
    {
      id: '2',
      quote:
        'I had a wonderful experience working with you on the development of my law firm’s website. She understood my requirements perfectly, was professional, creative, responsive, and paid great attention to detail. The final website looks elegant, professional, and perfectly represents our firm. Highly recommended for anyone looking for quality website development!\n\nAll the best',
      author: 'Verified Client',
      role: 'Law Firm Partner',
      company: 'Legal Services',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=faces&q=80',
      rating: 5,
    },
    {
      id: '3',
      quote:
        'The dedication, patience, and genuine passion for teaching make every class special. What I appreciate most is the ability to explain even the most difficult concepts in such a simple and understandable way. Feels like a teacher rather than a mere trainer.',
      author: 'Verified Student',
      role: 'Student',
      company: 'Training Program',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&h=160&fit=crop&crop=faces',
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
    <section
      id="testimonials"
      className="py-10 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-[#F0F5FF]/80 via-[#F8F2FF]/80 to-[#FFF5F2]/80 border-y border-purple-200/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.9)]"
    >
      {/* Background ambient lighting with all-time breathing motion */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] md:w-[750px] h-[220px] md:h-[380px] bg-gradient-to-r from-blue-200/20 via-purple-200/25 to-pink-200/20 blur-[140px] pointer-events-none rounded-full -z-10"
      />

      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        {/* Centered Section Header matching previous sections font style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16"
        >
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [0.75, 1, 0.75] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]"
            />
            <span className="text-xs md:text-sm font-semibold text-gray-800 tracking-wide font-sans">Client Stories</span>
          </div>

          {/* Section Heading matching website info */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#000534] leading-[1.18] md:leading-[1.15] font-sans">
            Built together.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
              Trusted together.
            </span>
          </h2>

          {/* Carousel Navigation Controls with Counter & Arrows */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={onUserPrev}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-200/90 bg-white hover:border-purple-300 text-gray-700 hover:text-purple-600 flex items-center justify-center transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold text-gray-500 font-mono px-2">
              0{activeRealIndex + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={onUserNext}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-200/90 bg-white hover:border-purple-300 text-gray-700 hover:text-purple-600 flex items-center justify-center transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Carousel Track with Screen Edge Overflow & Subtle Fades */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="relative w-full overflow-hidden pt-6 pb-14 sm:pt-8 sm:pb-16 [--card-w:320px] sm:[--card-w:380px] lg:[--card-w:420px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left and Right Edge Fade Gradients matching section theme background */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-44 bg-gradient-to-r from-[#F0F5FF] to-transparent z-25 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-44 bg-gradient-to-l from-[#FFF5F2] to-transparent z-25 pointer-events-none" />

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
                className={`w-[var(--card-w)] shrink-0 px-3 cursor-pointer transition-all duration-300 ${isCentered ? 'relative z-20' : 'relative z-10 hover:z-20'
                  }`}
              >
                <div
                  className={`h-full rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${isCentered
                      ? 'bg-[#F9F8F5] border-purple-300/80 shadow-[0_20px_45px_-10px_rgba(139,92,246,0.22),0_8px_16px_-4px_rgba(0,0,0,0.06)] scale-[1.02]'
                      : 'bg-[#FBFBF9] border-gray-200/70 shadow-[0_4px_16px_rgba(0,0,0,0.04)] opacity-85 hover:opacity-100 hover:border-purple-200/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
                    }`}
                >
                  <div>
                    {/* Top Row: Quotation mark on Left, 5 Stars on Right */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl sm:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802] leading-none">
                        “
                      </span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-gray-900 font-medium text-base sm:text-[17px] leading-relaxed font-sans min-h-[96px] whitespace-pre-line">
                      {item.quote}
                    </p>
                  </div>

                  {/* Commented out for now: Profile image, author name and role part */}
                  {/*
                  <div>
                    <div className="w-full h-px bg-gray-200/80 mb-5" />
                    <div className="flex items-center gap-3.5">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white shadow-2xs"
                      />
                      <div>
                        <h4 className="text-sm sm:text-[15px] font-bold text-[#000534] font-sans tracking-tight">
                          {item.author}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-gray-500 font-medium">
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  */}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Bottom Rating Pill */}
      <div className="mt-2 sm:mt-4 flex items-center justify-center">
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-gray-200/80 shadow-2xs text-xs sm:text-sm text-gray-600 font-medium">
          <div className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span className="font-bold text-[#000534]">4.9/5</span>
          <span className="text-gray-400">•</span>
          <span>from verified client reviews</span>
        </div>
      </div>
    </section>
  );
};
