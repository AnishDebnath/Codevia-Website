import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

// ponytail: lightweight, clean router supporting clean path navigation without hashes
export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path === '/projects') return '/projects';
      if (path === '/contact') return '/contact';
      if (path === '/about') return '/about';
      if (path === '/services') return '/services';
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      if (path === '/projects') {
        setCurrentPath('/projects');
      } else if (path === '/contact') {
        setCurrentPath('/contact');
      } else if (path === '/about') {
        setCurrentPath('/about');
      } else if (path === '/services') {
        setCurrentPath('/services');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (currentPath === '/projects') {
      document.title = 'Projects — Codevia';
    } else if (currentPath === '/contact') {
      document.title = 'Contact Us — Codevia';
    } else if (currentPath === '/about') {
      document.title = 'About Us — Codevia';
    } else if (currentPath === '/services') {
      document.title = 'Services — Codevia';
    } else {
      document.title = 'Codevia — Technology with Purpose';
    }

    if (currentPath === '/services') {
      const timer = setTimeout(() => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentPath]);

  const navigate = (to: string) => {
    const cleanPath = to.split('#')[0] || '/';
    window.history.pushState({}, '', cleanPath);
    setCurrentPath(cleanPath);

    if (cleanPath === '/services') {
      setTimeout(() => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {currentPath === '/projects' ? (
        <Projects onNavigate={navigate} />
      ) : currentPath === '/contact' ? (
        <Contact onNavigate={navigate} />
      ) : currentPath === '/about' ? (
        <About onNavigate={navigate} />
      ) : (
        <Home onNavigate={navigate} />
      )}
    </>
  );
}
