"use client";

import HomePage from "./home/page";
import ServicesSection from "./home/ServicesSection";
import Technologies from "./home/Technologies";
import TechnologyMarquee from "./home/TechnologyMarquee";
import AboutSection from "./home/AboutSection";
import Testimonials from "./home/Testimonials";
import CallToAction from "./home/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Show the welcome content first */}
      <HomePage />
      <AboutSection />
      
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Technologies Section */}
      <Technologies />
      
      {/* Technology Marquee Section */}
      <TechnologyMarquee />
      
      {/* Testimonials Section */}
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}