import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function MoneyPage() {
  return (
    <main>
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary">Mopay Money</h1>
          <p className="mt-2 text-lg text-foreground/70">Invest smart, grow wealth</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Mutual Funds</CardTitle>
              <CardDescription>Invest in top-rated funds</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Explore Funds</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stocks & ETFs</CardTitle>
              <CardDescription>Trade with zero brokerage</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Start Trading</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Insurance</CardTitle>
              <CardDescription>Protect your future</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Get Quote</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}

