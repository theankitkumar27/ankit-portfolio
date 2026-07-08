import React from "react";
import { motion } from "framer-motion";

/**
 * Badge Component for tags and labels
 */
const Badge = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-1 font-semibold rounded-full font-poppins";

  const variants = {
    primary: "bg-primary/20 text-primary border border-primary/30",
    secondary: "bg-accent/20 text-accent border border-accent/30",
    success: "bg-green-500/20 text-green-400 border border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    danger: "bg-red-500/20 text-red-400 border border-red-500/30",
    outline: "border-2 border-primary/50 text-text-secondary",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const badgeClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={badgeClasses}
      {...props}
    >
      {Icon && <Icon size={size === "sm" ? 12 : 16} />}
      {children}
    </motion.span>
  );
};

export default Badge;
