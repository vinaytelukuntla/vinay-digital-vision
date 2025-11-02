import { BookOpen, TrendingUp, Target, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const InsightsPage = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: "AI in Banking",
      description: "Exploring artificial intelligence applications in financial services",
      count: "Coming Soon",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Agile Delivery",
      description: "Best practices in agile methodologies and product development",
      count: "Coming Soon",
      color: "from-green-500 to-green-600",
    },
    {
      icon: BookOpen,
      title: "Product Strategy",
      description: "Insights on building customer-centric digital products",
      count: "Coming Soon",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Thoughts on team leadership and digital transformation",
      count: "Coming Soon",
      color: "from-orange-500 to-orange-600",
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
                Insights & Perspectives
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
                Thought Leadership in Digital Banking
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Sharing insights on digital banking, AI adoption, agile product ownership, and strategic innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Explore by Category
              </h2>
              <p className="text-lg text-muted-foreground">
                Deep dives into the topics shaping the future of banking
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="bg-card border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {category.description}
                        </p>
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-lg">
                          {category.count}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card rounded-2xl shadow-elegant p-12 animate-fade-in">
              <BookOpen className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Content Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm currently working on bringing you valuable insights and thought leadership content. 
                Check back soon for articles on digital banking transformation, AI adoption, and product strategy.
              </p>
              <p className="text-accent font-semibold">
                Stay tuned for expert perspectives from the field!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsightsPage;
