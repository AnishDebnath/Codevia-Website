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
    { label: 'Home', href: '/', sectionId: '' },
    { label: 'About', href: '/about', sectionId: '' },
    { label: 'Services', href: '/services', sectionId: 'services' },
    { label: 'Projects', href: '/projects', sectionId: 'works' },
  ];

  // Lock body scroll when mobile hamburger menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Scroll spy to dynamically manage URL & active link on Home/Services page:
  // When in service section, then only show service url (/services), otherwise home url (/)
  // Completely free of '#' hashes
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
      const servicesEl = document.getElementById('services');
      if (servicesEl) {
        const rect = servicesEl.getBoundingClientRect();
        // In Services section when top is within upper viewport and bottom hasn't scrolled past top
        const inService = rect.top <= 200 && rect.bottom >= 150;

        if (inService) {
          setActiveLink('Services');
          if (window.location.pathname !== '/services') {
            window.history.replaceState(null, '', '/services');
          }
          return;
        }
      }

      // Otherwise in any other section on the Home page (Hero, Stats, Process, Works, Testimonials, FAQ, CTA, Footer)
      setActiveLink('Home');
      if (window.location.pathname === '/services' || (window.location.hash && window.location.hash !== '')) {
        window.history.replaceState(null, '', '/');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (href: string, label: string, sectionId?: string) => {
    setActiveLink(label);
    setMobileMenuOpen(false);

    if (label === 'Home') {
      window.history.pushState({}, '', '/');
      if (currentPage === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (onNavigateHome) {
        onNavigateHome('');
      } else {
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    if (label === 'About') {
      window.history.pushState({}, '', '/about');
      if (currentPage === 'about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (onNavigateAbout) {
        onNavigateAbout();
      } else {
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    if (label === 'Projects') {
      window.history.pushState({}, '', '/projects');
      if (currentPage === 'projects') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (onNavigateProjects) {
        onNavigateProjects();
      } else {
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    if (label === 'Services') {
      window.history.pushState({}, '', '/services');
      if (currentPage === 'home') {
        const element = document.querySelector('#services');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (onNavigateHome) {
        onNavigateHome('services');
      } else {
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    if (href === '#' || !href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const cleanHref = href.startsWith('/#') ? href.replace('/#', '#') : href;
    const element = document.querySelector(cleanHref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigateHome) {
      onNavigateHome(sectionId);
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    window.history.pushState({}, '', '/contact');
    if (currentPage === 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (onNavigateContact) {
      onNavigateContact();
      return;
    }
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <header className="w-full relative z-50 py-3.5 md:py-4 lg:py-5">
      <div className="w-full max-w-screen-xl mx-auto px-6 sm:px-8 md:px-8 lg:px-12 xl:px-20 flex items-center justify-between">
        {/* Brand Lockup: Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/', 'Home', '');
          }}
          className="flex items-center group cursor-pointer"
          aria-label="Codevia Home"
        >
          <img
            src={logoImg}
            alt="Codevia"
            loading="eager"
            fetchPriority="high"
            className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </a>

        {/* Center Floating Pill Navigation: Home, About, Services, Projects */}
        <div className="hidden md:flex items-center bg-white/85 backdrop-blur-md border border-white/90 rounded-full px-2 lg:px-3 py-1.5 shadow-[0_2px_16px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)]">
          <nav className="flex items-center gap-1 lg:gap-2 text-xs md:text-sm lg:text-[14.5px] font-semibold">
            {navLinks.map((link) => {
              const isSelected = activeLink === link.label;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href, link.label, link.sectionId);
                  }}
                  className={`px-3 md:px-3.5 lg:px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#1F232B] text-white shadow-xs'
                      : 'text-gray-700 hover:text-[#000534] hover:bg-gray-100/80'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right Action Button: "Contact Us" */}
        <div className="hidden md:flex items-center">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleContactClick();
            }}
            className="px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-2.5 bg-[#1F232B] hover:bg-black text-white text-xs md:text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group active:scale-95"
          >
            <span>Contact Us</span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button - square div with rounded border radius */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer active:scale-90 border shadow-2xs ${
              mobileMenuOpen
                ? 'bg-[#1F232B] border-black text-white shadow-md'
                : 'bg-white/90 backdrop-blur-md border-purple-200/80 text-[#000534] hover:border-purple-300 hover:shadow-xs'
            }`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {/* Top Bar */}
            <span
              className={`h-[2px] rounded-full transition-all duration-300 ease-out origin-center ${
                mobileMenuOpen
                  ? 'w-4.5 bg-white rotate-45 translate-y-[4px]'
                  : 'w-4.5 bg-[#000534]'
              }`}
            />
            {/* Bottom Bar */}
            <span
              className={`h-[2px] rounded-full transition-all duration-300 ease-out origin-center ${
                mobileMenuOpen
                  ? 'w-4.5 bg-white -rotate-45 -translate-y-[4px]'
                  : 'w-3 self-end mr-[11px] bg-gradient-to-r from-[#0127F2] via-[#6E0CF8] to-[#FF0485]'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu: positioned absolutely with backdrop overlay so it floats directly over hero section */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute top-full left-0 right-0 mx-6 sm:mx-8 md:mx-0 mt-2 md:hidden bg-white/95 backdrop-blur-2xl border border-purple-100/90 px-5 py-5 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-in fade-in slide-in-from-top-2 rounded-2xl z-50">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isSelected = activeLink === link.label;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href, link.label, link.sectionId);
                    }}
                    className={`text-left text-base font-semibold transition-all py-2.5 px-4 rounded-xl block ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-50 to-pink-50 text-indigo-700 font-bold shadow-2xs'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-indigo-600'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="pt-2">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleContactClick();
                }}
                className="w-full py-3 bg-[#1F232B] hover:bg-black text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
              >
                <span>Contact Us</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
