import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, hoverScale } from "../utils/animations";

/**
 * Reusable Card Component
 */
const Card = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  onClick,
  gradient = false,
  ...props
}) => {
  const baseStyles =
    "rounded-2xl border backdrop-blur-sm transition-all duration-300";

  const variants = {
    default: "bg-bg-secondary/50 border-primary/10 hover:border-primary/30",
    glass: "bg-white/5 border-white/10 hover:border-white/20",
    gradient:
      "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20",
    dark: "bg-background/80 border-white/5",
  };

  const cardClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const motionProps = hover
    ? {
        whileHover: { y: -4, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" },
        transition: { duration: 0.3 },
      }
    : {};

  return (
    <motion.div
      {...fadeInUp}
      {...motionProps}
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
