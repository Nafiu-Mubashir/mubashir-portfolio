"use client"

import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Footer Component
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/Nafiu-Mubashir",
      icon: Github,
      hoverColor: "group-hover:text-purple-400 group-hover:border-purple-400",
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/nafiu-mubashir-adedayo/",
      icon: Linkedin,
      hoverColor: "group-hover:text-blue-400 group-hover:border-blue-400",
      label: "LinkedIn"
    },
    {
      href: "https://x.com/AdedayoMubashir",
      icon: Twitter,
      hoverColor: "group-hover:text-cyan-400 group-hover:border-cyan-400",
      label: "Twitter"
    },
    {
      href: "mailto:mubashirnafiu@gmail.com",
      icon: Mail,
      hoverColor: "group-hover:text-green-400 group-hover:border-green-400",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold tracking-wider mb-3">
                Nafiu Mubashir A.
              </h3>
              <p className="text-gray-300 tracking-wide font-light text-lg mb-4">
                Frontend Engineer
              </p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                {"Passionate about creating beautiful, functional, and user-centered digital experiences. Always exploring new technologies and pushing the boundaries of what's possible on the web."}
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 tracking-wide">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <Link 
                    href="mailto:mubashirnafiu@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    mubashirnafiu@gmail.com
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">Oyo, Nigeria</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 tracking-wide">Connect</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full border border-gray-600 transition-all duration-300 group hover:border-purple-400 ${social.hoverColor}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5 transition-colors group-hover:text-purple-400 duration-300" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom section */}
        <div className="container mx-auto px-6 py-8">
          <motion.div 
            className="flex justify-center items-center space-y-4 md:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Nafiu Mubashir A. All rights reserved.
              </p>
              {/* <p className="text-gray-500 text-xs">
                Built with ❤️ using Next.js & Tailwind CSS
              </p> */}
            </div>
            
            {/* <div className="flex space-x-6 text-sm">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}