import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 lg:px-12 min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-5xl space-y-10">
          <div className="space-y-8">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
              <span className="text-sm tracking-[0.2em] uppercase text-black/60 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                Premium Digital Agency
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] animate-slide-up">
              Digital Solutions That
              <br />
              Help Your Business{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Thrive</span>
                <div className="absolute bottom-2 left-0 right-0 h-3 bg-[#D4AF37]/30 -rotate-1"></div>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-black/60 max-w-3xl leading-relaxed">
              We forge powerful web solutions, cutting-edge software, and innovative SaaS platforms 
              that drive measurable growth for ambitious businesses.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white hover:bg-[#D4AF37] hover:text-black px-8 py-6 h-auto group transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('portfolio')}
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 h-auto transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-black/10">
            <div className="space-y-2 group cursor-default">
              <div className="text-4xl font-semibold group-hover:text-[#D4AF37] transition-colors">150+</div>
              <div className="text-sm text-black/60 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-4xl font-semibold group-hover:text-[#D4AF37] transition-colors">100%</div>
              <div className="text-sm text-black/60 uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-4xl font-semibold group-hover:text-[#D4AF37] transition-colors">24/7</div>
              <div className="text-sm text-black/60 uppercase tracking-wider">Support Available</div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="text-4xl font-semibold group-hover:text-[#D4AF37] transition-colors">Fast</div>
              <div className="text-sm text-black/60 uppercase tracking-wider">Delivery Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
