import { Card } from "@/components/ui/card";
import { Building2, TrendingUp, Users2, Award } from "lucide-react";
import placementsImage from "@/assets/placements.jpg";

const stats = [
  { icon: Building2, label: "Top Companies", value: "200+", color: "primary" },
  { icon: TrendingUp, label: "Avg Package", value: "₹8.5 LPA", color: "accent" },
  { icon: Users2, label: "Students Placed", value: "2500+", color: "primary" },
  { icon: Award, label: "Highest Package", value: "₹45 LPA", color: "accent" },
];

const topRecruiters = [
  "Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro",
  "Cognizant", "Accenture", "Deloitte", "IBM", "Oracle", "Adobe",
];

const Placements = () => {
  return (
    <section id="placements" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Placements & Careers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            100% Placement Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our students secure top positions in leading companies worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={placementsImage}
              alt="Campus Placements"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-lg bg-${stat.color}/10 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 text-${stat.color}`} />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Top Recruiters</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topRecruiters.map((company, index) => (
              <Card
                key={index}
                className="p-4 bg-card border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center"
              >
                <p className="font-semibold text-foreground text-center">{company}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;
