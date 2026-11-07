import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Statistics } from './Statistics';
import { Services } from './Services';
import { Process } from './Process';
import { Works } from './Works';
import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';
import { CTA } from './CTA';
import { Footer } from './Footer';

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
        <Process />
        <Works />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;

