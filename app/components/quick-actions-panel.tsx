"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { Card } from "./ui/card"
import { cn } from "./lib/utils"

type ActionItem = {
  label: string
  href: string
  icon: ReactNode
}

export function QuickActionsPanel({
  title,
  items,
  className,
}: {
  title: string
  items: ActionItem[]
  className?: string
}) {
  return (
    <Card className={cn("rounded-xl bg-secondary p-4 text-foreground shadow-sm md:p-5", className)}>
      <h2 className="text-pretty text-lg font-semibold md:text-xl">{title}</h2>

      <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="group flex items-center gap-3 rounded-lg bg-background p-3 transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-foreground group-hover:text-primary">
                {item.icon}
              </span>
              <span className="text-sm font-medium text-foreground group-hover:text-primary">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
