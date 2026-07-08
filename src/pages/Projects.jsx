import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../utils/constants";
import { containerVariants, itemVariants } from "../utils/animations";

/**
 * Projects Section
 */
const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          subtitle="My Work"
          title="Featured Projects"
          description="Explore my latest projects showcasing full-stack development expertise and problem-solving abilities."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "1K+", label: "Total Downloads" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 bg-bg-secondary/50 border border-primary/10 rounded-xl"
            >
              <div className="text-3xl font-poppins font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-poppins font-bold text-text-primary mb-3">
            Want to see more projects?
          </h3>
          <p className="text-text-secondary mb-6">
            Check out my GitHub profile for more projects and open-source
            contributions.
          </p>
          <a
            href="https://github.com/theankitkumar27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-poppins font-semibold transition-all"
          >
            Visit GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
