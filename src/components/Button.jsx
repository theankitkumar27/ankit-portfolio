import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, hoverScale } from "../utils/animations";

/**
 * Reusable Button Component
 */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
  icon: Icon,
  iconPosition = "left",
  ...props
}) => {
  const baseStyles =
    "font-poppins font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-glow",
    secondary:
      "bg-bg-secondary hover:bg-bg-tertiary text-text-primary border border-primary/30",
    accent: "bg-accent hover:bg-accent-dark text-background",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-primary hover:bg-primary/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-lg",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const iconElement = Icon ? <Icon size={size === "sm" ? 16 : 20} /> : null;

  return (
    <motion.button
      {...fadeInUp}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {Icon && iconPosition === "left" && iconElement}
      {children}
      {Icon && iconPosition === "right" && iconElement}
    </motion.button>
  );
};

export default Button;
