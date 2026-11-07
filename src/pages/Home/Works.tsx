import React from 'react';
import { ArrowRight } from 'lucide-react';
// ponytail: imported directly from assets folder for bundled asset optimization
import agencyModernPortfolio from '../../assets/images/agency_modern_portfolio_1794011098022.jpg';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  publishedDate: string;
  industry: string;
  services: string;
  description: string;
  metrics: { label: string; value: string }[];
  accentColor: string;
  category: string;
}

export const Works: React.FC = () => {
  const projects: ProjectData[] = [
    {
      id: 'tech-agency',
      title: 'Tech agency website',
      category: 'Web design',
      subtitle: 'Digital flagship experience and brand design architecture for hyper-growth technology ventures.',
      publishedDate: 'December 2025',
      industry: 'Technology Agency',
      services: 'Web Design & Next.js Development',
      description:
        'A comprehensive digital presence designed to elevate brand authority, clarify complex multi-tier technical offerings, and maximize inbound lead conversion velocity.',
      metrics: [
        { label: 'Inbound Inquiries', value: '+142%' },
        { label: 'Avg Session Duration', value: '4m 18s' },
        { label: 'Lighthouse Score', value: '99/100' },
      ],
      accentColor: '#6366F1',
    },
    {
      id: 'web-developer-portfolio',
      title: 'Web developer portfolio',
      category: 'Web design',
      subtitle: 'Interactive bespoke personal brand showcasing WebGL physics and full-stack software applications.',
      publishedDate: 'January 2026',
      industry: 'Developer Portfolio',
      services: 'UI/UX Design, Creative Coding',
      description:
        'A tailored portfolio experience featuring fluid micro-interactions, responsive typographic scales, dynamic project showcases, and accessible dark/light presentation.',
      metrics: [
        { label: 'Conversion to Interview', value: '+85%' },
        { label: 'Visitor Engagement', value: '3.8x' },
        { label: 'Awwwards Honor', value: 'Nominee' },
      ],
      accentColor: '#8B5CF6',
    },
    {
      id: 'dashboard-design',
      title: 'Dashboard design',
      category: 'UI/UX design',
      subtitle: 'Enterprise multi-tenant data telemetry, task workflow automation, and analytics console.',
      publishedDate: 'October 2025',
      industry: 'SaaS / Enterprise',
      services: 'Product UI/UX, Design Systems',
      description:
        'Consolidating complex asynchronous data pipelines into an intuitive, high-legibility control board with granular task management, schedule tracking, and real-time chat integration.',
      metrics: [
        { label: 'Daily Active Workflow', value: '+64%' },
        { label: 'Task Completion Time', value: '-38%' },
        { label: 'User Retention', value: '94%' },
      ],
      accentColor: '#7C3AED',
    },
    {
      id: 'marketing-landing-page',
      title: 'Marketing landing page',
      category: 'Web dev',
      subtitle: 'Strategy-led customer acquisition platform engineered for maximum conversion velocity.',
      publishedDate: 'November 2025',
      industry: 'Growth Marketing',
      services: 'Web Development, Framer & React',
      description:
        'Engineered for a high-velocity startup launch, pairing bold editorial illustrations with frictionless customer onboarding funnels and sub-second load times.',
      metrics: [
        { label: 'Visitor-to-Lead Rate', value: '18.4%' },
        { label: 'Bounce Rate Reduction', value: '-42%' },
        { label: 'Monthly Growth', value: '+120%' },
      ],
      accentColor: '#A855F7',
    },
  ];

  return (
    <section id="works" className="py-20 sm:py-24 lg:py-28 relative select-none">
      {/* Background ambient lighting matching Hero palette */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-purple-200/20 blur-[130px] pointer-events-none rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[300px] bg-indigo-200/15 blur-[120px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Top Header Section: Section Tag & Heading on Left, Sub-heading & Button on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          {/* Left Side: Tag Line + Section Heading */}
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-purple-200/90 bg-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">Selected Work</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 leading-[1.14] font-sans">
              Selected{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7]">
                work
              </span>
            </h2>
          </div>

          {/* Right Side: Sub-heading + Button */}
          <div className="flex flex-col sm:flex-row sm:items-center lg:flex-col lg:items-end gap-4 sm:gap-5">
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-md lg:text-right">
              A few recent projects across brand, web and product.
              <br className="hidden sm:inline" />
              {' '}Every one started with a short call.
            </p>

            {/* Action Button: View all work matching Hero button style */}
            <button
              onClick={() => {
                const el = document.querySelector('#cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 bg-white hover:bg-gray-50 border border-gray-200/90 text-gray-800 text-xs sm:text-sm font-semibold rounded-full shadow-2xs hover:shadow-sm transition-all flex items-center gap-2 cursor-pointer group active:scale-95 shrink-0"
            >
              <span>View all work</span>
              <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-200 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* 2x2 Projects Grid matching image_5836e630.png with previous sections color theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-9">
          {/* Card 1: Tech agency website (matching image_5836e630.png + Hero purple/indigo theme) */}
          <div
            className="group bg-white rounded-[26px] sm:rounded-[30px] p-3 sm:p-3.5 border border-purple-100/70 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(139,92,246,0.14)] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Gradient Showcase Frame matching image_5836e630.png styled with Hero signature purple/indigo palette */}
            <div className="relative aspect-[16/11] rounded-[20px] sm:rounded-[22px] bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#A855F7] pt-3 px-3 sm:pt-4.5 sm:px-4.5 flex items-end justify-center overflow-hidden">
              {/* Internal Mockup Window Card Bleeding to Bottom Edge */}
              <div className="w-full h-[95%] bg-white rounded-t-xl sm:rounded-t-2xl shadow-[0_6px_25px_rgba(0,0,0,0.12)] border-t border-x border-white/95 p-2.5 sm:p-3.5 flex flex-col justify-between overflow-hidden relative">
                {/* Center Ambient Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-32 bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-violet-400/25 blur-2xl pointer-events-none rounded-full" />

                {/* Top Browser Nav Bar */}
                <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans relative z-10">
                  <span className="font-bold text-gray-950 tracking-tight flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-600 inline-block" />
                    Fuzzt
                  </span>
                  <div className="hidden sm:flex items-center gap-3.5 text-gray-600 font-medium text-[8.5px] sm:text-[9.5px]">
                    <span className="hover:text-purple-600 transition-colors">Work</span>
                    <span className="hover:text-purple-600 transition-colors">About</span>
                    <span className="hover:text-purple-600 transition-colors">Services</span>
                    <span className="hover:text-purple-600 transition-colors">Blog</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1F232B] group-hover:bg-purple-600 text-white font-semibold text-[7.5px] sm:text-[8.5px] shadow-2xs transition-colors">
                    Contact
                  </span>
                </div>

                {/* Hero Pitch */}
                <div className="text-center py-1 sm:py-2 space-y-1 relative z-10">
                  <h4 className="text-xs sm:text-[15px] lg:text-base font-bold text-gray-950 tracking-tight leading-tight">
                    Design &amp; development
                    <br />
                    for everyone
                  </h4>
                  <p className="text-[6.5px] sm:text-[8px] text-gray-500 max-w-[280px] mx-auto leading-relaxed hidden sm:block">
                    From concept to launch — and beyond. Delivering design solutions that elevate your business &amp; delight your audience.
                  </p>
                  <div className="pt-0.5">
                    <span className="inline-block px-2.5 sm:px-3 py-0.5 rounded-full border border-purple-200/90 bg-white text-gray-800 text-[6.5px] sm:text-[7.5px] font-semibold shadow-2xs">
                      Book a free call
                    </span>
                  </div>
                </div>

                {/* Split Bottom Section: Checklist Card on Left, Court Image on Right */}
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-gray-100/90 relative z-10 items-stretch">
                  {/* Left Checklist Card */}
                  <div className="bg-[#FAFAFC] rounded-lg p-2 sm:p-2.5 text-left flex flex-col justify-between border border-gray-100 shadow-2xs">
                    <div>
                      <div className="text-[7.5px] sm:text-[9px] font-bold text-gray-900 leading-tight mb-1">
                        We make it easy to launch!
                      </div>
                      <div className="space-y-0.5 text-[6px] sm:text-[7.5px] text-gray-600">
                        <div className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1F232B] text-white flex items-center justify-center text-[5px] shrink-0 font-bold">✓</span>
                          <span className="truncate">We offer ready-to-use templates.</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1F232B] text-white flex items-center justify-center text-[5px] shrink-0 font-bold">✓</span>
                          <span className="truncate">We onboard you and support you all the way.</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#1F232B] text-white flex items-center justify-center text-[5px] shrink-0 font-bold">✓</span>
                          <span className="truncate">We offer customizations in design and code.</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1 mt-1 border-t border-gray-100/60">
                      <span className="px-2 py-0.5 rounded-full bg-[#1F232B] text-white text-[6px] sm:text-[7px] font-semibold">
                        Our offer
                      </span>
                      <div className="flex items-center gap-1 text-[6px] sm:text-[7px] text-gray-400">
                        <span className="text-amber-500 font-bold">★★★★★</span>
                        <span className="hidden sm:inline">230+ reviews</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Court Image matching image_5836e630.png */}
                  <div className="rounded-lg overflow-hidden relative shadow-2xs bg-gray-100 h-full min-h-[68px] sm:min-h-[82px]">
                    <img
                      src={agencyModernPortfolio}
                      alt="Tech agency work showcase"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Title and Category Badge matching image_5836e630.png */}
            <div className="pt-3.5 sm:pt-4 pb-1 px-1.5 flex items-center justify-between">
              <h3 className="text-xl sm:text-[22px] font-bold text-gray-950 tracking-tight font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366F1] group-hover:to-[#A855F7] transition-all duration-300">
                Tech agency website
              </h3>
              <span className="px-3.5 py-1 rounded-full bg-[#F4F5F8] border border-gray-200/60 group-hover:bg-purple-100 group-hover:text-purple-800 group-hover:border-purple-200 text-gray-700 text-xs sm:text-[13px] font-medium transition-colors">
                Web design
              </span>
            </div>
          </div>

          {/* Card 2: Web developer portfolio (Harmonized with Hero/Services indigo-violet palette) */}
          <div
            className="group bg-white rounded-[26px] sm:rounded-[30px] p-3 sm:p-3.5 border border-purple-100/70 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(139,92,246,0.14)] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Gradient Showcase Frame */}
            <div className="relative aspect-[16/11] rounded-[20px] sm:rounded-[22px] bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#C084FC] pt-3 px-3 sm:pt-4.5 sm:px-4.5 flex items-end justify-center overflow-hidden">
              {/* Internal Mockup Window Card Bleeding to Bottom Edge */}
              <div className="w-full h-[95%] bg-white rounded-t-xl sm:rounded-t-2xl shadow-[0_6px_25px_rgba(0,0,0,0.12)] border-t border-x border-white/95 p-2.5 sm:p-3.5 flex flex-col justify-between overflow-hidden relative">
                {/* Browser Nav Bar */}
                <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans relative z-10">
                  <span className="font-bold text-gray-950 tracking-tight flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 inline-block" />
                    Niko
                  </span>
                  <div className="hidden sm:flex items-center gap-3.5 text-gray-600 font-medium text-[8.5px] sm:text-[9.5px]">
                    <span className="hover:text-indigo-600 transition-colors">Work</span>
                    <span className="hover:text-indigo-600 transition-colors">About</span>
                    <span className="hover:text-indigo-600 transition-colors">Services</span>
                    <span className="hover:text-indigo-600 transition-colors">Contact</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold text-[7.5px] sm:text-[8.5px] shadow-2xs">
                    Resume
                  </span>
                </div>

                {/* Hero Content with Soft Ambient Blurs */}
                <div className="text-center py-1 sm:py-2 space-y-1 relative z-10">
                  <div className="w-24 h-24 rounded-full bg-purple-300/30 blur-xl absolute top-3 left-6 pointer-events-none" />
                  <div className="w-24 h-24 rounded-full bg-indigo-300/25 blur-xl absolute top-4 right-6 pointer-events-none" />
                  <h4 className="text-xs sm:text-[15px] lg:text-base font-bold text-gray-950 tracking-tight leading-tight relative z-10">
                    Software Developer
                    <br />
                    Web &amp; Mobile Applications
                  </h4>
                  <p className="text-[6.5px] sm:text-[8px] text-gray-500 max-w-[280px] mx-auto leading-relaxed hidden sm:block relative z-10">
                    Specializing in building clean, functional web and mobile applications with high performance.
                  </p>
                  <div className="pt-0.5 relative z-10">
                    <span className="inline-block px-2.5 sm:px-3 py-0.5 rounded-full bg-[#1F232B] hover:bg-gradient-to-r hover:from-[#6366F1] hover:to-[#8B5CF6] text-white text-[7px] sm:text-[8px] font-semibold shadow-xs transition-all">
                      Get in touch
                    </span>
                  </div>
                </div>

                {/* 3 Project Preview Cards */}
                <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-gray-100 text-[6.5px] sm:text-[8px] relative z-10">
                  <div className="bg-[#F8FAFC] border border-purple-100/60 rounded-md p-1.5 text-left shadow-2xs">
                    <div className="font-bold text-gray-900 truncate">Fresh Pages</div>
                    <div className="text-purple-600/70 text-[6px] truncate">Landing page layout</div>
                  </div>
                  <div className="bg-[#F8FAFC] border border-purple-100/60 rounded-md p-1.5 text-left shadow-2xs">
                    <div className="font-bold text-gray-900 truncate">Eyewear Store</div>
                    <div className="text-purple-600/70 text-[6px] truncate">E-commerce brand</div>
                  </div>
                  <div className="bg-[#F8FAFC] border border-purple-100/60 rounded-md p-1.5 text-left shadow-2xs">
                    <div className="font-bold text-gray-900 truncate">Analytics UI</div>
                    <div className="text-purple-600/70 text-[6px] truncate">Real-time telemetry</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Title and Category Badge */}
            <div className="pt-3.5 sm:pt-4 pb-1 px-1.5 flex items-center justify-between">
              <h3 className="text-xl sm:text-[22px] font-bold text-gray-950 tracking-tight font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366F1] group-hover:to-[#A855F7] transition-all duration-300">
                Web developer portfolio
              </h3>
              <span className="px-3.5 py-1 rounded-full bg-[#F4F5F8] border border-gray-200/60 group-hover:bg-purple-100 group-hover:text-purple-800 group-hover:border-purple-200 text-gray-700 text-xs sm:text-[13px] font-medium transition-colors">
                Web design
              </span>
            </div>
          </div>

          {/* Card 3: Dashboard design (Harmonized with Hero/Services indigo palette) */}
          <div
            className="group bg-white rounded-[26px] sm:rounded-[30px] p-3 sm:p-3.5 border border-purple-100/70 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(139,92,246,0.14)] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Gradient Showcase Frame */}
            <div className="relative aspect-[16/11] rounded-[20px] sm:rounded-[22px] bg-gradient-to-r from-[#4338CA] via-[#6366F1] to-[#8B5CF6] pt-3 px-3 sm:pt-4.5 sm:px-4.5 flex items-end justify-center overflow-hidden">
              {/* Internal Mockup Window Card Bleeding to Bottom Edge */}
              <div className="w-full h-[95%] bg-white rounded-t-xl sm:rounded-t-2xl shadow-[0_6px_25px_rgba(0,0,0,0.12)] border-t border-x border-white/95 p-2.5 sm:p-3.5 flex flex-col justify-between overflow-hidden relative">
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900 tracking-tight">Tm.</span>
                    <span className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-[6.5px] sm:text-[7.5px] hidden sm:inline">
                      🔍 Search metrics...
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white flex items-center justify-center text-[7px] font-bold">
                      A
                    </div>
                    <span className="text-[7.5px] sm:text-[8.5px] font-medium text-purple-700">› Chat</span>
                  </div>
                </div>

                {/* 3 Task Metric Pills */}
                <div className="grid grid-cols-3 gap-1.5 py-1">
                  <div className="bg-purple-50/70 rounded-md p-1.5 border border-purple-100 shadow-2xs">
                    <div className="text-[6.5px] text-purple-700/70">Tasks Done</div>
                    <div className="text-[9.5px] sm:text-xs font-bold text-purple-950">132</div>
                  </div>
                  <div className="bg-indigo-50/70 rounded-md p-1.5 border border-indigo-100 shadow-2xs">
                    <div className="text-[6.5px] text-indigo-700/70">In Review</div>
                    <div className="text-[9.5px] sm:text-xs font-bold text-indigo-950">187</div>
                  </div>
                  <div className="bg-violet-50/70 rounded-md p-1.5 border border-violet-100 shadow-2xs">
                    <div className="text-[6.5px] text-violet-700/70">Total Backlog</div>
                    <div className="text-[9.5px] sm:text-xs font-bold text-violet-700">245</div>
                  </div>
                </div>

                {/* Activity Bars & Doughnut Ring */}
                <div className="grid grid-cols-12 gap-2 pt-1 border-t border-gray-100 items-center">
                  <div className="col-span-8 flex items-end justify-between h-9 sm:h-11 px-1">
                    {[40, 65, 80, 50, 90, 75, 85].map((h, i) => (
                      <div key={i} className="w-2 sm:w-2.5 bg-gray-100 rounded-t flex flex-col justify-end h-full">
                        <div
                          style={{ height: `${h}%` }}
                          className={`rounded-t ${i % 2 === 0 ? 'bg-indigo-600' : 'bg-purple-400'}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="col-span-4 bg-purple-50/60 rounded-lg p-1.5 text-center flex flex-col items-center justify-center shadow-2xs border border-purple-100/60">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[3px] border-indigo-600 border-t-purple-400 flex items-center justify-center font-bold text-[8px] sm:text-[9px] text-purple-950">
                      32%
                    </div>
                    <span className="text-[6px] text-purple-600 mt-0.5">Velocity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Title and Category Badge */}
            <div className="pt-3.5 sm:pt-4 pb-1 px-1.5 flex items-center justify-between">
              <h3 className="text-xl sm:text-[22px] font-bold text-gray-950 tracking-tight font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366F1] group-hover:to-[#A855F7] transition-all duration-300">
                Dashboard design
              </h3>
              <span className="px-3.5 py-1 rounded-full bg-[#F4F5F8] border border-gray-200/60 group-hover:bg-purple-100 group-hover:text-purple-800 group-hover:border-purple-200 text-gray-700 text-xs sm:text-[13px] font-medium transition-colors">
                UI/UX design
              </span>
            </div>
          </div>

          {/* Card 4: Marketing landing page (Harmonized with Hero/Services violet-purple palette) */}
          <div
            className="group bg-white rounded-[26px] sm:rounded-[30px] p-3 sm:p-3.5 border border-purple-100/70 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(139,92,246,0.14)] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Gradient Showcase Frame */}
            <div className="relative aspect-[16/11] rounded-[20px] sm:rounded-[22px] bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#C084FC] pt-3 px-3 sm:pt-4.5 sm:px-4.5 flex items-end justify-center overflow-hidden">
              {/* Internal Mockup Window Card Bleeding to Bottom Edge */}
              <div className="w-full h-[95%] bg-white rounded-t-xl sm:rounded-t-2xl shadow-[0_6px_25px_rgba(0,0,0,0.12)] border-t border-x border-white/95 p-2.5 sm:p-3.5 flex flex-col justify-between overflow-hidden relative">
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans">
                  <span className="font-bold text-gray-950 tracking-tight flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-600 inline-block" />
                    Starflow
                  </span>
                  <div className="hidden sm:flex items-center gap-3.5 text-gray-600 font-medium text-[8.5px] sm:text-[9.5px]">
                    <span className="hover:text-purple-600 transition-colors">About</span>
                    <span className="hover:text-purple-600 transition-colors">Services</span>
                    <span className="hover:text-purple-600 transition-colors">Pricing</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1F232B] text-white font-semibold text-[7.5px] sm:text-[8.5px] shadow-2xs">
                    Sign Up
                  </span>
                </div>

                {/* Hero Pitch with Graphics */}
                <div className="grid grid-cols-12 gap-2 items-center py-1.5">
                  <div className="col-span-7 space-y-1 text-left">
                    <h4 className="text-[11px] sm:text-sm font-bold text-gray-950 tracking-tight leading-tight">
                      We help startups create a professional presence online
                    </h4>
                    <p className="text-[6.5px] sm:text-[7.5px] text-gray-500 line-clamp-2 leading-relaxed">
                      Transforming raw ideas into captivating digital flagships with maximum velocity.
                    </p>
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <span className="px-2 py-0.5 rounded bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-[6.5px] sm:text-[7.5px] font-bold shadow-xs">
                        Start Now
                      </span>
                      <span className="px-2 py-0.5 rounded border border-purple-200/80 text-purple-900 text-[6.5px] sm:text-[7.5px] font-medium">
                        Learn More
                      </span>
                    </div>
                  </div>

                  <div className="col-span-5 flex items-center justify-center relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-100/90 flex items-center justify-center p-2 relative shadow-2xs">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-tr from-[#6366F1] to-[#A855F7] shadow-md flex items-center justify-center text-white text-xs font-bold">
                        🚀
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Line */}
                <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[6.5px] sm:text-[7.5px] text-gray-500">
                  <span>Trusted by 250+ founders</span>
                  <span className="font-semibold text-purple-600">Explore Cases →</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Title and Category Badge */}
            <div className="pt-3.5 sm:pt-4 pb-1 px-1.5 flex items-center justify-between">
              <h3 className="text-xl sm:text-[22px] font-bold text-gray-950 tracking-tight font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366F1] group-hover:to-[#A855F7] transition-all duration-300">
                Marketing landing page
              </h3>
              <span className="px-3.5 py-1 rounded-full bg-[#F4F5F8] border border-gray-200/60 group-hover:bg-purple-100 group-hover:text-purple-800 group-hover:border-purple-200 text-gray-700 text-xs sm:text-[13px] font-medium transition-colors">
                Web dev
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
