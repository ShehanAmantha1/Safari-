import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import logoImage from "figma:asset/c665df46f1b869b485fdc4be524bf74067355d14.png";

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 py-16 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <img 
              src={logoImage} 
              alt="ThryveForge Solutions" 
              className="h-10 w-auto"
            />
            <p className="text-black/60 leading-relaxed max-w-sm">
              Forging digital excellence through innovative web development, software solutions, and SaaS platforms.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <h3 className="tracking-tight mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Web Development</a></li>
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">SaaS Solutions</a></li>
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Mobile Apps</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <h3 className="tracking-tight mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Our Work</a></li>
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <h3 className="tracking-tight mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Documentation</a></li>
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Support</a></li>
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <h3 className="tracking-tight mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-black/60 hover:text-black transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-black/60">© 2025 ThryveForge Solution. All rights reserved.</p>
          <p className="text-sm text-black/60">Crafted with precision and innovation</p>
        </div>
      </div>
    </footer>
  );
}