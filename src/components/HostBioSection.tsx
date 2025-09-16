import { Award, Users, BookOpen, TrendingUp } from "lucide-react";
import drSantiago from "@/assets/dr-santiago.png";

const HostBioSection = () => {
  const achievements = [
    {
      icon: BookOpen,
      text: "Autor best-seller de 'CEO Antifrágil'"
    },
    {
      icon: Users,
      text: "Transformou mais de 10.000 empreendedores"
    },
    {
      icon: Award,
      text: "Destaque na Forbes, Entrepreneur, Inc."
    },
    {
      icon: TrendingUp,
      text: "Ajudou clientes a aumentar produtividade em 300%"
    }
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dr. Santiago Photo */}
          <div className="animate-slide-up">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent rounded-2xl blur-3xl"></div>
              <img 
                src={drSantiago}
                alt="Dr. Santiago - Biohacking Expert"
                className="relative w-full rounded-2xl shadow-hero hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                Especialista
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-section-title mb-6">
                Conheça o Dr. Santiago
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Dr. Santiago é um médico que se tornou empreendedor serial e descobriu 
                  da forma mais difícil que a medicina tradicional não foi projetada para líderes empresariais de alta performance.
                </p>
                <p>
                  Após ter burnout duas vezes enquanto construía empresas multimilionárias, 
                  ele passou 7 anos pesquisando e testando protocolos de biohacking de ponta 
                  com atletas de elite, Navy SEALs e CEOs da Fortune 500.
                </p>
                <p className="text-foreground font-medium">
                  O resultado? O <span className="text-primary">"Método CEO Antifrágil"</span> - 
                  uma abordagem sistemática que torna empreendedores mais fortes sob stress 
                  enquanto otimiza sua saúde, energia e performance cognitiva.
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
                "Dediquei minha vida a resolver o dilema do empreendedor: 
                Como construir empresas bilionárias sem sacrificar sua saúde, 
                relacionamentos ou sanidade mental no processo."
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