import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
  "Up To 100% Scholarships",
  "100% Placement Assistance",
  "Paid Internships With Leading Companies",
  "International Tie-ups & Exchange Programs",
  "Real-Time Mentors From Fortune 500 Companies",
  "Internally Funded Student Projects & Startups",
  "Interactive Smart Classrooms & Hi-Tech Labs",
  "100% Wifi-Enabled Digital Campus",
  "Fully Air-Conditioned Campus",
  "Bus Facility Covering All Parts of Chennai",
  "Multicuisine Cafeteria",
  "Fully-Equipped A/C Hostel Facilities For Students",
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4?


          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            India's promising new-age engineering college, built to empower future-ready engineers!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-4 bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="text-sm text-foreground">{feature}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
