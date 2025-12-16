import { Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const packages = [
  {
    name: "Starter",
    subtitle: "Local Launch",
    price: "₹15,000",
    description: "Perfect for small businesses and startups looking to establish their online presence",
    features: [
      "5-Page Responsive Website",
      "Mobile-Friendly Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links",
      "1 Month Free Support",
      "Google Maps Integration",
      "Fast Loading Speed"
    ],
    popular: false
  },
  {
    name: "Growth",
    subtitle: "Business Boost",
    price: "₹35,000",
    description: "Ideal for growing businesses that need advanced features and functionality",
    features: [
      "10-Page Website",
      "Custom Design & Branding",
      "Advanced SEO Optimization",
      "Content Management System",
      "E-commerce Integration (Up to 50 products)",
      "Payment Gateway Setup",
      "Email Marketing Integration",
      "3 Months Free Support",
      "Blog Section",
      "Analytics Dashboard"
    ],
    popular: true
  },
  {
    name: "Premium",
    subtitle: "Pro Presence",
    price: "₹75,000",
    description: "Complete solution for established businesses requiring premium features",
    features: [
      "Unlimited Pages",
      "Premium Custom Design",
      "Complete SEO Package",
      "Advanced CMS",
      "Full E-commerce Solution",
      "Multi-vendor Marketplace (Optional)",
      "Custom Web Application Features",
      "API Integrations",
      "Mobile App (iOS/Android)",
      "6 Months Free Support",
      "Priority Support 24/7",
      "Advanced Analytics & Reporting",
      "Security & Performance Optimization"
    ],
    popular: false
  }
];

export function Packages() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-24 px-6 lg:px-12 bg-black text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
            <span className="text-sm tracking-[0.2em] uppercase text-white/60">Pricing Plans</span>
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Flexible Packages for
            <br />
            Every <span className="italic">Business</span>
          </h2>
          
          <p className="text-lg text-white/60">
            Choose the perfect package that fits your needs and budget
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`bg-white text-black border-2 transition-all duration-300 hover:scale-[1.02] ${
                pkg.popular 
                  ? 'border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 relative' 
                  : 'border-white/10 hover:border-[#D4AF37]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black px-6 py-2 text-sm font-semibold tracking-wider">
                  MOST POPULAR
                </div>
              )}
              
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold">{pkg.name}</h3>
                  <p className="text-[#D4AF37] uppercase tracking-wider text-sm">{pkg.subtitle}</p>
                </div>
                
                <div className="py-4 border-y border-black/10">
                  <div className="text-5xl font-bold">{pkg.price}</div>
                  <p className="text-black/60 mt-2">One-time payment</p>
                </div>
                
                <p className="text-black/70 leading-relaxed min-h-[3rem]">
                  {pkg.description}
                </p>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-black/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full py-6 h-auto group transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#D4AF37] text-black hover:bg-black hover:text-white'
                      : 'bg-black text-white hover:bg-[#D4AF37] hover:text-black'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/60 mb-4">
            Need a custom solution? We can create a package tailored to your specific requirements.
          </p>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black"
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
