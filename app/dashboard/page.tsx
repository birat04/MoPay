import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WalletCard } from "@/components/wallet-card"
import { PaymentMethods } from "@/components/payment-methods"
import { MoneyTransfer } from "@/components/money-transfer"
import { UnifiedDashboard } from "@/components/unified-dashboard"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Manage all your payment methods and transactions</p>
        </div>

        {/* Wallet Overview */}
        <div className="mb-8">
          <WalletCard balance={5234.5} currency="$" lastUpdated="Today at 2:30 PM" />
        </div>

        {/* Main Dashboard Content */}
        <div className="mb-8">
          <UnifiedDashboard />
        </div>

        {/* Money Transfer */}
        <div className="mb-8">
          <MoneyTransfer />
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <PaymentMethods layout="grid" />
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
