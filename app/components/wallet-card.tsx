"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SendIcon, RequestIcon } from "@/components/icons"

interface WalletCardProps {
  balance: number
  currency?: string
  lastUpdated?: string
}

export function WalletCard({ balance, currency = "$", lastUpdated }: WalletCardProps) {
  return (
    <Card className="border-0 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground shadow-lg">
      <CardContent className="pt-8">
        <div className="space-y-6">
          <div>
            <p className="text-sm opacity-90">Wallet Balance</p>
            <p className="text-5xl font-bold">
              {currency}
              {balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
            {lastUpdated && <p className="mt-2 text-xs opacity-75">Updated: {lastUpdated}</p>}
          </div>

          <div className="flex gap-3">
            <Button variant="secondary" size="sm" className="flex-1 gap-2">
              <SendIcon className="h-4 w-4" />
              Add Money
            </Button>
            <Button variant="secondary" size="sm" className="flex-1 gap-2">
              <RequestIcon className="h-4 w-4" />
              Withdraw
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
