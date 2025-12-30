import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Comparison } from './components/Comparison';
import { UseCases } from './components/UseCases';
import { Reliability } from './components/Reliability';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Hero onRequestDemo={() => setIsDemoModalOpen(true)} />
      <ValueProps />
      <Testimonials />
      <Features />
      <Comparison onRequestDemo={() => setIsDemoModalOpen(true)} />
      <HowItWorks onRequestDemo={() => setIsDemoModalOpen(true)} />
      <UseCases />
      <Reliability />
      <FAQ />
      <FinalCTA onRequestDemo={() => setIsDemoModalOpen(true)} />
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}