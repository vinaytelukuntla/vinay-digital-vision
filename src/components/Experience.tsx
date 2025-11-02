import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Mashreq",
      role: "Digital & Corporate Banking Specialist",
      period: "Current",
      description: "Leading digital transformation initiatives and corporate banking solutions",
      color: "from-blue-500 to-blue-600"
    },
    {
      company: "First Abu Dhabi Bank (FAB)",
      role: "Product Owner & Business Analyst",
      period: "Previous",
      description: "Spearheaded agile product development and API implementation",
      color: "from-green-500 to-green-600"
    },
    {
      company: "Emirates NBD",
      role: "Business Analyst",
      period: "Previous",
      description: "Managed cash management solutions and channel implementations",
      color: "from-red-500 to-orange-500"
    },
    {
      company: "ValueLabs",
      role: "Business Analyst",
      period: "Previous",
      description: "Delivered banking solutions and digital transformation projects",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Experience Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence across UAE's leading banking institutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-12 md:mb-16 animate-slide-up ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-8 h-8 transform md:-translate-x-1/2 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-gold z-10`}>
                  <Building2 className="h-4 w-4 text-white" />
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="bg-card rounded-xl shadow-card p-6 hover:shadow-elegant transition-shadow duration-300 border border-border">
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.company}
                    </h3>
                    
                    <p className="text-muted-foreground font-medium mb-3">
                      {exp.role}
                    </p>
                    
                    <p className="text-foreground/70">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
