import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

// ponytail: lightweight, dependency-free router supporting both path and hash navigation
export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/projects' || hash === '#/projects' || hash === '#projects-page') {
        return '/projects';
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
    } else {
      window.history.pushState({}, '', '/');
      setCurrentPath('/');
    }
  };

  return (
    <>
      {currentPath === '/projects' ? (
        <Projects onNavigate={navigate} />
      ) : (
        <Home onNavigate={navigate} />
      )}
    </>
  );
}
