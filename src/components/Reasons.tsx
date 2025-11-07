import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Briefcase, Trophy, Heart, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Industry-Ready Curriculum",
    description: "Learn what the industry needs - cutting-edge curriculum for tomorrow's tech.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Well-qualified mentors from both academic & real-world experience.",
  },
  {
    icon: Briefcase,
    title: "Learn by Doing",
    description: "Hands-on learning through paid internships & pre-placement opportunities.",
  },
  {
    icon: Trophy,
    title: "Placement Support",
    description: "100% Placement assistance through tie-ups with Fortune 500 Companies.",
  },
  {
    icon: Heart,
    title: "Vibrant Community",
    description: "Enjoy a fun, inclusive campus with clubs, events, sports, and student-led initiatives.",
  },
  {
    icon: Sparkles,
    title: "Gen Z Campus",
    description: "AC Classrooms, Smart Labs, and a Tech-Integrated Learning Environment.",
  },
];

const Reasons = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Top Reasons to Study at MEC
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
