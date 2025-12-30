import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    description: "Responsive, SEO-friendly websites built with modern technologies.",
    icon: "🌐"
  },
  {
    title: "Mobile App Development",
    description: "Custom Android & iOS applications with native performance.",
    icon: "📱"
  },
  {
    title: "Web Application Development",
    description: "Secure, scalable web systems tailored to your needs.",
    icon: "💻"
  },
  {
    title: "E-Commerce Solutions",
    description: "Complete online selling platforms with secure payment integration.",
    icon: "�"
  },
  {
    title: "UI/UX Design",
    description: "Clean, intuitive, and user-friendly interface designs.",
    icon: "🎨"
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive SEO and social media growth strategies.",
    icon: "📈"
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
              className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
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
              We Provide <span className="text-blue-600">Awesome Services</span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {services.map((service, index) => (
                <motion.div 
                  key={service.title}
                  className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * Math.floor(index / 2) }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-xl text-blue-600">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              src="/Mockup_laptop-1.png"
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
