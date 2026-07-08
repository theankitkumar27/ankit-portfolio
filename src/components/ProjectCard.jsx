import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { fadeInUp, hoverGrow } from "../utils/animations";
import Badge from "./Badge";
import Button from "./Button";

/**
 * Project Card Component
 */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-bg-secondary/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl md:text-2xl font-poppins font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-text-secondary text-sm md:text-base mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" size="sm">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3 mb-6 p-3 bg-bg-tertiary/50 rounded-lg border border-primary/5">
              <div className="text-center">
                <div className="text-accent font-bold text-lg">
                  {project.stats.downloads}
                </div>
                <div className="text-text-secondary text-xs">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-accent font-bold text-lg">
                  {project.stats.stars}
                </div>
                <div className="text-text-secondary text-xs">Stars</div>
              </div>
              <div className="text-center">
                <div className="text-accent font-bold text-lg">
                  {project.stats.forks}
                </div>
                <div className="text-text-secondary text-xs">Forks</div>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                size="md"
                icon={FiGithub}
                className="w-full"
              >
                GitHub
              </Button>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="primary"
                size="md"
                icon={FiExternalLink}
                className="w-full"
              >
                Live Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
