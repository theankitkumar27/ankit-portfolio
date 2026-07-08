/**
 * Create environment configuration file content
 * Copy this as .env.local file
 */

export const envTemplate = `
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_RECIPIENT_EMAIL=theankitsingh45@gmail.com

# GitHub Configuration
VITE_GITHUB_USERNAME=theankitkumar27

# App Configuration
VITE_APP_NAME=Ankit Kumar Singh Portfolio
VITE_APP_URL=https://ankit-portfolio.vercel.app
`;

/**
 * API Configuration
 */
export const apiConfig = {
  timeout: 10000,
  retries: 3,
  retryDelay: 1000,
};

/**
 * Cache Configuration
 */
export const cacheConfig = {
  duration: 1000 * 60 * 5, // 5 minutes
  storage: "localStorage",
};
