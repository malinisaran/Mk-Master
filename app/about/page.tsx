"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Target, Heart, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      
      {/* Main About Section - Split Layout */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-stretch min-h-[600px]">
            {/* Left Side - Office Image with Overlay Boxes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-full"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/services/combinedImge.jpg"
                  alt="Office environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Overlay Box 1 - Top Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                  className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white rounded-lg px-4 py-3 sm:px-5 sm:py-4 shadow-lg border-2"
                  style={{ borderColor: '#F6D516' }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                      520+ Happy Clients
                    </span>
                  </div>
                </motion.div>

                {/* Overlay Box 2 - Bottom Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:bottom-6 bg-white rounded-lg px-4 py-3 sm:px-5 sm:py-4 shadow-lg border-2"
                  style={{ borderColor: '#F6D516' }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                      13+ Years of Quality Experience
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8"
            >
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 md:mb-12 leading-tight">
                <span className="text-[#04BDF1]">Your Success</span>{" "}
                <span className="text-gray-900">is Our Priority</span>
              </h2>

              {/* Vision, Mission, Values Sections */}
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {/* Vision */}
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                  <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-[#04BDF120]">
                    <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: '#04BDF1' }} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Our Vision
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      To empower businesses and individuals through innovative, reliable, and scalable technology that simplifies complexity and drives digital growth.
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                  <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-[#04BDF120]">
                    <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: '#04BDF1' }} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Our Mission
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      Our mission is to deliver innovative, secure, and scalable IT solutions that help businesses optimize operations, enhance productivity, and achieve sustainable growth.
                    </p>
                  </div>
                </div>

                {/* Values */}
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                  <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-[#04BDF120]">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: '#04BDF1' }} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Our Values
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      We are a customer-focused web development company, delivering innovative and tailored solutions with integrity and collaboration at our core. Our expertise and dedication ensure exceptional results that meet our clients' needs and exceed their expectations.
                    </p>
                  </div>
                </div>
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
