"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SendIcon, RequestIcon, ScanQrIcon, HistoryIcon, BillsIcon, ShieldIcon } from "@/components/icons"

export function UnifiedDashboard() {
  return (
    <div className="space-y-6">
      {/* Balance Card */}
      <Card className="border-primary bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <CardContent className="pt-6">
          <p className="text-sm opacity-90">Total Balance</p>
          <p className="text-4xl font-bold">$5,234.50</p>
          <p className="mt-2 text-xs opacity-75">Last updated: Today at 2:30 PM</p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
              <SendIcon className="h-6 w-6" />
              <span className="text-xs">Send Money</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
              <RequestIcon className="h-6 w-6" />
              <span className="text-xs">Request Money</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
              <ScanQrIcon className="h-6 w-6" />
              <span className="text-xs">Scan QR</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
              <BillsIcon className="h-6 w-6" />
              <span className="text-xs">Pay Bills</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Connected Services */}
      <Card>
        <CardHeader>
          <CardTitle>Connected Services</CardTitle>
          <CardDescription>All your payment gateways in one place</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-medium">Primary Account</p>
                <p className="text-sm text-muted-foreground">UPI • Active</p>
              </div>
              <div className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Connected</div>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-medium">Backup Payment</p>
                <p className="text-sm text-muted-foreground">Stripe • Ready</p>
              </div>
              <div className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Connected</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HistoryIcon className="h-5 w-5" />
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Coffee Shop", amount: "-$5.99", method: "UPI" },
              { name: "Salary Deposit", amount: "+$2,500", method: "Net Banking" },
              { name: "Uber", amount: "-$12.50", method: "Google Pay" },
            ].map((tx, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{tx.name}</p>
                  <p className="text-xs text-muted-foreground">{tx.method}</p>
                </div>
                <p className={`font-medium ${tx.amount.startsWith("+") ? "text-green-600" : "text-foreground"}`}>
                  {tx.amount}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950">
        <CardContent className="flex gap-3 pt-6">
          <ShieldIcon className="h-5 w-5 flex-shrink-0 text-yellow-700 dark:text-yellow-400" />
          <div>
            <p className="font-medium text-yellow-900 dark:text-yellow-100">Secure Payments</p>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              All transactions are encrypted with industry-standard security
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
