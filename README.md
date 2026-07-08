# Ankit Kumar Singh - Full Stack Developer Portfolio

A premium, production-ready portfolio website showcasing my expertise as a Full Stack MERN Developer with a focus on backend development, REST APIs, and scalable applications.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Dark Theme**: Modern dark UI with premium glassmorphism effects
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Interactive Components**: Hover effects, scroll animations, and transitions
- **Contact Form**: EmailJS integration for direct email communication
- **GitHub Integration**: Display GitHub statistics and contribution graph
- **Performance Optimized**: Fast load times with optimized assets
- **SEO Optimized**: Proper meta tags and structured data
- **Particle Background**: Animated particle effects on hero section
- **Scroll Progress Bar**: Visual indication of scroll progress
- **Custom Cursor**: Animated cursor on desktop devices

## 🛠️ Tech Stack

### Frontend

- **React 19**: Latest React version with functional components
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Advanced animation library
- **React Router**: Client-side routing
- **React Icons**: Icon library

### Backend Services

- **EmailJS**: Email service integration
- **GitHub API**: For statistics and contribution data

## 📁 Folder Structure

```
ankit-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── services/          # API and external service calls
│   ├── styles/            # Global styles
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/theankitkumar27/ankit-portfolio.git
cd ankit-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env` file in the root directory:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_USERNAME=theankitkumar27
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:3000`

### Build

Create a production build:

```bash
npm run build
# or
yarn build
```

### Preview

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

## 📧 Environment Variables

To use the contact form and GitHub integration, you'll need to:

1. **EmailJS Setup**:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Add them to `.env` file

2. **GitHub Integration**:
   - Update `VITE_GITHUB_USERNAME` with your GitHub username
   - The portfolio will automatically fetch your GitHub statistics

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change color scheme:

```javascript
colors: {
  primary: '#2563EB',
  background: '#020617',
  accent: '#38BDF8',
  // ... more colors
}
```

### Typography

Fonts are configured in `tailwind.config.js` using Google Fonts (Poppins and Inter).

### Sections

Each section is a separate component in `src/components/` for easy modification.

## 📱 Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## ⚡ Performance Optimizations

- Code splitting with React Router
- Lazy loading for images
- Optimized animations with Framer Motion
- Production build minification and tree-shaking
- Custom scrollbar for better UX

## 🔍 SEO

- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data markup
- Mobile-first responsive design
- Sitemap and robots.txt ready

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ankit Kumar Singh**

- Full Stack MERN Developer
- GitHub: [@theankitkumar27](https://github.com/theankitkumar27)
- Email: theankitsingh45@gmail.com
- Location: India

## 🙌 Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

Made with ❤️ by Ankit Kumar Singh
