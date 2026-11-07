import React from 'react';
import { Mail, Phone, ChevronUp } from 'lucide-react';
// ponytail: imported directly from assets folder
import logoImg from '../../assets/logo.png';

// ponytail: clean, structured footer with zero external dependencies matching design reference & site width
export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#services' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#works' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  const handleNavClick = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full flex justify-center pb-8 sm:pb-12 pt-4 select-none">
      {/* Outer Background Container following vw property & matching other section div border radius */}
      <div
        className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] border border-gray-200/90 bg-[#F4F5F8] shadow-[0_4px_24px_rgba(0,0,0,0.02)] overflow-hidden"
        style={{ width: 'min(95vw, 1440px)' }}
      >
        {/* Subtle bottom ambient gradient matching site theme */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-purple-100/40 via-transparent to-transparent pointer-events-none" />

        {/* Top Area: Content placed at other section width (max-w-6xl) */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-12">
            {/* Column 1: Brand Logo & Statement */}
            <div className="max-w-xs space-y-4 shrink-0">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="inline-flex items-center gap-2.5 group cursor-pointer"
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

              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed font-sans">
                Technology with Purpose. Transforming ambitious ideas into scalable, high-performing digital products.
              </p>
            </div>

            {/* Column 2: Work Inquiries */}
            <div className="space-y-3.5 shrink-0">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">
                Work Inquiries
              </h4>
              <div className="space-y-2.5 text-sm sm:text-[15px] text-gray-800 font-medium">
                <a
                  href="mailto:hello@codevia.agency"
                  className="flex items-center gap-2.5 hover:text-purple-600 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-gray-700 group-hover:text-purple-600 transition-colors shrink-0" />
                  <span>hello@codevia.agency</span>
                </a>
                <a
                  href="tel:+123456789100"
                  className="flex items-center gap-2.5 hover:text-purple-600 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-gray-700 group-hover:text-purple-600 transition-colors shrink-0" />
                  <span>(+1) 234 5678-9100</span>
                </a>
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
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="hover:text-purple-600 transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
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
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left Cell: Copyright & Credits */}
            <div className="py-5 text-xs sm:text-[13px] text-gray-500 font-sans flex flex-wrap items-center gap-2 justify-center md:justify-start">
              <span>© {new Date().getFullYear()} Codevia. All rights reserved.</span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="text-gray-600">Designed &amp; developed by Anish Debnath</span>
            </div>

            {/* Right Cell: Back to Top with Vertical Divider */}
            <div className="md:border-l md:border-gray-200/80 md:pl-8 py-5 flex items-center justify-center md:justify-end">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-gray-800 hover:text-purple-600 transition-colors group cursor-pointer"
              >
                <span>Back to Top</span>
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

