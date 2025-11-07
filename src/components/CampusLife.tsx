import { Card } from "@/components/ui/card";
import { Music, Trophy, Users, Sparkles } from "lucide-react";
import campusLifeImage from "@/assets/campus-life.jpg";

const activities = [
  {
    icon: Music,
    title: "Cultural Events",
    description: "Annual tech fest, cultural programs, and talent shows",
  },
  {
    icon: Trophy,
    title: "Sports & Athletics",
    description: "State-of-the-art sports facilities and regular tournaments",
  },
  {
    icon: Users,
    title: "Technical Clubs",
    description: "Robotics, coding, and innovation clubs for all interests",
  },
  {
    icon: Sparkles,
    title: "Workshops & Seminars",
    description: "Industry experts, guest lectures, and skill development",
  },
];

const CampusLife = () => {
  return (
    <section id="campus" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Campus Life</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            More Than Just Academics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience a vibrant campus life with endless opportunities for growth and fun
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 grid gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={campusLifeImage}
              alt="Campus Life at Darwin Engineering College"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
