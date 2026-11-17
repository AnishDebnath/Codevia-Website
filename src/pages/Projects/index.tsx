import React, { useState } from 'react';
import { Navbar, Footer } from '../../components/common';
import { CTA } from '../../components/layout';
import { Hero } from './Hero';
import { Works } from './Works';
import { codeviaProjects, ProjectCategory } from '../../data/projects';

interface ProjectsPageProps {
  onNavigate?: (path: string) => void;
}

export const Projects: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');

  const filteredProjects = codeviaProjects.filter((project) => {
    if (selectedCategory === 'All Projects') return true;
    return (
      project.category === selectedCategory ||
      project.subcategories.includes(selectedCategory)
    );
  });

  const handleNavigateHome = (sectionId?: string) => {
    const targetUrl = sectionId === 'services' ? '/services' : '/';
    if (onNavigate) {
      onNavigate(targetUrl);
    } else {
      window.history.pushState({}, '', targetUrl);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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
        {/* Projects Hero with Dynamic Technology Categories Filter */}
        <Hero
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Real Projects Grid Sourced Directly from the PDF */}
        <Works projects={filteredProjects} />

        {/* Call to Action Section */}
        <CTA onNavigateContact={handleNavigateContact} />
      </main>

      {/* Footer Section */}
      <Footer
        onNavigateContact={handleNavigateContact}
        onNavigateAbout={handleNavigateAbout}
        onNavigateHome={handleNavigateHome}
      />
    </div>
  );
};

export default Projects;
