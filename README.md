# Mopay - Digital Payment Platform

A modern, full-stack digital payment application with comprehensive financial services. Built with Next.js 15, React 19, TypeScript, and a complete backend API system featuring wallet management, UPI payments, banking services, and postpaid solutions.

## 🚀 Features

### 🏦 Core Financial Services
- **Mopay Wallet** - Digital wallet with balance management and transactions
- **Mopay Bank** - Banking services with account linking and transfers
- **Mopay Money** - Investment and wealth management platform
- **UPI Payments** - Unified Payments Interface with VPA management
- **Postpaid Services** - Credit management and bill payment solutions

### 💳 Payment & Transaction Features
- Mobile recharge and bill payments
- Electricity, gas, and DTH bill payments
- Movie and travel ticket booking
- Credit card bill payments
- Real-time transaction history and management
- Bank account integration and transfers

### 🔐 Security & Authentication
- JWT-based authentication system
- Secure password hashing with bcrypt
- Input validation with Zod schemas
- SQL injection prevention
- CORS configuration and rate limiting

### 🎨 UI/UX Features
- Dark/Light theme toggle
- Responsive design for mobile and desktop
- Modern component library with Radix UI
- Tailwind CSS with custom design tokens
- Smooth animations and transitions
- Real-time notifications system

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: Radix UI primitives + shadcn/ui
- **Fonts**: Geist Sans & Geist Mono
- **State Management**: React hooks + Context API

### Backend
- **API**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT tokens
- **Validation**: Zod schemas
- **Security**: bcryptjs for password hashing
- **Real-time**: WebSocket ready

### Development
- **Package Manager**: Bun (recommended)
- **Database ORM**: Prisma
- **Type Safety**: TypeScript
- **Code Quality**: ESLint + Prettier

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- PostgreSQL database
- Package manager (npm, yarn, pnpm, or bun)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/birat04/PayTM
cd PayTM
```

2. **Install dependencies:**
```bash
bun install
# or
npm install
```

3. **Setup environment variables:**
```bash
cp env.example .env.local
```

Update `.env.local` with your configuration:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/mopay_db"

# JWT Secret
JWT_SECRET="your-super-secret-jwt-key"

# External APIs (optional for development)
RAZORPAY_KEY_ID="your-razorpay-key-id"
RAZORPAY_KEY_SECRET="your-razorpay-key-secret"
```

4. **Setup database:**
```bash
# Install PostgreSQL (if not already installed)
# macOS: brew install postgresql
# Ubuntu: sudo apt-get install postgresql

# Create database
createdb mopay_db

# Setup Prisma
npx prisma generate
npx prisma db push
```

5. **Run the development server:**
```bash
bun dev
# or
npm run dev
```

6. **Open [http://localhost:3001](http://localhost:3001) in your browser.**

## 📁 Project Structure

```
mopay/
├── app/                          # Next.js App Router
│   ├── api/                      # Backend API Routes
│   │   ├── auth/                 # Authentication endpoints
│   │   │   ├── login/route.ts    # User login
│   │   │   └── register/route.ts # User registration
│   │   ├── wallet/               # Wallet management
│   │   │   ├── balance/route.ts  # Get wallet balance
│   │   │   └── add-money/route.ts # Add money to wallet
│   │   ├── bank/                 # Banking services
│   │   │   ├── accounts/route.ts # Bank account management
│   │   │   └── transfer/route.ts # Bank transfers
│   │   ├── upi/                  # UPI services
│   │   │   └── create-vpa/route.ts # UPI VPA creation
│   │   ├── postpaid/             # Postpaid services
│   │   │   ├── credit-limit/route.ts # Credit management
│   │   │   └── pay-bill/route.ts # Bill payments
│   │   ├── payments/             # Payment processing
│   │   │   └── mobile-recharge/route.ts # Mobile recharge
│   │   └── notifications/        # Notification system
│   │       ├── send/route.ts     # Send notifications
│   │       └── preferences/route.ts # Notification preferences
│   ├── components/               # Frontend Components
│   │   ├── ui/                   # Base UI components
│   │   │   ├── button.tsx        # Button component
│   │   │   ├── card.tsx          # Card component
│   │   │   └── badge.tsx         # Badge component
│   │   ├── site-header.tsx       # Navigation header
│   │   ├── hero.tsx              # Landing page hero
│   │   ├── financial-services.tsx # Financial services section
│   │   ├── transaction-list.tsx  # Transaction history
│   │   └── theme-toggle.tsx     # Theme switcher
│   ├── wallet/                   # Wallet pages
│   ├── bank/                     # Banking pages
│   ├── money/                    # Money management pages
│   ├── upi/                      # UPI payment pages
│   ├── postpaid/                 # Postpaid service pages
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── lib/                          # Utility libraries
│   ├── db.ts                     # Database connection
│   ├── auth.ts                   # Authentication utilities
│   ├── validation.ts             # Input validation schemas
│   └── api-client.ts             # Frontend API client
├── prisma/                       # Database schema
│   └── schema.prisma             # Prisma database schema
├── components/                    # Shared UI components
│   └── ui/                       # Reusable UI components
├── env.example                   # Environment variables template
├── BACKEND_SETUP.md              # Backend setup guide
└── README.md                     # Project documentation
```

## 🛠️ Available Scripts

### Development
- `bun dev` - Start development server on port 3001
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

### Database
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema to database
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Create and apply migrations

### API Testing
```bash
# Test authentication
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"9876543210","password":"password123"}'

# Test wallet balance
curl -X GET http://localhost:3001/api/wallet/balance \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Wallet Management
- `GET /api/wallet/balance` - Get wallet balance
- `POST /api/wallet/add-money` - Add money to wallet
- `POST /api/wallet/transfer` - Transfer money between users

### Banking Services
- `GET /api/bank/accounts` - Get bank accounts
- `POST /api/bank/accounts` - Add bank account
- `POST /api/bank/transfer` - Transfer to bank account

### UPI Services
- `POST /api/upi/create-vpa` - Create UPI VPA
- `POST /api/upi/send-money` - Send UPI payment

### Postpaid Services
- `GET /api/postpaid/credit-limit` - Get credit limit
- `POST /api/postpaid/credit-limit` - Create postpaid account
- `POST /api/postpaid/pay-bill` - Pay postpaid bill

### Payment Processing
- `POST /api/payments/mobile-recharge` - Mobile recharge
- `POST /api/payments/bill-payment` - Bill payment

### Notifications
- `GET /api/notifications/preferences` - Get notifications
- `POST /api/notifications/send` - Send notification
- `PUT /api/notifications/preferences` - Update notification status

## 🗄️ Database Schema

The application uses PostgreSQL with the following main entities:

- **Users** - User accounts with KYC status
- **Wallets** - Digital wallet balances and transactions
- **BankAccounts** - Linked bank accounts
- **UpiProfiles** - UPI VPA management
- **PostpaidAccounts** - Credit limit and usage tracking
- **Transactions** - Complete transaction history
- **Notifications** - User notification system

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation with Zod schemas
- SQL injection prevention
- CORS configuration
- Rate limiting ready
- Secure API endpoints

## 🚀 Deployment

### Production Setup
1. Set up PostgreSQL database
2. Configure environment variables
3. Run database migrations
4. Deploy to Vercel/Netlify/AWS

### Environment Variables
```env
DATABASE_URL="postgresql://..."
JWT_SECRET="your-secret-key"
RAZORPAY_KEY_ID="your-razorpay-key"
RAZORPAY_KEY_SECRET="your-razorpay-secret"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes and demonstrates modern full-stack development practices for financial applications.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the `BACKEND_SETUP.md` for detailed setup instructions
- Review the API documentation in the codebase
