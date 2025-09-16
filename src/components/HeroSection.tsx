import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('final-cta');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-4 py-20 md:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(51_100%_50%/0.1)_0%,transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-hero bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent px-2 md:px-0">
            Seu corpo está limitando o crescimento da sua empresa?
          </h1>
          
          <p className="text-hero-sub text-muted-foreground max-w-3xl mx-auto px-4 md:px-0">
            Participe da masterclass exclusiva do Dr. Santiago e descubra os segredos de biohacking 
            que transformam empreendedores esgotados em <span className="text-primary font-semibold">CEOs antifrágeis</span>
          </p>
          
          <div className="pt-6 md:pt-8 px-4 md:px-0">
            <Button 
              onClick={scrollToForm}
              className="btn-hero animate-glow hover:shadow-2xl transform hover:scale-110 transition-all duration-300 w-full md:w-auto"
              size="lg"
            >
              QUERO ACESSO GRATUITO AGORA
            </Button>
          </div>
          
          <div className="pt-8 md:pt-12 text-sm text-muted-foreground px-4 md:px-0">
            <p>🔥 Por Tempo Limitado: Inscrição Gratuita na Masterclass</p>
            <p className="mt-2">Junte-se a mais de 10.000 empreendedores de sucesso que transformaram sua performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;