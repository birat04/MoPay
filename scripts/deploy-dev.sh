#!/bin/bash

# Mopay Development Deployment Script
echo "🚀 Deploying Mopay to Development Environment..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel first:"
    vercel login
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

# Get deployment URL
DEPLOYMENT_URL=$(vercel ls | grep -o 'https://[^[:space:]]*' | head -1)
echo "✅ Deployment complete!"
echo "🌐 Your app is available at: $DEPLOYMENT_URL"

# Instructions for database setup
echo ""
echo "📋 Next steps:"
echo "1. Set up a PostgreSQL database (recommended: Neon or Supabase)"
echo "2. Add environment variables in Vercel dashboard:"
echo "   - DATABASE_URL"
echo "   - JWT_SECRET"
echo "3. Run database migrations:"
echo "   npx prisma db push"
echo ""
echo "🔗 Vercel Dashboard: https://vercel.com/dashboard"
echo "📖 Full deployment guide: ./DEPLOYMENT.md"
