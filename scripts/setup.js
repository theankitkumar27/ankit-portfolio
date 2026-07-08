#!/usr/bin/env node

/**
 * Setup script for Ankit Kumar Singh Portfolio
 * Run this script after installing dependencies to initialize the project
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Ankit Kumar Singh Portfolio...\n');

// Check if .env.local exists
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('⚠️  .env.local not found!');
  console.log('📋 Copy .env.example to .env.local and fill in your values:\n');
  console.log('   cp .env.example .env.local\n');
  console.log('   Then update the following variables:');
  console.log('   - VITE_EMAILJS_SERVICE_ID');
  console.log('   - VITE_EMAILJS_TEMPLATE_ID');
  console.log('   - VITE_EMAILJS_PUBLIC_KEY\n');
} else {
  console.log('✅ .env.local found\n');
}

// Verify package.json
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
  console.log('✅ package.json found\n');
} else {
  console.log('❌ package.json not found\n');
  process.exit(1);
}

console.log('📦 Project Structure:');
console.log('   ├── src/');
console.log('   │   ├── components/     (UI Components)');
console.log('   │   ├── pages/          (Page Components)');
console.log('   │   ├── hooks/          (Custom Hooks)');
console.log('   │   ├── utils/          (Utilities & Helpers)');
console.log('   │   ├── services/       (API Services)');
console.log('   │   ├── styles/         (Global Styles)');
console.log('   │   ├── App.jsx         (Main App Component)');
console.log('   │   └── main.jsx        (Entry Point)');
console.log('   ├── public/             (Static Assets)');
console.log('   ├── index.html          (HTML Template)');
console.log('   ├── vite.config.js      (Vite Configuration)');
console.log('   └── tailwind.config.js  (Tailwind Configuration)\n');

console.log('🚀 Getting Started:');
console.log('   1. npm install          (Install dependencies)');
console.log('   2. npm run dev          (Start development server)');
console.log('   3. npm run build        (Build for production)');
console.log('   4. npm run preview      (Preview production build)\n');

console.log('✨ Setup complete! Happy coding!\n');
