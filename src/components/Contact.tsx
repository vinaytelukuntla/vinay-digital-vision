import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-hero">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-slide-up">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
              Let's Build the Future of Banking, Together
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-12">
              Whether you're looking to discuss digital transformation, explore collaboration 
              opportunities, or simply connect with a fellow banking innovator, I'd love to hear from you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a 
              href="https://www.linkedin.com/in/vinaytelukuntla"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold group h-auto py-6"
              >
                <div className="flex flex-col items-center gap-2">
                  <Linkedin className="h-8 w-8 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Connect on LinkedIn</span>
                </div>
              </Button>
            </a>

            <a 
              href="mailto:vinay.telukuntla@example.com"
              className="block"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 group h-auto py-6"
              >
                <div className="flex flex-col items-center gap-2">
                  <Mail className="h-8 w-8 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Send an Email</span>
                </div>
              </Button>
            </a>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
              <MessageSquare className="h-5 w-5" />
              <p className="text-sm">
                Open to consulting opportunities, speaking engagements, and strategic partnerships
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
