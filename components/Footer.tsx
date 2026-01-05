"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Web Application Development',
    'E-Commerce Solutions',
    'UI/UX Design',
    'Digital Marketing'
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <>
      <footer className="bg-gray-900 text-white w-full relative">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-8 sm:py-10 md:py-12">
          {/* 4 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {/* Company Information */}
            <div className="text-left">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative mr-3">
                  <Image 
                    src="/logos/CompanyLogo.png"
                    alt="MANOKAR KANNAN DYNAMIC TECHNOLOGY"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-white font-semibold text-sm sm:text-base md:text-lg">MANOKAR KANNAN DYNAMIC TECHNOLOGY</span>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We are a customer-focused web development company, delivering innovative and tailored solutions with integrity and collaboration at our core. Our expertise and dedication ensure exceptional results that meet our clients' needs and exceed their expectations.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 uppercase">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.path}
                      className="text-sm sm:text-base text-white hover:text-[#04BDF1] cursor-pointer transition-colors flex items-center"
                    >
                      <span className="mr-2 text-[#04BDF1]">&gt;&gt;</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 uppercase">Services</h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-sm sm:text-base text-white flex items-center">
                      <span className="mr-2 text-[#04BDF1]">&gt;&gt;</span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 uppercase">Contact Info</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-[#04BDF1] mt-1 mr-3 text-sm sm:text-base flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white">
                    426, 2nd floor, Bangalore main road,<br/>
                    Athiyandhal village,<br/>
                    Thiruvannamalai.
                  </span>
                </li>

                <li className="flex items-center">
                  <FaEnvelope className="text-[#04BDF1] mr-3 text-sm sm:text-base flex-shrink-0" />
                  <a href="mailto:info@manokarkannandynamictechnology.com" className="text-sm sm:text-base text-white hover:text-[#04BDF1] break-words transition-colors">
                    info@manokarkannandynamictechnology.com
                  </a>
                </li>

                <li className="flex items-center">
                  <FaPhone className="text-[#04BDF1] mr-3 text-sm sm:text-base flex-shrink-0" />
                  <a href="tel:+918903742055" className="text-sm sm:text-base text-white hover:text-[#04BDF1] transition-colors">
                    +91 8903742055
                  </a>
                </li>

                {/* Social Media Icons */}
                <li>
                  <div className="flex items-center gap-2 sm:gap-3 mt-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-[#04BDF1] rounded flex items-center justify-center hover:bg-[#03a8d8] transition-colors cursor-pointer"
                        >
                          <Icon className="text-white text-sm sm:text-base" />
                        </a>
                      );
                    })}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar - Blue Background */}
        <div className="bg-[#04BDF1] py-3 sm:py-4">
          <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16">
            <div className="flex justify-center items-center">
              <p className="text-sm sm:text-base text-white font-medium text-center">
                © {currentYear} MANOKAR KANNAN DYNAMIC TECHNOLOGY. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#F6D516] hover:bg-[#F6D516]/80 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-gray-900 text-xl sm:text-2xl" />
      </button>
    </>
  );
}
