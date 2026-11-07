import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// ponytail: imported directly from assets folder
import logoImg from '../../assets/logo.png';

// ponytail: lightweight active state & scroll-spy navigation with zero external dependencies
export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Center menu items strictly: Home, About, Services, Projects
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#works' },
  ];

  // Scroll spy to dynamically select current section menu item
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 260) {
        setActiveLink('Home');
        return;
      }

      const sections = [
        { id: 'works', label: 'Projects' },
        { id: 'process', label: 'About' },
        { id: 'services', label: 'Services' },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            setActiveLink(section.label);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, label: string) => {
    setActiveLink(label);
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

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    const element = document.querySelector('#cta') || document.querySelector('#works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full relative z-50 py-4 sm:py-5 select-none">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Lockup: Logo Image + Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#', 'Home');
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <img
            src={logoImg}
            alt="Codevia Logo"
            className="w-9 h-9 rounded-xl object-contain shadow-xs group-hover:scale-105 transition-transform"
          />
          <span className="font-extrabold text-[22px] tracking-tight text-gray-950 font-sans">
            Codevia
          </span>
        </a>

        {/* Center Floating Pill Navigation: Home, About, Services, Projects */}
        <div className="hidden md:flex items-center bg-white/85 backdrop-blur-md border border-white/90 rounded-full px-2.5 py-1.5 shadow-[0_2px_16px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)]">
          <nav className="flex items-center gap-1.5 text-sm sm:text-[14.5px] font-semibold">
            {navLinks.map((link) => {
              const isSelected = activeLink === link.label;

              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.label)}
                  className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#1F232B] text-white shadow-xs'
                      : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Action Button: "Contact Us" */}
        <div className="hidden md:flex items-center">
          <button
            onClick={handleContactClick}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-b from-[#2D323B] to-[#171A20] hover:from-[#1E2228] hover:to-black active:scale-95 transition-all rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/10 cursor-pointer"
          >
            Contact Us
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
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isSelected = activeLink === link.label;

              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.label)}
                  className={`text-left text-base font-semibold transition-all py-2 px-3 rounded-xl ${
                    isSelected
                      ? 'bg-purple-50 text-purple-700 font-bold'
                      : 'text-gray-800 hover:bg-gray-50 hover:text-indigo-600'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
          <div className="pt-2">
            <button
              onClick={handleContactClick}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-gray-950 rounded-full shadow hover:bg-black"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
