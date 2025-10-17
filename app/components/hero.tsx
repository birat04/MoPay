import { QuickActionsPanel } from "./quick-actions-panel"
import {
  MobileIcon,
  DthIcon,
  ElectricityIcon,
  BroadbandIcon,
  GasIcon,
  CreditCardIcon,
  MoviesIcon,
  FlightsIcon,
  TrainsIcon,
  BusIcon,
} from "./icons"

export function Hero() {
  return (
    <section className="relative w-full bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">Recharge & Pay Bills on Paytm</h1>
          <p className="mt-2 max-w-prose text-sm/6 opacity-90 md:text-base">
            Fast, secure payments for all your everyday needs.
          </p>

          <div className="mt-6">
            <QuickActionsPanel
              title="Recharge & Pay Bills"
              items={[
                { label: "Mobile Recharge", href: "#", icon: <MobileIcon className="h-6 w-6" /> },
                { label: "DTH", href: "#", icon: <DthIcon className="h-6 w-6" /> },
                { label: "Electricity", href: "#", icon: <ElectricityIcon className="h-6 w-6" /> },
                { label: "Broadband", href: "#", icon: <BroadbandIcon className="h-6 w-6" /> },
                { label: "Gas", href: "#", icon: <GasIcon className="h-6 w-6" /> },
                { label: "Credit Card", href: "#", icon: <CreditCardIcon className="h-6 w-6" /> },
              ]}
            />
          </div>
        </div>

        <div className="md:pt-8">
          <QuickActionsPanel
            title="Book & Buy"
            items={[
              { label: "Movies", href: "#", icon: <MoviesIcon className="h-6 w-6" /> },
              { label: "Flights", href: "#", icon: <FlightsIcon className="h-6 w-6" /> },
              { label: "Trains", href: "#", icon: <TrainsIcon className="h-6 w-6" /> },
              { label: "Buses", href: "#", icon: <BusIcon className="h-6 w-6" /> },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
