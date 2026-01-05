"use client";

import HomePage from "./home/page";
import ServicesSection from "./home/ServicesSection";
import Technologies from "./home/Technologies";
import AboutSection from "./home/AboutSection";
import Testimonials from "./home/Testimonials";
import FAQ from "./home/FAQ";
import CallToAction from "./home/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      <HomePage />
      <AboutSection />
      <ServicesSection />
      <Technologies />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}