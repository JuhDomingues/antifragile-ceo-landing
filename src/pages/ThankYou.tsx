import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calendar } from "lucide-react";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    // Track SubmitApplication event when thank you page loads
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'SubmitApplication');
    }
  }, []);

  const handleWhatsAppRedirect = () => {
    window.open('https://chat.whatsapp.com/KfaeG1TLYwJ6COH26Y5PER?mode=ems_copy_t', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-card to-background flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        <div className="space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center animate-glow">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Main Message */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              🎉 Parabéns!
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Sua inscrição foi realizada com sucesso!
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Você está a um passo de transformar sua performance empresarial e se tornar um 
              <span className="text-primary font-semibold"> CEO Antifrágil</span>.
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-muted/50 rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Próximos Passos:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Acesse nosso grupo exclusivo</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <span>Conecte-se com outros empreendedores</span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-foreground">
              Entre agora no grupo exclusivo do WhatsApp para receber:
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2 text-muted-foreground">
              <li>✅ Informações sobre a masterclass</li>
              <li>✅ Conteúdos exclusivos de biohacking</li>
              <li>✅ Networking com outros CEOs</li>
              <li>✅ Dicas práticas semanais</li>
            </ul>
          </div>

          {/* Main CTA Button */}
          <div className="pt-4">
            <Button
              onClick={handleWhatsAppRedirect}
              className="w-full md:w-auto h-16 px-12 text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg animate-glow transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              📱 ENTRAR NO GRUPO DO WHATSAPP
            </Button>
          </div>

          {/* Additional Info */}
          <div className="pt-8 space-y-4">
            <p className="text-sm text-muted-foreground">
              🔒 Grupo privado e exclusivo para participantes da masterclass
            </p>
            <p className="text-xs text-muted-foreground">
              Ao clicar no botão acima, você será redirecionado para o WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;