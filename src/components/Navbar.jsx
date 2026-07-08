import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub } from "react-icons/fi";
import { NAV_LINKS } from "../utils/constants";
import { useScroll } from "../hooks";
import Button from "./Button";

/**
 * Navbar Component
 */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollPosition, scrollDirection } = useScroll();
  const isScrolled = scrollPosition > 50;

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial="hidden"
        animate={
          scrollDirection === "down" && scrollPosition > 100
            ? "hidden"
            : "visible"
        }
        variants={navVariants}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-poppins font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            AKS
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                whileHover={{ color: "#38BDF8", y: -2 }}
                className="text-text-secondary hover:text-accent transition-colors duration-300 font-poppins font-medium"
              >
                {link.label}
              </motion.a>
            ))}

            <a
              href="https://github.com/theankitkumar27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="md" icon={FiGithub}>
                GitHub
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary hover:text-accent transition-colors"
          >
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-sm md:hidden pt-20"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  className="text-xl text-text-primary hover:text-accent transition-colors font-poppins font-semibold"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="w-full border-t border-primary/10 my-4" />

              <a
                href="https://github.com/theankitkumar27"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={FiGithub}
                >
                  GitHub
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
