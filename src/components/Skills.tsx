import { Award, Target, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Target,
      title: "Product Ownership",
      description: "Scrum Master & Product Owner Certified, driving agile delivery and product excellence",
      expertise: 95
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Leading API implementation and channel modernization initiatives",
      expertise: 90
    },
    {
      icon: Users,
      title: "Corporate Banking",
      description: "Expert in cash management, trade finance, and corporate banking solutions",
      expertise: 92
    },
    {
      icon: Award,
      title: "Agile Delivery",
      description: "Proven track record in agile methodologies and cross-functional team leadership",
      expertise: 88
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-subtle">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Expertise & Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering comprehensive solutions across the digital banking landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <skill.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/70 font-medium">Proficiency</span>
                    <span className="text-accent font-semibold">{skill.expertise}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.expertise}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card rounded-2xl shadow-card p-8 border border-border animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Certified Professional</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              <span className="px-4 py-2 bg-accent/10 rounded-lg font-medium">
                Scrum Master Certified
              </span>
              <span className="px-4 py-2 bg-accent/10 rounded-lg font-medium">
                Product Owner Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
