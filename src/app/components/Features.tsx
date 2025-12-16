import { Code2, Cloud, Shield, Zap, Users, BarChart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs."
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions that grow with your business on AWS, Azure, and GCP."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with enterprise-grade security solutions and compliance management."
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize your operations with automation, AI, and innovative digital strategies."
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Extend your team with our skilled developers, designers, and IT professionals."
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics and BI solutions."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive IT Solutions for Modern Businesses
          </h2>
          <p className="text-xl text-gray-600">
            From strategy to implementation, we provide end-to-end technology services that drive growth and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
