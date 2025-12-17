import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import { Section } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(Section);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-don-dark text-white selection:bg-don-red selection:text-white">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <div id={Section.HOME}>
          <Hero scrollToSection={scrollToSection} />
        </div>
        
        <div id={Section.SERVICES} className="bg-don-dark relative">
            {/* Background Texture Effect */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <Services />
        </div>
        
        <div id={Section.GALLERY}>
          <Gallery />
        </div>
        
        <div id={Section.CONTACT} className="bg-don-dark relative">
           {/* Angled separator */}
           <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-don-gray">
                  <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
              </svg>
           </div>
          <Contact />
        </div>
      </main>

      <Footer />
      
      <AIChat />
    </div>
  );
}

export default App;