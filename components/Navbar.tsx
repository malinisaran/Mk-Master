"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEnquiryModal } from "@/contexts/EnquiryModalContext";
import { FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaShareAlt } from "react-icons/fa";

type NavItem = {
  name: string;
  path: string;
  isHashLink?: boolean;
};

const navItems: NavItem[] = [
  { name: 'Home', path: '/', isHashLink: false },
  { name: 'About Us', path: '/about', isHashLink: false },
  { name: 'Services', path: '/services', isHashLink: false },
  { name: 'Career', path: '/career', isHashLink: false },
  { name: 'Contact Us', path: '/contact', isHashLink: false }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [socialMediaOpen, setSocialMediaOpen] = useState(false);
  const [phonePopupOpen, setPhonePopupOpen] = useState(false);
  const { openModal } = useEnquiryModal();
  const pathname = usePathname();

  const phoneNumbers = [
    { number: '+91 8903742055', href: 'tel:+918903742055' },
    { number: '+91 9486501302', href: 'tel:+919486501302' }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 bg-[#0F1B2D] shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-6 md:px-10 lg:px-14 mx-auto flex items-center justify-between w-full max-w-screen-2xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logos/CompanyLogo.png" 
              alt="Manokar Kannan Dynamic Technology" 
              width={260}
              height={90}
              className="h-20 w-auto"
              priority
            />
          </Link>
        </div>
        
        {/* Desktop Navigation - Centered with Frosted Glass Background */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md  rounded-full px-8 py-3">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                if (item.isHashLink) {
                  return (
                    <a
                      key={item.name}
                      href={item.path}
                      className={`text-sm font-medium transition-colors cursor-pointer ${
                        isActive 
                          ? 'text-blue-300 font-semibold underline underline-offset-4' 
                          : 'text-white hover:text-blue-300'
                      }`}
                      onClick={(e) => {
                        if (window.location.pathname === '/') {
                          e.preventDefault();
                          const element = document.querySelector(item.path);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          window.location.href = `/${item.path}`;
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link 
                    key={item.name}
                    href={item.path}
                    className={`text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-blue-300 font-semibold underline underline-offset-4' 
                        : 'text-white hover:text-blue-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Action Buttons - Right Aligned */}
        <div className="hidden lg:flex items-center gap-3 relative">
          {/* Social Media Button */}
          <div className="relative">
            <button 
              onClick={() => {
                setSocialMediaOpen(!socialMediaOpen);
                setPhonePopupOpen(false);
              }}
              className="w-10 h-10 bg-[#04BDF1] hover:bg-[#03a8d8] text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
              aria-label="Social Media"
            >
              <FaShareAlt className="text-sm" />
            </button>
            
            {/* Social Media Popup */}
            <AnimatePresence>
              {socialMediaOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSocialMediaOpen(false)}
                    className="fixed inset-0 z-40"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl p-3 z-50 min-w-[180px]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex flex-col gap-2">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                          >
                            <Icon className="text-[#04BDF1] text-lg" />
                            <span className="text-sm text-gray-900">{social.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Phone Button with Ringing Animation */}
          <div className="relative">
            <button 
              onClick={() => {
                setPhonePopupOpen(!phonePopupOpen);
                setSocialMediaOpen(false);
              }}
              className="w-10 h-10 bg-[#04BDF1] hover:bg-[#03a8d8] text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer relative overflow-visible"
              aria-label="Phone"
            >
              {/* Ringing Animation - Continuous Pulse */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#04BDF1] opacity-30"
                animate={{
                  scale: [1, 1.5, 1.5],
                  opacity: [0.3, 0, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#04BDF1] opacity-30"
                animate={{
                  scale: [1, 1.5, 1.5],
                  opacity: [0.3, 0, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeOut"
                }}
              />
              
              {/* Phone Icon with Shake Animation */}
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <FaPhone className="text-sm" />
              </motion.div>
            </button>
            
            {/* Phone Numbers Popup */}
            <AnimatePresence>
              {phonePopupOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setPhonePopupOpen(false)}
                    className="fixed inset-0 z-40"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl p-4 z-50 min-w-[200px]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex flex-col gap-3">
                      <p className="text-xs font-semibold text-gray-600 uppercase mb-1">Contact Numbers</p>
                      {phoneNumbers.map((phone, index) => (
                        <a
                          key={index}
                          href={phone.href}
                          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          <FaPhone className="text-[#04BDF1] text-sm" />
                          <span className="text-sm text-gray-900">{phone.number}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Enquire Now Button */}
          <button 
            onClick={openModal}
            className="bg-[#04BDF1] hover:bg-[#03a8d8] text-white py-2 px-4 text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden bg-[#0F1B2D] bg-opacity-95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return item.isHashLink ? (
                  <a
                    key={item.name}
                    href={item.path}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-gray-700 text-white font-semibold'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (window.location.pathname === '/') {
                        e.preventDefault();
                        const element = document.querySelector(item.path);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-gray-700 text-white font-semibold'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full  bg-[#04BDF1] hover:bg-[#03a8d8] text-white py-2 px-4 rounded-full text-sm font-medium mt-3 cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
