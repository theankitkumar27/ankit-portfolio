import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiShield, FiZap } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { BACKEND_EXPERTISE } from "../utils/constants";
import { containerVariants, itemVariants } from "../utils/animations";

/**
 * Backend Expertise Section
 */
const BackendExpertise = () => {
  const getIcon = (iconName) => {
    const icons = {
      FiServerCommand: FiCode,
      FiLock: FiShield,
      FiCode: FiCode,
      FiCpu: FiZap,
      FiDatabase: FiDatabase,
      FiGrid: FiDatabase,
    };
    return icons[iconName] || FiCode;
  };

  return (
    <section
      id="backend"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-bg-secondary to-background"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          subtitle="Core Competencies"
          title="Backend Expertise"
          description="Deep expertise in building scalable backend systems, APIs, and databases."
          highlight
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {BACKEND_EXPERTISE.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group"
              >
                <Card
                  variant="glass"
                  className="h-full p-6 relative overflow-hidden"
                  hover
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${item.color}`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 text-white shadow-lg`}
                    >
                      <Icon size={28} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-poppins font-bold text-text-primary mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Learn More */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="inline-flex items-center gap-2 text-accent text-sm font-semibold"
                    >
                      Learn more →
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Backend Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <Card variant="gradient" className="p-8">
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-4">
              API Development Excellence
            </h3>
            <ul className="space-y-3">
              {[
                "RESTful API Architecture",
                "Endpoint Design Principles",
                "Request/Response Handling",
                "Error Handling Strategies",
                "API Documentation",
                "Rate Limiting & Security",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 text-text-secondary"
                >
                  <FiCode className="text-accent flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </Card>

          <Card variant="gradient" className="p-8">
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-4">
              Database & Security
            </h3>
            <ul className="space-y-3">
              {[
                "MongoDB Schema Design",
                "Query Optimization",
                "Indexing Strategies",
                "JWT Authentication",
                "Role-Based Access Control",
                "Data Encryption",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 text-text-secondary"
                >
                  <FiDatabase className="text-accent flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default BackendExpertise;
