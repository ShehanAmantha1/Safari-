import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "figma:asset/c665df46f1b869b485fdc4be524bf74067355d14.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection('home')} className="flex items-center group">
          <img 
            src={logoImage} 
            alt="ThryveForge Solutions" 
            className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </button>
        
        <nav className="hidden lg:flex items-center gap-10">
          <button onClick={() => scrollToSection('home')} className="text-black/70 hover:text-black transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-black/70 hover:text-black transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="text-black/70 hover:text-black transition-colors">Services</button>
          <button onClick={() => scrollToSection('packages')} className="text-black/70 hover:text-black transition-colors">Packages</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-black/70 hover:text-black transition-colors">Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className="text-black/70 hover:text-black transition-colors">Contact</button>
        </nav>
        
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#D4AF37] text-black hover:bg-[#C5A028] transition-all duration-300"
          >
            Book Free Consultation
          </Button>
        </div>
        
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-black/10 py-6 px-6 space-y-4">
          <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-black/70 hover:text-black transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-black/70 hover:text-black transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-black/70 hover:text-black transition-colors">Services</button>
          <button onClick={() => scrollToSection('packages')} className="block w-full text-left py-2 text-black/70 hover:text-black transition-colors">Packages</button>
          <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 text-black/70 hover:text-black transition-colors">Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-black/70 hover:text-black transition-colors">Contact</button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028]"
          >
            Book Free Consultation
          </Button>
        </div>
      )}
    </header>
  );
}