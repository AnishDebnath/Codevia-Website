import React from 'react';
import { Navbar, Footer } from '../../components/common';
import { FAQ, CTA, Statistics, Testimonials } from '../../components/layout';
import { Hero } from './Hero';
import { Services } from './Services';
import { Process } from './Process';
import { Works } from './Works';

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
        <Hero
          onNavigateContact={handleNavigateContact}
          onNavigateProjects={handleNavigateProjects}
        />
        <Statistics />
        <Services onNavigateContact={handleNavigateContact} />
        <Process />
        <Works onNavigateProjects={handleNavigateProjects} />
        <Testimonials />
        <FAQ onNavigateContact={handleNavigateContact} />
        <CTA onNavigateContact={handleNavigateContact} />
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

