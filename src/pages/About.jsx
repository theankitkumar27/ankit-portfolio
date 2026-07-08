import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { containerVariants, itemVariants, fadeInUp } from "../utils/animations";

/**
 * About Section
 */
const About = () => {
  const highlights = [
    {
      number: "5+",
      label: "Projects Completed",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
    },
    {
      number: "4.9/5",
      label: "Average Rating",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-bg-secondary to-background"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          subtitle="Get to know me"
          title="About Me"
          description="I am a passionate Full Stack Developer focused on creating scalable, efficient, and user-friendly applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm a Full Stack MERN Developer with a deep passion for building
              production-ready web applications. My expertise lies in creating
              scalable backend systems, designing efficient databases, and
              implementing clean, maintainable code.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              I've worked on diverse projects ranging from enterprise ERP systems to consumer-facing
              platforms. I specialize in REST API development, JWT
              authentication, MongoDB database design, and Express.js server
              architecture.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              I believe in continuous learning and staying updated with the
              latest technologies. My approach focuses on writing clean code,
              following SOLID principles, and optimizing application
              performance.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-poppins font-bold text-text-primary mb-4">
                Core Values
              </h4>
              <ul className="space-y-2">
                {[
                  "Clean Code",
                  "Performance",
                  "Scalability",
                  "User Experience",
                ].map((value, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-3 text-text-secondary"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {value}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-bg-secondary/50 border border-primary/10 rounded-xl hover:border-primary/30 transition-all"
                >
                  <div className="text-3xl md:text-4xl font-poppins font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {item.number}
                  </div>
                  <div className="text-text-secondary text-sm font-poppins">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl"
            >
              <h4 className="text-lg font-poppins font-bold text-text-primary mb-3">
                Why Choose Me?
              </h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Expertise in backend architecture and API design</li>
                <li>✓ Full stack capabilities with modern technologies</li>
                <li>✓ Focus on code quality and best practices</li>
                <li>✓ Quick learner and problem solver</li>
                <li>✓ Excellent communication and collaboration skills</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
