"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Natarajan',
    role: 'Product Owner',
    company: 'Tech Startup',
    content: 'They transformed our idea into a powerful digital product. The app is fast, user-friendly, and highly scalable. Their team was extremely professional and transparent throughout the project. From UI/UX to backend development, everything was handled smoothly. We now have a product our customers love and our business has grown significantly.',
    avatar: '/testimonial-1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'IT Manager',
    company: 'Manufacturing Company',
    content: 'From consultation to delivery, their team was reliable, proactive, and technically strong. They modernized our legacy system and automated key workflows. The performance improvements and support quality were outstanding. We truly value their partnership and long-term commitment.',
    avatar: '/testimonial-2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Meena Joseph',
    role: 'Founder',
    company: 'SaaS Company',
    content: 'Excellent technical expertise and attention to detail. Our SaaS product launched on time and exceeded expectations. The team clearly understood our requirements and delivered clean, high-performance code. Communication was smooth and timelines were always maintained. Highly recommended for serious software projects.',
    avatar: '/testimonial-3.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'Arun Patel',
    role: 'Director',
    company: 'Retail Business',
    content: 'Their UI/UX and development quality stand out. The app runs flawlessly across Android and iOS. They guided us through every phase — planning, development, testing, and deployment. We truly appreciate their dedication and responsiveness. A great technology partner.',
    avatar: '/testimonial-4.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'Divya Sharma',
    role: 'Operations Head',
    company: 'Financial Services',
    content: 'Very reliable support team. Issues are resolved quickly and proactively. They manage our application maintenance and enhancements with great professionalism. Performance and security have significantly improved since onboarding them.',
    avatar: '/testimonial-5.jpg',
    rating: 5,
  },
];

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex', right: -40, zIndex: 1 }}
      onClick={onClick}
      aria-label="Next testimonial"
    >
      <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex', left: -40, zIndex: 1 }}
      onClick={onClick}
      aria-label="Previous testimonial"
    >
      <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Testimonials
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What our clients say about us
          </motion.p>
        </div>

        <div className="relative px-10">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3 py-2">
                <div className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role} – {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="relative pl-6">
                    <svg 
                      className="absolute left-0 top-1 h-5 w-5 text-blue-500" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-600 text-sm leading-relaxed">{testimonial.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
