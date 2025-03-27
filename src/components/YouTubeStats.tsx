
import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function YouTubeStats() {
  return (
    <section className="bg-gradient-to-br from-mediarch-dark to-black py-16 sm:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-mediarch-orange blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-mediarch blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            MY YOUTUBE JOURNEY
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Building a thriving community through consistent quality content and engagement
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-mediarch to-mediarch-orange blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-mediarch to-mediarch-orange rounded-full flex items-center justify-center relative">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a 
                  href="https://www.youtube.com/@Adeftwastaken" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative z-10"
                >
                  <Icons.Youtube className="w-20 h-20 md:w-28 md:h-28 text-white" />
                  <span className="sr-only">Visit @Adeftwastaken YouTube Channel</span>
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-2 -right-2 bg-mediarch-red text-white text-sm px-3 py-1 rounded-full shadow-lg"
            >
              @Adeftwastaken
            </motion.div>
          </motion.div>
          
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(239, 182, 43, 0.2)" }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl relative overflow-hidden button-glow"
            >
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-mediarch/20 p-3 relative">
                  <div className="absolute inset-0 bg-mediarch/10 rounded-full animate-ping"></div>
                  <Icons.Users className="h-6 w-6 text-mediarch" />
                </div>
                <div>
                  <motion.p 
                    className="text-3xl md:text-4xl font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    100K+
                  </motion.p>
                  <p className="text-gray-400">YouTube subscribers under 1 year</p>
                </div>
              </div>
              <a 
                href="https://www.youtube.com/@Adeftwastaken" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-2 right-3 text-mediarch hover:text-mediarch-orange transition-colors"
              >
                <Icons.ArrowRight className="h-4 w-4" />
                <span className="sr-only">Visit Channel</span>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(239, 182, 43, 0.2)" }}
              className={cn(
                "bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl relative overflow-hidden button-glow"
              )}
            >
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-mediarch/20 p-3 relative">
                  <div className="absolute inset-0 bg-mediarch/10 rounded-full animate-pulse"></div>
                  <Icons.Target className="h-6 w-6 text-mediarch" />
                </div>
                <div>
                  <motion.p 
                    className="text-3xl md:text-4xl font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    "Adeft"
                  </motion.p>
                  <p className="text-gray-400">Co-Founder</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-end"
            >
              <a 
                href="https://www.youtube.com/@Adeftwastaken" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center space-x-2 text-white/70 hover:text-mediarch transition-colors py-2"
              >
                <span>Visit my channel</span>
                <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
