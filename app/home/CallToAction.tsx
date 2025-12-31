"use client";

import { motion } from 'framer-motion';
import { useEnquiryModal } from '@/contexts/EnquiryModalContext';

export default function CallToAction() {
  const { openModal } = useEnquiryModal();

  return (
    <section className="pt-2 sm:pt-4 md:pt-6 pb-6 sm:pb-8 md:pb-12 text-white relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/cta/ctaimage.png)' }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to grow your business digitally?
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact Manokar Kannan Dynamic Technology today and start your digital journey with confidence
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={openModal}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center justify-center cursor-pointer"
            >
              Contact Us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            
    
          </motion.div>
        </div>
      </div>
    </section>
  );
}
