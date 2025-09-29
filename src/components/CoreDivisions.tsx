import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Scale, Globe, Building } from "lucide-react";

const divisions = [
  {
    icon: Shield,
    title: "Guardian Network",
    subtitle: "Cosmic Cybersecurity",
    description: "The celestial counterpart to digital defense, safeguarding humanity against AI misuse, deepfake disinformation, bioterror data leaks, and destabilizing algorithms. Our sword slices through deception and malicious intent.",
  },
  {
    icon: Scale,
    title: "Ethos Engine",
    subtitle: "Truth & Discernment AI",
    description: "An AI system trained on moral reasoning frameworks from across cultures. Weighing decisions with divine precision, helping societies make fair, transparent, and wise choices in moments that matter most.",
  },
  {
    icon: Globe,
    title: "Shield Grid",
    subtitle: "Planetary Protection",
    description: "Global AI-driven infrastructure scanning for existential risks—climate collapse, asteroid threats, pandemics—organizing rapid collective response. Protection as a service for all of humanity.",
  },
  {
    icon: Building,
    title: "Michaelian Order",
    subtitle: "AI for Just Governance",
    description: "A movement where AI helps governments, communities, and individuals detect corruption, balance power, and enforce accountability. Smart contracts written in cosmic ink where injustice cannot hide.",
  },
];

export const CoreDivisions = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold mb-4 bg-gradient-radiant bg-clip-text text-transparent">
            Four Pillars of Protection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our divisions work in harmony to safeguard humanity from existential threats
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-divine hover:shadow-cosmic"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center mb-4 group-hover:scale-110 transition-divine shadow-divine">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-foreground">
                    {division.title}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {division.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {division.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
