import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, Users } from "lucide-react";

const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and email are required to register.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "🎉 Registration Successful!",
      description: "Check your email for masterclass access details.",
    });
    
    setFormData({ name: "", email: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="final-cta" className="py-24 px-4 bg-gradient-to-br from-card to-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in space-y-8">
          <div>
            <h2 className="text-section-title mb-6">
              Ready to Become an Antifragile CEO?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join this exclusive masterclass and discover the biohacking secrets 
              that will transform your energy, focus, and business performance forever.
            </p>
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-sm">Date</div>
                <div className="text-sm text-muted-foreground">Next Available Session</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Clock className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-sm">Duration</div>
                <div className="text-sm text-muted-foreground">90 Minutes + Q&A</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <Users className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-sm">Format</div>
                <div className="text-sm text-muted-foreground">Live Online Event</div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                className="h-12 text-center bg-background border-border focus:border-primary text-lg"
                disabled={isSubmitting}
              />
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                className="h-12 text-center bg-background border-border focus:border-primary text-lg"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-xl font-bold bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-primary-foreground shadow-gold animate-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "REGISTERING..." : "I WANT TO BE AN ANTIFRAGILE CEO"}
              </Button>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>✅ 100% Free</span>
              <span>✅ No Spam</span>
              <span>✅ Instant Access</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Join 10,000+ entrepreneurs who've already transformed their performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;