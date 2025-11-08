"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UpiIcon, BankIcon, CreditCardIcon } from "@/components/icons"

export function MoneyTransfer() {
  const [transferType, setTransferType] = useState("upi")
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")

  const handleTransfer = () => {
    console.log("[v0] Transfer initiated:", { transferType, amount, recipient })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Money</CardTitle>
        <CardDescription>Transfer funds across payment methods</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/* Transfer Type Selection */}
          <div>
            <Label className="mb-3 block">Transfer Method</Label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "upi", name: "UPI", icon: UpiIcon },
                { id: "bank", name: "Bank Transfer", icon: BankIcon },
                { id: "card", name: "Card", icon: CreditCardIcon },
              ].map((method) => {
                const Icon = method.icon
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setTransferType(method.id)}
                    className={`rounded-lg border-2 p-3 text-center transition-all ${
                      transferType === method.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Icon className="mx-auto mb-2 h-5 w-5" />
                    <p className="text-xs font-medium">{method.name}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Recipient Input */}
          <div>
            <Label htmlFor="recipient">Recipient {transferType === "upi" ? "UPI ID" : "Account"}</Label>
            <Input
              id="recipient"
              placeholder={transferType === "upi" ? "username@bank" : "Account number"}
              value={recipient}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRecipient(e.target.value)}
              className="mt-2"
            />
          </div>

          {/* Amount Input */}
          <div>
            <Label htmlFor="amount">Amount</Label>
            <div className="mt-2 flex">
              <span className="flex items-center rounded-l-lg border border-r-0 border-border bg-secondary px-3 font-medium">
                $
              </span>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
                className="rounded-l-none"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Input id="notes" placeholder="Add a note for recipient" className="mt-2" />
          </div>

          {/* Summary */}
          {amount && (
            <div className="rounded-lg bg-secondary p-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-medium">${Number.parseFloat(amount).toFixed(2)}</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-border pt-2 text-sm">
                <span className="text-muted-foreground">Total</span>
                <span className="font-bold">${(Number.parseFloat(amount) * 1.02).toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button onClick={handleTransfer} disabled={!recipient || !amount} className="w-full" size="lg">
            Send Now
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
