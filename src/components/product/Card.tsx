import React from 'react';
// ponytail: bundled asset imported for high-performance zero-lag rendering
import agencyModernPortfolio from '../../assets/images/agency_modern_portfolio_1794011098022.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subcategories: string[];
  gradientFrame: string;
  type: 'agency' | 'portfolio' | 'dashboard' | 'marketing' | 'ecommerce' | 'health' | 'branding' | 'fintech' | 'architecture' | 'audio';
}

export const allProjects: ProjectItem[] = [
  {
    id: 'tech-agency',
    title: 'Tech agency website',
    category: 'Digital Experience',
    subcategories: ['Digital Experience', 'Web design'],
    gradientFrame: 'from-[#EEF2FF] via-[#F3E8FF] to-[#FCE7F3] border border-indigo-100/70',
    type: 'agency',
  },
  {
    id: 'web-developer-portfolio',
    title: 'Web developer portfolio',
    category: 'Product Design',
    subcategories: ['Product Design', 'Web design'],
    gradientFrame: 'from-[#F3E8FF] via-[#FFE4E6] to-[#FEF3C7] border border-purple-100/70',
    type: 'portfolio',
  },
  {
    id: 'dashboard-design',
    title: 'Dashboard design',
    category: 'Product Design',
    subcategories: ['Product Design', 'UI/UX design'],
    gradientFrame: 'from-[#EEF2FF] via-[#EDE9FE] to-[#FFEDD5] border border-blue-100/70',
    type: 'dashboard',
  },
  {
    id: 'marketing-landing-page',
    title: 'Marketing landing page',
    category: 'Campaigns',
    subcategories: ['Campaigns', 'Web dev'],
    gradientFrame: 'from-[#FEF3C7] via-[#FFE4E6] to-[#F3E8FF] border border-amber-100/70',
    type: 'marketing',
  },
  {
    id: 'aura-commerce',
    title: 'Aura luxury retail',
    category: 'E-commerce',
    subcategories: ['E-commerce', 'Digital Experience'],
    gradientFrame: 'from-[#F3E8FF] via-[#FFE4E6] to-[#FEF3C7] border border-purple-100/70',
    type: 'ecommerce',
  },
  {
    id: 'pulse-health',
    title: 'Pulse health telemetry',
    category: 'Product Design',
    subcategories: ['Product Design', 'Digital Experience'],
    gradientFrame: 'from-[#EFF6FF] via-[#EEF2FF] to-[#FCE7F3] border border-blue-100/70',
    type: 'health',
  },
  {
    id: 'verve-media',
    title: 'Verve creative studio',
    category: 'Branding',
    subcategories: ['Branding', 'Campaigns'],
    gradientFrame: 'from-[#EEF2FF] via-[#F3E8FF] to-[#FCE7F3] border border-purple-100/70',
    type: 'branding',
  },
  {
    id: 'kora-pay',
    title: 'Kora fintech platform',
    category: 'Digital Experience',
    subcategories: ['Digital Experience', 'Product Design'],
    gradientFrame: 'from-[#EFF6FF] via-[#EEF2FF] to-[#EDE9FE] border border-indigo-100/70',
    type: 'fintech',
  },
  {
    id: 'solstice-studio',
    title: 'Solstice architecture',
    category: 'Branding',
    subcategories: ['Branding', 'Digital Experience'],
    gradientFrame: 'from-[#F8FAFC] via-[#F1F5F9] to-[#F8FAFC] border border-slate-200/70',
    type: 'architecture',
  },
  {
    id: 'omni-retail',
    title: 'Omni designer collective',
    category: 'E-commerce',
    subcategories: ['E-commerce', 'Branding'],
    gradientFrame: 'from-[#FFF1F2] via-[#FDF2F8] to-[#EEF2FF] border border-pink-100/70',
    type: 'ecommerce',
  },
  {
    id: 'vertex-ai',
    title: 'Vertex AI canvas',
    category: 'Product Design',
    subcategories: ['Product Design', 'Digital Experience'],
    gradientFrame: 'from-[#EEF2FF] via-[#F3E8FF] to-[#EFF6FF] border border-indigo-100/70',
    type: 'dashboard',
  },
  {
    id: 'nova-wave',
    title: 'Nova spatial audio',
    category: 'Campaigns',
    subcategories: ['Campaigns', 'Branding'],
    gradientFrame: 'from-[#F3E8FF] via-[#FCE7F3] to-[#FEF3C7] border border-violet-100/70',
    type: 'audio',
  },
];

interface CardProps {
  project: ProjectItem;
  onClick?: () => void;
}

// ponytail: reusable Project/Product Card with smoothed gradient showcase frame and zero runtime overhead
export const Card: React.FC<CardProps> = ({ project, onClick }) => {
  const renderMockup = (type: ProjectItem['type']) => {
    switch (type) {
      case 'agency':
        return (
          <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-32 bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-violet-400/25 blur-2xl pointer-events-none rounded-full" />
            <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans relative z-10">
              <span className="font-bold text-[#000534] tracking-tight flex items-center gap-1.5">
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
            <div className="text-center py-1 sm:py-2 space-y-1 relative z-10">
              <h4 className="text-xs sm:text-[15px] lg:text-base font-bold text-[#000534] tracking-tight leading-tight">
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
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-gray-100/90 relative z-10 items-stretch">
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
              <div className="rounded-lg overflow-hidden relative shadow-2xs bg-gray-100 h-full min-h-[68px] sm:min-h-[82px]">
                <img
                  src={agencyModernPortfolio}
                  alt="Tech agency showcase"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </>
        );

      case 'portfolio':
        return (
          <>
            <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans relative z-10">
              <span className="font-bold text-[#000534] tracking-tight flex items-center gap-1.5">
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
            <div className="text-center py-1 sm:py-2 space-y-1 relative z-10">
              <div className="w-24 h-24 rounded-full bg-purple-300/30 blur-xl absolute top-3 left-6 pointer-events-none" />
              <div className="w-24 h-24 rounded-full bg-indigo-300/25 blur-xl absolute top-4 right-6 pointer-events-none" />
              <h4 className="text-xs sm:text-[15px] lg:text-base font-bold text-[#000534] tracking-tight leading-tight relative z-10">
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
            <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-gray-100 text-[6.5px] sm:text-[8px] relative z-10">
              <div className="bg-[#F8FAFC] border border-purple-100/60 rounded-md p-1.5 text-left shadow-2xs">
                <div className="font-bold text-gray-900 truncate">Fresh Pages</div>
                <div className="text-purple-600/70 text-[6px] truncate">Landing page</div>
              </div>
              <div className="bg-[#F8FAFC] border border-purple-100/60 rounded-md p-1.5 text-left shadow-2xs">
                <div className="font-bold text-gray-900 truncate">Eyewear Store</div>
                <div className="text-purple-600/70 text-[6px] truncate">E-commerce</div>
              </div>
              <div className="bg-[#F8FAFC] border border-purple-100/60 rounded-md p-1.5 text-left shadow-2xs">
                <div className="font-bold text-gray-900 truncate">Analytics UI</div>
                <div className="text-purple-600/70 text-[6px] truncate">Telemetry</div>
              </div>
            </div>
          </>
        );

      case 'dashboard':
        return (
          <>
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
                <span className="text-[7.5px] sm:text-[8.5px] font-medium text-purple-700">› Live</span>
              </div>
            </div>
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
          </>
        );

      case 'marketing':
        return (
          <>
            <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans">
              <span className="font-bold text-[#000534] tracking-tight flex items-center gap-1.5">
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
            <div className="grid grid-cols-12 gap-2 items-center py-1.5">
              <div className="col-span-7 space-y-1 text-left">
                <h4 className="text-[11px] sm:text-sm font-bold text-[#000534] tracking-tight leading-tight">
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
            <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[6.5px] sm:text-[7.5px] text-gray-500">
              <span>Trusted by 250+ founders</span>
              <span className="font-semibold text-purple-600">Explore Cases →</span>
            </div>
          </>
        );

      case 'ecommerce':
        return (
          <>
            <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans">
              <span className="font-bold text-[#000534] tracking-tight flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                Aura Atelier
              </span>
              <div className="hidden sm:flex items-center gap-3 text-gray-600 font-medium text-[8px] sm:text-[9px]">
                <span>Apparel</span>
                <span>Footwear</span>
                <span>Objects</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#1F232B] text-white font-semibold text-[7.5px] sm:text-[8.5px]">
                Cart (2)
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 py-1.5 items-center">
              <div className="bg-[#FAF9F6] p-2 rounded-lg border border-gray-100 space-y-1">
                <span className="text-[6.5px] font-bold text-rose-600 uppercase tracking-wider">New Drop</span>
                <div className="text-[10px] sm:text-xs font-bold text-[#000534]">Minimalist Series IV</div>
                <div className="text-[8px] text-gray-600 font-medium">$280.00</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-2 rounded-lg border border-purple-100 space-y-1">
                <span className="text-[6.5px] font-bold text-purple-600 uppercase tracking-wider">Curated</span>
                <div className="text-[10px] sm:text-xs font-bold text-[#000534]">Edition Monograph</div>
                <div className="text-[8px] text-gray-600 font-medium">$165.00</div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[6.5px] sm:text-[7.5px] text-gray-500">
              <span>Sub-100ms Headless Checkout</span>
              <span className="font-semibold text-rose-600">★ 4.9/5 (1.4k reviews)</span>
            </div>
          </>
        );

      case 'health':
        return (
          <>
            <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans">
              <span className="font-bold text-[#000534] tracking-tight flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                Pulse Health
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[7px] font-semibold border border-emerald-200">
                Connected • Live
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 py-1.5">
              <div className="bg-[#F0FDF4] p-1.5 rounded-md border border-emerald-100 text-left">
                <div className="text-[6.5px] text-emerald-800">Heart Rate</div>
                <div className="text-[10px] sm:text-xs font-bold text-emerald-950">72 BPM</div>
              </div>
              <div className="bg-[#EFF6FF] p-1.5 rounded-md border border-blue-100 text-left">
                <div className="text-[6.5px] text-blue-800">Oxygen Sat</div>
                <div className="text-[10px] sm:text-xs font-bold text-blue-950">99.2%</div>
              </div>
              <div className="bg-[#FAF5FF] p-1.5 rounded-md border border-purple-100 text-left">
                <div className="text-[6.5px] text-purple-800">Status</div>
                <div className="text-[10px] sm:text-xs font-bold text-purple-950">Optimal</div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[6.5px] sm:text-[7.5px] text-gray-500">
              <span>HIPAA Compliant Patient Telemetry</span>
              <span className="font-semibold text-emerald-600">Specialist On Call</span>
            </div>
          </>
        );

      case 'fintech':
        return (
          <>
            <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans">
              <span className="font-bold text-[#000534] tracking-tight flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                Kora Pay
              </span>
              <span className="text-[7.5px] font-mono text-gray-500">API Latency: 14ms</span>
            </div>
            <div className="py-1.5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[7px] text-gray-500">Gross Settlement Volume</span>
                <span className="text-[7px] text-emerald-600 font-semibold">+18.4% today</span>
              </div>
              <div className="text-sm sm:text-base font-extrabold text-[#000534] tracking-tight font-mono">
                $1,482,920.00
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[6.5px] sm:text-[7.5px] text-gray-500">
              <span>Multi-Currency Cross-Border Rails</span>
              <span className="font-semibold text-blue-600">Instant Settlement</span>
            </div>
          </>
        );

      case 'branding':
      case 'architecture':
        return (
          <>
            <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans">
              <span className="font-serif tracking-widest uppercase font-bold text-[#000534]">
                Solstice Atelier
              </span>
              <span className="text-[7.5px] uppercase tracking-wider text-gray-400">Nordic 2026</span>
            </div>
            <div className="py-2 text-center space-y-1">
              <h4 className="text-xs sm:text-sm font-serif italic text-gray-900">
                Form, Texture &amp; Sustainable Light
              </h4>
              <p className="text-[6.5px] sm:text-[7.5px] text-gray-500 max-w-[240px] mx-auto">
                Sculpting human experiences through architectural purity and conscious materials.
              </p>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[6.5px] sm:text-[7.5px] text-gray-500">
              <span>Selected Works Vol. 04</span>
              <span className="font-medium text-gray-900">View Monograph →</span>
            </div>
          </>
        );

      case 'audio':
      default:
        return (
          <>
            <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-gray-100 text-[8px] sm:text-[10px] text-gray-500 font-sans">
              <span className="font-bold text-[#000534] tracking-tight flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-violet-600 inline-block" />
                Nova Acoustic
              </span>
              <span className="px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 text-[7px] font-semibold">
                3D Spatial Audio
              </span>
            </div>
            <div className="py-2 flex items-center justify-center gap-1.5 h-12">
              {[35, 75, 45, 90, 60, 100, 70, 85, 40, 95, 55, 30].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-1.5 sm:w-2 rounded-full bg-gradient-to-t from-violet-600 via-pink-500 to-amber-400"
                />
              ))}
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[6.5px] sm:text-[7.5px] text-gray-500">
              <span>Next-Gen Acoustic Hardware</span>
              <span className="font-semibold text-violet-600">Lossless Audio 192kHz</span>
            </div>
          </>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-[26px] sm:rounded-[30px] p-3 sm:p-3.5 border border-purple-100/70 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(139,92,246,0.14)] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Gradient Showcase Frame - smoothed for elegant presentation */}
      <div
        className={`relative aspect-[16/11] rounded-[20px] sm:rounded-[22px] bg-gradient-to-br ${project.gradientFrame} pt-3 px-3 sm:pt-4.5 sm:px-4.5 flex items-end justify-center overflow-hidden transition-all duration-300 group-hover:brightness-[1.02]`}
      >
        {/* Internal Mockup Window Card Bleeding to Bottom Edge */}
        <div className="w-full h-[95%] bg-white rounded-t-xl sm:rounded-t-2xl shadow-[0_6px_25px_rgba(0,0,0,0.12)] border-t border-x border-white/95 p-2.5 sm:p-3.5 flex flex-col justify-between overflow-hidden relative">
          {renderMockup(project.type)}
        </div>
      </div>

      {/* Bottom Row: Title and Category Badge */}
      <div className="pt-3.5 sm:pt-4 pb-1 px-1.5 flex items-center justify-between">
        <h3 className="text-xl sm:text-[22px] font-bold text-[#000534] tracking-tight font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0127F2] group-hover:to-[#6E0CF8] transition-all duration-300">
          {project.title}
        </h3>
        <span className="px-3.5 py-1 rounded-full bg-[#F4F5F8] border border-gray-200/60 group-hover:bg-purple-100 group-hover:text-purple-800 group-hover:border-purple-200 text-gray-700 text-xs sm:text-[13px] font-medium transition-colors">
          {project.category}
        </span>
      </div>
    </div>
  );
};

export { Card as ProjectCard };
export default Card;
