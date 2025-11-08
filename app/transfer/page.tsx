import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MoneyTransfer } from "@/components/money-transfer"
import { HistoryIcon } from "@/components/icons"

export default function TransferPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Send Money</h1>
          <p className="text-muted-foreground">Transfer funds instantly to any account</p>
        </div>

        {/* Transfer Form */}
        <div className="mb-8">
          <MoneyTransfer />
        </div>

        {/* Recent Transfers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HistoryIcon className="h-5 w-5" />
              Recent Transfers
            </CardTitle>
            <CardDescription>Your last 5 transfers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "John Doe", amount: "$50", date: "Today" },
                { name: "Sarah Smith", amount: "$150", date: "Yesterday" },
                { name: "Mike Johnson", amount: "$75", date: "2 days ago" },
              ].map((transfer, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="font-medium">{transfer.name}</p>
                    <p className="text-xs text-muted-foreground">{transfer.date}</p>
                  </div>
                  <p className="font-bold text-green-600">{transfer.amount}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <SiteFooter />
    </main>
  )
}
