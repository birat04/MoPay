"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "./lib/utils"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Mopay Home">
          {/* Simple text lockup to avoid trademarked logo asset */}
          <span className={cn("text-xl font-semibold tracking-tight text-primary")}>Mopay</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/wallet" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                Mopay Wallet
              </Link>
            </li>
            <li>
              <Link href="/bank" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                Mopay Bank
              </Link>
            </li>
            <li>
              <Link href="/money" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                Mopay Money
              </Link>
            </li>
            <li>
              <Link href="/upi" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                UPI
              </Link>
            </li>
            <li>
              <Link href="/postpaid" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                Postpaid
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="secondary" 
            className="hidden md:inline-flex"
            asChild
          >
            <Link href="/dashboard">Sign In</Link>
          </Button>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              // You can replace this with actual download logic or link
              window.open("https://example.com/download", "_blank")
            }}
          >
            Download App
          </Button>
        </div>
      </div>
    </header>
  )
}
