import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MerchantCheckout } from "@/components/merchant-checkout"

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Payment</h1>
          <p className="text-muted-foreground">Complete your purchase with any payment method</p>
        </div>

        <MerchantCheckout
          amount={99.99}
          description="Premium Subscription - Monthly"
          onPaymentComplete={(result: { gateway: string; transactionId: string }) => {
            console.log("[v0] Payment complete:", result)
          }}
        />
      </div>

      <SiteFooter />
    </main>
  )
}
