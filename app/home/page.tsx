"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import AboutSection from "./AboutSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content with Two Columns */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Column - Content */}
        <div className="w-full md:w-1/2 bg-[#0a192f] pl-12 pr-8 md:pl-16 py-16 flex flex-col justify-center">
          <div className="w-full max-w-2xl">
          <motion.h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block text-[#F6D516] mb-2 ml-10">SOFTWARE</span>
            <span className="block ml-10">DEVELOPMENT</span>
          </motion.h2>

          <motion.div 
            className="h-1 w-20 ml-10 bg-[#04BDF1] mb-6"
          />

          <motion.p className="max-w-2xl text-base md:text-lg text-gray-300 mb-8 leading-relaxed ml-10">
            We deliver end-to-end software development services, from requirement analysis and solution design to development, testing, deployment, and ongoing support. Our team builds secure, scalable, and high-performance applications tailored to your business needs.
          </motion.p>

          <motion.button
            className="bg-[#F6D516] text-black font-semibold ml-10 py-3 px-8 rounded-full hover:scale-105 transition w-fit"
          >
            KNOW MORE
          </motion.button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src="/software.jpg"
            alt="Software Development"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </div>

      <AboutSection />
    </div>
    
  );
}
