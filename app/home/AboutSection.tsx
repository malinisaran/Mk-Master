"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Rocket, Users, Monitor, Smile, Award } from "lucide-react";

const features = [
  {
    title: "Innovative Approach",
    description: "We leverage cutting-edge technologies and methodologies to deliver innovative solutions that drive business growth.",
    icon: <Rocket className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Client-Centered Focus",
    description: "Your success is our priority. We work closely with you to understand your needs and deliver tailored solutions.",
    icon: <Users className="w-6 h-6 text-green-500" />
  },
  {
    title: "Experienced Team",
    description: "Our team of experts brings years of experience and deep industry knowledge to every project.",
    icon: <Award className="w-6 h-6 text-purple-500" />
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">About Us</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner In <span className="text-blue-600">Digital Transformation</span>
              </h3>
              <p className="text-gray-600 text-lg">
                  Discover the insights you need to make confident decisions. From setup to support, we’ve simplified the answers for you.              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200">
              Learn More
            </button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative space-y-4"
          >
            {/* Top Image - Circuit Board */}
            <div className="relative h-48 w-full rounded-xl overflow-hidden bg-gray-800">
              <Image
                src="/close-up.jpg"
                alt="Digital technology"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Main Image - Girl with laptop */}
            <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-[4/5] w-full">
              <Image
                src="/Img_4.png"
                alt="Digital transformation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Happy Clients Card */}
            <div className="absolute top-40 right-0 bg-white p-4 rounded-lg shadow-lg w-64">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                    <Image
                      src="/Group_client-e1761304644686.png"
                      alt="Client"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                </div>
                <span className="text-sm font-medium">66k+</span>
              </div>
              <h4 className="font-semibold text-gray-900">Happy Clients</h4>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '89.89%' }}></div>
              </div>
              <div className="text-right text-xs text-gray-500 mt-1">89.89%</div>
            </div>

            {/* Efficiency Card */}
            <div className="absolute bottom-0 left-0 bg-purple-600 text-white p-4 rounded-lg shadow-lg w-64">
              <div className="text-3xl font-bold">+75%</div>
              <p className="text-sm">Increase company efficiency</p>
            </div>

            {/* Rocket Graphic */}
            <div className="absolute right-10 -bottom-10">
              <Rocket className="w-16 h-16 text-orange-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}