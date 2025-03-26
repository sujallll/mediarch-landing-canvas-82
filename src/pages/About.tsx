
import Navbar from "@/components/Navbar";
import { About as AboutSection } from "@/components/About";
import { Footer } from "@/components/Footer";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { PingPong } from "@/components/PingPong";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-mediarch-dark">
      <Navbar />
      
      {/* Hero Section with Background Paths - Responsive height */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <div className="absolute inset-0 z-0 bg-mediarch-dark">
          <BackgroundPaths title="About Mediarch" />
        </div>
      </div>
      
      {/* Content Section - Moved below the hero section */}
      <div className="relative z-10 bg-mediarch-dark/95 py-8 md:py-12 lg:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto">
            <div className="mb-5 md:mb-6 bg-white/5 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10">
              <h2 className="text-xl md:text-2xl font-bold text-mediarch mb-3">Our Mission</h2>
              <p className="text-sm md:text-base text-gray-300">
                Our mission is to empower aspiring and professional streamers by offering tailored support, 
                mentorship, and resources to enhance their journey. Through structured learning, industry 
                insights, and hands-on guidance, we strive to build a thriving community that excels in 
                digital broadcasting.
              </p>
            </div>
            
            <div className="mb-6 md:mb-8 lg:mb-12 bg-white/5 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/10">
              <h2 className="text-xl md:text-2xl font-bold text-mediarch mb-3">Our Vision</h2>
              <p className="text-sm md:text-base text-gray-300 mb-4">
                At Mediarch, we envision a world where content creators and streamers have the ultimate 
                platform to grow, learn, and thrive. We aim to bridge the gap between passion and success 
                by providing cutting-edge resources, mentorship, and a seamless streaming experience.
              </p>
              <div className="flex justify-center">
                <Button 
                  className="bg-mediarch text-black hover:bg-mediarch/90 text-sm md:text-base"
                >
                  Join Our Community
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Ping Pong Game Section */}
      <div className="container mx-auto px-4 py-6 md:py-8 lg:py-12">
        <div className="text-center mb-4 md:mb-6 lg:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-mediarch mb-2 md:mb-3">Take a Gaming Break</h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            While you're learning about us, why not enjoy a quick game? Test your reflexes with this 
            classic Ping Pong game!
          </p>
        </div>
        
        <PingPong />
      </div>
      
      {/* About Section (existing) */}
      <AboutSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
