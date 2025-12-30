"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  name: string;
  path: string;
  isHashLink?: boolean;
};

const navItems: NavItem[] = [
  { name: 'Home', path: '/', isHashLink: false },
  { name: 'About Us', path: '#about', isHashLink: true },
  { name: 'Services', path: '#services', isHashLink: true },
  { name: 'Career', path: '/career', isHashLink: false },
  { name: 'Contact Us', path: '/contact', isHashLink: false }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300  ${
        scrolled 
          ? 'bg-[#0F1B2D]/90 shadow-lg' 
          : ''
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 md:px-8 lg:px-12 mx-auto flex items-center justify-between w-full max-w-7xl">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image 
              src="/CompanyLogo.png" 
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
                if (item.isHashLink) {
                  return (
                    <a
                      key={item.name}
                      href={item.path}
                      className="text-white hover:text-blue-300 text-sm font-medium transition-colors cursor-pointer"
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
                    className="text-white hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Enquiry Button - Right Aligned */}
        <div className="hidden lg:block">
          <button   className="w-full bg-[#04BDF1] hover:bg-[#03a8d8] text-white py-2 px-4 text-sm font-medium mt-3 cursor-pointer">
            Enquiry Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2"
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
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                item.isHashLink ? (
                  <a
                    key={item.name}
                    href={item.path}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
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
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <button className="w-full bg-[#04BDF1] hover:bg-[#03a8d8] text-white py-2 px-4 rounded-full text-sm font-medium mt-3 cursor-pointer">
                Enquiry Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
