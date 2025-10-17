"use client"

import * as React from "react"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light")

  React.useEffect(() => {
    const stored = (window.localStorage.getItem("theme") as "light" | "dark") || "light"
    setTheme(stored)
    document.documentElement.classList.toggle("dark", stored === "dark")
  }, [])

  function toggle() {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    window.localStorage.setItem("theme", next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center rounded-md border bg-secondary px-2.5 py-1.5 text-xs font-medium text-secondary-foreground transition hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-pressed={theme === "dark"}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  )
}
