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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ValueProps />
      <Testimonials />
      <Features />
      <Comparison />
      <HowItWorks />
      <UseCases />
      <Reliability />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}