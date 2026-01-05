"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What services does Manokar Kannan Dynamic Technology offer?',
    answer: 'We provide a wide range of digital services including custom website development, mobile app development, web applications, e-commerce solutions, UI/UX design, and digital marketing to help businesses grow online.'
  },
  {
    id: 2,
    question: 'How can I request a quote for my project?',
    answer: 'You can click "Enquire Now" or use the Get a Free Quote option on the homepage. Simply fill in your details and requirements, and our team will get back to you with a customized proposal.'
  },
  {
    id: 3,
    question: 'What technologies do you use to build websites and apps?',
    answer: 'We leverage cutting-edge technologies suitable for modern digital projects, including front-end & back-end frameworks, responsive UI/UX tools, database systems, and scalable mobile app platforms.'
  },
  {
    id: 4,
    question: 'Do you provide support after project delivery?',
    answer: 'Yes — we offer ongoing support and maintenance to ensure your website or app stays updated, secure, and optimized even after launch.'
  },
  {
    id: 5,
    question: 'How long does it take to complete a project?',
    answer: 'The timeline depends on project scope, features, and complexity. After understanding your requirements, we will estimate a clear timeline and deliverables in your personalized project proposal.'
  },
  {
    id: 6,
    question: 'Can you help with SEO and digital marketing?',
    answer: 'Absolutely! Beyond development, we provide SEO optimization and digital marketing services to help your business attract more visitors, improve rankings, and increase conversions.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 md:pb-10 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-10 lg:px-14">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <motion.div 
            className="inline-block text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 text-[#04BDF1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            FAQ
          </motion.div>

          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover the insights you need to make confident decisions. From setup to support, we've simplified the answers for you.
          </motion.p>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/FAQ.jpg"
                alt="FAQ Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-3 sm:space-y-4 order-1 lg:order-2"
          >
            {faqData.map((item, index) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-4 sm:px-5 md:px-6 py-4 sm:py-5 flex items-center justify-between text-left bg-gray-800 hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-white pr-4 flex-1">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-white" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 bg-white">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

