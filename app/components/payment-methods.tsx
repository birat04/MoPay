"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  StripeIcon,
  PaypalIcon,
  GooglePayIcon,
  ApplePayIcon,
  PhonePeIcon,
  RazorpayIcon,
  SquareIcon,
  NetbanksIcon,
  CryptoPayIcon,
  WalletIcon,
  CreditCardIcon,
  UpiIcon,
} from "@/components/icons"
import { cn } from "./lib/utils"

const PAYMENT_METHODS = [
  { id: "upi", name: "UPI", icon: UpiIcon, color: "#5F9EA0" },
  { id: "wallet", name: "Digital Wallet", icon: WalletIcon, color: "#FF6B9D" },
  { id: "card", name: "Credit/Debit Card", icon: CreditCardIcon, color: "#FFA500" },
  { id: "netbanking", name: "Net Banking", icon: NetbanksIcon, color: "#4169E1" },
  { id: "stripe", name: "Stripe", icon: StripeIcon, color: "#635BFF" },
  { id: "paypal", name: "PayPal", icon: PaypalIcon, color: "#00457C" },
  { id: "googlepay", name: "Google Pay", icon: GooglePayIcon, color: "#3C4043" },
  { id: "applepay", name: "Apple Pay", icon: ApplePayIcon, color: "#000000" },
  { id: "phonepe", name: "PhonePe", icon: PhonePeIcon, color: "#5267F5" },
  { id: "razorpay", name: "Razorpay", icon: RazorpayIcon, color: "#02042B" },
  { id: "square", name: "Square", icon: SquareIcon, color: "#3D3D3D" },
  { id: "crypto", name: "Cryptocurrency", icon: CryptoPayIcon, color: "#F7931A" },
]

interface PaymentMethodsProps {
  onSelect?: (methodId: string) => void
  layout?: "grid" | "list"
}

export function PaymentMethods({ onSelect, layout = "grid" }: PaymentMethodsProps) {
  const [selected, setSelected] = useState<string>("")

  const handleSelect = (methodId: string) => {
    setSelected(methodId)
    onSelect?.(methodId)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Choose your preferred payment method</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            layout === "grid" ? "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4" : "flex flex-col gap-3",
          )}
        >
          {PAYMENT_METHODS.map((method) => {
            const IconComponent = method.icon
            const isSelected = selected === method.id

            return (
              <button
                key={method.id}
                onClick={() => handleSelect(method.id)}
                className={cn(
                  "rounded-lg border-2 p-4 text-center transition-all",
                  isSelected ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50",
                )}
              >
                <div className="mb-2 flex justify-center">
                  <div className="rounded-lg bg-secondary p-3">
                    <IconComponent className="h-6 w-6 text-primary" style={{ color: method.color }} />
                  </div>
                </div>
                <p className="text-sm font-medium">{method.name}</p>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
