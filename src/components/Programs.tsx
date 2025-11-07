import { Card } from "@/components/ui/card";
import { Cpu, Hammer, Zap, Cog, Microscope, Building } from "lucide-react";
import roboticsImage from "@/assets/robotics-lab.jpg";
import computerLabImage from "@/assets/computer-lab.jpg";

const programs = [
  {
    icon: Cpu,
    code: "CSE",
    title: "B.E. in Computer Science & Engineering",
    description: "Design, develop, and lead with powerful computing skills to drive innovation in the digital world.",
  },
  {
    icon: Cpu,
    code: "AIDS",
    title: "B.Tech. in Artificial Intelligence & Data Science",
    description: "Master AI, Machine Learning & Big Data to solve real-world problems with intelligent solutions.",
  },
  {
    icon: Cpu,
    code: "AIML",
    title: "B.E. in Computer Science & Engineering (AI & ML)",
    description: "Dive deep into AI & Machine Learning technologies to build smart systems & future-ready applications.",
  },
  {
    icon: Building,
    code: "IT",
    title: "B.Tech. in Information Technology (IT)",
    description: "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
  },
  {
    icon: Microscope,
    code: "Cybersecurity",
    title: "B.E. in Computer Science & Engineering (Cyber Security)",
    description: "Secure the digital world with advanced cyber security techniques and ethical hacking skills.",
  },
  {
    icon: Cog,
    code: "CSBS",
    title: "B.E. in Computer Science & Business Systems",
    description: "Combine tech and business skills to create tech-driven solutions for modern enterprises.",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Top Programs to Study at Madras Engineering College
          </h2>
        </div>


        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 group"
              >
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">{program.code}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground text-sm">{program.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
