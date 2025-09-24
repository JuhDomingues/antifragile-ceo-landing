import { Brain, Zap, Shield, Target } from "lucide-react";

const WhatYoullLearnSection = () => {
  const features = [
    {
      icon: Brain,
      title: "O Pilar do Biohacking",
      description: "Descubra os 3 biohacks fundamentais que CEOs de elite usam para otimizar sua performance cognitiva e capacidade de tomada de decisão."
    },
    {
      icon: Zap,
      title: "O Protocolo de Energia",
      description: "Aprenda a rotina matinal exata que te dá mais de 10 horas de energia sustentada sem quedas, dependência de cafeína ou burnout."
    },
    {
      icon: Shield,
      title: "O Framework Antifrágil", 
      description: "Domine o sistema de otimização do stress que te torna mais forte sob pressão enquanto protege sua saúde a longo prazo."
    },
    {
      icon: Target,
      title: "O Método de Recuperação CEO",
      description: "Implemente o protocolo noturno de 20 minutos que garante sono profundo e recuperação celular para performance máxima no dia seguinte."
    }
  ];

  return (
    <section className="py-16 md:py-32 px-4 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            O Que Você Vai Aprender Nesta Masterclass
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Você descobrirá as estratégias exatas que transformaram 
            empreendedores esgotados em CEOs imparáveis e antifrágeis
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
              Bônus: Sessão exclusiva de perguntas e respostas com Dr. Santiago
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearnSection;