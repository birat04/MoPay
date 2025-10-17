"use client"

import { Card, CardContent } from "./ui/card"

export type Offer = {
  id: string
  title: string
  subtitle?: string
}

export function OffersCarousel({ items }: { items: Offer[] }) {
  return (
    <section aria-label="Offers" className="mx-auto w-full max-w-7xl px-4 md:px-6">
      <div className="mb-3 flex items-end justify-between">
        <h2 className="text-pretty text-xl font-semibold text-foreground md:text-2xl">Offers for you</h2>
      </div>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
        {items.map((offer) => (
          <Card
            key={offer.id}
            className="min-w-[260px] snap-start rounded-xl border bg-card text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <CardContent className="p-4">
              {offer.subtitle ? <div className="text-sm text-muted-foreground">{offer.subtitle}</div> : null}
              <div className="mt-1 text-base font-medium">{offer.title}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
