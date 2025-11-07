import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Placements from "@/components/Placements";
import CampusLife from "@/components/CampusLife";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Placements />
      <CampusLife />
      <Footer />
    </div>
  );
};

export default Index;
