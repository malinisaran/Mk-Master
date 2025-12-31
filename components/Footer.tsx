"use client";

import Image from 'next/image';
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 py-12 sm:py-16 md:py-20 lg:py-24 w-full">

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mt-4 sm:mt-6 md:mt-8">

          {/* Logo */}
          <div>
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 relative">
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
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-5 sm:mb-6 md:mb-8 uppercase">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              {['Home','About Us','Services','Projects','Contact'].map((item) => (
                <li key={item} className="flex items-center">
                  <FaArrowRight className="text-red-500 mr-3 text-sm sm:text-base" />
                  <span className="text-base sm:text-lg text-gray-600 hover:text-red-500 cursor-pointer transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="-ml-12 sm:-ml-16 md:-ml-20 lg:-ml-24 xl:-ml-28">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-5 sm:mb-6 md:mb-8 uppercase">Contact Us</h3>
            <ul className="space-y-4 sm:space-y-5">

              <li className="flex items-start">
                <FaMapMarkerAlt className="text-red-500 mt-1 mr-3 text-base sm:text-lg flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-600">
                  426, 2nd floor, Bangalore main road,<br/>
                  Athiyandhal village,<br/>
                  Thiruvannamalai.
                </span>
              </li>

              <li className="flex items-start">
                <FaPhone className="text-red-500 mt-1 mr-3 text-base sm:text-lg flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+918903742055" className="text-base sm:text-lg text-gray-600 hover:text-red-500 transition-colors">+91 8903742055</a>
                  <a href="tel:+919486501302" className="text-base sm:text-lg text-gray-600 hover:text-red-500 transition-colors">+91 9486501302</a>
                </div>
              </li>

              <li className="flex items-start">
                <FaEnvelope className="text-red-500 mt-1 mr-3 text-base sm:text-lg flex-shrink-0" />
                <a href="mailto:info@manokarkannandynamictechnology.co" className="text-base sm:text-lg text-gray-600 hover:text-red-500 break-all transition-colors">
                  info@manokarkannandynamictechnology.co
                </a>
              </li>

            </ul>
          </div>

          {/* Location */}
          <div>
            <div className="flex justify-between items-center mb-4 sm:mb-5 md:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase">Our Location</h3>
              <a className="text-sm sm:text-base text-blue-600 hover:underline cursor-pointer transition-colors">View larger map</a>
            </div>

            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg overflow-hidden shadow-lg">
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
        <div className="border-t border-gray-200 mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 relative">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <p className="text-sm sm:text-base md:text-lg text-gray-500 text-center">
              © {currentYear} MANOKAR KANNAN DYNAMIC TECHNOLOGY. All rights reserved. Developed by ABG
            </p>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
            >
              <FaArrowUp className="text-base sm:text-lg" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
