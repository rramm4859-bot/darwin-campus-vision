import { Card } from "@/components/ui/card";
import { Cpu, Hammer, Zap, Cog, Microscope, Building } from "lucide-react";
import roboticsImage from "@/assets/robotics-lab.jpg";
import computerLabImage from "@/assets/computer-lab.jpg";

const programs = [
  {
    icon: Cpu,
    title: "Computer Science & Engineering",
    description: "Master AI, Machine Learning, and Software Development with cutting-edge curriculum",
    duration: "4 Years",
    seats: "180",
  },
  {
    icon: Hammer,
    title: "Mechanical Engineering",
    description: "Design, innovation, and manufacturing excellence with state-of-the-art workshops",
    duration: "4 Years",
    seats: "120",
  },
  {
    icon: Zap,
    title: "Electrical & Electronics",
    description: "Power systems, robotics, and automation with industry-standard labs",
    duration: "4 Years",
    seats: "120",
  },
  {
    icon: Cog,
    title: "Civil Engineering",
    description: "Build the future with sustainable infrastructure and smart construction",
    duration: "4 Years",
    seats: "90",
  },
  {
    icon: Microscope,
    title: "Electronics & Communication",
    description: "Communication systems, IoT, and embedded technologies",
    duration: "4 Years",
    seats: "120",
  },
  {
    icon: Building,
    title: "Information Technology",
    description: "Cloud computing, cybersecurity, and modern web technologies",
    duration: "4 Years",
    seats: "120",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Our Programs</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Engineering Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-aligned programs designed to make you job-ready from day one
          </p>
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 group">
            <img
              src={roboticsImage}
              alt="Robotics Lab"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Advanced Robotics Lab</h3>
                <p className="text-muted-foreground">State-of-the-art facilities for hands-on learning</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 group">
            <img
              src={computerLabImage}
              alt="Computer Lab"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Modern Computing Labs</h3>
                <p className="text-muted-foreground">Industry-standard software and hardware</p>
              </div>
            </div>
          </div>
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
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Duration: {program.duration}</span>
                  <span className="text-sm text-muted-foreground">Seats: {program.seats}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
