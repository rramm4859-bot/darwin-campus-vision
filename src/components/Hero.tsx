import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/campus-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Madras Engineering College Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Tech Journey Begins @{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Madras Engineering College
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            India's 1st Engineering College Specialising in IT, Computer Science, Data Science, 
            Artificial Intelligence, Machine Learning, Cybersecurity & Business Systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 text-foreground">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm md:text-base">Paid Internship Opportunities</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm md:text-base">Modern Lab Facilities</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm md:text-base">Industry-Ready Curriculum</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-base group">
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base border-2">
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
