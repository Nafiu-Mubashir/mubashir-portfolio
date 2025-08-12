"use client";

import { PortfolioCard } from "@/components/portfolio-card";
import React from "react";
import { easeOut, motion } from "framer-motion";
import { projects } from "@/data";

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: i * 0.15,
//     },
//   }),
// };

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50, // even index: from left, odd index: from right
    y: 30,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const PortfolioPage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-screen-xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">My Portfolio</h1>
          <p className="text-gray-400 text-lg">
            A collection of projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              custom={index}
            >
              <PortfolioCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
