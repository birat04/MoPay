import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BankIcon, PostpaidIcon, UpiIcon, WalletIcon } from "./icons"

const services = [
  {
    id: "wallet",
    title: "Paytm Wallet",
    desc: "Add money and pay anywhere with your Paytm Wallet.",
    Icon: WalletIcon,
  },
  {
    id: "bank",
    title: "Paytm Payments Bank",
    desc: "Zero balance savings account with seamless payments.",
    Icon: BankIcon,
  },
  {
    id: "upi",
    title: "UPI on Paytm",
    desc: "Instant money transfer with secure UPI payments.",
    Icon: UpiIcon,
  },
  {
    id: "postpaid",
    title: "Paytm Postpaid",
    desc: "Buy now, pay later with flexible credit.",
    Icon: PostpaidIcon,
  },
]

export function FinancialServices() {
  return (
    <section id="wallet" className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 className="text-balance text-2xl font-semibold md:text-3xl">Financial Services by Paytm</h2>
        <p className="mt-2 max-w-prose text-sm text-foreground/80 md:text-base">
          Explore Wallet, Banking, UPI, and Postpaid services in one app.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card
              key={s.id}
              className="group rounded-xl border bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-base">{s.title}</CardTitle>
                <s.Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
