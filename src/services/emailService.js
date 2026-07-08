import emailjs from "emailjs-com";

// Initialize EmailJS
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/**
 * Send email using EmailJS
 */
export const sendEmail = async (templateParams) => {
  try {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      throw new Error("EmailJS configuration is missing");
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY,
    );

    return {
      success: true,
      messageId: response.text,
      message: "Email sent successfully!",
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      message: error.message || "Failed to send email. Please try again.",
    };
  }
};

/**
 * Send contact form email
 */
export const sendContactEmail = async (formData) => {
  const { name, email, message, subject } = formData;

  const templateParams = {
    to_email:
      import.meta.env.VITE_RECIPIENT_EMAIL || "theankitsingh45@gmail.com",
    from_name: name,
    from_email: email,
    subject: subject || "New Message from Portfolio",
    message: message,
    reply_to: email,
  };

  return sendEmail(templateParams);
};
