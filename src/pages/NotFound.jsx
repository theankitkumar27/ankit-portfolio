import React from "react";
import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import Button from "../components/Button";

/**
 * 404 Not Found Page
 */
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-bg-secondary to-background pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* 404 Number */}
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="text-9xl font-poppins font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl font-poppins font-bold text-text-primary mb-3">
            Page Not Found
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Oops! It seems like the page you're looking for doesn't exist or has
            been moved.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#home">
            <Button variant="primary" size="lg" icon={FiHome}>
              Back to Home
            </Button>
          </a>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mt-12 w-32 h-32 rounded-full border-2 border-primary/20 mx-auto opacity-20"
        />
      </motion.div>
    </div>
  );
};

export default NotFound;
