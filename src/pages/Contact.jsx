import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

/**
 * Contact Section
 */
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-bg-secondary to-background"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          subtitle="Let's Connect"
          title="Get In Touch"
          description="I'm always interested in hearing about new projects and opportunities. Feel free to reach out!"
          highlight
        />

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
