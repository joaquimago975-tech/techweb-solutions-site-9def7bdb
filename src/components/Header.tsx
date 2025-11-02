import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gold-accent cursor-pointer" onClick={() => scrollToSection('home')}>
            Techweb Solutions
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">Sobre</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Serviços</button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfólio</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contactos</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left nav-link py-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left nav-link py-2">Sobre</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left nav-link py-2">Serviços</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left nav-link py-2">Portfólio</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left nav-link py-2">Contactos</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
