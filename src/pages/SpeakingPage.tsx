import { Users, Lightbulb, Target, Award, Linkedin, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SpeakingPage = () => {
  const topics = [
    {
      icon: Target,
      title: "Digital Banking Transformation",
      description: "Strategic insights on modernizing banking operations and customer experiences",
    },
    {
      icon: Lightbulb,
      title: "AI in Financial Services",
      description: "Practical applications of artificial intelligence in banking and finance",
    },
    {
      icon: Users,
      title: "Agile Product Ownership",
      description: "Best practices for leading product teams and delivering value",
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
                Speaking & Mentoring
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
                Sharing Knowledge, Building Leaders
              </h1>
              <p className="text-xl text-primary-foreground/80">
                I mentor business analysts and aspiring product owners — helping them translate 
                business problems into scalable digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Speaking Topics
              </h2>
              <p className="text-lg text-muted-foreground">
                Areas where I can add value to your event or team
              </p>
            </div>

            <div className="grid gap-6">
              {topics.map((topic, index) => (
                <Card
                  key={index}
                  className="bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors flex-shrink-0">
                        <topic.icon className="h-8 w-8 text-accent" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {topic.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentoring Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block p-4 bg-accent/10 rounded-xl mb-6">
                  <Award className="h-12 w-12 text-accent" />
                </div>
                
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Mentoring Future Leaders
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  I'm passionate about developing the next generation of business analysts and product owners. 
                  Through one-on-one mentoring, I help professionals:
                </p>
                
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Bridge the gap between business requirements and technical solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Master agile methodologies and product ownership principles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Navigate complex stakeholder relationships in banking environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Build careers in digital transformation and financial services</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl shadow-elegant p-8 border border-border">
                <blockquote className="text-xl text-foreground italic mb-6 leading-relaxed">
                  "Great products are built by great teams. I believe in empowering individuals 
                  with the skills and confidence to drive meaningful change in their organizations."
                </blockquote>
                <p className="text-accent font-semibold">— Vinay Telukuntla</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in having me speak at your event, conduct a workshop, or mentor your team? 
              I'd love to hear from you.
            </p>
            
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
                  Send an Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeakingPage;
