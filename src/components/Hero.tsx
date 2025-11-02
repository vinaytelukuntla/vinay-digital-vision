import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Digital Banking Specialist
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Driving Digital Banking Innovation with{" "}
              <span className="text-gradient-gold">Simplicity</span> and{" "}
              <span className="text-gradient-gold">Strategy</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
              13+ years of experience delivering transformation across UAE's leading banks.
              Bridging business goals with scalable, customer-centric technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://www.linkedin.com/in/vinaytelukuntla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold group"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Let's Connect
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <a href="#contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">13+</div>
                <div className="text-sm text-primary-foreground/70">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">4</div>
                <div className="text-sm text-primary-foreground/70">Major Banks</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent">2</div>
                <div className="text-sm text-primary-foreground/70">Certifications</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <img 
                src={heroPortrait} 
                alt="Vinay Telukuntla - Digital Banking Specialist"
                className="relative rounded-2xl shadow-elegant w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
