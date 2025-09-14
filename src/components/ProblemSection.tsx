import { Check, X } from "lucide-react";
import drSantiagoProfile from "@/assets/dr-santiago-profile.jpg";

const ProblemSection = () => {
  const painPoints = [
    "Waking up exhausted despite 8+ hours of sleep",
    "Brain fog affecting critical business decisions", 
    "Stress eating destroying your energy levels",
    "Constantly running on caffeine and adrenaline",
    "Missing family time due to chronic fatigue",
    "Feeling older than your age despite success"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dr. Santiago Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-3xl"></div>
              <img 
                src={drSantiagoProfile}
                alt="Dr. Santiago - Biohacking Expert"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-hero hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Problem Statement */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-section-title mb-6">
                Does your routine look like this?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                You've built a successful business, but your body is paying the price. 
                Sound familiar?
              </p>
            </div>

            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20 hover:border-destructive/40 transition-colors"
                >
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-start gap-3 mb-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    There's a better way
                  </h3>
                  <p className="text-foreground">
                    What if I told you that the world's most successful CEOs have cracked the code to 
                    <span className="font-semibold text-primary"> unlimited energy, laser focus, and antifragile resilience?</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;