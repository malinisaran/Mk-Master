"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutSection from "./AboutSection";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";

const bannerContents = [
  {
    title: "Professional Website & Mobile App Development",
    description: "We specialize in Custom Websites, E-commerce Solutions, Web Applications, Mobile Apps, and SEO Optimization to grow your business."
  },
  {
    title: "Smart Web & App Solutions for Your Business",
    description: "We design and develop custom websites, e-commerce platforms, web applications, mobile apps, and SEO solutions that help your brand scale digitally."
  },
  {
    title: "End-to-End Digital Development Services",
    description: "From custom website design and online stores to web apps, mobile applications, and SEO optimization—we deliver technology that drives business growth."
  }
];

export default function HomePage() {
  const { openModal } = useEnquiryModal();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Homepage Hero Section with Background */}
      <div className="min-h-screen relative">
        <div className="absolute inset-0">
          <Image
            src="/backgrounds/backgroundHomepage.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-[5]" />
          <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center mt-32">
            <div className="w-full px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col justify-center items-center">
              <div className="w-full max-w-2xl text-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
                  >
                    <h2 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight px-2"
                    >
                      {currentSlide === 0 ? (
                        <>
                          <span className="text-[#F6D516]">Professional</span> <span>Website & Mobile App Development</span>
                        </>
                      ) : currentSlide === 1 ? (
                        <>
                          <span className="text-[#F6D516]">Smart Web & App Solutions</span> <span>for Your Business</span>
                        </>
                      ) : (
                        <>
                          <span className="text-[#F6D516]">End-to-End Digital Development</span> <span>Services</span>
                        </>
                      )}
                    </h2>

                    <div 
                      className="h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 bg-[#04BDF1] mx-auto"
                    />

                    <p className="max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white leading-relaxed mx-auto px-2 sm:px-4">
                      {bannerContents[currentSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center">
                  <motion.a
                    href="/services"
                    className="bg-[#F6D516] text-black font-semibold py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base hover:scale-105 transition-all duration-300 ease-out text-center rounded-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                  >
                    Explore Our Services
                  </motion.a>
                  <motion.button
                    onClick={openModal}
                    className="bg-white text-black font-semibold py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base hover:scale-105 transition-all duration-300 ease-out text-center border border-gray-200 rounded-sm cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                  >
                    Get a Free Quote
                  </motion.button>
                </div>

                {/* Slider Dots */}
                <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                  {bannerContents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === index 
                          ? 'bg-[#F6D516] w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
