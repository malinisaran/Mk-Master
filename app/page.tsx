"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import TypingEffect from "@/components/TypingEffect";
import { motion } from "framer-motion";
import HomePage from "./home/page";
import ServicesSection from "./home/ServicesSection";
import Technologies from "./home/Technologies";
import AboutSection from "./home/AboutSection";
import Testimonials from "./home/Testimonials";
import CallToAction from "./home/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    { title: "Web Development", description: "Custom websites and web applications built with the latest technologies.", icon: "🌐" },
    { title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android.", icon: "📱" },
    { title: "UI/UX Design", description: "Beautiful and intuitive user interfaces that enhance user experience.", icon: "🎨" },
    { title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure for your applications.", icon: "☁️" },
    { title: "E-commerce", description: "Complete e-commerce solutions to grow your online business.", icon: "🛒" },
    { title: "Digital Marketing", description: "Data-driven marketing strategies to boost your online presence.", icon: "📈" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-800 to-orange-900 overflow-x-hidden">

      {/* Show the welcome content first */}
      <HomePage />
      <AboutSection />
      
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Technologies Section */}
      <Technologies />
      
      {/* Testimonials Section */}
      <Testimonials />
      <CallToAction />
      <Footer />
      
      {/* Main Content */}
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-800">
        <Navbar />

        <main className="relative px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto">
          </div>

          {/* Hero Content Section */}
          {/* <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"> */}
            {/* <div className="flex flex-col md:flex-row items-center"> */}
              {/* Left Column - Content */}
              {/* <motion.div 
                className="md:w-1/2 mb-12 md:mb-0 md:pr-8 lg:pr-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Your Vision, <span className="text-orange-400">Our Code</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-gray-300 mb-8 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Transform your business with cutting-edge software solutions tailored to your needs.
                </motion.p>

                <motion.ul 
                  className="space-y-3 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {['Custom Software Development', 'Web & Mobile Applications', 'Cloud Solutions'].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </motion.div>
              </motion.div> */}

              {/* Right Column - Laptop Image */}
              {/* <motion.div 
                className="md:w-1/2 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
                  <Image 
                    src="/image.png"
                    alt="Laptop Dashboard"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain mx-auto ml-10"
                    priority
                  />
                </div>
              </motion.div> */}
            {/* </div>
          </div> */}

        </main>
      </div>
    </div>
  );
}