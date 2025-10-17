"use client"

import Link from "next/link"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "./icons"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-secondary" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className="text-sm text-foreground/80 hover:text-primary" href="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-sm text-foreground/80 hover:text-primary" href="#">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="text-sm text-foreground/80 hover:text-primary" href="#">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Products</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className="text-sm text-foreground/80 hover:text-primary" href="#wallet">
                  Wallet
                </Link>
              </li>
              <li>
                <Link className="text-sm text-foreground/80 hover:text-primary" href="#bank">
                  Payments Bank
                </Link>
              </li>
              <li>
                <Link className="text-sm text-foreground/80 hover:text-primary" href="#upi">
                  UPI
                </Link>
              </li>
              <li>
                <Link className="text-sm text-foreground/80 hover:text-primary" href="#postpaid">
                  Postpaid
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Help</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className="text-sm text-foreground/80 hover:text-primary" href="#">
                  Support
                </Link>
              </li>
              <li>
                <Link className="text-sm text-foreground/80 hover:text-primary" href="#">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="text-sm text-foreground/80 hover:text-primary" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Follow us</h3>
            <div className="mt-3 flex items-center gap-3">
              <Link
                href="#"
                aria-label="X / Twitter"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-background hover:bg-accent"
              >
                <TwitterIcon
                  className="h-4 w-4 text-foreground group-hover:text-accent-foreground"
                  aria-hidden="true"
                />
                <span className="sr-only">X</span>
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-background hover:bg-accent"
              >
                <FacebookIcon
                  className="h-4 w-4 text-foreground group-hover:text-accent-foreground"
                  aria-hidden="true"
                />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-background hover:bg-accent"
              >
                <InstagramIcon
                  className="h-4 w-4 text-foreground group-hover:text-accent-foreground"
                  aria-hidden="true"
                />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-background hover:bg-accent"
              >
                <YoutubeIcon
                  className="h-4 w-4 text-foreground group-hover:text-accent-foreground"
                  aria-hidden="true"
                />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-background hover:bg-accent"
              >
                <LinkedinIcon
                  className="h-4 w-4 text-foreground group-hover:text-accent-foreground"
                  aria-hidden="true"
                />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs text-foreground/70">
          © {new Date().getFullYear()} Paytm Frontend Clone. For demonstration only.
        </div>
      </div>
    </footer>
  )
}
