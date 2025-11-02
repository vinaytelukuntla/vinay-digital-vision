import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "13+ years in BFSI industry",
    "Expert in Digital Transformation",
    "Agile & Product Ownership",
    "API & Channel Implementation"
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Transforming Banking Through Innovation
            </h2>
          </div>

          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              I'm a digital banking specialist passionate about bridging business goals 
              with scalable, customer-centric technology. From APIs to agile delivery, 
              I thrive at the intersection of strategy and execution.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              With over 13 years of experience across UAE's premier banking institutions, 
              I've led transformative initiatives in corporate banking, cash management, 
              and digital channel implementation. My approach combines technical expertise 
              with a deep understanding of business needs, ensuring solutions that not only 
              work but also create exceptional user experiences.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xl font-semibold text-foreground italic">
                "Collaboration is the key to transformation — I believe in turning 
                complex banking processes into delightful user experiences."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
