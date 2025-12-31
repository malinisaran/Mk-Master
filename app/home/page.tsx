"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AboutSection from "./AboutSection";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";

export default function HomePage() {
  const { openModal } = useEnquiryModal();

  return (
    <>
      {/* Homepage Hero Section with Background */}
      <div className="min-h-screen relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/backgrounds/backgroundHomepage.jpg)',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-[5]" />
          <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center mt-32">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 lg:py-10 flex flex-col justify-center items-center">
              <div className="w-full max-w-2xl text-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[#F6D516]">Professional</span> <span>Website & Mobile App Development</span>
              </motion.h2>

              <motion.div 
                className="h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 bg-[#04BDF1] mx-auto"
              />

              <motion.p className="max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white leading-relaxed mx-auto px-2 sm:px-4">
                We specialize in Custom Websites, E-commerce Solutions, Web Applications, Mobile Apps, and SEO Optimization to grow your business.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center">
              <motion.a
                href="/services"
                className="bg-[#F6D516] text-black font-semibold py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base hover:scale-105 transition text-center rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Explore Our Services
              </motion.a>
              <motion.button
                onClick={openModal}
                className="bg-white text-black font-semibold py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base hover:scale-105 transition text-center border border-gray-200 rounded-sm cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Get a Free Quote
              </motion.button>
            </div> 
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
