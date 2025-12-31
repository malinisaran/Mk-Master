// "use client";

// import Image from 'next/image';

// type TechLogo = {
//   name: string;
//   logo: string;
//   width?: number;
//   height?: number;
// };

// const technologies: TechLogo[] = [
//   { name: 'Python', logo: '/python.webp', width: 60, height: 60 },
//   { name: 'JavaScript', logo: '/javascript.webp', width: 60, height: 60 },
//   { name: 'Figma', logo: '/figma-full-stack-design.webp', width: 40, height: 60 },
//   { name: 'React JS', logo: '/react.webp', width: 60, height: 60 },
//   { name: 'Node.js', logo: '/node.js-full-stack-development.webp', width: 50, height: 50 },
//   { name: 'HTML', logo: '/Html.webp', width: 60, height: 60 },
//   { name: 'CSS', logo: '/Css.webp', width: 60, height: 60 },
//   { name: 'PHP', logo: '/php.webp', width: 50, height: 50 },
//   { name: 'MongoDB', logo: '/mongodb-full-stack-db.webp', width: 60, height: 60 },
//   { name: 'MySQL', logo: '/mysql-full-stack-development.webp', width: 50, height: 50 },
//   { name: 'Express.js', logo: '/express.js-full-stack-development.webp', width: 50, height: 50 },
//   { name: 'Bootstrap', logo: '/bootstrap.webp', width: 60, height: 60 },
// ];

// const TechnologyCard = ({ tech, index }: { tech: TechLogo; index: number }) => (
//   <div className="flex-shrink-0 flex items-center justify-center w-64 h-32 sm:w-72 sm:h-36 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
//     <Image
//       src={tech.logo}
//       alt={tech.name}
//       width={tech.width || 80}
//       height={tech.height || 80}
//       className="object-contain w-20 h-20 sm:w-24 sm:h-24"
//     />
//   </div>
// );

// export default function TechnologyMarquee() {
//   const duplicatedTechnologies = [...technologies, ...technologies];

//   return (
//     <section className="py-12 bg-gray-50 overflow-hidden">
//       <div className="relative">
//         {/* First Row - Scroll Left */}
//         <div className="flex mb-6 overflow-hidden">
//           <div className="flex animate-marquee-left gap-8">
//             {duplicatedTechnologies.map((tech, index) => (
//               <TechnologyCard key={`row1-${index}`} tech={tech} index={index} />
//             ))}
//           </div>
//           <div className="flex animate-marquee-left gap-8" aria-hidden="true">
//             {duplicatedTechnologies.map((tech, index) => (
//               <TechnologyCard key={`row1-dup-${index}`} tech={tech} index={index} />
//             ))}
//           </div>
//         </div>

//         {/* Second Row - Scroll Right */}
//         <div className="flex overflow-hidden">
//           <div className="flex animate-marquee-right gap-8">
//             {duplicatedTechnologies.map((tech, index) => (
//               <TechnologyCard key={`row2-${index}`} tech={tech} index={index} />
//             ))}
//           </div>
//           <div className="flex animate-marquee-right gap-8" aria-hidden="true">
//             {duplicatedTechnologies.map((tech, index) => (
//               <TechnologyCard key={`row2-dup-${index}`} tech={tech} index={index} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
