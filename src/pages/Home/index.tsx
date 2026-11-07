import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Statistics } from './Statistics';
import { Services } from './Services';
import { Works } from './Works';
import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <Statistics />
        <Services />
        <Works />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
};

export default Home;

