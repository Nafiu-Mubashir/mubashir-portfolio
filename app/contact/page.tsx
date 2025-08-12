"use client"
import React from 'react';
import { easeOut, motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Calendar, Coffee, Zap } from 'lucide-react';

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "mubashirnafiu@gmail.com",
      href: "mailto:mubashirnafiu@gmail.com",
      description: "Drop me a line anytime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+234) 803 918 7401",
      href: "tel:+15551234567",
      description: "Let's have a quick chat",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Oyo, Nigeria",
      href: "#",
      description: "Available for local meetups",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Nafiu-Mubashir", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nafiu-mubashir-adedayo/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/AdedayoMubashir", label: "Twitter" }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute discovery session",
      action: "Schedule Now",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Coffee,
      title: "Grab Coffee",
      description: "Let's discuss your project over coffee",
      action: "Let's Meet",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Zap,
      title: "Quick Question",
      description: "Need a fast answer? Reach out directly",
      action: "Ask Away",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 py-20"
      >
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-lg font-medium">
              {"Let's Connect"}
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Get In{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
           {" Ready to bring your vision to life? I'm always excited to discuss new projects, creative ideas, and opportunities to create something amazing together."}
          </motion.p>
        </div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{method.label}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <p className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {method.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Quick Actions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.4)"
                }}
                className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{action.description}</p>
                  <button className="text-purple-400 font-medium hover:text-purple-300 transition-colors duration-200">
                    {action.action} →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8"
          >
            Connect on Social
          </motion.h3>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.2,
                  rotateY: 180
                }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="mailto:mubashirnafiu@gmail.com"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Start a Conversation
            </a>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-400 mt-6 text-lg"
          >
            Usually responds within 24 hours
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;