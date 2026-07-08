# Deployment Guide

This guide will help you deploy your Ankit Kumar Singh portfolio to production on Vercel.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Vercel Deployment](#vercel-deployment)
- [Environment Variables](#environment-variables)
- [Domain Setup](#domain-setup)
- [Monitoring & Analytics](#monitoring--analytics)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

1. ✅ Git repository set up (GitHub, GitLab, or Bitbucket)
2. ✅ All environment variables configured
3. ✅ EmailJS account with service configured
4. ✅ Vercel account (free tier available)
5. ✅ GitHub repository with push access

## Vercel Deployment

### Step 1: Connect Repository

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub (or your git provider)
3. Click "Add New Project"
4. Select your portfolio repository
5. Click "Import"

### Step 2: Configure Build Settings

Vercel should auto-detect your setup:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Add Environment Variables

In the Vercel project dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECIPIENT_EMAIL=theankitsingh45@gmail.com
VITE_GITHUB_USERNAME=theankitkumar27
```

3. Click "Save"

### Step 4: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Once complete, you'll get a deployment URL

## Environment Variables

### EmailJS Setup

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Create an account and sign in
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

### GitHub Integration

Your GitHub username is already set to `theankitkumar27`. This will fetch your GitHub statistics automatically.

## Domain Setup

### Connect Custom Domain

1. Go to **Project Settings** → **Domains**
2. Click "Add Domain"
3. Enter your domain (e.g., `ankit-portfolio.com`)
4. Add the DNS records provided by Vercel to your domain registrar
5. Wait for DNS propagation (up to 24 hours)

### Example Domain Registrars

- Namecheap
- GoDaddy
- Route53 (AWS)
- Cloudflare

## Monitoring & Analytics

### Enable Analytics

1. Go to **Project Settings** → **Analytics**
2. Toggle "Enable Web Analytics"
3. View real-time statistics

### Performance Monitoring

Use these tools to monitor your portfolio:

- **Vercel Analytics**: Built-in performance metrics
- **Google Analytics**: Add tracking ID for detailed insights
- **Lighthouse**: Run audits in Chrome DevTools

### Adding Google Analytics

1. Create a Google Analytics account
2. Add tracking ID to your .env
3. Integrate tracking code in your app

## Troubleshooting

### Build Fails

**Problem**: `npm run build` fails

**Solution**:

- Check for TypeScript/ESLint errors: `npm run lint`
- Clear cache: `rm -rf node_modules && npm install`
- Check Node version: Should be 18+ on Vercel

### Environmental Variables Not Working

**Problem**: Environment variables are undefined

**Solution**:

- Ensure variables are prefixed with `VITE_`
- Redeploy after adding variables
- Clear browser cache (Ctrl+Shift+Delete)

### Slow Build Times

**Problem**: Build takes too long

**Solution**:

- Reduce number of analytics images
- Optimize image sizes
- Enable code splitting in vite.config.js

### Contact Form Not Working

**Problem**: Contact form doesn't send emails

**Solution**:

- Verify EmailJS credentials in .env
- Check EmailJS template ID
- Test with EmailJS dashboard
- Check browser console for errors

### Custom Domain Issues

**Problem**: Domain not resolving

**Solution**:

- Wait 24 hours for DNS propagation
- Check DNS records in registrar
- Use Vercel nameservers instead of CNAME
- Verify domain configuration in Vercel

## GitHub Actions

Your project includes automated workflows:

1. **Deploy Workflow** (`.github/workflows/deploy.yml`)
   - Runs on push to `main`
   - Builds project
   - Deploys to Vercel

2. **Quality Workflow** (`.github/workflows/quality.yml`)
   - Runs on pull requests
   - Checks code quality
   - Verifies builds

## Post-Deployment Checklist

- [ ] Domain is pointing to deployed site
- [ ] HTTPS is enabled
- [ ] Contact form sends emails
- [ ] GitHub stats load correctly
- [ ] Performance is good (>90 Lighthouse score)
- [ ] SEO meta tags are present
- [ ] Social media links work
- [ ] Resume download works
- [ ] Mobile responsive design verified
- [ ] Dark theme works properly

## Performance Optimization

### Image Optimization

```javascript
// Use optimized images
<img src="image.webp" alt="description" />
```

### Code Splitting

Vite automatically code-splits components:

```javascript
import { lazy } from 'react';

const Hero = lazy(() => import('./pages/Hero'));
```

### Caching

Configure browser caching in `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ]
}
```

## Scaling & Upgrades

### When You Need More

- **Serverless Functions**: Use Vercel Functions for APIs
- **Databases**: Connect MongoDB Atlas
- **CDN**: Already included with Vercel
- **Monitoring**: Add Sentry for error tracking

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [GitHub Actions](https://github.com/features/actions)

---

**Need Help?** Check the main README.md or contact support@vercel.com
