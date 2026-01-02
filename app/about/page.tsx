"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "../home/AboutSection";
import Testimonials from "../home/Testimonials";
import CallToAction from "../home/CallToAction";


export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative h-[40vh] min-h-[250px] sm:h-[45vh] sm:min-h-[300px] md:h-[50vh] md:min-h-[350px] lg:h-[60vh] lg:min-h-[400px] flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/backgrounds/backgroundHomepage.jpg"
            alt="Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 relative z-10">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 text-[#F6D516] w-full px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>
          <motion.div 
            className="flex items-center justify-center bg-black/50 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span 
              onClick={() => router.push('/')} 
              className="text-white hover:text-blue-300 transition-colors cursor-pointer text-xs sm:text-sm md:text-base"
            >
              Home
            </span>
            <span className="mx-1.5 sm:mx-2 text-white text-xs sm:text-sm md:text-base">/</span>
            <span className="text-blue-300 text-xs sm:text-sm md:text-base">
              About Us
            </span>
          </motion.div>
        </div>
      </div>
      
      <AboutSection showLearnMore={false} />
      
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Vision Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5">
                  Our <span className="text-[#04BDF1]">Vision</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  To empower businesses and individuals through innovative, reliable, and scalable technology that simplifies complexity and drives digital growth.
                </p>
              </div>
            </motion.div>

            {/* Mission Section - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5">
                  Our <span className="text-[#04BDF1]">Mission</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  Our mission is to deliver innovative, secure, and scalable IT solutions that help businesses optimize operations, enhance productivity, and achieve sustainable growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Call to Action Section */}
      <CallToAction />

      <Footer />
    </div>
  );
}
