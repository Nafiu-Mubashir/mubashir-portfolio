"use client";
import { PortfolioCard } from "@/components/portfolio-card";
import { projects } from "@/data";
import { easeOut, motion, spring } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Code,
  Palette,
  Zap,
  MapPin,
  Mail,
  Download,
  Users,
  Wrench,
  Database,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setIsScrolledPastHero(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "React & Next.js", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-600" },
    { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
    { name: "JavaScript", level: 92, color: "bg-yellow-500" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "MongoDB", level: 80, color: "bg-green-600" },
  ];

  const experiences = [
    {
      period: "2023 - Present",
      role: "Senior Frontend Engineer",
      company: "Tech Innovation Co.",
      description:
        "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.",
    },
    {
      period: "2021 - 2023",
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      description:
        "Built responsive web applications using React and TypeScript, collaborated with design teams to create pixel-perfect UIs.",
    },
    {
      period: "2020 - 2021",
      role: "Junior Developer",
      company: "StartupHub",
      description:
        "Started my professional journey building landing pages and small applications, learning modern development practices.",
    },
  ];

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Modern, responsive web applications using React, Next.js, and TypeScript with focus on performance and user experience.",
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description:
        "Pixel-perfect implementation of designs with smooth animations and interactions using Framer Motion and CSS.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed optimization, code splitting, and SEO improvements to ensure your application loads fast and ranks well.",
    },
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
              isScrolledPastHero ? "text-black" : "text-white"
            }`}
          >
            <div
              className={`h-65 w-1 rounded-full transition-colors duration-500 ${
                isScrolledPastHero ? "bg-gray-600" : "bg-gray-400"
              }`}
            ></div>

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
            className="space-y-0.5 max-w-screen-xl mx-auto"
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
            className="flex justify-center md:justify-start items-center gap-4 mt-6  max-w-screen-xl mx-auto"
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
            className="max-w-screen-xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-[.3rem]">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {
                    "I'm a passionate Frontend Engineer with over 3 years of experience crafting digital experiences that users love. My journey started with curiosity about how websites work, and it's evolved into a career focused on building scalable, performant, and beautiful web applications."
                  }
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {
                    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in clean code, continuous learning, and creating solutions that make a real impact."
                  }
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
      {/* Skills Section - Updated */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-screen-xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-8"
              >
                <Code className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-medium tracking-wide">
                  Technical Expertise
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 tracking-[.3rem]"
              >
                Skills & Technologies
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                A comprehensive overview of my technical stack, tools, and
                expertise in modern web development
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center"
              >
                <div className="text-4xl font-bold mb-2">3+</div>
                <div className="text-blue-100">Years Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white text-center"
              >
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-green-100">Projects Built</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white text-center"
              >
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-orange-100">Technologies</div>
              </motion.div>
            </div>

            {/* Skills Categories */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Frontend Frameworks & Libraries */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Frontend Development
                    </h3>
                    <p className="text-gray-600">
                      Frameworks & Libraries I Master
                    </p>
                  </div>
                </div>

                {[
                  {
                    name: "Next.js",
                    level: 95,
                    icon: "⚛️",
                    color: "from-black to-gray-600",
                  },
                  {
                    name: "React",
                    level: 92,
                    icon: "⚛️",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    name: "Vue.js",
                    level: 88,
                    icon: "🟢",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    name: "TypeScript",
                    level: 90,
                    icon: "🔷",
                    color: "from-blue-600 to-blue-800",
                  },
                  {
                    name: "Redux",
                    level: 85,
                    icon: "🔄",
                    color: "from-purple-500 to-purple-700",
                  },
                  {
                    name: "React Query",
                    level: 83,
                    icon: "🚀",
                    color: "from-red-500 to-pink-600",
                  },
                  {
                    name: "Tailwind CSS",
                    level: 95,
                    icon: "🎨",
                    color: "from-cyan-400 to-blue-500",
                  },
                  {
                    name: "Framer Motion",
                    level: 87,
                    icon: "🎭",
                    color: "from-pink-500 to-rose-600",
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                    className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white font-bold text-sm`}
                        >
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Proficiency: {skill.level}%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.4,
                          duration: 1.2,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Developer Tools & Backend */}
              <div className="space-y-8">
                {/* Core Stack Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Core Technology Stack
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        name: "Next.js",
                        icon: "⚛️",
                        color: "from-black to-gray-700",
                      },
                      {
                        name: "TypeScript",
                        icon: "🔷",
                        color: "from-blue-600 to-blue-800",
                      },
                      {
                        name: "Tailwind",
                        icon: "🎨",
                        color: "from-cyan-500 to-blue-600",
                      },
                      {
                        name: "Framer Motion",
                        icon: "🎭",
                        color: "from-purple-500 to-pink-600",
                      },
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                        className={`bg-gradient-to-r ${tech.color} rounded-xl p-4 text-center text-white hover:scale-105 transition-transform duration-300 cursor-pointer`}
                      >
                        <div className="text-2xl mb-2">{tech.icon}</div>
                        <div className="font-medium text-sm">{tech.name}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Developer Tools */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-teal-600">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Developer Tools
                      </h4>
                      <p className="text-gray-600">Professional Workflow</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Git & GitHub",
                      "VS Code",
                      "Webpack",
                      "ESLint",
                      "Prettier",
                      "Chrome DevTools",
                      "Figma",
                      "Postman",
                    ].map((tool, index) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.05 + 0.4,
                          duration: 0.4,
                        }}
                        className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          {tool}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Currently Exploring */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Currently Exploring
                      </h4>
                      <p className="text-gray-600">Backend & Emerging Tech</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "PostgreSQL",
                      "Docker",
                      "AWS",
                      "GraphQL",
                      "Web3",
                    ].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                        className="px-3 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 rounded-full text-orange-700 text-sm font-medium hover:shadow-sm transition-shadow duration-200"
                        style={{
                          animation: `pulse 3s infinite ${Math.random() * 2}s`,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Add these additional imports at the top of your file if not already present */}
      {/* import { Wrench, Database } from "lucide-react"; */}
      {/* Experience Section */}
      {/* Experience Section - Updated with Real Details */}
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

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

              {/* Ojutu - March 2024 – Jan 2025 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative flex items-center mb-16 md:flex-row"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        March 2024 – Jan 2025
                      </span>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Frontend Web Developer
                    </h3>
                    <h4 className="text-blue-600 font-semibold text-lg mb-4">
                      Ojutu
                    </h4>

                    {/* <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Built a{" "}
                          <strong>
                            modular and responsive admin dashboard
                          </strong>{" "}
                          using React and Tailwind CSS, enabling faster feature
                          development and{" "}
                          <strong>reducing UI bugs by 35%</strong>.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Implemented{" "}
                          <strong>Redux for efficient state management</strong>{" "}
                          across multiple user interfaces, improving app
                          performance and{" "}
                          <strong>reducing load times by ~25%</strong>.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Collaborated with backend engineers via{" "}
                          <strong>REST APIs</strong>, ensuring seamless data
                          flow and{" "}
                          <strong>
                            cutting integration turnaround time by 40%
                          </strong>
                          .
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Managed project source code through{" "}
                          <strong>Git/GitHub</strong>, streamlining team
                          workflows and minimizing merge conflicts.
                        </p>
                      </div>
                    </div> */}

                    <div className="flex flex-wrap gap-2 mt-6">
                      {[
                        "Next.js",
                        "Tailwind CSS",
                        "Redux",
                        "REST APIs",
                        "Git",
                        "Sanity CMS",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/70 border border-blue-200 rounded-full text-sm font-medium text-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AFEX - Oct 2023 – Feb 2024 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative flex items-center mb-16 md:flex-row-reverse"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Oct 2023 – Feb 2024
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      Frontend Web Developer
                    </h3>
                    <h4 className="text-purple-600 font-semibold text-lg mb-4">
                      AFEX
                    </h4>

                    {/* <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Developed prompt and self-service interfaces for{" "}
                          <strong>"Sherlock"</strong>, a data visualization/NLP
                          tool, using <strong>React and TypeScript</strong>,
                          boosting user adoption by simplifying data workflows.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Designed critical modules{" "}
                          <strong>(CMS, Logistics, Accounting)</strong> for
                          "Workbench" ERP system using component-based
                          architecture,{" "}
                          <strong>reducing bug reports by 30%</strong>.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Optimized UX for complex data workflows using{" "}
                          <strong>Tailwind CSS and Material UI</strong>, leading
                          to a{" "}
                          <strong>20% increase in internal tool usage</strong>.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Worked in <strong>Agile sprints</strong> with
                          cross-functional teams to deliver weekly improvements
                          with fast feedback loops.
                        </p>
                      </div>
                    </div> */}

                    <div className="flex flex-wrap gap-2 mt-6">
                      {[
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "Mantine UI",
                        "Agile",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/70 border border-purple-200 rounded-full text-sm font-medium text-purple-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Touch and Pay - July 2022 – Oct 2022 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative flex items-center mb-16 md:flex-row"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        July 2022 – Oct 2022
                      </span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      Frontend Web Developer
                    </h3>
                    <h4 className="text-green-600 font-semibold text-lg mb-4">
                      Touch and Pay Technology Limited
                    </h4>
{/* 
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Developed a robust{" "}
                          <strong>"Activity Log System"</strong> for internal
                          admin platform using{" "}
                          <strong>React, Redux, and Tailwind CSS</strong>,
                          enabling comprehensive user tracking.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Implemented core features including{" "}
                          <strong>
                            timestamped logs, user filtering, search
                            functionality
                          </strong>
                          , and <strong>in-app chat system</strong> for internal
                          collaboration.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Collaborated with backend developers for{" "}
                          <strong>
                            real-time log synchronization via RESTful APIs
                          </strong>
                          , ensuring up-to-date records with minimal latency.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Enhanced debugging and accountability,{" "}
                          <strong>
                            reducing incident investigation time by 40%
                          </strong>{" "}
                          and supporting compliance with security protocols.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="leading-relaxed">
                          Contributed to dashboard components and API
                          integration, delivering feature-ready UI within sprint
                          timelines using <strong>Git-based workflows</strong>.
                        </p>
                      </div>
                    </div> */}

                    <div className="flex flex-wrap gap-2 mt-6">
                      {[
                        "React",
                        "Redux",
                        "Tailwind CSS",
                        "RESTful APIs",
                        "Git",
                        "Real-time Data",
                        "Flowbite"
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/70 border border-green-200 rounded-full text-sm font-medium text-green-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Career Journey Summary */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center mt-16"
              >
                <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-2xl p-8 border border-gray-200 z-10 relative">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Professional Journey Highlights
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        2.5+
                      </div>
                      <div className="text-gray-600 text-sm">
                        Years of Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        50+
                      </div>
                      <div className="text-gray-600 text-sm">
                        Projects Delivered
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        90%
                      </div>
                      <div className="text-gray-600 text-sm">
                        Average Performance Improvement
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div> */}
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
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-[.3rem]">
              {"Let's Work Together"}
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {
                "Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people."
              }
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
