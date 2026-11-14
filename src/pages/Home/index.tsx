import React from 'react';
import { Navbar, Footer } from '../../components/common';
import { FAQ, CTA } from '../../components/layout';
import { Hero } from './Hero';
import { Statistics } from './Statistics';
import { Services } from './Services';
import { Process } from './Process';
import { Works } from './Works';
import { Testimonials } from './Testimonials';

interface HomeProps {
  onNavigate?: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const handleNavigateProjects = () => {
    if (onNavigate) {
      onNavigate('/projects');
    } else {
      window.history.pushState({}, '', '/projects');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleNavigateContact = () => {
    if (onNavigate) {
      onNavigate('/contact');
    } else {
      window.history.pushState({}, '', '/contact');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleNavigateAbout = () => {
    if (onNavigate) {
      onNavigate('/about');
    } else {
      window.history.pushState({}, '', '/about');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar
        onNavigateProjects={handleNavigateProjects}
        onNavigateContact={handleNavigateContact}
        onNavigateAbout={handleNavigateAbout}
      />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <Statistics />
        <Services />
        <Process />
        <Works onNavigateProjects={handleNavigateProjects} />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      {/* Footer Section */}
      <Footer
        onNavigateProjects={handleNavigateProjects}
        onNavigateContact={handleNavigateContact}
        onNavigateAbout={handleNavigateAbout}
      />
    </div>
  );
};

export default Home;

