import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
// ponytail: imported directly from assets folder
import logoImg from '../../assets/logo.png';

interface NavbarProps {
  currentPage?: 'home' | 'projects' | 'contact' | 'about';
  onNavigateProjects?: () => void;
  onNavigateContact?: () => void;
  onNavigateAbout?: () => void;
  onNavigateHome?: (sectionId?: string) => void;
}

// ponytail: lightweight active state & scroll-spy navigation with zero external dependencies
export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigateProjects,
  onNavigateContact,
  onNavigateAbout,
  onNavigateHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(
    currentPage === 'projects'
      ? 'Projects'
      : currentPage === 'contact'
      ? 'Contact'
      : currentPage === 'about'
      ? 'About'
      : 'Home'
  );

  // Center menu items strictly: Home, About, Services, Projects
  const navLinks = [
    { label: 'Home', href: '#', sectionId: '' },
    { label: 'About', href: '#process', sectionId: 'process' },
    { label: 'Services', href: '#services', sectionId: 'services' },
    { label: 'Projects', href: '#works', sectionId: 'works' },
  ];

  // Scroll spy to dynamically select current section menu item on Home page
  useEffect(() => {
    if (currentPage === 'projects') {
      setActiveLink('Projects');
      return;
    }
    if (currentPage === 'contact') {
      setActiveLink('Contact');
      return;
    }
    if (currentPage === 'about') {
      setActiveLink('About');
      return;
    }

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
  }, [currentPage]);

  const handleNavClick = (href: string, label: string, sectionId?: string) => {
    setActiveLink(label);
    setMobileMenuOpen(false);

    if (currentPage !== 'home') {
      if (label === 'About') {
        if (currentPage === 'about') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (onNavigateAbout) {
          onNavigateAbout();
        } else {
          window.history.pushState({}, '', '/about');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
        return;
      }
      if (label === 'Projects') {
        if (currentPage === 'projects') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (onNavigateProjects) {
          onNavigateProjects();
        } else {
          window.history.pushState({}, '', '/projects');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
        return;
      }
      if (onNavigateHome) {
        onNavigateHome(sectionId);
      } else {
        window.location.href = sectionId ? `/#${sectionId}` : '/';
      }
      return;
    }

    if (label === 'About' && onNavigateAbout) {
      onNavigateAbout();
      return;
    }

    if (label === 'Projects' && onNavigateProjects) {
      onNavigateProjects();
      return;
    }

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
    if (currentPage === 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (onNavigateContact) {
      onNavigateContact();
      return;
    }
    window.history.pushState({}, '', '/contact');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <header className="w-full relative z-50 py-4 sm:py-5 select-none">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Lockup: Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#', 'Home', '');
          }}
          className="flex items-center group cursor-pointer"
          aria-label="Codevia Home"
        >
          <img
            src={logoImg}
            alt="Codevia"
            className="h-10 sm:h-11 md:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </a>

        {/* Center Floating Pill Navigation: Home, About, Services, Projects */}
        <div className="hidden md:flex items-center bg-white/85 backdrop-blur-md border border-white/90 rounded-full px-2.5 py-1.5 shadow-[0_2px_16px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)]">
          <nav className="flex items-center gap-1.5 text-sm sm:text-[14.5px] font-semibold">
            {navLinks.map((link) => {
              const isSelected = activeLink === link.label;

              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href, link.label, link.sectionId)}
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

        {/* Right Action Button: "Contact Us" matching Hero button style */}
        <div className="hidden md:flex items-center">
          <button
            onClick={handleContactClick}
            className="px-5 sm:px-6 py-2.5 bg-[#1F232B] hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group active:scale-95"
          >
            <span>Contact Us</span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
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
                  onClick={() => handleNavClick(link.href, link.label, link.sectionId)}
                  className={`text-left text-base font-semibold transition-all py-2 px-3 rounded-xl ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-50 to-pink-50 text-indigo-700 font-bold'
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
              className="w-full py-3 bg-[#1F232B] hover:bg-black text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
            >
              <span>Contact Us</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
