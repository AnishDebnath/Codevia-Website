import React from 'react';
import { Navbar, Footer } from '../../components/common';
import { Statistics, Testimonials, FAQ, CTA } from '../../components/layout';
import { Hero } from './Hero';
import { Story } from './Story';

// ponytail: About page with Navbar, Hero showcase, Statistics, Story/Values, Testimonials, FAQ, CTA, and Footer
interface AboutPageProps {
  onNavigate?: (path: string) => void;
}

export const About: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const handleNavigate = (path: string, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(path);
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.location.href = sectionId ? `${path}#${sectionId}` : path;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-indigo-500 selection:text-white font-sans antialiased flex flex-col justify-between">
      {/* Navigation Bar */}
      <Navbar
        currentPage="about"
        onNavigateHome={(sectionId) => handleNavigate('/', sectionId)}
        onNavigateProjects={() => handleNavigate('/projects')}
        onNavigateContact={() => handleNavigate('/contact')}
        onNavigateAbout={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* About Hero Section matching reference */}
        <Hero />

        {/* Statistics Section */}
        <Statistics />

        {/* Our Company & Our Values alternating story sections */}
        <Story />

        {/* Testimonials Carousel Section */}
        <Testimonials />

        {/* Frequently Asked Questions Section */}
        <FAQ onNavigateContact={() => handleNavigate('/contact')} />

        {/* Call to Action Section */}
        <CTA onNavigateContact={() => handleNavigate('/contact')} />
      </main>

      {/* Footer Section */}
      <Footer
        onNavigateHome={(sectionId) => handleNavigate('/', sectionId)}
        onNavigateProjects={() => handleNavigate('/projects')}
        onNavigateContact={() => handleNavigate('/contact')}
        onNavigateAbout={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  );
};

export default About;
