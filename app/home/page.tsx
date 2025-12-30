"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AboutSection from "./AboutSection";

export default function HomePage() {
  return (
    <>
      {/* Homepage Hero Section with Background */}
      <div className="h-[70vh] min-h-[500px] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/backgroundHomepage.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/40 z-[5]" />
        <div className="relative z-10 h-full">
          <Navbar />
          
          {/* Main Content */}
          <div className="flex flex-col h-full pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 lg:py-10 flex flex-col justify-center items-center flex-1">
              <div className="w-full max-w-2xl text-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[#F6D516]">Innovating</span> <span>Your Digital World</span>
              </motion.h2>

              <motion.div 
                className="h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 bg-[#04BDF1] mx-auto"
              />

              <motion.p className="max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white leading-relaxed mx-auto px-2 sm:px-4">
              We build websites, web apps, mobile apps, and e-commerce solutions to grow
              your business.
              </motion.p>

              <motion.button
                className="bg-[#F6D516] text-black font-semibold py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base cursor-pointer hover:scale-105 transition mx-auto w-fit mt-2 sm:mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
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
