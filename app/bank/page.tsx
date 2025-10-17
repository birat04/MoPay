import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function BankPage() {
  return (
    <main>
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary">Paytm Payments Bank</h1>
          <p className="mt-2 text-lg text-foreground/70">Banking services designed for you</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Savings Account</CardTitle>
              <CardDescription>Zero balance, zero fees</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Open Account</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>High Interest Rates</CardTitle>
              <CardDescription>Earn up to 7% on deposits</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Invest Now</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loans & Credit</CardTitle>
              <CardDescription>Quick approval, instant disbursement</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Apply Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
