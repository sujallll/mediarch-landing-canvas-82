
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { renderCanvas } from "@/components/ui/canvas";
import { Icons } from "@/components/ui/icons";

export function Hero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <canvas
        className="pointer-events-none absolute inset-0 z-0"
        id="canvas"
      ></canvas>
      
      <div className="container relative z-10 mx-auto px-4 pt-24 md:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: "300ms" }}>
            <span className="block text-4xl font-bold text-mediarch sm:text-5xl md:text-6xl lg:text-7xl">
              Play the Part.
            </span>
            <span className="mt-2 block text-4xl font-bold bg-gradient-to-r from-mediarch to-mediarch-orange text-transparent bg-clip-text sm:text-5xl md:text-6xl lg:text-7xl" style={{ backgroundSize: "200% 200%" }}>
              Master the Art
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 opacity-0 animate-fadeIn" style={{ animationDelay: "600ms" }}>
            Join the next generation of gaming excellence with Mediarch's immersive 
            events and expert-led courses. Experience gaming like never before.
          </p>
          
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 opacity-0 animate-fadeIn" style={{ animationDelay: "900ms" }}>
            <StatsCard 
              icon={<Icons.User className="h-5 w-5 text-mediarch" />}
              value="10K+"
              label="Active Players"
            />
            <StatsCard 
              icon={<Icons.GameController className="h-5 w-5 text-mediarch" />}
              value="50+"
              label="Gaming Events"
            />
            <StatsCard 
              icon={<Icons.Support className="h-5 w-5 text-mediarch" />}
              value="24/7"
              label="Support"
            />
          </div>
          
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 opacity-0 animate-fadeIn" style={{ animationDelay: "1200ms" }}>
            <Link to="/register">
              <Button 
                className="group w-full bg-mediarch text-mediarch-dark hover:bg-mediarch/90 sm:w-auto"
                size="lg"
              >
                Start Gaming 
                <Icons.ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="outline" 
                className="w-full border-mediarch/30 text-white hover:border-mediarch hover:bg-mediarch-dark/10 sm:w-auto"
                size="lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsCard({ icon, value, label }: { 
  icon: React.ReactNode; 
  value: string; 
  label: string 
}) {
  return (
    <div className="flex items-center justify-center space-x-3 rounded-lg border border-white/10 bg-mediarch-dark/50 backdrop-blur-sm p-4 transition-all duration-300 hover:border-mediarch/30">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mediarch/10">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white">{value}</span>
        <span className="text-sm text-gray-400">{label}</span>
      </div>
    </div>
  );
}
