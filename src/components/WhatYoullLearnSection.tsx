import { Brain, Zap, Shield, Target } from "lucide-react";

const WhatYoullLearnSection = () => {
  const features = [
    {
      icon: Brain,
      title: "The Biohacking Pillar",
      description: "Discover the 3 foundational biohacks that elite CEOs use to optimize their cognitive performance and decision-making ability."
    },
    {
      icon: Zap,
      title: "The Energy Protocol",
      description: "Learn the exact morning routine that gives you 10+ hours of sustained energy without crashes, caffeine dependency, or burnout."
    },
    {
      icon: Shield,
      title: "The Antifragile Framework", 
      description: "Master the stress-optimization system that makes you stronger under pressure while protecting your long-term health."
    },
    {
      icon: Target,
      title: "The CEO Recovery Method",
      description: "Implement the 20-minute evening protocol that guarantees deep sleep and cellular recovery for peak next-day performance."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            What You'll Learn in This Masterclass
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In just 90 minutes, you'll discover the exact strategies that transformed 
            exhausted entrepreneurs into unstoppable, antifragile CEOs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-feature group hover:border-primary/30"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-yellow-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-feature-title text-primary mb-3">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary font-medium">
              Plus: Exclusive Q&A session with Dr. Santiago
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearnSection;