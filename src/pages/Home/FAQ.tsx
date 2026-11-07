import React, { useState } from 'react';
import { Plus, X, ArrowRight } from 'lucide-react';

// ponytail: lightweight accordion with zero extra dependencies using simple index state
interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  // First item open by default, matching the design reference
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: 'How long does a typical project take?',
      answer:
        'Most projects take around 2–4 weeks from start to launch. It depends on the size and complexity, but we always aim to keep things moving smoothly with clear milestones.',
    },
    {
      question: 'Do you offer ongoing support after launch?',
      answer:
        'Yes, we provide ongoing maintenance, continuous feature enhancements, and proactive performance monitoring to ensure your digital product operates seamlessly.',
    },
    {
      question: 'Can you help with content creation and copywriting?',
      answer:
        'Absolutely. We craft strategic copy, brand narratives, and value-focused messaging designed to align with your aesthetic and convert visitors into clients.',
    },
    {
      question: 'What platforms do you specialize in?',
      answer:
        'We specialize in modern web architectures including React, Next.js, TypeScript, Tailwind CSS, and headless content solutions engineered for peak velocity and scale.',
    },
    {
      question: 'How do you handle SEO during development?',
      answer:
        'Technical SEO is built in from day one—incorporating structured metadata, semantic HTML, lightweight asset delivery, and responsive accessibility.',
    },
  ];

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const scrollToContact = () => {
    const el = document.querySelector('#works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-28 relative select-none">
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-purple-200/15 blur-[130px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Section Tag, Heading, Supporting Description, and Button (same style as other section headers) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4 sm:space-y-5 lg:sticky lg:top-28">
            {/* Section Tag matching Services, Works & Testimonials */}
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">FAQ</span>
            </div>

            {/* Section Heading matching Works & Testimonials font style & gradient accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.14] font-sans">
              Questions /{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7]">
                Answers
              </span>
            </h2>

            {/* Sub-heading supporting text matching Works section */}
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-sm pt-0.5">
              Everything you need to know about our process, collaboration model, and deliverables.
            </p>

            {/* Action Button styled consistent with site theme */}
            <div className="pt-2">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-[#1F232B] hover:bg-black text-white text-xs sm:text-[13px] font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer active:scale-95 group"
              >
                <span>Still have questions?</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Accordion Questions & Answers */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
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
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]'
                          : 'text-gray-900 hover:text-black'
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-xs rotate-90'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                      }`}
                    >
                      {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 animate-in fade-in duration-200">
                      <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-sans border-t border-gray-100/90 pt-3.5">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

