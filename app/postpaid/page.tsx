import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function PostpaidPage() {
  return (
    <main>
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary">Paytm Postpaid</h1>
          <p className="mt-2 text-lg text-foreground/70">Buy now, pay later with zero interest</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Flexible Payments</CardTitle>
              <CardDescription>Pay in 3, 6, or 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Apply Now</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Zero Interest EMI</CardTitle>
              <CardDescription>No hidden charges</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Check Eligibility</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instant Approval</CardTitle>
              <CardDescription>Get approved in seconds</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Get Started</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
