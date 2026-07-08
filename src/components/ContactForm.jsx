import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { sendContactEmail } from "../services/emailService";
import Button from "./Button";
import { validateEmail } from "../utils/helpers";
import { fadeInUp, containerVariants, itemVariants } from "../utils/animations";

/**
 * Contact Form Component
 */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!validateEmail(formData.email)) {
      setError("Valid email is required");
      return false;
    }
    if (!formData.subject.trim()) {
      setError("Subject is required");
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setError("Message must be at least 10 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "theankitsingh45@gmail.com",
      href: "mailto:theankitsingh45@gmail.com",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "India",
    },
    {
      icon: FiPhone,
      label: "Available",
      value: "For Full-time & Contract",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12"
    >
      {/* Contact Info */}
      <motion.div variants={itemVariants} className="space-y-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-poppins font-bold text-text-primary mb-4">
            Get in Touch
          </h3>
          <p className="text-text-secondary text-lg leading-relaxed">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
        </div>

        <div className="space-y-4">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-bg-secondary/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-text-primary">
                    {info.label}
                  </h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-accent hover:text-accent-dark transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-text-secondary">{info.value}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        variants={itemVariants}
        onSubmit={handleSubmit}
        className="space-y-6 p-8 bg-bg-secondary/50 border border-primary/10 rounded-2xl backdrop-blur-sm"
      >
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
          >
            ✓ Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
          >
            ✗ {error}
          </motion.div>
        )}

        <div>
          <label className="block text-text-primary font-poppins font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-bg-tertiary border border-primary/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-text-primary font-poppins font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-bg-tertiary border border-primary/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-text-primary font-poppins font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Message subject"
            className="w-full px-4 py-3 bg-bg-tertiary border border-primary/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-text-primary font-poppins font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows="5"
            className="w-full px-4 py-3 bg-bg-tertiary border border-primary/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            required
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
