import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "../hooks";

/**
 * Animated Cursor Component
 */
const AnimatedCursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, input, textarea",
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => setIsHovering(true));
      element.addEventListener("mouseleave", () => setIsHovering(false));
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", () => setIsHovering(true));
        element.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed z-50">
      {/* Outer circle */}
      <motion.div
        animate={{ x: x - 24, y: y - 24 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className={`w-12 h-12 border-2 border-primary rounded-full mix-blend-screen ${
          isHovering ? "scale-150" : "scale-100"
        } transition-transform duration-300`}
      />

      {/* Inner dot */}
      <motion.div
        animate={{ x: x - 4, y: y - 4 }}
        transition={{ type: "spring", stiffness: 800, damping: 12 }}
        className={`w-2 h-2 bg-accent rounded-full mix-blend-screen ${
          isHovering ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      />
    </div>
  );
};

export default AnimatedCursor;
