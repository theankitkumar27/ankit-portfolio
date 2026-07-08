import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

/**
 * Skill Bar Component
 */
const SkillBar = ({ name, level, index, showLabel = true }) => {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: index * 0.1, duration: 0.5 },
  };

  const barVariants = {
    initial: { width: 0 },
    whileInView: { width: `${level}%` },
    viewport: { once: true },
    transition: { delay: index * 0.1 + 0.2, duration: 0.8, ease: "easeOut" },
  };

  const getGradient = (level) => {
    if (level >= 90) return "from-primary to-accent";
    if (level >= 75) return "from-blue-500 to-cyan-500";
    if (level >= 60) return "from-cyan-500 to-emerald-500";
    return "from-emerald-500 to-green-500";
  };

  return (
    <motion.div {...containerVariants} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-text-primary font-poppins font-medium">
          {name}
        </span>
        <span className="text-accent font-semibold text-sm">{level}%</span>
      </div>
      <div className="w-full bg-bg-tertiary/50 rounded-full h-2.5 overflow-hidden border border-primary/10">
        <motion.div
          {...barVariants}
          className={`h-full bg-gradient-to-r ${getGradient(level)} rounded-full`}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
