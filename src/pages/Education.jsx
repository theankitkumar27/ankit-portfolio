import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiBook } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { EDUCATION } from "../utils/constants";
import { containerVariants, itemVariants } from "../utils/animations";

/**
 * Education Section
 */
const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Institute/University Name",
      period: "2020 - 2024",
      location: "India",
      details: [
        "Specialized in Full Stack Web Development",
        "Strong foundation in Data Structures & Algorithms",
        "Web Development and Software Engineering focus",
        "GPA: 3.8/4.0",
      ],
      achievements: [
        "Dean's List - All Semesters",
        "Best Project Award - Web Development",
        "Active in Technical Clubs",
      ],
    },
  ];

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      year: 2023,
      credentialUrl: "#",
    },
    {
      title: "The Complete JavaScript Course",
      issuer: "Udemy",
      year: 2023,
      credentialUrl: "#",
    },
    {
      title: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      year: 2023,
      credentialUrl: "#",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          subtitle="Learning Journey"
          title="Education & Certifications"
          description="My academic background and professional certifications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-poppins font-bold text-text-primary">
              Formal Education
            </h3>

            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 bg-bg-secondary/50 border border-primary/10 rounded-2xl hover:border-primary/30 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-xl font-poppins font-bold text-accent mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-text-primary font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-poppins font-semibold">
                    {edu.period}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-6 text-text-secondary text-sm">
                  <div className="flex items-center gap-2">
                    <FiMapPin size={16} className="text-accent" />
                    {edu.location}
                  </div>
                </div>

                {/* Details */}
                <div className="mb-6">
                  <h5 className="font-poppins font-semibold text-text-primary mb-3">
                    Key Learnings:
                  </h5>
                  <ul className="space-y-2">
                    {edu.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-text-secondary"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="font-poppins font-semibold text-text-primary mb-3">
                    Achievements:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold"
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Sidebar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-poppins font-bold text-text-primary mb-8">
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.a
                  key={idx}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="p-6 bg-bg-secondary/50 border border-primary/10 rounded-xl hover:border-primary/30 transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-poppins font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-semibold text-accent">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm">{cert.issuer}</p>
                  <p className="text-accent text-xs mt-3 group-hover:translate-x-1 transition-transform">
                    View Credential →
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
