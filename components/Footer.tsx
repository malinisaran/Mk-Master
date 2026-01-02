"use client";

import Image from 'next/image';
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 py-6 sm:py-8 md:py-10 w-full">

      <div className="w-full px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">

          {/* Logo */}
          <div className="flex justify-start">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative">
              <Image 
                src="/logos/CompanyLogo.png"
                alt="MANOKAR KANNAN DYNAMIC TECHNOLOGY"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 uppercase">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {['Home','About Us','Services','Career','Contact'].map((item) => (
                <li key={item} className="flex items-center justify-start">
                  <FaArrowRight className="text-red-500 mr-2 text-xs sm:text-sm" />
                  <span className="text-sm sm:text-base text-gray-600 hover:text-red-500 cursor-pointer transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 uppercase">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-2.5">

              <li className="flex items-start justify-start">
                <FaMapMarkerAlt className="text-red-500 mt-0.5 mr-2 text-xs sm:text-sm flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-600 text-left">
                  426, 2nd floor, Bangalore main road,<br/>
                  Athiyandhal village,<br/>
                  Thiruvannamalai.
                </span>
              </li>

              <li className="flex items-start justify-start">
                <FaPhone className="text-red-500 mt-0.5 mr-2 text-xs sm:text-sm flex-shrink-0" />
                <div className="flex flex-col space-y-0.5 items-start">
                  <a href="tel:+918903742055" className="text-sm sm:text-base text-gray-600 hover:text-red-500 transition-colors">+91 8903742055</a>
                  <a href="tel:+919486501302" className="text-sm sm:text-base text-gray-600 hover:text-red-500 transition-colors">+91 9486501302</a>
                </div>
              </li>

              <li className="flex items-start justify-start">
                <FaEnvelope className="text-red-500 mt-0.5 mr-2 text-xs sm:text-sm flex-shrink-0" />
                <a href="mailto:info@manokarkannandynamictechnology.com" className="text-sm sm:text-base text-gray-600 hover:text-red-500 break-words transition-colors text-left">
                  info@manokarkannandynamictechnology.com
                </a>
              </li>

            </ul>
          </div>

          {/* Location */}
          <div className="text-left">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-3 gap-2 sm:gap-0">
              <h3 className="text-base sm:text-lg font-bold uppercase">Our Location</h3>
              <a className="text-xs sm:text-sm text-blue-600 hover:underline cursor-pointer transition-colors">View larger map</a>
            </div>

            <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.01629331549!2d79.1559743153446!3d12.901206290900644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0x3ef1c5d1c2665e49!2sBangalore%20Main%20Rd%2C%20Athiyandhal%2C%20Tamil%20Nadu%20606704!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 relative">
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 px-2">
            <p className="text-xs sm:text-sm text-gray-500 text-left leading-relaxed">
              © {currentYear} MANOKAR KANNAN DYNAMIC TECHNOLOGY. All rights reserved.<span className="block sm:inline"> Developed by ABG</span>
            </p>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
            >
              <FaArrowUp className="text-sm sm:text-base" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
