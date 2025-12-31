"use client";

import Image from 'next/image';
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 py-10 w-full">

      <div className="w-full px-6 lg:px-12">

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-6">

          {/* Logo */}
          <div>
            <div className="w-36 h-36 relative">
              <Image 
                src="/CompanyLogo.png"
                alt="MANOKAR KANNAN DYNAMIC TECHNOLOGY"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {['Home','About Us','Services','Projects','Contact'].map((item) => (
                <li key={item} className="flex items-center">
                  <FaArrowRight className="text-red-500 mr-2 text-xs" />
                  <span className="text-sm text-gray-600 hover:text-red-500 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-4 uppercase">Contact Us</h3>
            <ul className="space-y-3">

              <li className="flex items-start">
                <FaMapMarkerAlt className="text-red-500 mt-1 mr-2" />
                <span className="text-sm text-gray-600">
                  426, 2nd floor, Bangalore main road,<br/>
                  Athiyandhal village,<br/>
                  Thiruvannamalai.
                </span>
              </li>

              <li className="flex items-start">
                <FaPhone className="text-red-500 mt-1 mr-2" />
                <div className="flex flex-col">
                  <a href="tel:+918903742055" className="text-sm hover:text-red-500">+91 8903742055</a>
                  <a href="tel:+919486501302" className="text-sm hover:text-red-500">+91 9486501302</a>
                </div>
              </li>

              <li className="flex items-start">
                <FaEnvelope className="text-red-500 mt-1 mr-2" />
                <a href="mailto:info@manokarkannandynamictechnology.co" className="text-sm hover:text-red-500 break-all">
                  info@manokarkannandynamictechnology.co
                </a>
              </li>

            </ul>
          </div>

          {/* Location */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-base font-semibold uppercase">Our Location</h3>
              <a className="text-xs text-blue-600 hover:underline cursor-pointer">View larger map</a>
            </div>

            <div className="relative h-44 rounded-lg overflow-hidden">
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
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs text-gray-500 text-center">
              © {currentYear} MANOKAR KANNAN DYNAMIC TECHNOLOGY. All rights reserved. Developed by ABG
            </p>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
            >
              <FaArrowUp className="text-sm" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
