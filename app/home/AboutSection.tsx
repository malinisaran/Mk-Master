"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Rocket, Users, Monitor, Smile, Award, ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Innovative Approach",
    description: "We leverage cutting-edge technologies and methodologies to deliver innovative solutions that drive business growth.",
    icon: <Rocket className="w-6 h-6" style={{ color: '#04BDF1' }} />
  },
  {
    title: "Client-Centered Focus",
    description: "Your success is our priority. We work closely with you to understand your needs and deliver tailored solutions.",
    icon: <Users className="w-6 h-6" style={{ color: '#04BDF1' }} />
  },
  {
    title: "Experienced Team",
    description: "Our team of experts brings years of experience and deep industry knowledge to every project.",
    icon: <Award className="w-6 h-6" style={{ color: '#04BDF1' }} />
  }
];

export default function AboutSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 md:space-y-10"
          >
            <div>
              <div className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4" style={{ color: '#04BDF1' }}>ABOUT US</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
                Your Trusted Partner In <span style={{ color: '#04BDF1' }}>Digital Transformation</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Discover the insights you need to make confident decisions. From setup to support, we've simplified the answers for you.              </p>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 md:space-x-5">
                  <div className="flex-shrink-0 mt-1 p-1.5 sm:p-2 md:p-2.5 rounded-lg" style={{ backgroundColor: '#04BDF120' }}>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-1.5">{feature.title}</h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              href="/about"
              className="text-white font-medium py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-8 lg:px-10 rounded-md transition-colors duration-200 text-xs sm:text-sm md:text-base lg:text-lg w-fit inline-block" 
              style={{ backgroundColor: '#04BDF1' }} 
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#03a8d8'} 
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#04BDF1'}
            >
              Learn More
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
              <div className="relative rounded-lg shadow-xl overflow-hidden mb-3 sm:mb-4 md:mb-5  flex-1 min-h-0">
                <div 
                  className="relative bg-cover bg-center bg-no-repeat p-3 sm:p-4 md:p-5 lg:p-6 h-full"
                  style={{ backgroundImage: 'url(/rocket.jpg)' }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-white/70"></div>
                  
                  {/* Content */}
                  <div className="relative  h-full flex flex-col justify-between">
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
                          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" style={{ color: '#04BDF1' }} />
                          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900">66k+</span>
                        </div>
                      </div>
                      <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-2.5 md:mb-3">Happy Clients</h4>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 md:h-2.5 mb-1 sm:mb-1.5 md:mb-2">
                        <div className="h-1.5 sm:h-2 md:h-2.5 rounded-full" style={{ width: '89.89%', backgroundColor: '#04BDF1' }}></div>
                      </div>
                      <div className="text-right text-xs sm:text-sm md:text-base text-gray-500 mb-2 sm:mb-3 md:mb-4">89.89%</div>
                    </div>
                    
                    {/* More Review */}
                    <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700">
                      <span>More Review</span>
                      <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Increase Company Efficiency Card */}
              <div className="relative text-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-xl  flex-shrink-0 h-[80px] sm:h-[100px] md:h-[110px] lg:h-[120px] xl:h-[130px] 2xl:h-[140px] flex flex-col justify-center" style={{ backgroundColor: '#04BDF1' }}>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-1.5 md:mb-2">+75%</div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Increase company efficiency</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}