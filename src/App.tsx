/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import PricingOptions from './components/PricingOptions';
import WhoIsItFor from './components/WhoIsItFor';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-blue-500/30">
      <Hero />
      <Features />
      <Comparison />
      <PricingOptions />
      <WhoIsItFor />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
