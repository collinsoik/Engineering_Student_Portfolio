# Engineering Portfolio - Deployment Guide

## Project Overview
This is Collin Soik's Engineering Portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## Local Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Deploying to Vercel

### Option 1: Deploy via GitHub (Recommended)
1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Sign in with your GitHub account
4. Click "New Project"
5. Import your GitHub repository
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

### Option 2: Deploy via Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Run deployment:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: engineering-portfolio (or your choice)
   - Directory: ./
   - Override settings: No

### Option 3: Manual Upload
1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [vercel.com](https://vercel.com)
3. Drag and drop the entire project folder to Vercel dashboard

## Configuration Details
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (automatically handled)
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## Important Notes
- This is a static export site (`output: 'export'` in next.config.js)
- No environment variables required
- All images are stored in the `/public` folder
- Contact form uses `mailto:` links (no backend required)

## Custom Domain Setup
After deployment:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Build Status
✅ Production build tested and working
✅ TypeScript compilation successful
✅ All pages rendering correctly
✅ Images optimized for web

## Support
For issues or questions about the portfolio, contact: cmsoik@ncsu.edu