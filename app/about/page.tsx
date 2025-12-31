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
    icon: <Eye className="w-6 h-6 text-[#04BDF1]" />
  },
  {
    title: "Continuous Evolution",
    description: "We aim to continuously evolve with emerging technologies and set new standards in quality, reliability, and customer satisfaction in the digital space.",
    icon: <Target className="w-6 h-6 text-[#04BDF1]" />
  },
  {
    title: "Collaborative Growth",
    description: "We envision building long-term partnerships with our clients by delivering value-driven solutions, fostering innovation together, and helping businesses scale confidently in an ever-changing digital world.",
    icon: <Handshake className="w-6 h-6 text-[#04BDF1]" />
  },
  {
    title: "Global Impact",
    description: "Our goal is to create technology solutions that not only drive business success but also contribute positively to society by improving efficiency, accessibility, and digital experience across industries worldwide.",
    icon: <Globe className="w-6 h-6 text-[#04BDF1]" />
  }
];

const missionCommitments = [
  {
    title: "Understanding Requirements",
    description: "Understanding client requirements deeply and delivering customized solutions",
    icon: <Users className="w-6 h-6 text-[#04BDF1]" />
  },
  {
    title: "Modern Technologies",
    description: "Using modern technologies and industry best practices",
    icon: <Code className="w-6 h-6 text-[#04BDF1]" />
  },
  {
    title: "User-Friendly Products",
    description: "Creating user-friendly and performance-driven digital products",
    icon: <CheckCircle className="w-6 h-6 text-[#04BDF1]" />
  },
  {
    title: "Transparency & Reliability",
    description: "Maintaining transparency, reliability, and long-term client relationships",
    icon: <Shield className="w-6 h-6 text-[#04BDF1]" />
  },
  {
    title: "Continuous Support",
    description: "Providing continuous support, maintenance, and improvement throughout the digital journey",
    icon: <Heart className="w-6 h-6 text-[#04BDF1]" />
  },
  {
    title: "Innovation & Excellence",
    description: "Continuously innovating and improving our processes to ensure excellence in every solution we deliver.",
    icon: <Lightbulb className="w-6 h-6 text-[#04BDF1]" />
  }
];

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] min-h-[400px] flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/backgroundHomepage.jpg)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            transform: 'none !important',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 mt-25 relative z-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#F6D516] w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>
          <motion.div 
            className="flex items-center justify-center bg-black/50 px-6 py-2.5 rounded-full backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span 
              onClick={() => router.push('/')} 
              className="text-white hover:text-blue-300 transition-colors cursor-pointer text-sm sm:text-base"
            >
              Home
            </span>
            <span className="mx-2 text-white">/</span>
            <span className="text-blue-300 text-sm sm:text-base">
              About Us
            </span>
          </motion.div>
        </div>
      </div>
      
      <AboutSection showLearnMore={false} />
      
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 -mt-25 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Vision Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 pl-1 sm:pl-4 md:pl-6 lg:pl-5"
            >
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Our <span className="text-[#04BDF1]">Vision</span>
                </h2>
                <div className="space-y-8">
                  {visionPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-[#04BDF120]">
                        {point.icon}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                          {point.title}
                        </h3>
                        <p className="text-gray-600">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mission Section - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Our <span className="text-[#04BDF1]">Mission</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Our mission is to deliver high-quality, secure, and scalable website and mobile application solutions that help businesses grow and succeed digitally.
                </p>
                <div className="space-y-6">
                  {missionCommitments.map((commitment, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-[#04BDF120]">
                        {commitment.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {commitment.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {commitment.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Same as AboutSection */}
           
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
