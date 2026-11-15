import React, { useState } from 'react';
import { Navbar, Footer } from '../../components/common';
import { CTA } from '../../components/layout';
import { Hero } from './Hero';
import { Works, allProjects } from './Works';

// ponytail: Projects page cleanly structured same as Home page folder structure
interface ProjectsPageProps {
  onNavigate?: (path: string) => void;
}

export const Projects: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Work');

  const filteredCount = allProjects.filter((project) => {
    if (selectedCategory === 'All Work') return true;
    return (
      project.category === selectedCategory ||
      project.subcategories.includes(selectedCategory)
    );
  }).length;

  const handleNavigateHome = (sectionId?: string) => {
    if (onNavigate) {
      onNavigate('/');
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.location.href = sectionId ? `/#${sectionId}` : '/';
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
        currentPage="projects"
        onNavigateHome={handleNavigateHome}
        onNavigateContact={handleNavigateContact}
        onNavigateAbout={handleNavigateAbout}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero section */}
        <Hero
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Dynamic Project Showcase Works Grid */}
        <Works selectedCategory={selectedCategory} />

        {/* Call to Action Section */}
        <CTA onNavigateContact={handleNavigateContact} />
      </main>

      {/* Footer Section */}
      <Footer
        onNavigateHome={handleNavigateHome}
        onNavigateContact={handleNavigateContact}
        onNavigateAbout={handleNavigateAbout}
      />
    </div>
  );
};

export default Projects;
