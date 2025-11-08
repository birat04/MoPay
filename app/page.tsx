import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FinancialServices } from "@/components/financial-services"
import { SiteFooter } from "@/components/site-footer"
import { OffersCarousel, type Offer } from "@/components/offers-carousel"
import { TransactionList, type TransactionItem } from "@/components/transaction-list"
import { BottomNav } from "@/components/bottom-nav"
import { UnifiedDashboard } from "@/components/unified-dashboard"
import { PaymentMethods } from "@/components/payment-methods"

export default function Page() {
  const offers: Offer[] = [
    { id: "o1", title: "Flat ₹100 cashback on DTH", subtitle: "Use code DTH100" },
    { id: "o2", title: "5% off on Electricity bills", subtitle: "AutoPay bonus" },
    { id: "o3", title: "₹50 off on Gas booking", subtitle: "Limited time" },
  ]

  const tx: TransactionItem[] = [
    {
      id: "t1",
      title: "Mobile Recharge • +91-98xxxxxx",
      date: "Oct 12, 2025 • 10:32 AM",
      amount: "₹399",
      status: "Success",
    },
    {
      id: "t2",
      title: "Electricity Bill • BESCOM",
      date: "Oct 10, 2025 • 6:05 PM",
      amount: "₹1,250",
      status: "Pending",
    },
    { id: "t3", title: "Movie Tickets • PVR", date: "Oct 09, 2025 • 8:20 PM", amount: "₹780", status: "Failed" },
  ]

  return (
    <main>
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <section className="mb-12">
          <h1 className="mb-6 text-2xl font-bold text-foreground">Payment Gateway Hub</h1>
          <UnifiedDashboard />
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-xl font-semibold text-foreground">All Payment Methods</h2>
          <PaymentMethods layout="grid" />
        </section>
      </div>

      <Hero />
      <OffersCarousel items={offers} />
      <TransactionList items={tx} />
      <FinancialServices />
      <SiteFooter />
      <BottomNav />
    </main>
  )
}
