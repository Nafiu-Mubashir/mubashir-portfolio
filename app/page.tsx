"use client";
import { PortfolioCard } from "@/components/portfolio-card";
import { projects } from "@/data";
import { easeOut, motion, spring } from "framer-motion";
import { Github, Linkedin, Twitter, Code, Palette, Zap, MapPin, Mail, Download, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setIsScrolledPastHero(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: "React & Next.js", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-600" },
    { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
    { name: "JavaScript", level: 92, color: "bg-yellow-500" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "MongoDB", level: 80, color: "bg-green-600" }
  ];

  const experiences = [
    {
      period: "2023 - Present",
      role: "Senior Frontend Engineer",
      company: "Tech Innovation Co.",
      description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures."
    },
    {
      period: "2021 - 2023",
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      description: "Built responsive web applications using React and TypeScript, collaborated with design teams to create pixel-perfect UIs."
    },
    {
      period: "2020 - 2021",
      role: "Junior Developer",
      company: "StartupHub",
      description: "Started my professional journey building landing pages and small applications, learning modern development practices."
    }
  ];

  // const projects = [
  //   {
  //     title: "E-Commerce Platform",
  //     description: "Full-stack e-commerce solution with Next.js, featuring advanced filtering, cart management, and payment integration.",
  //     tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
  //     image: "/api/placeholder/400/250",
  //     liveUrl: "#",
  //     githubUrl: "#"
  //   },
  //   {
  //     title: "Task Management App",
  //     description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
  //     tech: ["React", "Node.js", "Socket.io", "MongoDB"],
  //     image: "/api/placeholder/400/250",
  //     liveUrl: "#",
  //     githubUrl: "#"
  //   },
  //   {
  //     title: "Portfolio Website",
  //     description: "Modern portfolio with smooth animations, responsive design, and optimized performance using latest web technologies.",
  //     tech: ["Next.js", "Framer Motion", "Tailwind"],
  //     image: "/api/placeholder/400/250",
  //     liveUrl: "#",
  //     githubUrl: "#"
  //   }
  // ];

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern, responsive web applications using React, Next.js, and TypeScript with focus on performance and user experience."
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Pixel-perfect implementation of designs with smooth animations and interactions using Framer Motion and CSS."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization, code splitting, and SEO improvements to ensure your application loads fast and ranks well."
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div
        style={container}
        className="h-screen bg-center md:bg-left bg-cover text-white flex flex-col justify-center relative"
      >
        <motion.div
          className="hidden md:block fixed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            variants={socialVariants}
            className={`fixed left-10 top-0 z-50 flex flex-col gap-4 items-center transition-colors duration-500 ${
              isScrolledPastHero ? 'text-black' : 'text-white'
            }`}
          >
            <div className={`h-65 w-1 rounded-full transition-colors duration-500 ${
              isScrolledPastHero ? 'bg-gray-600' : 'bg-gray-400'
            }`}></div>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={iconHover}
            >
              <Github />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={iconHover}
            >
              <Linkedin />
            </motion.a>

            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={iconHover}
            >
              <Twitter />
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="container mx-auto md:px-6 text-center md:text-left">
          <motion.div
            className="space-y-0.5"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p
              className="text-3xl md:text-[3rem] tracking-[.5rem] leading-none md:px-1"
              variants={itemVariants}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Nafiu
            </motion.p>

            <motion.h1
              className="font-bold text-5xl md:text-[6rem] tracking-[.5rem] leading-none"
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Mubashir A.
            </motion.h1>

            <motion.p
              className="tracking-[.6rem] font-thin leading-none px-2"
              variants={itemVariants}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              Frontend Engineer
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start items-center gap-4 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <a href="/Nafiu Mubashir Adedayo FE - CV.pdf" download>
              <button className="relative overflow-hidden group border border-white rounded-full px-6 py-2 tracking-[.3rem] cursor-pointer text-white">
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Resume
                </span>
                <span className="absolute left-0 top-0 h-full w-0 bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
              </button>
            </a>

            <button className="relative overflow-hidden group border border-white rounded-full px-6 py-2 tracking-[.3rem] cursor-pointer text-white">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Portfolio
              </span>
              <span className="absolute right-0 top-0 h-full w-0 bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-[.3rem]">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {"I'm a passionate Frontend Engineer with over 3 years of experience crafting digital experiences that users love. My journey started with curiosity about how websites work, and it's evolved into a career focused on building scalable, performant, and beautiful web applications."}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {"When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in clean code, continuous learning, and creating solutions that make a real impact."}
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">Available for work</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl relative overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="absolute inset-4 bg-white/20 rounded-xl flex items-center justify-center">
                    <Users className="w-24 h-24 text-white/50" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-[.3rem]"
          >
            Skills & Technologies
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-[.3rem]"
          >
            Experience
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                  
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border">
                      <span className="text-blue-600 font-semibold text-sm">{exp.period}</span>
                      <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                      <h4 className="text-gray-600 font-medium">{exp.company}</h4>
                      <p className="text-gray-700 mt-3 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-[.3rem]"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <PortfolioCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-[.3rem]"
          >
            What I Offer
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-[.3rem]">{"Let's Work Together"}</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {"Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:nafiu@example.com"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold tracking-[.2rem] transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
              
              <a 
                href="/Nafiu Mubashir Adedayo FE - CV.pdf" 
                download
                className="border border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold tracking-[.2rem] transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Styles and animations remain the same
const container: React.CSSProperties = {
  backgroundImage: "url('/hero-bg.jpg')",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const socialVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const iconHover = {
  scale: 1.2,
  color: "#c084fc",
  transition: { type: spring, stiffness: 300 },
};