import { Check, X } from "lucide-react";
import drSantiagoProfile from "@/assets/dr-santiago-profile.jpg";

const ProblemSection = () => {
  const painPoints = [
    "Acordar exausto mesmo dormindo mais de 8 horas",
    "Névoa mental afetando decisões críticas de negócios", 
    "Stress destruindo seus níveis de energia",
    "Vivendo constantemente à base de cafeína e adrenalina",
    "Perdendo tempo em família devido ao cansaço crônico",
    "Se sentindo mais velho que sua idade apesar do sucesso"
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-background to-muted/20">
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
                Sua rotina se parece com isso?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Você construiu um negócio de sucesso, mas seu corpo está pagando o preço. 
                Soa familiar?
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
                    Existe uma forma melhor
                  </h3>
                  <p className="text-foreground">
                    E se eu te dissesse que os CEOs mais bem-sucedidos do mundo descobriram o segredo para 
                    <span className="font-semibold text-primary"> energia ilimitada, foco a laser e resistência antifrágil?</span>
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