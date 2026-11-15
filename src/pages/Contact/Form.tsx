import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

// ponytail: contact form height perfectly matched to the right-side info stack
export const Form: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 lg:pb-20 relative select-none">
      {/* Background ambient lighting matching theme */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-gradient-to-r from-blue-100/20 via-purple-100/25 to-pink-100/15 blur-[130px] pointer-events-none rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[300px] bg-gradient-to-l from-amber-100/20 via-pink-100/15 to-purple-100/20 blur-[120px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Responsive Grid matching heights on desktop with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Project Enquiry Form (height matches right side boxes) */}
          <div className="lg:col-span-8 bg-white rounded-[26px] sm:rounded-[32px] p-6 sm:p-9 lg:p-11 border border-purple-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 font-sans tracking-tight mb-6 sm:mb-8">
              Tell us about it.
            </h2>

            {submitted ? (
              <div className="py-16 sm:py-24 text-center space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-950 font-sans">Your message has been sent successfully.</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed font-sans">
                  We'll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#1F232B] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-5 sm:space-y-6 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Your Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-semibold text-gray-700 font-sans">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200/90 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-sans"
                      />
                    </div>

                    {/* Your Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-semibold text-gray-700 font-sans">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200/90 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Tell us about your project (flex-1 expands to fill height) */}
                  <div className="space-y-1.5 text-left flex-1 flex flex-col min-h-[160px]">
                    <label className="block text-xs font-semibold text-gray-700 font-sans">
                      Tell us about your project
                    </label>
                    <textarea
                      required
                      placeholder="What are you looking to build?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full flex-1 min-h-[140px] px-4 py-3.5 rounded-xl bg-white border border-gray-200/90 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-sans resize-none"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="px-7 sm:px-8 py-3.5 sm:py-4 bg-[#1F232B] hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 group"
                    >
                      <span>Send Message</span>
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802] group-hover:scale-125 transition-transform" />
                    </button>
                  </div>

                  {/* Notice text */}
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    Thanks for reaching out. A member of the Codevia team will reply within two business days. If the form does not send, please email{' '}
                    <a href="mailto:codeviaaiofficial@gmail.com" className="text-purple-600 hover:underline">
                      codeviaaiofficial@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: 4 Info Cards Stack */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4 h-full">
            {/* Box 1: Start A Project Card styled with smooth website theme container gradient */}
            <div className="bg-gradient-to-br from-[#F0F5FF] via-[#F8F2FF] to-[#FFF5F2] rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-purple-200/80 shadow-[0_8px_30px_rgba(110,12,248,0.06)] space-y-2.5 relative overflow-hidden flex-1 flex flex-col justify-center group text-left">
              {/* Subtle ambient light glow */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-purple-200/40 via-pink-200/30 to-transparent blur-2xl pointer-events-none rounded-full" />
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-200/30 via-indigo-200/20 to-transparent blur-2xl pointer-events-none rounded-full" />

              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-purple-900/80 font-sans relative z-10">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0127F2] via-[#FF0485] to-[#FFC802] shadow-xs" />
                START A PROJECT
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug font-sans tracking-tight text-gray-950 relative z-10">
                Let's build
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] via-[#FF0485] via-[#FD4918] to-[#FFC802]">
                  something remarkable.
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans relative z-10 font-normal">
                Let's turn your ideas into something meaningful, modern and built to make an impact.
              </p>
            </div>

            {/* Box 2: Email Card */}
            <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 border border-purple-100/70 shadow-xs hover:border-purple-300 transition-all text-left">
              <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 font-sans">
                EMAIL
              </span>
              <a
                href="mailto:codeviaaiofficial@gmail.com"
                className="text-base sm:text-lg font-bold text-gray-950 hover:text-purple-600 transition-colors block break-all font-sans"
              >
                codeviaaiofficial@gmail.com
              </a>
            </div>

            {/* Box 3: Phone Card */}
            <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 border border-purple-100/70 shadow-xs hover:border-purple-300 transition-all text-left">
              <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 font-sans">
                PHONE
              </span>
              <a
                href="tel:+919382322241"
                className="text-base sm:text-lg font-bold text-gray-950 hover:text-purple-600 transition-colors block font-sans"
              >
                +91 93823 22241
              </a>
            </div>

            {/* Box 4: Location Card */}
            <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 border border-purple-100/70 shadow-xs hover:border-purple-300 transition-all text-left">
              <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 font-sans">
                LOCATION
              </span>
              <p className="text-sm sm:text-base font-semibold text-gray-900 leading-snug font-sans">
                Bidhannagar, Salt Lake,
                <br />
                Kolkata, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
