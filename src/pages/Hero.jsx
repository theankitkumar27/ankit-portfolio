import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import ParticleBackground from "../components/ParticleBackground";
import Button from "../components/Button";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  floatingAnimation,
} from "../utils/animations";
import { downloadFile } from "../utils/helpers";

/**
 * Hero/Home Section
 */
const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Full Stack MERN Developer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/theankitkumar27",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://linkedin.com/in/theankitkumar",
      label: "LinkedIn",
    },
    { icon: FiMail, href: "mailto:theankitsingh45@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground count={40} speed={0.3} />

      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={staggerItem} className="space-y-6">
            <motion.p
              variants={staggerItem}
              className="text-accent font-poppins font-semibold text-lg tracking-wider uppercase"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.div variants={staggerItem}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-text-primary leading-tight mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Ankit Kumar Singh
                </span>
              </h1>
            </motion.div>

            <motion.div variants={staggerItem} className="min-h-16">
              <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-accent">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h2>
              <p className="text-text-secondary text-lg mt-2">
                Backend Focused Developer
              </p>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="text-text-secondary text-lg max-w-xl leading-relaxed"
            >
              I build production-ready web applications with a focus on scalable
              backend architecture, clean code, and best practices. Specialized
              in MERN Stack with 5+ projects completed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a href="#projects" className="flex-1 sm:flex-auto">
                <Button variant="primary" size="lg" icon={FiArrowRight}>
                  View My Work
                </Button>
              </a>
              <a href="#contact" className="flex-1 sm:flex-auto">
                <Button variant="outline" size="lg" icon={FiMail}>
                  Get In Touch
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={staggerItem} className="flex gap-4 pt-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-12 h-12 rounded-lg bg-primary/20 hover:bg-primary/40 flex items-center justify-center text-primary hover:text-accent transition-colors"
                    title={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Image Placeholder */}
          <motion.div
            variants={staggerItem}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Animated Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary p-1 opacity-30"
              >
                <div className="w-full h-full rounded-2xl bg-background" />
              </motion.div>

              {/* Image Container */}
              <motion.div
                {...floatingAnimation}
                className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-primary/20"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-4">
                      👨‍💻
                    </div>
                    <p className="text-text-secondary">Full Stack Developer</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-center text-text-secondary">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2 mx-auto">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-primary rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
