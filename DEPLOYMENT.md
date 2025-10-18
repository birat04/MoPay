# 🚀 Mopay Development Deployment Guide

## Option 1: Vercel (Recommended)

### Quick Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? mopay-dev
# - Directory? ./
# - Override settings? N
```

### Environment Variables in Vercel
1. Go to your project dashboard on vercel.com
2. Navigate to Settings → Environment Variables
3. Add these variables:
   ```
   DATABASE_URL=postgresql://username:password@host:port/database
   JWT_SECRET=your-super-secret-jwt-key
   RAZORPAY_KEY_ID=your-razorpay-key-id
   RAZORPAY_KEY_SECRET=your-razorpay-key-secret
   ```

### Database Setup for Vercel
**Option A: Vercel Postgres (Recommended)**
```bash
# Add Vercel Postgres to your project
vercel storage create postgres

# Get connection string
vercel storage connect postgres
```

**Option B: External Database**
- **Neon** (Free PostgreSQL): https://neon.tech
- **Supabase** (Free PostgreSQL): https://supabase.com
- **Railway**: https://railway.app

## Option 2: Netlify

### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=.next
```

### Netlify Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200
```

## Option 3: Railway

### Deploy to Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Add PostgreSQL database
railway add postgresql

# Deploy
railway up
```

## Option 4: Render

### Deploy to Render
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Configure:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node.js

### Add PostgreSQL Database
1. Create a new PostgreSQL database on Render
2. Copy the connection string
3. Add to environment variables

## Option 5: DigitalOcean App Platform

### Deploy to DigitalOcean
1. Connect GitHub repository
2. Create new app
3. Configure:
   - **Source**: GitHub repository
   - **Type**: Web Service
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`

### Add Database
1. Create managed PostgreSQL database
2. Add connection string to environment variables

## 🔧 Database Setup for Development

### Using Neon (Free PostgreSQL)
```bash
# 1. Sign up at https://neon.tech
# 2. Create new project
# 3. Copy connection string
# 4. Add to environment variables
```

### Using Supabase (Free PostgreSQL)
```bash
# 1. Sign up at https://supabase.com
# 2. Create new project
# 3. Go to Settings → Database
# 4. Copy connection string
# 5. Add to environment variables
```

## 🚀 Quick Start Commands

### Vercel Deployment
```bash
# One-command deploy
npx vercel --prod

# With environment variables
vercel env add DATABASE_URL
vercel env add JWT_SECRET
```

### Railway Deployment
```bash
# Deploy with database
railway up
railway add postgresql
railway run npx prisma db push
```

### Netlify Deployment
```bash
# Deploy with functions
netlify deploy --prod
netlify functions:create api
```

## 🔧 Post-Deployment Setup

### 1. Database Migration
```bash
# After deployment, run migrations
npx prisma generate
npx prisma db push
```

### 2. Environment Variables
Make sure these are set in your deployment platform:
```env
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

### 3. Test Your Deployment
```bash
# Test API endpoints
curl https://your-app.vercel.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","phone":"9876543210","password":"password123"}'
```

## 🌐 Recommended Development URLs

- **Vercel**: `https://mopay-dev.vercel.app`
- **Netlify**: `https://mopay-dev.netlify.app`
- **Railway**: `https://mopay-dev.railway.app`
- **Render**: `https://mopay-dev.onrender.com`

## 📱 Frontend Integration

Update your API client for production:
```typescript
// lib/api-client.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://your-app.vercel.app'
```

## 🔐 Security for Development

1. **Use strong JWT secrets**
2. **Enable CORS for your domain**
3. **Use environment variables for all secrets**
4. **Enable database SSL connections**

## 🆘 Troubleshooting

### Common Issues
1. **Database connection errors**: Check DATABASE_URL format
2. **Build failures**: Ensure all dependencies are in package.json
3. **Environment variables**: Verify they're set in deployment platform
4. **CORS errors**: Update CORS configuration for your domain

### Debug Commands
```bash
# Check deployment logs
vercel logs
railway logs
netlify logs

# Test database connection
railway run npx prisma db pull
```

Choose the platform that best fits your needs! Vercel is recommended for Next.js applications.
