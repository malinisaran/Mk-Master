"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  mainQuote: string;
  supportingText: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Emily Santos',
    role: 'Residential Client',
    mainQuote: 'MKDT transformed our digital presence — highly professional!”',
    supportingText: 'Their team was professional, skilled, and attentive, providing excellent support throughout. Highly recommended for building your forever home.'
  },
  {
    id: 2,
    name: 'Mark Li',
    role: 'Commercial Developer',
    mainQuote: 'Their mobile app development was seamless and on-time.',
    supportingText: 'Bricknet expertly managed our office complex construction, meeting deadlines and maintaining high craftsmanship. Their coordination was impressive, and we\'d gladly work with them again.'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Business Owner',
    mainQuote: 'They transformed our idea into a powerful digital product that exceeded expectations.',
    supportingText: 'The team was extremely professional and transparent throughout the project. We now have a product our customers love and our business has grown significantly.'
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'IT Manager',
    mainQuote: 'Excellent technical expertise and attention to detail. Our project launched on time.',
    supportingText: 'Communication was smooth and timelines were always maintained. Highly recommended for serious software projects.'
  },
  {
    id: 5,
    name: 'Maria Garcia',
    role: 'Product Director',
    mainQuote: 'Very reliable support team. Issues are resolved quickly and proactively.',
    supportingText: 'They manage our application maintenance and enhancements with great professionalism. Performance has significantly improved since onboarding them.'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.ceil(testimonials.length / 2) - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === Math.ceil(testimonials.length / 2) - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleTestimonials = [
    testimonials[currentIndex * 2],
    testimonials[currentIndex * 2 + 1]
  ].filter(Boolean);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8 mb-8">
            <div className="flex-1">
              <motion.div 
                className="inline-block px-3 py-1 rounded-md text-sm font-medium mb-4"
                style={{ backgroundColor: '#FEECE7', color: '#CE0000' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Testimonials
              </motion.div>

              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                What Our Clients Say
              </motion.h2>

              <motion.p 
                className="text-lg text-gray-600 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Hear from those who've built with us and see how we brought their visions to life.
              </motion.p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors duration-200"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors duration-200"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="rounded-xl p-6 sm:p-8"
              style={{ backgroundColor: '#FEECE7' }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg
                  className="w-12 h-12"
                  style={{ color: '#CE0000' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Main Quote */}
              <p className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                {testimonial.mainQuote}
              </p>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                {testimonial.supportingText}
              </p>

              {/* Client Info */}
              <p className="text-sm sm:text-base text-gray-800 italic">
                {testimonial.name}, {testimonial.role}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 h-2'
                  : 'w-2 h-2'
              } rounded-full`}
              style={{
                backgroundColor: currentIndex === index ? '#CE0000' : '#D1D5DB'
              }}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
