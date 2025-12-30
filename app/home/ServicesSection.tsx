import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Web Development"
  },
  {
    title: "Mobile Application"
  },
  {
    title: "Cloud Computing"
  },
  {
    title: "Data Analytics"
  },
  {
    title: "Artificial Intelligence"
  },
  {
    title: "Cyber Security"
  },
  {
    title: "Software Integration"
  },
  {
    title: "IT Consulting"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div 
              className="inline-block px-4 py-1 rounded-full text-sm font-medium"
              style={{ backgroundColor: '#CE000040', color: '#CE0000' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.div>

            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We Provide <span style={{ color: '#CE0000' }}>Awesome Services</span>
            </motion.h2>

            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We offer a comprehensive suite of services to help your business thrive in the digital landscape.
            </motion.p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {services.map((service, index) => (
                <motion.li 
                  key={service.title}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CE0000' }}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-base font-medium text-gray-800">{service.title}</h3>
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="text-white font-medium py-2.5 px-6 rounded-md transition-colors duration-200 text-sm mt-6"
              style={{ backgroundColor: '#CE0000' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b30000'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#CE0000'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              See More
            </motion.button>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative h-[500px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/redlaptop.png"
              alt="Laptop mockup showing our work"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
