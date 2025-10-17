# Paytm - Digital Payment Platform

A modern, responsive web application inspired by Paytm's digital payment ecosystem. Built with Next.js 15, React 19, and TypeScript, featuring a comprehensive suite of financial services and payment solutions.

## Features

### 🏦 Core Services
- **Paytm Wallet** - Digital wallet management and transactions
- **Paytm Payments Bank** - Banking services and account management  
- **Paytm Money** - Investment and wealth management platform
- **UPI Payments** - Unified Payments Interface integration
- **Postpaid Services** - Credit and bill payment solutions

### 💳 Payment Features
- Mobile recharge and bill payments
- Electricity, gas, and DTH bill payments
- Movie and travel ticket booking
- Credit card bill payments
- Transaction history and management

### 🎨 UI/UX Features
- Dark/Light theme toggle
- Responsive design for mobile and desktop
- Modern component library with Radix UI
- Tailwind CSS for styling
- Smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: Radix UI primitives
- **Fonts**: Geist Sans & Geist Mono
- **State Management**: React hooks
- **Package Manager**: Bun (recommended)

## Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Package manager (npm, yarn, pnpm, or bun)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/birat04/PayTM
cd PayTM
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:
```bash
bun dev
# or
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser.

## Project Structure

```
app/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (Button, Card, Badge)
│   ├── site-header.tsx  # Navigation header
│   ├── hero.tsx         # Landing page hero section
│   ├── financial-services.tsx
│   ├── offers-carousel.tsx
│   ├── transaction-list.tsx
│   └── theme-toggle.tsx
├── wallet/              # Paytm Wallet pages
├── bank/                # Paytm Payments Bank pages
├── money/               # Paytm Money pages
├── upi/                 # UPI payment pages
├── postpaid/            # Postpaid service pages
├── layout.tsx           # Root layout
├── page.tsx            # Homepage
└── globals.css         # Global styles
```

## Available Scripts

- `bun dev` - Start development server on port 3001
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is for educational purposes and is inspired by Paytm's design and functionality.
