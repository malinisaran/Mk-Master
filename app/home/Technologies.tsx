import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

type Technology = {
  name: string;
  logo: string;
  width?: number;
  height?: number;
};

type TechnologiesType = {
  [key: string]: Technology[];
};

const technologies: TechnologiesType = {
  'UI/UX Design': [
    { 
      name: 'Figma', 
      logo: '/technologies/figma-full-stack-design.webp',
      width: 40,
      height: 60
    }
  ],
  'Front-End Development': [
    { 
      name: 'HTML', 
      logo: '/technologies/Html.webp',
      width: 60,
      height: 60
    },
    { 
      name: 'CSS', 
      logo: '/technologies/Css.webp',
      width: 60,
      height: 60
    },
    { 
      name: 'JavaScript', 
      logo: '/technologies/javascript.webp',
      width: 60,
      height: 60
    },
    { 
      name: 'React JS', 
      logo: '/technologies/react.webp',
      width: 60,
      height: 60
    },
    { 
      name: 'Bootstrap', 
      logo: '/technologies/bootstrap.webp',
      width: 60,
      height: 60
    }
  ],
  'Backend Development': [
    { 
      name: 'Node.js', 
      logo: '/technologies/node.js-full-stack-development.webp',
      width: 50,
      height: 50
    },
    { 
      name: 'Express.js', 
      logo: '/technologies/express.js-full-stack-development.webp',
      width: 50,
      height: 50
    },
    { 
      name: 'PHP', 
      logo: '/technologies/php.webp',
      width: 50,
      height: 50
    },
    { 
      name: 'Python', 
      logo: '/technologies/python.webp',
      width: 50,
      height: 50
    },
    { 
      name: 'MySQL', 
      logo: '/technologies/mysql-full-stack-development.webp',
      width: 50,
      height: 50
    }
  ],
  'Database Management System': [
    { 
      name: 'MySQL', 
      logo: '/technologies/mysql-full-stack-development.webp',
      width: 60,
      height: 60
    },
    { 
      name: 'MongoDB', 
      logo: '/technologies/mongodb-full-stack-db.webp',
      width: 60,
      height: 60
    }
  ],
  'Mobile App Development': [
    { 
      name: 'React Native', 
      logo: '/technologies/react.webp',
      width: 60,
      height: 60
    },
    { 
      name: 'Flutter', 
      logo: '/technologies/flutter.png',
      width: 60,
      height: 60
    }
  ],
  'Digital Marketing': [
    { 
      name: 'SEO', 
      logo: '/technologies/seo.jpg',
      width: 60,
      height: 60
    },
    { 
      name: 'Google Analytics', 
      logo: '/technologies/analytics.png',
      width: 60,
      height: 60
    }

  ]
};

export default function Technologies() {
  const [activeTab, setActiveTab] = useState<string>('UI/UX Design');

  return (
    <section className="pt-1 sm:pt-2 md:pt-3 pb-2 sm:pb-4 md:pb-6 bg-white">   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-left mb-2 sm:mb-3 md:mb-4">
          <motion.div 
            className="inline-block text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 text-[#04BDF1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            OUR TECHNOLOGICS
          </motion.div>

          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Technologies We <span style={{ color: '#04BDF1' }}>Use</span>
          </motion.h2>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions for your business.
          </motion.p>
        </div>

        <div className="mb-0 sm:mb-1 md:mb-2">
          <div 
            className="flex flex-nowrap gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 border-b border-gray-200 overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            } as React.CSSProperties}
          >
            {Object.keys(technologies).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-4 text-sm sm:text-base font-medium transition-all duration-300 relative cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-[#04BDF1]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: '#04BDF1' }}
                    layoutId="activeTab"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 w-full"
          >
            {technologies[activeTab].map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white rounded-xl border border-gray-100 hover:border-[#04BDF1]/20 hover:shadow-lg transition-all duration-300 p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[130px] md:min-h-[140px] cursor-pointer"
              >
                <div 
                  className="relative mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    width: '60px',
                    height: '60px'
                  }}
                >
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={tech.width || 60}
                    height={tech.height || 60}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-800 text-center group-hover:text-[#04BDF1] transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
