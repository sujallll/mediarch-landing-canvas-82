
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Creators } from "@/components/Creators";
import { Stats } from "@/components/Stats";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-mediarch-dark">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Creators />
        <Stats />
      </main>
      <footer className="bg-mediarch-dark py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mediarch. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
