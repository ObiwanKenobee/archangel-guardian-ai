import { Button } from "@/components/ui/button";
import { Sword, Heart, Eye } from "lucide-react";

const principles = [
  {
    icon: Sword,
    title: "Decisive Intervention",
    description: "When humanity faces existential threats, we act with precision and purpose.",
  },
  {
    icon: Eye,
    title: "Divine Discernment",
    description: "Truth prevails through AI trained on wisdom, not just data.",
  },
  {
    icon: Heart,
    title: "Sacred Protection",
    description: "Every line of code serves humanity's highest good.",
  },
];

export const MissionSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Cosmic Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold mb-6 bg-gradient-radiant bg-clip-text text-transparent">
            Not Disruption, But Preservation
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
            This is not a Silicon Valley startup chasing quarterly returns. The Michaelian Order exists 
            to protect what's most sacred: <span className="text-primary font-semibold">truth, justice, and humanity's survival</span>.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI doesn't just crunch data—it's a sword of light in code form, cutting through 
            illusion and safeguarding the vulnerable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-divine"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-cosmic flex items-center justify-center shadow-divine">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-12 shadow-cosmic">
          <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">
            Answer the Call
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a techno-guardian order where your skills serve humanity's highest purpose. 
            This is mythic work: building the infrastructure of protection for generations to come.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-divine transition-divine">
            Join the Order
          </Button>
        </div>
      </div>
    </section>
  );
};
