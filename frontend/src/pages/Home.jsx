import React, { useState } from 'react';
import StickyNav from '../components/StickyNav';
import HeroSection from '../components/HeroSection';
import DemoModal from '../components/DemoModal';

import ProblemSection from '../components/ProblemSection';
import LogoRevealSection from '../components/LogoRevealSection';
import PartnershipSection from '../components/PartnershipSection';
import PanelShowcase from '../components/PanelShowcase';

import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';

const Home = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="relative bg-background text-text min-h-screen">
      
      {/* Floating Left Sidebar Index (Shopify Editions Style) */}
      <StickyNav />

      {/* Main Full-Bleed Scrolling Content Area */}
      <main className="w-full relative">
        <section id="hero">
          <HeroSection openDemoModal={() => setIsDemoModalOpen(true)} />
        </section>

          <section id="problem">
            <ProblemSection />
          </section>
          <section id="logo">
            <LogoRevealSection />
          </section>
          <section id="partnership">
            <PartnershipSection />
          </section>
          <section id="panels">
            <PanelShowcase />
          </section>

          <section id="testimonials">
            <TestimonialsSection />
          </section>
          <section id="pricing">
            <PricingSection />
          </section>
          <section id="contact">
            <FinalCTASection openDemoModal={() => setIsDemoModalOpen(true)} />
          </section>
          <Footer />
      </main>

      {isDemoModalOpen && (
        <DemoModal onClose={() => setIsDemoModalOpen(false)} />
      )}
    </div>
  );
};

export default Home;
