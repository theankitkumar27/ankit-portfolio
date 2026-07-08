import React from "react";
import { motion } from "framer-motion";

/**
 * Loading Animation Component
 */
const LoadingAnimation = () => {
  const containerVariants = {
    start: { opacity: 1 },
    end: { opacity: 0 },
  };

  const dotVariants = {
    start: { y: 0, opacity: 1 },
    end: { y: -20, opacity: 0 },
  };

  const dotTransition = {
    duration: 0.6,
    repeat: Infinity,
    repeatType: "loop",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="start"
      animate="end"
      transition={{ delay: 2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex gap-4">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            transition={{
              ...dotTransition,
              delay: index * 0.1,
            }}
            className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        ))}
      </div>

      <p className="absolute bottom-20 text-accent font-poppins font-semibold tracking-widest">
        Loading...
      </p>
    </motion.div>
  );
};

export default LoadingAnimation;
