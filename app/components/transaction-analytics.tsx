"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HistoryIcon, SendIcon, RequestIcon } from "@/components/icons"

interface AnalyticsData {
  totalSpent: number
  totalReceived: number
  transactionCount: number
  monthlyData: { month: string; spent: number; received: number }[]
}

interface TransactionAnalyticsProps {
  data?: AnalyticsData
}

export function TransactionAnalytics({
  data = {
    totalSpent: 2450.75,
    totalReceived: 5200.0,
    transactionCount: 43,
    monthlyData: [
      { month: "Jan", spent: 450, received: 1200 },
      { month: "Feb", spent: 520, received: 1450 },
      { month: "Mar", spent: 680, received: 1350 },
      { month: "Apr", spent: 800, received: 1200 },
    ],
  },
}: TransactionAnalyticsProps) {
  const netBalance = data.totalReceived - data.totalSpent

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium">
              <SendIcon className="h-4 w-4 text-red-500" />
              Total Spent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${data.totalSpent.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium">
              <RequestIcon className="h-4 w-4 text-green-500" />
              Total Received
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${data.totalReceived.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Net Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-bold ${netBalance >= 0 ? "text-green-600" : "text-red-600"}`}>
              ${netBalance.toFixed(2)}
            </p>
            <p className="text-xs text-muted-foreground">{data.transactionCount} transactions</p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HistoryIcon className="h-5 w-5" />
            Monthly Summary
          </CardTitle>
          <CardDescription>Spending and receiving trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.monthlyData.map((item, idx) => {
              const total = item.spent + item.received
              const spentPercent = (item.spent / total) * 100
              const receivedPercent = (item.received / total) * 100

              return (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.month}</span>
                    <span className="text-sm text-muted-foreground">
                      ${item.spent} / ${item.received}
                    </span>
                  </div>
                  <div className="flex gap-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-2 bg-red-500" style={{ width: `${spentPercent}%` }} />
                    <div className="h-2 bg-green-500" style={{ width: `${receivedPercent}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Spending by Category</CardTitle>
          <CardDescription>Your expenses breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { category: "Food & Dining", amount: 450, percentage: 18, color: "bg-orange-500" },
              { category: "Shopping", amount: 680, percentage: 28, color: "bg-blue-500" },
              { category: "Bills & Utilities", amount: 520, percentage: 21, color: "bg-purple-500" },
              { category: "Entertainment", amount: 380, percentage: 15, color: "bg-pink-500" },
              { category: "Others", amount: 420, percentage: 18, color: "bg-gray-500" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${item.color}`} />
                    <span className="text-sm font-medium">{item.category}</span>
                  </div>
                  <span className="text-sm font-bold">${item.amount}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
