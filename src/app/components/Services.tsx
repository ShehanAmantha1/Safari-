import { Code2, Layers, Rocket, Smartphone, Globe, Database } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks and scalable architectures."
  },
  {
    icon: Rocket,
    title: "SaaS Solutions",
    description: "End-to-end SaaS platform development from concept to launch and beyond."
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Bespoke software solutions tailored to your unique business requirements and workflows."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
  },
  {
    icon: Layers,
    title: "API Development",
    description: "Robust, scalable APIs and microservices architecture for modern applications."
  },
  {
    icon: Database,
    title: "Cloud Infrastructure",
    description: "Cloud-native solutions with automated deployment, scaling, and monitoring."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 lg:px-12 bg-black text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
              <span className="text-sm tracking-[0.2em] uppercase text-white/60">What We Do</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl tracking-tight leading-[0.95]">
              Comprehensive
              <br />
              digital services
            </h2>
            
            <p className="text-xl text-white/60 leading-relaxed">
              From initial concept to final deployment, we provide complete digital solutions that scale with your ambitions.
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border border-white/10 p-8 hover:border-[#D4AF37] transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all">
                    <service.icon className="w-5 h-5 text-white/80 group-hover:text-[#D4AF37]" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl tracking-tight">{service.title}</h3>
                    <p className="text-white/60 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
