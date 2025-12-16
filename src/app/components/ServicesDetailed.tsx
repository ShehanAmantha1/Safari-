import { Globe, GraduationCap, Code2, Share2, Settings, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom, responsive websites that captivate audiences and drive conversions.",
    features: [
      "Responsive & Mobile-First Design",
      "SEO Optimized Structure",
      "Fast Loading & Performance",
      "Content Management System",
      "E-commerce Integration"
    ]
  },
  {
    icon: GraduationCap,
    title: "LMS Solutions",
    description: "Complete Learning Management Systems for educational institutions and corporate training.",
    features: [
      "Student/Teacher Portals",
      "Course Management",
      "Assessment & Grading",
      "Analytics & Reporting",
      "Mobile Learning Apps"
    ]
  },
  {
    icon: Code2,
    title: "Software & SaaS Development",
    description: "Scalable software solutions and SaaS platforms built for growth and efficiency.",
    features: [
      "Custom Software Solutions",
      "Cloud-Based Applications",
      "API Development",
      "Database Architecture",
      "Multi-tenant SaaS Platforms"
    ]
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic social media presence that builds brand awareness and engagement.",
    features: [
      "Content Strategy & Planning",
      "Social Media Calendar",
      "Post Design & Copywriting",
      "Community Management",
      "Analytics & Insights"
    ]
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing technical support and maintenance to keep your digital assets running smoothly.",
    features: [
      "24/7 Technical Support",
      "Regular Updates & Backups",
      "Security Monitoring",
      "Performance Optimization",
      "Bug Fixes & Improvements"
    ]
  },
  {
    icon: Sparkles,
    title: "Future Products",
    description: "Exciting new products and services currently in development.",
    features: [
      "AI-Powered Solutions",
      "Advanced Analytics Tools",
      "Marketing Automation",
      "Mobile App Templates",
      "Coming Soon..."
    ],
    comingSoon: true
  }
];

export function ServicesDetailed() {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-[#fafafa]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
            <span className="text-sm tracking-[0.2em] uppercase text-black/60">Our Services</span>
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Comprehensive Digital
            <br />
            <span className="italic">Solutions</span>
          </h2>
          
          <p className="text-lg text-black/60">
            From concept to launch and beyond, we provide complete digital services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border-2 border-black/10 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl group ${service.comingSoon ? 'opacity-90' : ''}`}
            >
              <CardContent className="p-8 space-y-6">
                <div className="w-14 h-14 bg-black group-hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-300">
                  <service.icon className="w-7 h-7 text-white group-hover:text-black transition-colors" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl tracking-tight flex items-center gap-2">
                    {service.title}
                    {service.comingSoon && (
                      <span className="text-xs bg-[#D4AF37] text-black px-2 py-1 rounded">Soon</span>
                    )}
                  </h3>
                  <p className="text-black/60 leading-relaxed">{service.description}</p>
                </div>
                
                <ul className="space-y-2 pt-4 border-t border-black/10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-black/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
