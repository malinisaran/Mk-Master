"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Target, Eye, CheckCircle, Users, Code, Shield, Heart, Globe, Handshake, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "../home/AboutSection";
import Testimonials from "../home/Testimonials";
import CallToAction from "../home/CallToAction";

const visionPoints = [
  {
    title: "Trusted Leadership",
    description: "To become a trusted and leading IT solutions company that empowers businesses worldwide through innovative digital technologies, exceptional design, and scalable software solutions.",
    icon: Eye
  },
  {
    title: "Continuous Evolution",
    description: "We aim to continuously evolve with emerging technologies and set new standards in quality, reliability, and customer satisfaction in the digital space.",
    icon: Target
  },
  {
    title: "Collaborative Growth",
    description: "We envision building long-term partnerships with our clients by delivering value-driven solutions, fostering innovation together, and helping businesses scale confidently in an ever-changing digital world.",
    icon: Handshake
  },
  {
    title: "Global Impact",
    description: "Our goal is to create technology solutions that not only drive business success but also contribute positively to society by improving efficiency, accessibility, and digital experience across industries worldwide.",
    icon: Globe
  }
];

const missionCommitments = [
  {
    title: "Understanding Requirements",
    description: "Understanding client requirements deeply and delivering customized solutions",
    icon: Users
  },
  {
    title: "Modern Technologies",
    description: "Using modern technologies and industry best practices",
    icon: Code
  },
  {
    title: "User-Friendly Products",
    description: "Creating user-friendly and performance-driven digital products",
    icon: CheckCircle
  },
  {
    title: "Transparency & Reliability",
    description: "Maintaining transparency, reliability, and long-term client relationships",
    icon: Shield
  },
  {
    title: "Continuous Support",
    description: "Providing continuous support, maintenance, and improvement throughout the digital journey",
    icon: Heart
  },
  {
    title: "Innovation & Excellence",
    description: "Continuously innovating and improving our processes to ensure excellence in every solution we deliver.",
    icon: Lightbulb
  }
];

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative h-[40vh] min-h-[250px] sm:h-[45vh] sm:min-h-[300px] md:h-[50vh] md:min-h-[350px] lg:h-[60vh] lg:min-h-[400px] flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/backgroundHomepage.jpg)',
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-25 relative z-10">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-[#F6D516] w-full px-2"
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
      
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-25 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Vision Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                  Our <span className="text-[#04BDF1]">Vision</span>
                </h2>
                <div className="space-y-6 sm:space-y-7 md:space-y-8">
                  {visionPoints.map((point, index) => {
                    const IconComponent = point.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg bg-[#04BDF120]">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#04BDF1]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1.5 sm:mb-2">
                            {point.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Mission Section - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                  Our <span className="text-[#04BDF1]">Mission</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                  Our mission is to deliver high-quality, secure, and scalable website and mobile application solutions that help businesses grow and succeed digitally.
                </p>
                <div className="space-y-5 sm:space-y-6">
                  {missionCommitments.map((commitment, index) => {
                    const IconComponent = commitment.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg bg-[#04BDF120]">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#04BDF1]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">
                            {commitment.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {commitment.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
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
