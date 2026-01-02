"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Code, Globe, Smartphone, ShoppingCart, Palette, Megaphone, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "../home/Testimonials";
import CallToAction from "../home/CallToAction";

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
    title: "Web Development",
    description: "Custom websites built with modern technologies for maximum performance and user experience",
    icon: <Code className="w-5 h-5" />,
    hasImage: true,
    imageSrc: "/services/webdev.jpeg",
    details: "We provide comprehensive web development services that transform your business online. Our expert team specializes in creating custom websites using cutting-edge technologies like React, Next.js, and modern CSS frameworks. We build responsive, fast-loading websites that work seamlessly across all devices. Our development process includes strategic planning, clean code architecture, SEO optimization, and rigorous testing to ensure your website performs at its best. Whether you need a simple business website or a complex web platform, we deliver solutions that drive results and enhance your digital presence."
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that engage users effectively",
    icon: <Smartphone className="w-5 h-5" />,
    hasImage: true,
    imageSrc: "/services/mobiledev.webp",
    details: "Transform your business with powerful mobile applications that connect you with your customers on-the-go. We develop native iOS and Android apps using Swift, Kotlin, and cross-platform solutions with React Native and Flutter. Our mobile apps are designed for optimal performance, intuitive user interfaces, and seamless integration with backend systems. From concept to launch, we handle the entire development lifecycle including UI/UX design, API integration, push notifications, app store optimization, and post-launch maintenance. Our mobile solutions help businesses increase customer engagement, improve operational efficiency, and drive revenue growth."
  },
  {
    title: "Web Application Development",
    description: "Scalable web applications that automate processes and streamline business operations",
    icon: <Globe className="w-5 h-5" />,
    hasImage: true,
    imageSrc: "/services/webapplication.webp",
    details: "Build powerful, scalable web applications that transform how your business operates. We create custom web applications using modern frameworks and technologies that handle complex business logic, real-time data processing, and multi-user interactions. Our web applications feature robust backend architectures, secure authentication systems, database management, and API integrations. We develop solutions for various needs including customer portals, admin dashboards, workflow management systems, and data analytics platforms. Every application is built with scalability in mind, ensuring it grows with your business while maintaining high performance and security standards."
  },
  {
    title: "E-Commerce Solutions",
    description: "Complete online stores with secure payment processing and inventory management systems",
    icon: <ShoppingCart className="w-5 h-5" />,
    hasImage: true,
    imageSrc: "/services/ecommercesolu.jpg",
    details: "Launch your online store with our comprehensive e-commerce solutions that drive sales and enhance customer experience. We build secure, scalable e-commerce platforms with seamless payment gateway integration, shopping cart functionality, and order management systems. Our e-commerce solutions include product catalog management, inventory tracking, customer accounts, reviews and ratings, and multi-currency support. We integrate popular payment methods, shipping calculators, and tax calculations to provide a complete shopping experience. From small online shops to large enterprise marketplaces, we create e-commerce platforms that convert visitors into customers and maximize your online revenue potential."
  },
  {
    title: "UI/UX Design",
    description: "User-centered designs that create intuitive and visually appealing digital experiences",
    icon: <Palette className="w-5 h-5" />,
    hasImage: true,
    imageSrc: "/services/uiux.avif",
    details: "Create exceptional user experiences with our professional UI/UX design services. Our design team combines creativity with user research to deliver interfaces that are both beautiful and functional. We follow a comprehensive design process that includes user research, wireframing, prototyping, and user testing to ensure your design meets user needs and business goals. Our designs prioritize usability, accessibility, and visual appeal across all devices and platforms. We create design systems, style guides, and interactive prototypes that guide development teams. From initial concepts to final designs, we ensure every interaction is thoughtfully designed to enhance user satisfaction and drive engagement."
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that increase brand visibility and drive qualified leads",
    icon: <Megaphone className="w-5 h-5" />,
    hasImage: true,
    imageSrc: "/services/digitalmarketig.jpg",
    details: "Grow your online presence and reach your target audience with our comprehensive digital marketing services. We develop and execute strategic marketing campaigns that include SEO optimization, social media management, content marketing, pay-per-click advertising, and email marketing. Our data-driven approach ensures every campaign is optimized for maximum ROI. We conduct thorough market research, competitor analysis, and audience segmentation to create targeted campaigns that resonate with your customers. Our services include Google Ads management, Facebook and Instagram advertising, LinkedIn marketing, content creation, blog writing, and marketing analytics. We help businesses build their brand, increase website traffic, generate leads, and convert prospects into customers through proven digital marketing strategies."
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const openModal = (service: ServiceCard) => {
    setSelectedService(service);
    setShowEnquiryForm(false);
  };

  const closeModal = () => {
    setSelectedService(null);
    setShowEnquiryForm(false);
  };

  useEffect(() => {
    if (selectedService) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedService]);

  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-gray-50">
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
            Services
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
              Services
            </span>
          </motion.div>
        </div>
      </div>
      
      <section className="py-14 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Transform Your <span style={{ color: '#04BDF1' }}>Digital Future</span>
            </h1>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
                onClick={() => openModal(service)}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out overflow-hidden cursor-pointer"
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
                        <div className="absolute inset-0 bg-[#04BDF1]/20 group-hover:bg-[#04BDF1]/30 transition-colors duration-300"></div>
                      </div>
                    </>
                  ) : (
                    <div 
                      className="absolute inset-0 transition-colors duration-300 group-hover:opacity-90"
                      style={{ backgroundColor: '#04BDF1' }}
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
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-300" style={{ borderColor: '#04BDF1' }}>
                          <div style={{ color: '#04BDF1' }}>
                            {service.icon}
                          </div>
                        </div>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
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

      {/* Testimonials Section */}
      
      {/* Call to Action Section */}
      <CallToAction />

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
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className={`bg-white rounded-2xl shadow-2xl ${showEnquiryForm ? 'max-w-6xl' : 'max-w-2xl'} w-full overflow-hidden flex flex-col transition-all duration-300 ease-out ${
                  showEnquiryForm 
                    ? 'h-[95vh] sm:h-[90vh] md:h-[85vh]' 
                    : 'max-h-[90vh] sm:max-h-[85vh]'
                }`}
              >
                {/* Modal Header */}
                <div className="relative p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
                  {/* Background Image or Color for Header */}
                  {selectedService.hasImage && selectedService.imageSrc ? (
                    <div className="absolute inset-0 rounded-t-2xl overflow-hidden">
                      <Image
                        src={selectedService.imageSrc}
                        alt={selectedService.title}
                        fill
                        className="object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-[#04BDF1]/10"></div>
                    </div>
                  ) : (
                    <div 
                      className="absolute inset-0 rounded-t-2xl opacity-10"
                      style={{ backgroundColor: '#04BDF1' }}
                    ></div>
                  )}
                  
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border-2 shadow-md" style={{ borderColor: '#04BDF1' }}>
                        <div style={{ color: '#04BDF1' }}>
                          {selectedService.icon}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                          {selectedService.title}
                        </h2>
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Modal Body - Split Layout when form is shown */}
                {showEnquiryForm ? (
                  <div className={`flex-1 overflow-hidden flex flex-col ${showEnquiryForm ? 'md:flex-row' : ''} min-h-0`}>
                    {/* Left Side - Content */}
                    <div className="flex-1 p-4 sm:p-6 overflow-y-auto border-r-0 md:border-r border-gray-200 min-h-0">
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                        {selectedService.details}
                      </p>
                    </div>
                    
                    {/* Right Side - Form */}
                    <div className="flex-1 p-4 sm:p-6 overflow-hidden flex flex-col min-h-0 border-t md:border-t-0 border-gray-200">
                      <div className="flex-1 w-full h-full">
                        <iframe
                          aria-label="Enquiry Form"
                          frameBorder="0"
                          style={{
                            height: '100%',
                            width: '100%',
                            border: 'none',
                            display: 'block'
                          }}
                          src="https://forms.zohopublic.in/manoharkannandynamictechnolog1/form/EnquiryForm/formperma/_BdnILSWlUMVcE0dg9DaGLhYZXSmUHVllIzxQ_ZPJ1U"
                          className="w-full h-full rounded-lg"
                          allow="fullscreen"
                          scrolling="yes"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 sm:p-8 overflow-y-auto">
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                      {selectedService.details}
                    </p>
                    
                    <button
                      onClick={() => setShowEnquiryForm(true)}
                      className="text-white font-medium py-3 px-8 cursor-pointer rounded-md transition-colors duration-200 text-sm sm:text-base"
                      style={{ backgroundColor: '#04BDF1' }}
                      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#03a8d8'}
                      onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#04BDF1'}
                    >
                      Enquire Now
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
