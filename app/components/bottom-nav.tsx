"use client"

import Link from "next/link"
import { cn } from "./lib/utils"
import { HomeIcon, WalletIcon, QrScanIcon, TagIcon, UserIcon } from "./icons"

export function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 md:hidden"
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="mx-auto max-w-5xl">
        <ul className="relative grid grid-cols-5 items-end justify-between px-6 py-2 text-xs text-muted-foreground">
          <li className="flex flex-col items-center">
            <Link
              href="#"
              className="flex flex-col items-center rounded-md px-2 py-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Home"
              aria-current="page"
            >
              <HomeIcon className="h-6 w-6" />
              <span className="mt-1">Home</span>
            </Link>
          </li>

          <li className="flex flex-col items-center">
            <Link
              href="#wallet"
              className="flex flex-col items-center rounded-md px-2 py-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Wallet"
            >
              <WalletIcon className="h-6 w-6" />
              <span className="mt-1">Wallet</span>
            </Link>
          </li>

          <li className="col-span-1 flex justify-center">
            <Link
              href="#"
              aria-label="Scan"
              className={cn(
                "relative -mt-7 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg",
                "hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30",
              )}
            >
              <QrScanIcon className="h-7 w-7" />
            </Link>
          </li>

          <li className="flex flex-col items-center">
            <Link
              href="#"
              className="flex flex-col items-center rounded-md px-2 py-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Offers"
            >
              <TagIcon className="h-6 w-6" />
              <span className="mt-1">Offers</span>
            </Link>
          </li>

          <li className="flex flex-col items-center">
            <Link
              href="#"
              className="flex flex-col items-center rounded-md px-2 py-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Profile"
            >
              <UserIcon className="h-6 w-6" />
              <span className="mt-1">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
