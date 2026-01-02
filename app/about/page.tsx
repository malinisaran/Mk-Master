"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Target, Heart, CheckCircle, Rocket, Users, Award, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "../home/Testimonials";
import CallToAction from "../home/CallToAction";


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
      
      {/* About Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              <div>
                <div className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4" style={{ color: '#04BDF1' }}>ABOUT US</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
                  Your Trusted Partner In <span style={{ color: '#04BDF1' }}>Digital Transformation</span>
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    Discover the insights you need to make confident decisions. From setup to support, we've simplified the answers for you.              </p>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 md:space-x-5">
                    <div className="flex-shrink-0 mt-1 p-1.5 sm:p-2 md:p-2.5 rounded-lg" style={{ backgroundColor: '#04BDF120' }}>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-1.5">{feature.title}</h4>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 items-stretch w-full"
            >
              {/* Left Side - Combined Image */}
              <div className="relative flex-1 w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]">
                <div className="relative rounded-xl overflow-hidden bg-gray-100 w-full h-full">
                  <Image
                    src="/services/combinedImge.jpg"
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
                  <div className="relative p-3 sm:p-4 md:p-5 lg:p-6 h-full">
                    <div className="absolute inset-0">
                      <Image
                        src="/services/rocket.jpg"
                        alt="Rocket background"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-white/70"></div>
                    
                    {/* Content */}
                    <div className="relative  h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2 sm:mb-2.5 md:mb-3">
                          <div className="flex -space-x-1 sm:-space-x-1.5 md:-space-x-2">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                              <Image
                                src="/logos/Group_client-e1761304644686.png"
                                alt="Client"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                              <Image
                                src="/logos/Group_client-e1761304644686.png"
                                alt="Client"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                              <Image
                                src="/logos/Group_client-e1761304644686.png"
                                alt="Client"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                              <Image
                                src="/logos/Group_client-e1761304644686.png"
                                alt="Client"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                              />
                            </div>
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
      
      {/* Main About Section - Split Layout */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-stretch min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-full"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/about/office2.jpg"
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
                      Happy Clients
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
                      Quality Experience
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
              className="flex flex-col justify-center py-8 lg:py-12 pl-6 sm:pl-8 md:pl-10 lg:pl-12 pr-6 sm:pr-8 md:pr-10 lg:pr-6 xl:pr-8 2xl:pr-10"
            >
              {/* Main Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 leading-tight">
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
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Our Vision
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-justify" style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
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
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Our Mission
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-justify" style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
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
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Our Values
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-justify" style={{ textAlign: 'justify', textJustify: 'inter-character' }}>
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
