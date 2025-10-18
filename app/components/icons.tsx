import type * as React from "react"

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string }

function SvgBase({ title, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}


export function MobileIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <circle cx="12" cy="18.5" r="0.75" />
      <path d="M9 5.5h6" />
    </SvgBase>
  )
}

export function DthIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M3.5 13a8.5 8.5 0 1 1 17 0" />
      <path d="M3.5 13h17" />
      <path d="M12 13v4" />
      <path d="M9.5 17h5" />
    </SvgBase>
  )
}

export function ElectricityIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M13 2.5 6 13h5l-1 8 7-10h-5l1-8Z" />
    </SvgBase>
  )
}

export function BroadbandIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M7 15a5 5 0 0 1 10 0" />
      <path d="M10 15a2 2 0 0 1 4 0" />
      <path d="M12 21v-3" />
    </SvgBase>
  )
}

export function GasIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M12 3c-2.5 2.4-4 4.8-4 7.2 0 2.6 1.8 4.8 4 4.8s4-2.2 4-4.8C16 7.8 14.5 5.4 12 3Z" />
      <path d="M8 18h8" />
      <path d="M9 21h6" />
    </SvgBase>
  )
}

export function CreditCardIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 14h4" />
    </SvgBase>
  )
}


export function MoviesIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 6 6 3.5" />
      <path d="M11 6 10 3.5" />
      <path d="M15 6 14 3.5" />
      <path d="M19 6 18 3.5" />
    </SvgBase>
  )
}

export function FlightsIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M2 13l9-2 3-6 2 1-2 5 7 2-1.5 2-6-1-3 4-2-1 2-4-6 .5L2 13Z" />
    </SvgBase>
  )
}

export function TrainsIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <rect x="6" y="4" width="12" height="11" rx="3" />
      <path d="M6 12h12" />
      <circle cx="9" cy="15.5" r="1" />
      <circle cx="15" cy="15.5" r="1" />
      <path d="M8 20l2-2m6 2-2-2" />
    </SvgBase>
  )
}

export function BusIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <rect x="5" y="4" width="14" height="10" rx="2" />
      <path d="M5 10h14" />
      <circle cx="8.5" cy="17.5" r="1" />
      <circle cx="15.5" cy="17.5" r="1" />
      <path d="M7 14h2m6 0h2" />
    </SvgBase>
  )
}


export function WalletIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M15 12h4v4h-4a2 2 0 0 1 0-4Z" />
      <path d="M3 9h12" />
    </SvgBase>
  )
}

export function BankIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M4 8 12 3l8 5" />
      <path d="M5 10h14" />
      <path d="M6 10v8m4-8v8m4-8v8m4-8v8" />
      <path d="M4 18h16" />
    </SvgBase>
  )
}

export function UpiIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M4 12h10a3 3 0 1 1 0 6H4Z" />
      <path d="M9 6v12" />
    </SvgBase>
  )
}

export function PostpaidIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <rect x="4" y="4" width="16" height="12" rx="2" />
      <path d="M4 9h16" />
      <circle cx="9" cy="15.5" r="0.8" />
      <circle cx="15" cy="15.5" r="0.8" />
    </SvgBase>
  )
}


export function FacebookIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1Z" />
    </SvgBase>
  )
}

export function TwitterIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M22 5.9c-.7.3-1.5.5-2.2.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1C18 4.5 17 4 15.9 4c-2.1 0-3.7 1.8-3.4 3.9-3-.1-5.7-1.7-7.4-4-.9 1.6-.5 3.6 1.1 4.6-.6 0-1.1-.2-1.6-.4 0 1.7 1.2 3.3 2.9 3.7-.5.1-1 .2-1.5.1.4 1.4 1.7 2.5 3.3 2.6-1.4 1.1-3.1 1.6-4.9 1.4 1.6 1 3.4 1.6 5.4 1.6 6.5 0 10.2-5.6 9.9-10.7.7-.5 1.4-1.2 1.9-2Z" />
    </SvgBase>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" />
    </SvgBase>
  )
}

export function YoutubeIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="7" width="18" height="10" rx="3" />
      <path d="M11 10v4l4-2-4-2Z" />
    </SvgBase>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7.5h.01M11 17v-4.5a2.5 2.5 0 1 1 5 0V17" />
    </SvgBase>
  )
}


export function HomeIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M3 10.5 12 4l9 6.5" />
      <path d="M5 10v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
      <path d="M10 20v-6h4v6" />
    </SvgBase>
  )
}

export function QrScanIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M4 10V6a2 2 0 0 1 2-2h4" />
      <path d="M20 10V6a2 2 0 0 0-2-2h-4" />
      <path d="M4 14v4a2 2 0 0 0 2 2h4" />
      <path d="M20 14v4a2 2 0 0 1-2 2h-4" />
      <path d="M12 8h.01M16 12h.01M12 16h.01M8 12h.01" />
    </SvgBase>
  )
}

export function TagIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <path d="M20 10.5 13.5 4H6v7.5L12.5 18a2 2 0 0 0 2.8 0l4.7-4.7a2 2 0 0 0 0-2.8Z" />
      <circle cx="8.5" cy="8.5" r="1" />
    </SvgBase>
  )
}

export function UserIcon(props: IconProps) {
  return (
    <SvgBase {...props}>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </SvgBase>
  )
}
