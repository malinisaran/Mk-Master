import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
    <section id="services" className="py-8 sm:py-12 md:py-16 mt-4 sm:mt-6 md:mt-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <motion.div 
                className="text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4" 
                style={{ color: '#04BDF1' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                OUR SERVICES
            </motion.div>

            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We Provide <span style={{ color: '#04BDF1' }}>Awesome Services</span>
            </motion.h2>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We offer a comprehensive suite of services to help your business thrive in the digital landscape.
            </motion.p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
              {services.map((service, index) => (
                <motion.li 
                  key={service.title}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#04BDF1' }}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-800">{service.title}</h3>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/services"
                className="text-white font-medium py-2.5 px-6 rounded-md transition-colors duration-200 text-sm mt-6 inline-block"
                style={{ backgroundColor: '#04BDF1' }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#03a8d8'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#04BDF1'}
              >
                See More
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Image */}
         <motion.div 
  className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full"
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

  {/* BLUE COLOR OVERLAY */}
  <div className="absolute inset-0 bg-[#04BDF1] mix-blend-color pointer-events-none"></div>

  {/* OPTIONAL DEPTH ENHANCER */}
  <div className="absolute inset-0 mix-blend-multiply opacity-70 pointer-events-none"></div>
</motion.div>

        </div>
      </div>
    </section>
  );
}
