import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import SkillBar from "../components/SkillBar";
import { SKILLS } from "../utils/constants";
import { containerVariants, itemVariants } from "../utils/animations";

/**
 * Skills Section
 */
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Skills",
      icon: "🎨",
      skills: SKILLS.frontend,
    },
    {
      title: "Backend Skills",
      icon: "⚙️",
      skills: SKILLS.backend,
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: SKILLS.tools,
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          subtitle="My Expertise"
          title="Skills & Proficiency"
          description="A comprehensive overview of my technical skills and proficiency levels."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              variants={itemVariants}
              className="p-8 bg-bg-secondary/50 border border-primary/10 rounded-2xl hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-poppins font-bold text-text-primary mb-8">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skillIdx}
                    name={skill.name}
                    level={skill.level}
                    index={skillIdx}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl"
        >
          <h3 className="text-2xl font-poppins font-bold text-text-primary mb-4">
            Technical Specializations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "MERN Stack Development",
              "RESTful API Design",
              "Database Architecture",
              "Authentication & Security",
              "Performance Optimization",
              "Clean Code Practices",
            ].map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-text-secondary">{spec}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
