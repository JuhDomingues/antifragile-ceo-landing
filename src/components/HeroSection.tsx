import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('final-cta');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(51_100%_50%/0.1)_0%,transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in">
        <div className="space-y-8">
          <h1 className="text-hero bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Is your body limiting your company's growth?
          </h1>
          
          <p className="text-hero-sub text-muted-foreground max-w-3xl mx-auto">
            Join Dr. Santiago's exclusive masterclass and discover the biohacking secrets 
            that transform exhausted entrepreneurs into <span className="text-primary font-semibold">antifragile CEOs</span>
          </p>
          
          <div className="pt-8">
            <Button 
              onClick={scrollToForm}
              className="btn-hero animate-glow hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
              size="lg"
            >
              GET FREE ACCESS NOW
            </Button>
          </div>
          
          <div className="pt-12 text-sm text-muted-foreground">
            <p>🔥 Limited Time: Free Masterclass Registration</p>
            <p className="mt-2">Join 10,000+ successful entrepreneurs who've transformed their performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;