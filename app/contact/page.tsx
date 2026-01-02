"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
            Contact Us
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
              Contact Us
            </span>
          </motion.div>
        </div>
      </div>
      
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Contact Information - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#04BDF1] mb-3 sm:mb-4">
                  Contact Information
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
                  Feel free to reach out to us through email or phone. We're here to assist you.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {/* Phone Card */}
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#F6D516] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Phone</h3>
                    <div className="space-y-1">
                      <a href="tel:+918903742055" className="block text-sm sm:text-base text-gray-600 hover:text-[#04BDF1] transition-colors">
                        +91 8903742055
                      </a>
                      <a href="tel:+919486501302" className="block text-sm sm:text-base text-gray-600 hover:text-[#04BDF1] transition-colors">
                        +91 9486501302
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#F6D516] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:info@manokarkannandynamictechnology.co" className="text-sm sm:text-base text-gray-600 hover:text-[#04BDF1] transition-colors break-all">
                      info@manokarkannandynamictechnology.co
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#F6D516] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      426, 2nd floor, Bangalore main road,<br />
                      Athiyandhal village,<br />
                      Thiruvannamalai.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enquiry Form Iframe - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Send Us a Message
              </h2>
              
              <div className="w-full h-[500px] sm:h-[600px] md:h-[700px]">
                <iframe
                  aria-label="Enquiry Form"
                  frameBorder="0"
                  style={{
                    height: '100%',
                    width: '100%',
                    border: 'none'
                  }}
                  src="https://forms.zohopublic.in/manoharkannandynamictechnolog1/form/EnquiryForm/formperma/_BdnILSWlUMVcE0dg9DaGLhYZXSmUHVllIzxQ_ZPJ1U"
                  className="w-full h-full rounded-lg"
                  allow="fullscreen"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

