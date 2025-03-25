
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
      
      {/* Hero Section with Background Paths */}
      <div className="relative">
        <div className="absolute inset-0 z-0 bg-mediarch-dark">
          <BackgroundPaths title="About Mediarch" />
        </div>
        
        <div className="relative z-10 pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="container mx-auto px-4 mt-20"
          >
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold text-mediarch mb-4">Our Mission</h2>
                <p className="text-gray-300">
                  Mediarch was founded with a vision to transform the gaming landscape by bridging
                  the gap between casual gaming and professional esports. Our platform serves as a
                  hub for gamers of all skill levels to learn, compete, and grow together.
                </p>
              </div>
              
              <div className="mb-12 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold text-mediarch mb-4">Our Vision</h2>
                <p className="text-gray-300 mb-4">
                  From hosting tournaments to providing expert-led courses, we're committed to
                  elevating the gaming experience for everyone involved. Join us in shaping the
                  future of gaming.
                </p>
                <div className="flex justify-center">
                  <Button 
                    className="bg-mediarch text-black hover:bg-mediarch/90"
                  >
                    Join Our Community
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Ping Pong Game Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-mediarch mb-4">Take a Gaming Break</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
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
