import { Shield, Zap, HeartHandshake, TrendingUp, Award, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "100% Quality Guarantee",
    description: "We deliver pixel-perfect designs and bug-free code with rigorous quality checks"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality or attention to detail"
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "24/7 support and maintenance to keep your digital assets running smoothly"
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "We build scalable solutions that grow with your business needs"
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Experienced professionals with proven track record in latest technologies"
  },
  {
    icon: Headphones,
    title: "Client-Centric Approach",
    description: "Your vision is our mission. We listen, understand, and deliver beyond expectations"
  }
];

export function WhyChoose() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
                <span className="text-sm tracking-[0.2em] uppercase text-black/60">Why Choose Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                Your trusted partner for
                <br />
                <span className="italic">digital success</span>
              </h2>
              
              <p className="text-lg text-black/60 leading-relaxed">
                We combine technical expertise, creative innovation, and business insight to deliver 
                solutions that don't just meet expectations – they exceed them.
              </p>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-4xl font-bold text-[#D4AF37]">150+</div>
                <div className="text-sm text-black/60">Happy Clients</div>
              </div>
              <div className="w-px h-16 bg-black/10"></div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-[#D4AF37]">100%</div>
                <div className="text-sm text-black/60">Satisfaction Rate</div>
              </div>
              <div className="w-px h-16 bg-black/10"></div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-[#D4AF37]">5+</div>
                <div className="text-sm text-black/60">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="p-6 border-2 border-black/10 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-black group-hover:bg-[#D4AF37] flex items-center justify-center mb-4 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-white group-hover:text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
