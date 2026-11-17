import React from 'react';
import { Mail, Phone, MapPin, ChevronUp } from 'lucide-react';
// ponytail: imported directly from assets folder
import logoImg from '../../assets/logo.png';

interface FooterProps {
  onNavigateProjects?: () => void;
  onNavigateContact?: () => void;
  onNavigateAbout?: () => void;
  onNavigateHome?: (sectionId?: string) => void;
}

// ponytail: clean, structured footer with zero external dependencies matching design reference & site width
export const Footer: React.FC<FooterProps> = ({
  onNavigateProjects,
  onNavigateContact,
  onNavigateAbout,
  onNavigateHome,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'FAQ', href: '/' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/codeviaai/' },
    { label: 'Instagram', href: 'https://www.instagram.com/codevia.ai?igsi=d25pb2J3YWFtd2Zy' },
  ];

  const handleNavClick = (href: string, label: string) => {
    if (label === 'Home') {
      window.history.pushState({}, '', '/');
      if (window.location.pathname === '/' || window.location.pathname === '') {
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
      if (onNavigateAbout) {
        onNavigateAbout();
      } else {
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    if (label === 'Projects') {
      window.history.pushState({}, '', '/projects');
      if (onNavigateProjects) {
        onNavigateProjects();
      } else {
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    if (label === 'Contact Us') {
      window.history.pushState({}, '', '/contact');
      if (onNavigateContact) {
        onNavigateContact();
      } else {
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    if (label === 'Services') {
      window.history.pushState({}, '', '/services');
      const el = document.querySelector('#services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (onNavigateHome) {
        onNavigateHome('services');
      } else {
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    if (label === 'FAQ') {
      const el = document.querySelector('#faq');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        if (window.location.pathname === '/services') {
          window.history.replaceState(null, '', '/');
        }
        return;
      }
      if (onNavigateHome) {
        onNavigateHome('faq');
      } else {
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
        setTimeout(() => {
          document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      return;
    }

    // Anchor sections:
    const targetAnchor = href.includes('#') ? `#${href.split('#')[1]}` : href;
    const el = document.querySelector(targetAnchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const sectionId = href.split('#')[1] || '';
    if (onNavigateHome) {
      onNavigateHome(sectionId);
    } else {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <footer className="w-full flex justify-center pt-2 sm:pt-3 lg:pt-4 pb-4 sm:pb-6 lg:pb-8 select-none">
      {/* Outer Background Container following vw property & matching other section div border radius */}
      <div
        className="relative rounded-[24px] md:rounded-[36px] lg:rounded-[44px] border border-purple-200/60 bg-gradient-to-br from-[#F0F5FF] via-[#F8F2FF] to-[#FFF5F2] shadow-[0_4px_35px_rgba(110,12,248,0.04)] overflow-hidden w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] xl:w-[min(95vw,1440px)]"
      >
        {/* Subtle bottom ambient gradient matching logo spectrum */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-amber-100/25 via-pink-100/20 via-blue-100/15 to-transparent pointer-events-none" />

        {/* Top Area: Content placed at standard responsive container width */}
        <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20 pt-10 md:pt-14 lg:pt-16 pb-10 md:pb-14 lg:pb-16 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10 lg:gap-12">
            {/* Column 1: Brand Logo & Statement */}
            <div className="max-w-xs space-y-3 md:space-y-4 shrink-0">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateHome) {
                    onNavigateHome();
                  } else {
                    scrollToTop();
                  }
                }}
                className="inline-flex items-center group cursor-pointer"
                aria-label="Codevia Home"
              >
                <img
                  src={logoImg}
                  alt="Codevia"
                  className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto object-contain group-hover:opacity-90 transition-opacity"
                />
              </a>

              <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] leading-relaxed font-sans">
                We transform ambitious ideas into beautiful, scalable and high-performing digital products that help businesses grow.
              </p>
            </div>

            {/* Column 2: Contact Info */}
            <div className="space-y-3.5 shrink-0">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">
                Contact
              </h4>
              <div className="space-y-2.5 text-sm sm:text-[15px] text-gray-800 font-medium">
                <a
                  href="mailto:codeviaaiofficial@gmail.com"
                  className="flex items-center gap-2.5 hover:text-purple-600 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-gray-700 group-hover:text-purple-600 transition-colors shrink-0" />
                  <span>codeviaaiofficial@gmail.com</span>
                </a>
                <a
                  href="tel:+919382322241"
                  className="flex items-center gap-2.5 hover:text-purple-600 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-gray-700 group-hover:text-purple-600 transition-colors shrink-0" />
                  <span>+91 93823 22241</span>
                </a>
                <div className="flex items-start gap-2.5 text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-700 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-normal">Salt Lake, Kolkata, India</span>
                </div>
              </div>
            </div>

            {/* Column 3: Navigation */}
            <div className="space-y-3.5 shrink-0">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm sm:text-[15px] text-gray-800 font-medium">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href, link.label);
                      }}
                      className="hover:text-purple-600 transition-colors cursor-pointer text-left inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Socials */}
            <div className="space-y-3.5 shrink-0">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">
                Socials
              </h4>
              <ul className="space-y-2 text-sm sm:text-[15px] text-gray-800 font-medium">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 transition-colors inline-block cursor-pointer"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Full-width hairline divider */}
        <div className="w-full h-px bg-gray-200/80 relative z-10" />

        {/* Bottom Bar: aligned with the content width */}
        <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 py-5">
            {/* Left Cell: Copyright & Legal Links */}
            <div className="text-xs sm:text-[13px] text-gray-500 font-sans flex flex-wrap items-center gap-2.5 justify-center md:justify-start">
              <span>© {new Date().getFullYear()} Codevia. All rights reserved.</span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="text-gray-600">
                Designed &amp; developed by{' '}
                <a
                  href="https://www.linkedin.com/in/anish-debnath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 transition-colors underline underline-offset-2"
                >
                  Anish Debnath
                </a>
              </span>
            </div>

            {/* Right Cell: Back to Top with Vertical Divider */}
            <div className="md:border-l md:border-gray-200/80 md:pl-8 flex items-center justify-center md:justify-end">
              <button
                onClick={scrollToTop}
                className="px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-200/90 text-gray-800 text-xs sm:text-sm font-semibold rounded-full shadow-2xs hover:shadow-sm transition-all flex items-center gap-2 cursor-pointer group active:scale-95"
              >
                <span>Back to Top</span>
                <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-200 transition-colors">
                  <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
