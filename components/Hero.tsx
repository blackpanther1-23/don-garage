import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Section } from '../types';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2898&auto=format&fit=crop" 
          alt="Luxury Car Garage" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-don-dark via-don-dark/70 to-don-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="md:w-2/3 lg:w-1/2">
          <div className="inline-block bg-don-red/20 border border-don-red/50 text-don-red px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            Premium Auto Services
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight">
            TRANSFORMĂM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-don-red to-orange-600">PASIUNEA</span> ÎN <br />
            PERFORMANȚĂ
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Service auto dedicat, tuning stage 1-3 și detailing la cele mai înalte standarde. 
            Calitate fără compromisuri pentru mașina ta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => scrollToSection(Section.CONTACT)}
              className="group bg-don-red hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-sm transition-all flex items-center justify-center gap-2"
            >
              PROGRAMEAZĂ-TE
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection(Section.SERVICES)}
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 text-lg font-bold rounded-sm transition-all"
            >
              VEZI SERVICII
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block cursor-pointer" onClick={() => scrollToSection(Section.SERVICES)}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;