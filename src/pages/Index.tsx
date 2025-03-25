
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Creators } from "@/components/Creators";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-mediarch-dark">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Creators />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
