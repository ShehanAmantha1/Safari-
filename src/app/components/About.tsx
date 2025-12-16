import { Target, Lightbulb, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Brand Story */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
            <span className="text-sm tracking-[0.2em] uppercase text-black/60">About Us</span>
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Where <span className="italic">Innovation</span> Meets Excellence
          </h2>
          
          <div className="space-y-4 text-lg text-black/70 leading-relaxed">
            <p>
              <span className="font-semibold text-black">ThryveForge Solution</span> combines two powerful concepts: 
              <span className="text-[#D4AF37] font-semibold"> Thrive</span> – representing growth, success, and prosperity, 
              and <span className="text-[#D4AF37] font-semibold">Forge</span> – symbolizing craftsmanship, strength, and creation.
            </p>
            <p>
              We don't just build websites and software – we craft digital experiences that help businesses 
              flourish in the digital landscape. Every project is forged with precision, passion, and purpose.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-black text-white p-10 space-y-4 hover:scale-[1.02] transition-transform duration-300">
            <Target className="w-12 h-12 text-[#D4AF37]" />
            <h3 className="text-3xl">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To empower businesses with cutting-edge digital solutions that drive growth, 
              enhance efficiency, and create lasting impact in the digital world.
            </p>
          </div>
          
          <div className="bg-[#D4AF37] text-black p-10 space-y-4 hover:scale-[1.02] transition-transform duration-300">
            <Lightbulb className="w-12 h-12 text-black" />
            <h3 className="text-3xl">Our Vision</h3>
            <p className="text-black/80 leading-relaxed">
              To become the most trusted digital partner for businesses worldwide, known for 
              innovation, quality, and delivering solutions that exceed expectations.
            </p>
          </div>
        </div>

        {/* Founder Roles */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl tracking-tight mb-4">Leadership Team</h3>
            <p className="text-lg text-black/60">Driven by expertise and passion for innovation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-black/10 p-8 space-y-4 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-black group-hover:bg-[#D4AF37] flex items-center justify-center transition-colors duration-300">
                <Users className="w-8 h-8 text-white group-hover:text-black" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-1">Chief Executive Officer</h4>
                <p className="text-[#D4AF37] mb-3">CEO</p>
                <p className="text-black/70 leading-relaxed">
                  Visionary leader with 10+ years of experience in business strategy, 
                  digital transformation, and scaling tech companies.
                </p>
              </div>
            </div>
            
            <div className="border-2 border-black/10 p-8 space-y-4 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-black group-hover:bg-[#D4AF37] flex items-center justify-center transition-colors duration-300">
                <Users className="w-8 h-8 text-white group-hover:text-black" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-1">Chief Technology Officer</h4>
                <p className="text-[#D4AF37] mb-3">CTO</p>
                <p className="text-black/70 leading-relaxed">
                  Technical mastermind specializing in software architecture, AI/ML integration, 
                  and building scalable SaaS platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
