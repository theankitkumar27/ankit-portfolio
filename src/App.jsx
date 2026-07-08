import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTop from "./components/BackToTop";
import AnimatedCursor from "./components/AnimatedCursor";
import LoadingAnimation from "./components/LoadingAnimation";
import Footer from "./components/Footer";

// Page Imports
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import BackendExpertise from "./pages/BackendExpertise";
import Projects from "./pages/Projects";
import GitHubStats from "./pages/GitHubStats";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

/**
 * Main App Component
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingAnimation key="loading" />
      ) : (
        <div
          key="app"
          className="min-h-screen bg-background text-text-primary overflow-x-hidden"
        >
          {/* Animated Cursor */}
          <AnimatedCursor />

          {/* Scroll Progress Bar */}
          <ScrollProgressBar />

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Skills Section */}
            <Skills />

            {/* Backend Expertise Section */}
            <BackendExpertise />

            {/* Projects Section */}
            <Projects />

            {/* GitHub Stats Section */}
            <GitHubStats />

            {/* Education Section */}
            <Education />

            {/* Contact Section */}
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Back to Top Button */}
          <BackToTop />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
