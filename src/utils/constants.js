// Constants and configuration

export const SITE_CONFIG = {
  title: "Ankit Kumar Singh | Full Stack MERN Developer",
  description:
    "Production-ready Full Stack Developer specializing in backend development, REST APIs, and scalable MERN applications.",
  url: "https://ankit-portfolio.vercel.app",
  image: "https://ankit-portfolio.vercel.app/og-image.png",
  author: "Ankit Kumar Singh",
  email: "theankitsingh45@gmail.com",
  location: "India",
  github: "https://github.com/theankitkumar27",
  linkedin: "https://linkedin.com/in/theankitkumar",
};

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "backend", label: "Backend", href: "#backend" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const SKILLS = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Bootstrap", level: 85 },
    { name: "Responsive Design", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 95 },
    { name: "Express.js", level: 95 },
    { name: "MongoDB", level: 90 },
    { name: "Mongoose", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "JWT Authentication", level: 90 },
    { name: "MVC Architecture", level: 90 },
  ],
  tools: [
    { name: "Git", level: 95 },
    { name: "GitHub", level: 95 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 90 },
    { name: "Vercel", level: 85 },
    { name: "Docker", level: 70 },
  ],
};

export const BACKEND_EXPERTISE = [
  {
    id: 1,
    title: "REST API Development",
    description:
      "Expert in designing and building scalable RESTful APIs with proper endpoint structure, request/response handling, and best practices.",
    icon: "FiServerCommand",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "JWT Authentication",
    description:
      "Secure authentication and authorization using JWT tokens with refresh token mechanism and role-based access control.",
    icon: "FiLock",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Express.js Framework",
    description:
      "Building robust server-side applications with Express.js including middleware, routing, error handling, and async operations.",
    icon: "FiCode",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Node.js Runtime",
    description:
      "Proficient in Node.js for building scalable server applications with event-driven architecture and non-blocking I/O.",
    icon: "FiCpu",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 5,
    title: "MongoDB Database",
    description:
      "NoSQL database design and management with MongoDB, including schema design, indexing, and query optimization.",
    icon: "FiDatabase",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 6,
    title: "Database Design",
    description:
      "Expert in designing efficient database schemas, relationships, data modeling, and optimization strategies.",
    icon: "FiGrid",
    color: "from-indigo-500 to-blue-500",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "ERP CRM System",
    description:
      "A full stack ERP & CRM platform developed using the MERN Stack that enables businesses to manage customers, invoices, products, quotations, payments, and reports through a secure dashboard.",
    longDescription:
      "This comprehensive ERP CRM system showcases my expertise in building enterprise-level applications. Features include multi-user authentication, role-based access control, complete CRUD operations for customers, invoices, and products, advanced reporting capabilities, and a responsive admin dashboard.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "User Authentication & Authorization",
      "Customer Management",
      "Invoice Generation & Tracking",
      "Product Inventory",
      "Quotations Management",
      "Payment Tracking",
      "Advanced Reports",
      "Role-Based Access Control",
      "REST API Backend",
      "MongoDB Database",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    github: "https://github.com/theankitkumar27/erp-crm-system",
    live: "https://erp-crm-demo.vercel.app",
    stats: {
      downloads: "5.2K",
      stars: "124",
      forks: "31",
    },
  },
  {
    id: 2,
    title: "Blogging Platform",
    description:
      "A full stack blogging application allowing users to securely create, edit, publish, and manage blog posts with authentication and responsive design.",
    longDescription:
      "A modern blogging platform built with MERN stack featuring secure authentication, rich text editor for blog creation, comment system, search functionality, and beautiful responsive UI.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Bootstrap", "Firebase"],
    features: [
      "User Authentication",
      "Create & Edit Posts",
      "Publish Management",
      "Comment System",
      "Search & Filter",
      "User Profile",
      "Responsive Design",
      "Image Upload",
      "Category Tags",
      "Like System",
    ],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop",
    github: "https://github.com/theankitkumar27/blogging-platform",
    live: "https://blogging-platform-demo.vercel.app",
    stats: {
      downloads: "3.1K",
      stars: "89",
      forks: "22",
    },
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University/Institute Name",
    period: "2020 - 2024",
    details: "Specialized in Full Stack Web Development and Data Structures",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/theankitkumar27",
    icon: "FiGithub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/theankitkumar",
    icon: "FiLinkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "FiTwitter",
  },
  {
    name: "Email",
    url: "mailto:theankitsingh45@gmail.com",
    icon: "FiMail",
  },
];

export const COLORS = {
  primary: "#2563EB",
  primaryDark: "#1e40af",
  primaryLight: "#3b82f6",
  background: "#020617",
  bgSecondary: "#111827",
  bgTertiary: "#1f2937",
  accent: "#38BDF8",
  accentDark: "#0ea5e9",
  textPrimary: "#ffffff",
  textSecondary: "#d1d5db",
};

export const ANIMATION_CONFIG = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};
