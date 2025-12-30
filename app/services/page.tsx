import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Manokar Kannan Dynamic Technology',
  description: 'Explore our comprehensive range of technology services',
};

type Service = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Responsive, SEO-friendly websites that drive results',
    icon: '🌐',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Mobile App Development',
    description: 'Custom Android & iOS applications',
    icon: '📱',
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Web Applications',
    description: 'Secure, scalable web applications',
    icon: '💻',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user experiences',
    icon: '🎨',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Powerful online stores that convert',
    icon: '🛒',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies',
    icon: '📈',
    color: 'bg-red-100 text-red-600'
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              We offer a wide range of professional services to help your business grow
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center text-3xl mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    href="#" 
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss how we can help your business succeed with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center"
            >
              Get in Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              href="tel:+1234567890"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
