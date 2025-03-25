import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/2930943/2930943-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-mediarch-dark/60"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/cbb4d891-2a93-4f35-a214-1ff168fb5fa5.png"
              alt="Gamer at esports tournament"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mediarch-dark via-transparent to-transparent opacity-60"></div>
          </div>
          
          <div>
            <div className="mb-6">
              <h2 className="mb-4 text-3xl font-bold text-mediarch md:text-4xl">
                About Mediarch
              </h2>
              <p className="text-lg text-gray-300">
                At Mediarch, we're revolutionizing the gaming landscape by combining 
                competitive excellence with educational development. Our platform serves 
                as a bridge between casual gaming and professional esports.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FeatureCard 
                icon={<Icons.Trophy />}
                title="Professional Tournaments" 
              />
              <FeatureCard 
                icon={<Icons.Target />}
                title="Skill Development" 
              />
              <FeatureCard 
                icon={<Icons.Community />}
                title="Community Events" 
              />
              <FeatureCard 
                icon={<Icons.Gaming />}
                title="Gaming Excellence" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  icon, 
  title 
}: { 
  icon: React.ReactNode; 
  title: string;
}) {
  return (
    <div className="group flex items-center space-x-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-mediarch/30 hover:bg-white/10">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mediarch/10 text-mediarch transition-all duration-300 group-hover:bg-mediarch/20">
        {icon}
      </div>
      <h3 className="font-medium text-white">{title}</h3>
    </div>
  );
}
