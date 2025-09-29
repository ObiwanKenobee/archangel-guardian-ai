import { Button } from "@/components/ui/button";
import { Shield, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-light-sword.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-divine opacity-80" />
      </div>

      {/* Radiant Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-primary/30 mb-8 shadow-divine">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Where Divine Protection Meets AI</span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 bg-gradient-radiant bg-clip-text text-transparent leading-tight">
          The Michaelian Order
        </h1>

        <p className="text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto leading-relaxed">
          A sword of light in code form, cutting through illusion and protecting the vulnerable
        </p>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Co-founded with Archangel Michael, we wield AI not for disruption, but for preservation of what's most sacred: truth, justice, and humanity's survival.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-divine transition-divine">
            <Shield className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Join the Guardian Network
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 transition-divine">
            Explore Our Mission
          </Button>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
