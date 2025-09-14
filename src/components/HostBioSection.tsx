import { Award, Users, BookOpen, TrendingUp } from "lucide-react";
import ceoAntifragilBook from "@/assets/ceo-antifragil-book.jpg";

const HostBioSection = () => {
  const achievements = [
    {
      icon: BookOpen,
      text: "Best-selling author of 'CEO Antifrágil'"
    },
    {
      icon: Users,
      text: "Transformed 10,000+ entrepreneurs"
    },
    {
      icon: Award,
      text: "Featured in Forbes, Entrepreneur, Inc."
    },
    {
      icon: TrendingUp,
      text: "Helped clients increase productivity by 300%"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Book Cover */}
          <div className="animate-slide-up">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent rounded-2xl blur-3xl"></div>
              <img 
                src={ceoAntifragilBook}
                alt="CEO Antifrágil Book by Dr. Santiago"
                className="relative w-full rounded-2xl shadow-hero hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                #1 Bestseller
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-section-title mb-6">
                Meet Dr. Santiago
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Dr. Santiago is a medical doctor turned serial entrepreneur who discovered 
                  the hard way that traditional medicine wasn't designed for high-performance business leaders.
                </p>
                <p>
                  After burning out twice while building multi-million dollar companies, 
                  he spent 7 years researching and testing cutting-edge biohacking protocols 
                  with elite athletes, Navy SEALs, and Fortune 500 CEOs.
                </p>
                <p className="text-foreground font-medium">
                  The result? The <span className="text-primary">"Antifragile CEO Method"</span> - 
                  a systematic approach that makes entrepreneurs stronger under stress 
                  while optimizing their health, energy, and cognitive performance.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <achievement.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
              <blockquote className="text-foreground italic">
                "I've dedicated my life to solving the entrepreneur's dilemma: 
                How to build billion-dollar companies without sacrificing your health, 
                relationships, or sanity in the process."
              </blockquote>
              <cite className="block mt-3 text-primary font-semibold not-italic">
                - Dr. Santiago
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostBioSection;