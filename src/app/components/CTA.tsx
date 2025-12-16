import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-black text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl tracking-tight leading-[0.95]">
              Ready to forge
              <br />
              your digital future?
            </h2>
            
            <p className="text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can transform your vision into a powerful digital reality.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#C5A028] px-10 py-7 h-auto text-lg group">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-10 py-7 h-auto text-lg">
              <Mail className="mr-2 w-5 h-5" />
              hello@thryveforge.com
            </Button>
          </div>
          
          <div className="pt-12 grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-3 border-l-2 border-[#D4AF37] pl-6">
              <div className="text-sm tracking-[0.2em] uppercase text-white/40">Response Time</div>
              <div className="text-2xl">Within 24 Hours</div>
            </div>
            <div className="space-y-3 border-l-2 border-white/20 pl-6">
              <div className="text-sm tracking-[0.2em] uppercase text-white/40">Free Consultation</div>
              <div className="text-2xl">No Commitment</div>
            </div>
            <div className="space-y-3 border-l-2 border-white/20 pl-6">
              <div className="text-sm tracking-[0.2em] uppercase text-white/40">Approach</div>
              <div className="text-2xl">Tailored Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
