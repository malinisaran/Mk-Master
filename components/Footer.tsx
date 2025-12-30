"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
  <footer className="bg-white text-gray-900 py-16 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Company Info - Now spans 2 columns on medium screens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:col-span-2 space-y-6"
      >
        <div className="flex items-center">
          <Image 
            src="/CompanyLogo.png" 
            alt="Manokar Kannan Dynamic Technology" 
            width={180}
            height={80}
            className="h-12 w-auto"
          />
        </div>
        <p className="text-gray-600 text-base leading-relaxed max-w-md">
          Empowering businesses with innovative digital solutions to drive growth and success in the digital age.
        </p>
        <div className="flex space-x-6">
          {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
            <a 
              key={social}
              href={`https://${social}.com`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#CE0000] transition-colors duration-300 text-xl"
            >
              <span className="sr-only">{social}</span>
              <i className={`fab fa-${social}`}></i>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
        <ul className="space-y-3">
          {[
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Career', href: '/career' },
            { name: 'Contact Us', href: '/contact' },
          ].map((item) => (
            <li key={item.name}>
              <div className="flex items-center group">
                <i className="fas fa-chevron-right text-[10px] text-[#CE0000] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                <Link 
                  href={item.href}
                  className="text-gray-600 hover:text-[#CE0000] transition-colors duration-300 text-base flex-1"
                >
                  {item.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <i className="fas fa-map-marker-alt mt-1 ml-1 text-[#CE0000] flex-shrink-0"></i>
            <span className="text-gray-600 text-base">426, 2nd floor, Bangalore main road,Athiyandhal village, Thiruvannamalai.</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-phone-alt mr-3 text-[#CE0000] mt-1"></i>
            <div className="space-y-1">
              <a href="tel:+918903742055" className="block text-gray-600 hover:text-[#CE0000] transition-colors duration-300 text-base">+91 89037 42055</a>
              <a href="tel:+919486501302" className="block text-gray-600 hover:text-[#CE0000] transition-colors duration-300 text-base">+91 94865 01302</a>
            </div>
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope mr-3 text-[#CE0000]"></i>
            <a href="mailto:info@manokarkannandynamictechnology.com" className="text-gray-600 hover:text-[#CE0000] transition-colors duration-300 text-base">info@manokarkannandynamictechnology.com</a>
          </li>
        </ul>
      </motion.div>
    </div>

    {/* Copyright */}
    <motion.div 
      className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-500 text-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <p>© {currentYear} Manokar Kannan Dynamic Technology. All rights reserved.</p>
      <div className="mt-3 space-x-4">
        <Link href="/privacy-policy" className="text-gray-600 hover:text-[#CE0000] transition-colors duration-300">Privacy Policy</Link>
        <Link href="/terms" className="text-gray-600 hover:text-[#CE0000] transition-colors duration-300">Terms of Service</Link>
      </div>
    </motion.div>
  </div>
</footer>
  );
}
