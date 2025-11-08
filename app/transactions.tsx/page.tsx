import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TransactionAnalytics } from "@/components/transaction-analytics"
import { DetailedTransactionList } from "@/components/detailed-transaction-list"

export default function TransactionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Transactions & Analytics</h1>
          <p className="text-muted-foreground">View your spending patterns and transaction history</p>
        </div>

        {/* Analytics Section */}
        <div className="mb-8">
          <TransactionAnalytics />
        </div>

        {/* Detailed Transaction List */}
        <div>
          <DetailedTransactionList />
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
