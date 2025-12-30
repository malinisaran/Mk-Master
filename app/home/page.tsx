"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AboutSection from "./AboutSection";

export default function HomePage() {
  return (
    <>
      {/* Homepage Hero Section with Background */}
      <div className="h-[60vh] sm:h-[70vh] lg:h-[70vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/backgroundHomepage.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/40 z-[5]" />
        <div className="relative z-10 h-full">
          <Navbar />
          
          {/* Main Content */}
          <div className="flex flex-col h-full pt-50 sm:pt02 md:pt40">
            <div className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-8 flex flex-col justify-center items-center">
              <div className="w-full max-w-2xl text-center px-4">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[#F6D516]">Innovating</span> <span>Your Digital World</span>
              </motion.h2>

              <motion.div 
                className="h-1 w-16 sm:w-20 bg-[#04BDF1] mb-4 sm:mb-6 mx-auto"
              />

              <motion.p className="max-w-2xl text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 leading-relaxed mx-auto px-2">
              We build websites, web apps, mobile apps, and e-commerce solutions to grow
              your business.
              </motion.p>

              <motion.button
                className="bg-[#F6D516] text-black font-semibold py-2.5 sm:py-3 px-6 sm:px-8 text-xs sm:text-sm cursor-pointer hover:scale-105 transition mx-auto w-fit"
              >
                Know More
              </motion.button>  
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
