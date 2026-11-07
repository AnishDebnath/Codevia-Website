import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#services' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#works' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full relative z-50 py-4 sm:py-5 select-none">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Lockup: Dark rounded square logo + Lighter wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#323842] to-[#1E222A] flex items-center justify-center shadow-sm border border-white/20 group-hover:scale-105 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 6V15C7 16.6569 8.34315 18 10 18H17"
                stroke="white"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-extrabold text-[22px] tracking-tight text-gray-950 font-sans">
            Codevia
          </span>
        </a>

        {/* Center Floating Pill Navigation: Home, About, Services, Projects, Contact Us */}
        <div className="hidden md:flex items-center bg-white/80 backdrop-blur-md border border-white/90 rounded-full px-8 py-2.5 shadow-[0_2px_14px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)]">
          <nav className="flex items-center gap-7 lg:gap-8 text-xs sm:text-[13px] font-semibold text-gray-800">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-black transition-colors cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Action Button: Dark Pill "Start a Project" */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick('#works')}
            className="px-6 py-2.5 text-xs sm:text-[13px] font-semibold text-white bg-gradient-to-b from-[#2D323B] to-[#171A20] hover:from-[#1E2228] hover:to-black active:scale-95 transition-all rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/10 cursor-pointer"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-black rounded-lg hover:bg-gray-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border border-gray-200/80 px-6 py-5 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 mx-4 mt-2 rounded-2xl z-50">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-semibold text-gray-800 hover:text-indigo-600 transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('#works')}
              className="w-full py-3 text-center text-xs font-semibold text-white bg-gray-950 rounded-full shadow hover:bg-black"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
