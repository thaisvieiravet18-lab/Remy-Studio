/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';
import TickerStrong from './components/TickerStrong';
import Hero from './components/Hero';
import Deliverables from './components/Deliverables';
import Comparison from './components/Comparison';
import About from './components/About';
import Results from './components/Results';
import Portfolio from './components/Portfolio';
import ReelsShowcase from './components/ReelsShowcase';
import Testimonials from './components/Testimonials';
import PressureBlock from './components/PressureBlock';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Atmosphere from './components/Atmosphere';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-remy-sand selection:text-remy-black bg-transparent">
      <LoadingScreen />
      <CustomCursor />
      <div id="bg-luxo" />
      <Atmosphere />
      
      <main className="relative">
        <Ticker />
        <Navbar />
        <Hero />
        <Results />
        <About />
        <Deliverables />
        <Testimonials />
        <TickerStrong />
        <ReelsShowcase />
        <Portfolio />
        <PressureBlock />
        <Comparison />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
