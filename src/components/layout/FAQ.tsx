import React, { useState } from 'react';
import { Plus, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '../../data/faq';

interface FAQProps {
  onNavigateContact?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onNavigateContact }) => {
  // First item open by default, matching the design reference
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqData = faqItems;

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleContactClick = () => {
    window.history.pushState({}, '', '/contact');
    if (onNavigateContact) {
      onNavigateContact();
      return;
    }
    const el = document.querySelector('#contact') || document.querySelector('form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section id="faq" className="py-10 md:py-16 lg:py-20 relative">
      {/* Background ambient lighting with all-time breathing motion */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-[300px] md:w-[600px] h-[200px] md:h-[350px] bg-gradient-to-r from-blue-100/20 via-purple-100/25 to-pink-100/20 blur-[130px] pointer-events-none rounded-full -z-10"
      />

      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-14 items-start">
          {/* Left Column: Section Tag, Heading, Supporting Description, and Button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="md:col-span-5 lg:col-span-5 flex flex-col items-start space-y-3.5 md:space-y-4 sm:space-y-5 md:sticky md:top-24 lg:top-28"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.75, 1, 0.75] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802]"
              />
              <span className="text-xs md:text-sm font-semibold text-gray-800 tracking-wide font-sans">Common Questions</span>
            </div>

            {/* Section Heading matching website style */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#000534] leading-[1.18] md:leading-[1.14] font-sans">
              Frequently asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
                questions.
              </span>
            </h2>

            {/* Sub-heading supporting text */}
            <p className="text-sm md:text-base text-gray-600 font-normal leading-relaxed max-w-prose pt-0.5 font-sans">
              Everything you need to know about how Codevia designs, builds, and scales digital products.
            </p>

            {/* Action Button styled consistent with Hero button style */}
            <div className="pt-2">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleContactClick();
                }}
                className="px-5 py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3.5 bg-[#1F232B] hover:bg-black text-white text-xs md:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95 group inline-flex"
              >
                <span>Still have questions?</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Accordion Questions & Answers */}
          <div className="md:col-span-7 lg:col-span-7 space-y-3 md:space-y-3.5 sm:space-y-4">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: idx * 0.06, ease: 'easeOut' }}
                  className={`bg-white rounded-2xl sm:rounded-[22px] transition-all duration-300 border ${
                    isOpen
                      ? 'border-purple-200/90 shadow-[0_12px_32px_rgba(139,92,246,0.1)] ring-1 ring-purple-100/70'
                      : 'border-gray-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base sm:text-[17px] font-bold tracking-tight font-sans transition-colors ${
                        isOpen
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] to-[#FF0485]'
                          : 'text-gray-900 hover:text-black'
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#1F232B] hover:bg-black text-white shadow-xs rotate-90'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                      }`}
                    >
                      {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                          <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-sans border-t border-gray-100/90 pt-3.5">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
