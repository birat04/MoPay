import { SiteHeader } from "../components/site-header"
import { SiteFooter } from "../components/site-footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function UPIPage() {
  return (
    <main>
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary">Mopay UPI</h1>
          <p className="mt-2 text-lg text-foreground/70">Instant payments, anytime, anywhere</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Send Money</CardTitle>
              <CardDescription>Transfer to any UPI ID instantly</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Send Now</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Request Money</CardTitle>
              <CardDescription>Get paid instantly</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Request</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scan & Pay</CardTitle>
              <CardDescription>Pay by scanning QR codes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary">Scan</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
