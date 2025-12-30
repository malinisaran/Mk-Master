"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Our Mission",
    description: "To empower businesses with innovative software solutions that drive growth and success in the digital age.",
    icon: "🎯"
  },
  {
    title: "Our Vision",
    description: "To be a global leader in delivering cutting-edge technology solutions that transform businesses.",
    icon: "👁️"
  },
  {
    title: "Our Values",
    description: "We believe in innovation, excellence, and building lasting relationships with our clients.",
    icon: "💎"
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-zinc-900 to-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-orange-400">Us</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We are a team of passionate developers, designers, and strategists dedicated to delivering exceptional digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-orange-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-lg">Our Team</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              We Build <span className="text-orange-400">Digital Experiences</span> That Matter
            </h3>
            <p className="text-gray-300 mb-6">
              With years of experience in the industry, we've helped businesses of all sizes transform their digital presence. 
              Our team of experts is dedicated to delivering high-quality solutions tailored to your specific needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions"].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
