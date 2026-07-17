import React, { useState, Suspense, lazy } from 'react';
import StickyNav from '../components/StickyNav';
import HeroSection from '../components/HeroSection';
import DemoModal from '../components/DemoModal';

// Dynamically import components below the fold for code-splitting
const ProblemSection = lazy(() => import('../components/ProblemSection'));
const LogoRevealSection = lazy(() => import('../components/LogoRevealSection'));
const PartnershipSection = lazy(() => import('../components/PartnershipSection'));
const PanelShowcase = lazy(() => import('../components/PanelShowcase'));

const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const PricingSection = lazy(() => import('../components/PricingSection'));
const FinalCTASection = lazy(() => import('../components/FinalCTASection'));
const Footer = lazy(() => import('../components/Footer'));

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

        <Suspense fallback={<div className="w-full h-screen bg-[#111]" />}>
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
        </Suspense>
      </main>

      {isDemoModalOpen && (
        <DemoModal onClose={() => setIsDemoModalOpen(false)} />
      )}
    </div>
  );
};

export default Home;
