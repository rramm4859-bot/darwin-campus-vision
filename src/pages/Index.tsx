import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Reasons from "@/components/Reasons";
import Features from "@/components/Features";
import Placements from "@/components/Placements";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Reasons />
      <Placements />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
