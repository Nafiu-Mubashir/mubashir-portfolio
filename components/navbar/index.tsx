'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, easeOut } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: easeOut
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: easeOut
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: easeOut
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: easeOut
      }
    }
  };

  return (
    <div className="bg-[#121818] text-white sticky top-0 z-50 ">
      <nav className="bg-[#121818]">
        <div className="container px-8 flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse group"
          >
            <motion.span 
              className="self-center text-2xl font-bold whitespace-nowrap text-white group-hover:text-[#C27BFF] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              NM.
            </motion.span>
          </Link>

          {/* Mobile menu button */}
          <motion.button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors duration-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">
              {isOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            <div className="relative w-5 h-5">
              <motion.span
                className="absolute block w-5 h-0.5 bg-current transform transition-all duration-300"
                style={{ top: isOpen ? '50%' : '25%', left: 0 }}
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? -1 : 0
                }}
              />
              <motion.span
                className="absolute block w-5 h-0.5 bg-current transform transition-all duration-300"
                style={{ top: '50%', left: 0 }}
                animate={{
                  opacity: isOpen ? 0 : 1
                }}
              />
              <motion.span
                className="absolute block w-5 h-0.5 bg-current transform transition-all duration-300"
                style={{ top: isOpen ? '50%' : '75%', left: 0 }}
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? 1 : 0
                }}
              />
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:block md:w-auto">
            <ul className="font-medium flex flex-row space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative block py-2 px-3 rounded-md transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-[#C27BFF] bg-gray-80'
                        : 'text-white hover:text-[#C27BFF] hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C27BFF]"
                        layoutId="activeTab"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute top-full left-0 right-0 md:hidden bg-gray-800 border-t border-gray-700 shadow-lg"
                id="navbar-default"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.ul 
                  className="font-medium flex flex-col p-4"
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 px-4 rounded-md transition-all duration-300 ${
                          isActive(item.href)
                            ? 'text-[#C27BFF] bg-gray-700'
                            : 'text-white hover:text-[#C27BFF] hover:bg-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          {item.name}
                          {isActive(item.href) && (
                            <motion.div
                              className="w-2 h-2 bg-[#C27BFF] rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;