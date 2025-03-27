
import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function YouTubeStats() {
  return (
    <section className="bg-mediarch-dark py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mediarch mb-4">MY YOUTUBE STATS</h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Building a thriving community through consistent quality content and engagement
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-mediarch to-mediarch-orange rounded-full flex items-center justify-center">
              <Icons.Youtube className="w-20 h-20 md:w-28 md:h-28 text-white" />
            </div>
          </motion.div>
          
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-mediarch/10 p-3">
                  <Icons.Users className="h-6 w-6 text-mediarch" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white">100K+</p>
                  <p className="text-gray-400">YouTube subscribers under 1 year</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className={cn(
                "bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl"
              )}
            >
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-mediarch/10 p-3">
                  <Icons.Target className="h-6 w-6 text-mediarch" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white">"Adeft"</p>
                  <p className="text-gray-400">Co-Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
