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
      logo: '/figma-full-stack-design.webp',
      width: 40,
      height: 60
    }
  ],
  'Front-End Development': [
    { 
      name: 'HTML', 
      logo: '/html.webp',
      width: 60,
      height: 60
    },
    { 
      name: 'CSS', 
      logo: '/css.webp',
      width: 60,
      height: 60
    },
    { 
      name: 'JavaScript', 
      logo: '/javascript.webp',
      width: 60,
      height: 60
    },
    { 
      name: 'React JS', 
      logo: '/react.webp',
      width: 60,
      height: 60
    },
    { 
      name: 'Bootstrap', 
      logo: '/bootstrap.webp',
      width: 60,
      height: 60
    }
  ],
  'Backend Development': [
    { 
      name: 'Node.js', 
      logo: '/node.js-full-stack-development.webp',
      width: 50,
      height: 50
    },
    { 
      name: 'Express.js', 
      logo: '/express.js-full-stack-development.webp',
      width: 50,
      height: 50
    },
    { 
      name: 'PHP', 
      logo: '/php.webp',
      width: 50,
      height: 50
    },
    { 
      name: 'Python', 
      logo: '/python.webp',
      width: 50,
      height: 50
    },
    { 
      name: 'MySQL', 
      logo: '/mysql-full-stack-development.webp',
      width: 50,
      height: 50
    }
  ],
  'Database Management System': [
    { 
      name: 'MySQL', 
      logo: '/mysql-full-stack-development.webp',
      width: 60,
      height: 60
    },
    { 
      name: 'MongoDB', 
      logo: '/mongodb-full-stack-db.webp',
      width: 60,
      height: 60
    }
  ]
//   'Digital Marketing': [
//     { 
//       name: 'SEO', 
//       logo: '/seo-logo.png',
//       width: 60,
//       height: 60
//     }
//   ]
};

export default function Technologies() {
  const [activeTab, setActiveTab] = useState<string>('UI/UX Design');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technologies We Use <span className="text-blue-600"></span>
          </motion.h2>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-8 mb-8 border-b border-gray-200">
            {Object.keys(technologies).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-1 py-4 text-sm font-medium transition-colors relative cursor-pointer ${
                  activeTab === tab
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full"
          >
            {technologies[activeTab].map((tech, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center justify-center h-full"
              >
                <div 
                  className="relative mb-3 flex items-center justify-center"
                  style={{ 
                    width: '50px',
                    height: '50px'
                  }}
                >
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={tech.width || 50}
                    height={tech.height || 50}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}