import { ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Gourmet Restaurant",
    category: "Restaurant Website",
    description: "Elegant website for a fine dining restaurant with online reservation system and menu showcase.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    tags: ["Web Design", "E-commerce", "Booking System"]
  },
  {
    title: "ShopHub E-commerce",
    category: "E-commerce Platform",
    description: "Full-featured online store with payment integration, inventory management, and customer portal.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
    tags: ["E-commerce", "Payment Gateway", "CMS"]
  },
  {
    title: "EduLearn Platform",
    category: "Learning Management System",
    description: "Complete LMS solution for online tutoring with video lessons, assignments, and progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
    tags: ["LMS", "Education", "Video Platform"]
  },
  {
    title: "FitLife Wellness",
    category: "Health & Fitness",
    description: "Fitness center website with class scheduling, membership management, and trainer profiles.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    tags: ["Web Design", "Booking", "CRM"]
  },
  {
    title: "TechStart SaaS",
    category: "SaaS Platform",
    description: "Cloud-based project management tool with team collaboration features and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    tags: ["SaaS", "Dashboard", "Analytics"]
  },
  {
    title: "StyleHub Boutique",
    category: "Fashion E-commerce",
    description: "Modern online boutique with product customization and virtual try-on features.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800",
    tags: ["E-commerce", "Fashion", "AR Features"]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 lg:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
            <span className="text-sm tracking-[0.2em] uppercase text-black/60">Our Work</span>
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Projects We're
            <br />
            <span className="italic">Proud Of</span>
          </h2>
          
          <p className="text-lg text-black/60">
            Explore our portfolio of successful projects across various industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border-2 border-black/10 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-xl"
            >
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-[#D4AF37] uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-black/60 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-black/5 text-black/70 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-black/60 mb-6">
            These are demo projects. Want to see how we can transform your business?
          </p>
          <button className="group inline-flex items-center gap-2 text-black hover:text-[#D4AF37] transition-colors">
            <span className="text-lg font-semibold">Let's discuss your project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
