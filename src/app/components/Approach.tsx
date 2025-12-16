import { Sparkles, Target, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Sparkles,
    title: "Discovery",
    description: "We dive deep into your vision, goals, and challenges to understand exactly what you need."
  },
  {
    number: "02",
    icon: Target,
    title: "Strategy",
    description: "Crafting a comprehensive roadmap with clear milestones and measurable outcomes."
  },
  {
    number: "03",
    icon: Zap,
    title: "Development",
    description: "Agile development with regular updates, ensuring transparency and alignment."
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Launch & Growth",
    description: "Seamless deployment with ongoing support to optimize and scale your solution."
  }
];

export function Approach() {
  return (
    <section id="approach" className="py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-3xl mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
            <span className="text-sm tracking-[0.2em] uppercase text-black/60">Our Process</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl tracking-tight leading-[0.95]">
            A proven approach
            <br />
            to digital excellence
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="space-y-6 group">
              <div className="flex items-start gap-6">
                <div className="space-y-4">
                  <span className="text-7xl tracking-tighter text-black/10 group-hover:text-[#D4AF37]/20 transition-colors">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 space-y-4 pt-4">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-3xl tracking-tight">{step.title}</h3>
                  <p className="text-lg text-black/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="h-[1px] bg-black/10 ml-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
