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
    const metaDescriptions: Record<string, string> = {
      '/': 'Codevia engineers scalable cloud systems, custom software, UI/UX design, and AI-driven digital products that accelerate modern business growth.',
      '/services': 'Explore Codevia digital services: Custom Software Development, Cloud Architecture, UI/UX Design, and AI & Automation solutions.',
      '/projects': 'Browse Codevia featured projects across AI systems, SaaS platforms, finTech applications, and high-performance web products.',
      '/about': 'Learn about Codevia — our mission, leadership, core engineering values, and our commitment to building purposeful technology.',
      '/contact': 'Get in touch with the Codevia team to discuss your next software, cloud, or design project. Request a proposal today.',
    };

    const titles: Record<string, string> = {
      '/projects': 'Projects — Codevia',
      '/contact': 'Contact Us — Codevia',
      '/about': 'About Us — Codevia',
      '/services': 'Services — Codevia',
      '/': 'Codevia — Technology with Purpose',
    };

    const currentTitle = titles[currentPath] || titles['/'];
    const currentDesc = metaDescriptions[currentPath] || metaDescriptions['/'];

    document.title = currentTitle;

    // Dynamically synchronize meta description, OG tags & canonical link
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (metaDescEl) {
      metaDescEl.setAttribute('content', currentDesc);
    }
    let ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) {
      ogTitleEl.setAttribute('content', currentTitle);
    }
    let ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) {
      ogDescEl.setAttribute('content', currentDesc);
    }
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      const canonicalUrl = `https://codevia.ai${currentPath === '/' ? '' : currentPath}`;
      canonicalEl.setAttribute('href', canonicalUrl);
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
