import { Building2, HeartPulse, ShoppingBag, GraduationCap, Home, Linkedin, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AIAgentsPage = () => {
  const industries = [
    {
      icon: Building2,
      title: "Banking & Financial Services",
      description: "AI agents for credit analysis, fraud detection, client onboarding, and digital support.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      description: "Smart agents for patient triage, appointment scheduling, and records management.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Personalized shopping and inventory optimization agents.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "AI tutors, course recommendation systems, and student progress analytics.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "AI bots for lead nurturing, property recommendations, and CRM automation.",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                AI Innovation
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
                AI Agents by Industry
              </h1>
              <p className="text-xl text-primary-foreground/80">
                AI is reshaping industries. Here's how domain-focused AI agents can redefine 
                efficiency and customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`inline-block p-4 bg-gradient-to-r ${industry.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {industry.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12 border-l-4 border-accent animate-fade-in">
              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl font-bold text-foreground italic mb-4">
                  "AI isn't here to replace — it's here to redefine how we solve business challenges."
                </blockquote>
                <p className="text-accent font-semibold text-lg">— Vinay Telukuntla</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's collaborate on building your industry's next AI-powered success story.
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.linkedin.com/in/vinaytelukuntla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Button>
                </a>
                
                <a href="mailto:vinay.telukuntla@example.com">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-border hover:bg-accent/10"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAgentsPage;
