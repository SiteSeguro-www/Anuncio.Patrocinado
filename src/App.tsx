/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Features from "./components/Features";
import Comparison from "./components/Comparison";
import PricingOptions from "./components/PricingOptions";
import WhoIsItFor from "./components/WhoIsItFor";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  return (
    <>
      <main className="min-h-screen bg-zinc-950 font-sans selection:bg-blue-500/30 overflow-x-hidden w-full max-w-[100vw]">
        <Hero />
        <VideoSection className="bg-zinc-950 !pt-0" />
        <Features />
        <Comparison />
        <PricingOptions />
        <WhoIsItFor />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}
