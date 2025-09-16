import { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalCTASection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ddi: "+55"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updatePhonePlaceholder = (ddi: string) => {
    return ddi === '+1' ? '(000) 000-0000' : '(00) 00000-0000';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!', formData);
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email); 
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('ddi', formData.ddi);

      console.log('Enviando para Sellflux...');
      
      const response = await fetch('https://webhook.sellflux.app/webhook/form/lead/440ff9057ee0d19910c6877cbed9a11e', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Lead capturado:', result);
        
        // Redirecionar para página de obrigado
        console.log('Redirecionando para página de obrigado...');
        navigate('/obrigado');
        
      } else {
        console.error('Erro na resposta:', response.status);
        alert('Erro ao enviar formulário. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="final-cta" className="py-32 px-4 bg-gradient-to-br from-card to-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in space-y-8">
          <div>
            <h2 className="text-section-title mb-6">
              Pronto Para se Tornar um CEO Antifrágil?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Participe desta masterclass exclusiva e descubra os segredos de biohacking 
              que transformarão sua energia, foco e performance empresarial para sempre.
            </p>
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-sm">Data</div>
                <div className="text-sm text-muted-foreground">Próxima Sessão Disponível</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Clock className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-sm">Duração</div>
                <div className="text-sm text-muted-foreground">90 Minutos + Perguntas</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Users className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-sm">Formato</div>
                <div className="text-sm text-muted-foreground">Evento Online ao Vivo</div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full h-12 px-4 text-lg bg-[#1a1a1a] border border-[#1a1a1a] rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-primary disabled:opacity-50"
              />
              
              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full h-12 px-4 text-lg bg-[#1a1a1a] border border-[#1a1a1a] rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-primary disabled:opacity-50"
              />
              
              {/* DDI + Telefone */}
              <div className="flex w-full">
                <select
                  name="ddi"
                  value={formData.ddi}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="h-12 px-2 text-lg bg-[#1a1a1a] border border-[#1a1a1a] border-r-[#282828] rounded-l-full text-white max-w-[25%] focus:outline-none focus:border-primary disabled:opacity-50"
                >
                  <option value="+55">🇧🇷 +55</option>
                  <option value="+1">🇺🇸 +1</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder={updatePhonePlaceholder(formData.ddi)}
                  value={formData.phone}
                  onChange={handleInputChange}
                  maxLength={formData.ddi === '+1' ? 14 : 15}
                  required
                  disabled={isSubmitting}
                  className="flex-1 h-12 px-3 text-lg bg-[#1a1a1a] border border-[#1a1a1a] border-l-[#282828] rounded-r-full text-white placeholder-gray-400 focus:outline-none focus:border-primary disabled:opacity-50"
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-xl font-bold bg-[#e0ab42] hover:bg-[#d49b32] text-black rounded-full shadow-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "ENVIANDO..." : "CONTINUAR"}
              </button>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>✅ 100% Gratuito</span>
              <span>✅ Sem Spam</span>
              <span>✅ Acesso Instantâneo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Junte-se a mais de 10.000 empreendedores que já transformaram sua performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;