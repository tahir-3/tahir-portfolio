import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <MotionConfig reducedMotion="user">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border-2 focus:border-border focus:bg-brand-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-neutral-950"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main" className="overflow-x-clip pt-16 sm:pt-20">
      <Hero />
      <Ticker />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </MotionConfig>
);

export default App;
