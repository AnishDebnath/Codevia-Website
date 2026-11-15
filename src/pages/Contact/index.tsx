import React from 'react';
import { Navbar, Footer } from '../../components/common';
import { FAQ } from '../../components/layout';
import { Hero } from './Hero';
import { Form } from './Form';

// ponytail: Contact page cleanly structured same as Home and Projects pages
interface ContactPageProps {
  onNavigate?: (path: string) => void;
}

export const Contact: React.FC<ContactPageProps> = ({ onNavigate }) => {
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
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar
        currentPage="contact"
        onNavigateHome={(sectionId) => handleNavigate('/', sectionId)}
        onNavigateProjects={() => handleNavigate('/projects')}
        onNavigateAbout={() => handleNavigate('/about')}
      />

      {/* Main Content Sections */}
      <main>
        {/* Contact Hero */}
        <Hero />

        {/* Project Enquiry Form and Details Stack */}
        <Form />

        {/* FAQ Section */}
        <FAQ
          onNavigateContact={() => {
            const el = document.querySelector('form');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        />
      </main>

      {/* Footer Section */}
      <Footer
        onNavigateHome={(sectionId) => handleNavigate('/', sectionId)}
        onNavigateProjects={() => handleNavigate('/projects')}
        onNavigateAbout={() => handleNavigate('/about')}
      />
    </div>
  );
};

export default Contact;
