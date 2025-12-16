import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    text: "ThryveForge transformed our outdated website into a modern, high-performing platform. Their attention to detail and commitment to excellence is unmatched."
  },
  {
    name: "Priya Sharma",
    role: "Founder, EduLearn Online",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
    text: "The LMS solution they built for us has revolutionized our online teaching platform. Absolutely professional team with great communication throughout."
  },
  {
    name: "Amit Patel",
    role: "Owner, Gourmet Delights",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    rating: 5,
    text: "Our restaurant's online presence has never been better. The website is beautiful, fast, and the online reservation system works flawlessly. Highly recommend!"
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Director, StyleHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
    text: "From concept to launch, ThryveForge exceeded our expectations. Their e-commerce solution boosted our online sales by 200% in just 3 months!"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#fafafa]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
            <span className="text-sm tracking-[0.2em] uppercase text-black/60">Testimonials</span>
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            What Our Clients
            <br />
            <span className="italic">Say About Us</span>
          </h2>
          
          <p className="text-lg text-black/60">
            Don't just take our word for it – hear from businesses we've helped thrive
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 border-black/10 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8 space-y-6">
                <Quote className="w-10 h-10 text-[#D4AF37] opacity-50" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                
                <p className="text-lg text-black/80 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-black/10">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-black/60">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-black/60 text-lg">
            Join 150+ satisfied clients who've transformed their business with ThryveForge
          </p>
        </div>
      </div>
    </section>
  );
}
