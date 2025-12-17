import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Acasă', value: Section.HOME },
    { label: 'Servicii', value: Section.SERVICES },
    { label: 'Galerie', value: Section.GALLERY },
    { label: 'Contact', value: Section.CONTACT },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-don-dark/95 backdrop-blur-sm border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-display font-bold italic tracking-wider cursor-pointer text-white"
          onClick={() => scrollToSection(Section.HOME)}
        >
          DON <span className="text-don-red">GARAGE</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => scrollToSection(link.value)}
              className={`text-sm font-medium uppercase tracking-widest hover:text-don-red transition-colors ${activeSection === link.value ? 'text-don-red' : 'text-gray-300'}`}
            >
              {link.label}
            </button>
          ))}
          <a 
            href="tel:+40722000000"
            className="flex items-center gap-2 bg-don-red hover:bg-red-700 text-white px-5 py-2 rounded-sm font-bold skew-x-[-10deg] transition-transform active:scale-95"
          >
            <Phone size={18} className="skew-x-[10deg]" />
            <span className="skew-x-[10deg]">0722 000 000</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-don-dark border-t border-white/10 p-4 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => {
                scrollToSection(link.value);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left text-lg font-medium py-2 border-b border-white/5 ${activeSection === link.value ? 'text-don-red' : 'text-gray-300'}`}
            >
              {link.label}
            </button>
          ))}
          <a 
            href="tel:+40722000000"
            className="flex justify-center items-center gap-2 bg-don-red text-white py-3 rounded font-bold"
          >
            <Phone size={20} />
            SUNĂ ACUM
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;