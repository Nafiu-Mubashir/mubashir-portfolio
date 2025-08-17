'use client';

import React, { useState } from 'react';
import { easeOut, motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Eye } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description?: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  category: string;
  featured?: boolean;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  // description,
  image,
  stack,
  liveUrl,
  githubUrl,
  date,
  category,
  featured = false
}) => {
  const [, setIsHovered] = useState(false);

  const cardVariants = {
    initial: {
      y: 20,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: easeOut
      }
    }
  };

  const imageVariants = {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: easeOut
      }
    }
  };

  const overlayVariants = {
    initial: {
      opacity: 0
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easeOut
      }
    }
  };

  const buttonVariants = {
    initial: {
      scale: 0,
      opacity: 0
    },
    hover: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.1,
        ease: easeOut
      }
    }
  };

  const stackItemVariants = {
    initial: {
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.div
      className={`relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-800 group ${
        featured ? '' : ''
      }`}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div
          className="absolute top-4 right-4 z-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          Featured
        </motion.div>
      )}

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          variants={imageVariants}
        />
        
        {/* Image Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
          variants={overlayVariants}
        >
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={16} />
              Live Demo
            </motion.a>
          )}
          
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              Code
            </motion.a>
          )}
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar size={14} />
            {date}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {/* {description} */}
        </p>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
            Tech Stack
          </h4>
          <motion.div 
            className="flex flex-wrap gap-2"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.1 }}
          >
            {stack.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs rounded-full font-medium transition-colors duration-200 cursor-default"
                variants={stackItemVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#374151"
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Action Buttons - Desktop fallback */}
        <div className="flex gap-3 mt-6 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
              whileHover={{ x: 4 }}
            >
              View Project
              <ExternalLink size={14} />
            </motion.a>
          )}
          
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors duration-200"
              whileHover={{ x: 4 }}
            >
              View Code
              <Github size={14} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
          filter: 'blur(1px)'
        }}
      />
    </motion.div>
  );
};

// // Example Usage Component
// const PortfolioShowcase = () => {
  

//   return (
//     <div className="min-h-screen bg-[#121818] p-8">
//       <div className="max-w-6xl mx-auto">
        
//       </div>
//     </div>
//   );
// };

// export default PortfolioShowcase;