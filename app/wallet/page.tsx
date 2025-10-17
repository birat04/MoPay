import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function WalletPage() {
  return (
    <main>
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary">Mopay Wallet</h1>
          <p className="mt-2 text-lg text-foreground/70">Fast, secure, and convenient digital payments</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Instant Transfers</CardTitle>
              <CardDescription>Send money to any bank account instantly</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Get Started</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cashback Rewards</CardTitle>
              <CardDescription>Earn cashback on every transaction</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Learn More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bill Payments</CardTitle>
              <CardDescription>Pay all your bills in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Pay Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
