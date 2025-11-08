"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HistoryIcon } from "@/components/icons"

interface Transaction {
  id: string
  title: string
  description: string
  amount: number
  type: "sent" | "received"
  status: "success" | "pending" | "failed"
  date: string
  gateway: string
  transactionId: string
}

const SAMPLE_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    title: "Coffee Shop",
    description: "Starbucks Purchase",
    amount: 5.99,
    type: "sent",
    status: "success",
    date: "2025-10-12 10:32 AM",
    gateway: "UPI",
    transactionId: "TXN-001234",
  },
  {
    id: "2",
    title: "Salary Deposit",
    description: "Monthly Salary",
    amount: 2500,
    type: "received",
    status: "success",
    date: "2025-10-10 06:05 PM",
    gateway: "Net Banking",
    transactionId: "TXN-001233",
  },
  {
    id: "3",
    title: "Uber Ride",
    description: "Trip to Downtown",
    amount: 12.5,
    type: "sent",
    status: "success",
    date: "2025-10-09 08:20 PM",
    gateway: "Google Pay",
    transactionId: "TXN-001232",
  },
  {
    id: "4",
    title: "Freelance Payment",
    description: "Project Completion",
    amount: 350,
    type: "received",
    status: "success",
    date: "2025-10-08 03:15 PM",
    gateway: "Stripe",
    transactionId: "TXN-001231",
  },
  {
    id: "5",
    title: "Electricity Bill",
    description: "Monthly Payment",
    amount: 120.75,
    type: "sent",
    status: "pending",
    date: "2025-10-07 11:00 AM",
    gateway: "Razorpay",
    transactionId: "TXN-001230",
  },
]

interface DetailedTransactionListProps {
  transactions?: Transaction[]
}

export function DetailedTransactionList({ transactions = SAMPLE_TRANSACTIONS }: DetailedTransactionListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState<"all" | "sent" | "received">("all")
  const [filterStatus, setFilterStatus] = useState<"all" | "success" | "pending" | "failed">("all")

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
      tx.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || tx.type === filterType
    const matchesStatus = filterStatus === "all" || tx.status === filterStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const statusColors = {
    success: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400",
    pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400",
    failed: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400",
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HistoryIcon className="h-5 w-5" />
          Transaction History
        </CardTitle>
        <CardDescription>Complete record of all your transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Filters */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
            <Select value={filterType} onValueChange={(v: "all" | "sent" | "received") => setFilterType(v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="received">Received</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={(v: "all" | "success" | "pending" | "failed") => setFilterStatus(v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Transaction List */}
          <div className="space-y-2">
            {filteredTransactions.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground py-8">No transactions found</p>
            ) : (
              filteredTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between rounded-lg border p-3 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm">{tx.title}</p>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[tx.status]}`}>
                        {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{tx.description}</span>
                      <span>•</span>
                      <span>{tx.gateway}</span>
                      <span>•</span>
                      <span>{tx.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold text-sm ${tx.type === "sent" ? "text-red-600" : "text-green-600"}`}>
                      {tx.type === "sent" ? "-" : "+"}${tx.amount.toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground">{tx.transactionId}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
