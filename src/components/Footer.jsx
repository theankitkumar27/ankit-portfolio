import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";
import { SOCIAL_LINKS } from "../utils/constants";
import { fadeInUp, staggerContainer, staggerItem } from "../utils/animations";

/**
 * Footer Component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialIcons = {
    FiGithub: FiGithub,
    FiLinkedin: FiLinkedin,
    FiTwitter: FiTwitter,
    FiMail: FiMail,
  };

  return (
    <footer className="bg-background border-t border-primary/10 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* About Section */}
          <motion.div variants={staggerItem}>
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-4">
              Ankit Kumar Singh
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Full Stack MERN Developer specializing in building scalable,
              production-ready web applications with a focus on backend
              development.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link, idx) => {
                const Icon = socialIcons[link.icon];
                return (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-primary/20 hover:bg-primary/40 flex items-center justify-center text-primary hover:text-accent transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4 className="text-lg font-poppins font-bold text-text-primary mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <FiArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={staggerItem}>
            <h4 className="text-lg font-poppins font-bold text-text-primary mb-6">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-text-secondary text-sm mb-1">Email</p>
                <a
                  href="mailto:theankitsingh45@gmail.com"
                  className="text-primary hover:text-accent transition-colors"
                >
                  theankitsingh45@gmail.com
                </a>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Location</p>
                <p className="text-text-primary">India</p>
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Availability</p>
                <p className="text-green-400 font-semibold">
                  Available for Hire
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-8" />

        {/* Bottom Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-text-secondary text-sm text-center md:text-left">
            © {currentYear} Ankit Kumar Singh. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm">
            Made with <span className="text-red-500">❤️</span> using React, Vite
            & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
