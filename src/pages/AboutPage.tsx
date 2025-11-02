import { Award, Briefcase, Heart, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import vinayPhoto from "@/assets/vinay-photo.jpg";

const AboutPage = () => {
  const highlights = [
    { icon: Briefcase, label: "13+ Years in BFSI" },
    { icon: Users, label: "Agile Delivery & Product Ownership" },
    { icon: Award, label: "Digital Transformation Specialist" },
    { icon: Award, label: "Scrum Master & Product Owner Certified" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container-width">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Me
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
                Building the Future of Digital Banking
              </h1>
            </div>

            {/* Photo and Intro */}
            <div className="grid md:grid-cols-2 gap-12 items-center bg-card rounded-2xl shadow-elegant p-8 md:p-12 animate-fade-in">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <img
                    src={vinayPhoto}
                    alt="Vinay Telukuntla - Digital Banking Specialist"
                    className="relative w-64 h-64 object-cover rounded-full shadow-gold border-4 border-accent/20 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Headline */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Hi, I'm Vinay — I bridge business goals and digital innovation to create banking experiences that work smarter.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed animate-slide-up">
              <p>
                For over a decade, I've been helping banks across the UAE transform how they operate, 
                innovate, and connect with customers. From corporate to retail, I've worked with digital 
                products that touch millions of users — always with a focus on making technology intuitive 
                and impactful.
              </p>
              
              <p>
                When I'm not building digital journeys, I enjoy learning about AI in finance, mentoring 
                business analysts, and exploring how technology can simplify life.
              </p>
            </div>

            {/* Professional Snapshot */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Professional Snapshot
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-foreground font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Beyond Work */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-subtle rounded-2xl p-12 shadow-card animate-fade-in">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Beyond Work</h3>
                <p className="text-lg text-foreground/80 max-w-2xl font-body italic">
                  "Proud dad, lifelong learner, and believer that every great product starts with empathy."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
