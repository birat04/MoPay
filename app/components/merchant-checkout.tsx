"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  StripeIcon,
  PaypalIcon,
  GooglePayIcon,
  PhonePeIcon,
  RazorpayIcon,
  UpiIcon,
  ShieldIcon,
} from "@/components/icons"

const PAYMENT_GATEWAYS = [
  { id: "stripe", name: "Stripe", icon: StripeIcon },
  { id: "paypal", name: "PayPal", icon: PaypalIcon },
  { id: "googlepay", name: "Google Pay", icon: GooglePayIcon },
  { id: "phonepe", name: "PhonePe", icon: PhonePeIcon },
  { id: "razorpay", name: "Razorpay", icon: RazorpayIcon },
  { id: "upi", name: "UPI", icon: UpiIcon },
]

interface MerchantCheckoutProps {
  orderId?: string
  amount?: number
  description?: string
  onPaymentComplete?: (result: { gateway: string; transactionId: string }) => void
}

export function MerchantCheckout({
  orderId = "ORD-" + Date.now(),
  amount = 99.99,
  description = "Your Order",
  onPaymentComplete,
}: MerchantCheckoutProps) {
  const [selectedGateway, setSelectedGateway] = useState<string>("")
  const [processing, setProcessing] = useState(false)
  const [step, setStep] = useState<"select" | "confirm" | "processing" | "complete">("select")

  const handleSelectGateway = (gatewayId: string) => {
    setSelectedGateway(gatewayId)
    setStep("confirm")
  }

  const handlePayment = async () => {
    setProcessing(true)
    setStep("processing")

    // Simulate payment processing
    setTimeout(() => {
      const transactionId = "TXN-" + Math.random().toString(36).substr(2, 9).toUpperCase()
      console.log("[v0] Payment processed:", {
        gateway: selectedGateway,
        orderId,
        amount,
        transactionId,
      })

      setStep("complete")
      onPaymentComplete?.({ gateway: selectedGateway, transactionId })
      setProcessing(false)
    }, 2000)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Checkout</CardTitle>
        <CardDescription>Order {orderId}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="rounded-lg bg-secondary p-4">
            <div className="mb-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">{description}</span>
                <span className="font-medium">${amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2 text-sm">
                <span className="font-medium">Tax (10%)</span>
                <span>${(amount * 0.1).toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between border-t border-border pt-2 text-lg font-bold">
              <span>Total</span>
              <span>${(amount * 1.1).toFixed(2)}</span>
            </div>
          </div>

          {/* Step: Select Gateway */}
          {step === "select" && (
            <div>
              <Label className="mb-3 block">Select Payment Method</Label>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {PAYMENT_GATEWAYS.map((gateway) => {
                  const IconComponent = gateway.icon
                  return (
                    <button
                      key={gateway.id}
                      onClick={() => handleSelectGateway(gateway.id)}
                      className="rounded-lg border-2 border-border p-4 text-center transition-all hover:border-primary hover:bg-primary/5"
                    >
                      <IconComponent className="mx-auto mb-2 h-6 w-6 text-primary" />
                      <p className="text-xs font-medium">{gateway.name}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step: Confirm */}
          {step === "confirm" && (
            <div className="space-y-4">
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
                <div className="flex gap-2">
                  <ShieldIcon className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-medium text-blue-900 dark:text-blue-100">Secure Payment</p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Your payment is encrypted and secure with{" "}
                      {PAYMENT_GATEWAYS.find((g) => g.id === selectedGateway)?.name}
                    </p>
                  </div>
                </div>
              </div>

              <Button onClick={handlePayment} disabled={processing} size="lg" className="w-full">
                {processing ? "Processing..." : "Complete Payment"}
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  setStep("select")
                  setSelectedGateway("")
                }}
                disabled={processing}
                className="w-full"
              >
                Back
              </Button>
            </div>
          )}

          {/* Step: Processing */}
          {step === "processing" && (
            <div className="space-y-4 py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-primary" />
              </div>
              <p className="font-medium">Processing your payment...</p>
              <p className="text-sm text-muted-foreground">Please do not refresh this page</p>
            </div>
          )}

          {/* Step: Complete */}
          {step === "complete" && (
            <div className="space-y-4 py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                <span className="text-2xl text-green-600 dark:text-green-400">✓</span>
              </div>
              <div>
                <p className="font-bold text-green-600 dark:text-green-400">Payment Successful!</p>
                <p className="text-sm text-muted-foreground">
                  Transaction ID: {selectedGateway.toUpperCase()}-{Math.random().toString(36).substr(2, 8)}
                </p>
              </div>
              <Button onClick={() => (window.location.href = "/dashboard")} className="w-full">
                Go to Dashboard
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
