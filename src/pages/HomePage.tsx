import { Comparison } from "../components/Comparison";
import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";
import { FinalCTA } from "../components/FinalCTA";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Reliability } from "../components/Reliability";
import { Testimonials } from "../components/Testimonials";
import { UseCases } from "../components/UseCases";
import { ValueProps } from "../components/ValueProps";

export function HomePage() {
  return (
    <>
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
    </>
  );
}