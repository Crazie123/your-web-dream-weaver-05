import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Users, TrendingUp, Shield, Award } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Fast Implementation",
    description: "Get up and running quickly with our streamlined processes and dedicated support team.",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Data-driven strategies tailored to your unique business goals and market position.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work with seasoned professionals who understand your industry inside and out.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Proven methodologies that consistently deliver measurable business growth.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee for peace of mind.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized excellence with multiple industry awards and certifications.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine innovation, expertise, and dedication to deliver exceptional results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="text-accent" size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
