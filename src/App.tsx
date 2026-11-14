import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

// ponytail: lightweight, dependency-free router supporting both path and hash navigation
export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/projects' || hash === '#/projects' || hash === '#projects-page') {
        return '/projects';
      }
      if (path === '/contact' || hash === '#/contact' || hash === '#contact-page') {
        return '/contact';
      }
      if (path === '/about' || hash === '#/about' || hash === '#about-page') {
        return '/about';
      }
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/projects' || hash === '#/projects' || hash === '#projects-page') {
        setCurrentPath('/projects');
      } else if (path === '/contact' || hash === '#/contact' || hash === '#contact-page') {
        setCurrentPath('/contact');
      } else if (path === '/about' || hash === '#/about' || hash === '#about-page') {
        setCurrentPath('/about');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (to: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (to === '/projects') {
      window.history.pushState({}, '', '/projects');
      setCurrentPath('/projects');
    } else if (to === '/contact') {
      window.history.pushState({}, '', '/contact');
      setCurrentPath('/contact');
    } else if (to === '/about') {
      window.history.pushState({}, '', '/about');
      setCurrentPath('/about');
    } else {
      window.history.pushState({}, '', '/');
      setCurrentPath('/');
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
