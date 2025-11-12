import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const achievements = [
  "15+ years of industry experience",
  "500+ successful projects delivered",
  "98% client satisfaction rate",
  "50+ industry awards and recognition",
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building Excellence{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Since 2009
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a team of passionate professionals dedicated to helping businesses thrive in the digital age. 
              Our commitment to excellence and innovation has made us a trusted partner for companies worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With a proven track record of success, we combine cutting-edge technology with strategic 
              thinking to deliver solutions that drive real business value.
            </p>
            <Button variant="hero" size="lg" onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}>
              Partner With Us
            </Button>
          </div>

          <div className="animate-fade-in-up">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Our Track Record</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
