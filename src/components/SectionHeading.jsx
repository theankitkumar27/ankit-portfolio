import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

/**
 * Section Heading Component
 */
const SectionHeading = ({
  title,
  subtitle,
  description,
  alignment = "center",
  highlight = false,
  className = "",
}) => {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[alignment];

  return (
    <motion.div
      {...fadeInUp}
      className={`mb-12 ${alignmentClass} ${className}`}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent font-poppins font-semibold text-sm tracking-wider uppercase mb-2"
        >
          {subtitle}
        </motion.p>
      )}

      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4 ${
          highlight
            ? "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            : "text-text-primary"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p className="text-text-secondary max-w-2xl text-lg leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
