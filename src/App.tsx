import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Communicate } from './components/Communicate';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Communicate />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
