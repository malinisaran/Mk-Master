"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, CheckCircle, Users, Code, Shield, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const visionPoints = [
  {
    title: "Trusted Leadership",
    description: "To become a trusted and leading IT solutions company that empowers businesses worldwide through innovative digital technologies, exceptional design, and scalable software solutions.",
    icon: <Eye className="w-6 h-6" style={{ color: '#04BDF1' }} />
  },
  {
    title: "Continuous Evolution",
    description: "We aim to continuously evolve with emerging technologies and set new standards in quality, reliability, and customer satisfaction in the digital space.",
    icon: <Target className="w-6 h-6" style={{ color: '#04BDF1' }} />
  }
];

const missionCommitments = [
  {
    title: "Understanding Requirements",
    description: "Understanding client requirements deeply and delivering customized solutions",
    icon: <Users className="w-6 h-6" style={{ color: '#04BDF1' }} />
  },
  {
    title: "Modern Technologies",
    description: "Using modern technologies and industry best practices",
    icon: <Code className="w-6 h-6" style={{ color: '#04BDF1' }} />
  },
  {
    title: "User-Friendly Products",
    description: "Creating user-friendly and performance-driven digital products",
    icon: <CheckCircle className="w-6 h-6" style={{ color: '#04BDF1' }} />
  },
  {
    title: "Transparency & Reliability",
    description: "Maintaining transparency, reliability, and long-term client relationships",
    icon: <Shield className="w-6 h-6" style={{ color: '#04BDF1' }} />
  },
  {
    title: "Continuous Support",
    description: "Providing continuous support, maintenance, and improvement throughout the digital journey",
    icon: <Heart className="w-6 h-6" style={{ color: '#04BDF1' }} />
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* Vision Section */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-10 md:mb-12"
            >
              <div className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 inline-block px-4 py-1 rounded-full" style={{ backgroundColor: '#04BDF140', color: '#04BDF1' }}>
                🌟 Vision
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                Our <span style={{ color: '#04BDF1' }}>Vision</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 sm:space-x-5"
                >
                  <div className="flex-shrink-0 mt-1 p-2 sm:p-2.5 rounded-lg" style={{ backgroundColor: '#04BDF120' }}>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      {point.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8 md:space-y-10"
            >
              <div>
                <div className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4" style={{ color: '#04BDF1' }}>
                  🎯 Mission
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
                  Our <span style={{ color: '#04BDF1' }}>Mission</span>
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  Our mission is to deliver high-quality, secure, and scalable website and mobile application solutions that help businesses grow and succeed digitally.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 font-semibold leading-relaxed">
                  We are committed to:
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {missionCommitments.map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 md:space-x-5">
                    <div className="flex-shrink-0 mt-1 p-1.5 sm:p-2 md:p-2.5 rounded-lg" style={{ backgroundColor: '#04BDF120' }}>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                        {commitment.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-1.5">
                        {commitment.title}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Same as AboutSection */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 items-stretch w-full"
            >
              {/* Left Side - Combined Image */}
              <div className="relative flex-1 w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]">
                <div className="relative rounded-xl overflow-hidden bg-gray-100 w-full h-full">
                  <Image
                    src="/combinedImge.jpg"
                    alt="Digital transformation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
              </div>

              {/* Right Side - UI Design */}
              <div className="relative flex-1 w-full lg:w-auto flex flex-col justify-between h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]">
                {/* Happy Clients and More Review Section with Rocket Background */}
                <div className="relative rounded-lg shadow-xl overflow-hidden mb-3 sm:mb-4 md:mb-5 flex-1 min-h-0">
                  <div 
                    className="relative bg-cover bg-center bg-no-repeat p-3 sm:p-4 md:p-5 lg:p-6 h-full"
                    style={{ backgroundImage: 'url(/rocket.jpg)' }}
                  >
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-white/70"></div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2 sm:mb-2.5 md:mb-3">
                          <div className="flex -space-x-1 sm:-space-x-1.5 md:-space-x-2">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                              <Image
                                src="/Group_client-e1761304644686.png"
                                alt="Client"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900">66k+</span>
                          </div>
                        </div>
                        <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-2.5 md:mb-3">Happy Clients</h4>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 md:h-2.5 mb-1 sm:mb-1.5 md:mb-2">
                          <div className="h-1.5 sm:h-2 md:h-2.5 rounded-full" style={{ width: '89.89%', backgroundColor: '#04BDF1' }}></div>
                        </div>
                        <div className="text-right text-xs sm:text-sm md:text-base text-gray-500 mb-2 sm:mb-3 md:mb-4">89.89%</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Increase Company Efficiency Card */}
                <div className="relative text-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-xl flex-shrink-0 h-[80px] sm:h-[100px] md:h-[110px] lg:h-[120px] xl:h-[130px] 2xl:h-[140px] flex flex-col justify-center" style={{ backgroundColor: '#04BDF1' }}>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-1.5 md:mb-2">+75%</div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">Increase company efficiency</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

