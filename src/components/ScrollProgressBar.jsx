import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getScrollProgress } from "../utils/helpers";
import { throttle } from "../utils/helpers";

/**
 * Scroll Progress Bar Component
 */
const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const newProgress = getScrollProgress();
      setProgress(newProgress);
    }, 50);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50"
      style={{ scaleX: progress / 100 }}
      transformTemplate={(props) => `scaleX(${props.scaleX})`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    />
  );
};

export default ScrollProgressBar;
