"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Code, Globe, Smartphone, Cloud, Network, Users, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ServiceCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  hasImage?: boolean;
  imageSrc?: string;
  details?: string;
};

const services: ServiceCard[] = [
  {
    title: "Custom Development",
    description: "Efficitur habitasse sociosqu senectus platea sem dictum pretium nullam",
    icon: <Code className="w-5 h-5" />,
    hasImage: true,
    imageSrc: "/combinedImge.jpg",
    details: "We provide custom software development solutions tailored to your specific business needs. Our expert team builds scalable, secure, and high-performance applications using the latest technologies and best practices."
  },
  {
    title: "Web Application",
    description: "Efficitur habitasse sociosqu senectus platea sem dictum pretium nullam",
    icon: <Globe className="w-5 h-5" />,
    hasImage: false,
    details: "Build powerful web applications that drive business growth. We create responsive, user-friendly web solutions with modern frameworks and technologies that scale with your business."
  },
  {
    title: "Mobile Solutions",
    description: "Efficitur habitasse sociosqu senectus platea sem dictum pretium nullam",
    icon: <Smartphone className="w-5 h-5" />,
    hasImage: false,
    details: "Transform your business with native and cross-platform mobile applications. We deliver iOS and Android apps that provide exceptional user experiences and drive engagement."
  },
  {
    title: "Cloud Services",
    description: "Efficitur habitasse sociosqu senectus platea sem dictum pretium nullam",
    icon: <Cloud className="w-5 h-5" />,
    hasImage: true,
    imageSrc: "/combinedImge.jpg",
    details: "Leverage the power of cloud computing with our comprehensive cloud services. We help you migrate, manage, and optimize your cloud infrastructure for maximum efficiency and cost savings."
  },
  {
    title: "System Integration",
    description: "Efficitur habitasse sociosqu senectus platea sem dictum pretium nullam",
    icon: <Network className="w-5 h-5" />,
    hasImage: false,
    details: "Seamlessly connect your business systems and applications. Our integration services ensure smooth data flow and process automation across your entire technology ecosystem."
  },
  {
    title: "IT Consulting",
    description: "Efficitur habitasse sociosqu senectus platea sem dictum pretium nullam",
    icon: <Users className="w-5 h-5" />,
    hasImage: false,
    details: "Get expert guidance on your technology strategy and implementation. Our consultants help you make informed decisions, optimize processes, and achieve your business objectives."
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const openModal = (service: ServiceCard) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Transform Your <span style={{ color: '#CE0000' }}>Digital Future</span>
            </h1>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openModal(service)}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Card Content */}
                <div className="relative h-[350px] sm:h-[400px] flex flex-col">
                  {/* Background Image or Solid Color */}
                  {service.hasImage && service.imageSrc ? (
                    <>
                      <div className="absolute inset-0">
                        <Image
                          src={service.imageSrc}
                          alt={service.title}
                          fill
                          className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-[#CE0000]/20 group-hover:bg-[#CE0000]/30 transition-colors duration-300"></div>
                      </div>
                    </>
                  ) : (
                    <div 
                      className="absolute inset-0 transition-colors duration-300 group-hover:opacity-90"
                      style={{ backgroundColor: '#CE0000' }}
                    ></div>
                  )}

                  {/* Content Overlay */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-6 sm:p-8">
                    {/* Top Right Arrow */}
                    <div className="flex justify-end mb-auto">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="mt-auto">
                      {/* Icon in Bottom Left */}
                      <div className="mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-300" style={{ borderColor: '#CE0000' }}>
                          <div style={{ color: '#CE0000' }}>
                            {service.icon}
                          </div>
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-50"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="relative p-6 sm:p-8 border-b border-gray-200">
                  {/* Background Image or Color for Header */}
                  {selectedService.hasImage && selectedService.imageSrc ? (
                    <div className="absolute inset-0 rounded-t-2xl overflow-hidden">
                      <Image
                        src={selectedService.imageSrc}
                        alt={selectedService.title}
                        fill
                        className="object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-[#CE0000]/10"></div>
                    </div>
                  ) : (
                    <div 
                      className="absolute inset-0 rounded-t-2xl opacity-10"
                      style={{ backgroundColor: '#CE0000' }}
                    ></div>
                  )}
                  
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center border-2 shadow-md" style={{ borderColor: '#CE0000' }}>
                        <div style={{ color: '#CE0000' }}>
                          {selectedService.icon}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          {selectedService.title}
                        </h2>
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8">
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                    {selectedService.details}
                  </p>
                  
                  <button
                    onClick={closeModal}
                    className="text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 text-sm sm:text-base"
                    style={{ backgroundColor: '#CE0000' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#b30000'}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#CE0000'}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
