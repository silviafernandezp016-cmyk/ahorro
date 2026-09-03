"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, TrendingDown, X } from "lucide-react"

const navLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Categorías", href: "#categorias" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Tiendas", href: "#tiendas" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <TrendingDown className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">Preciva</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" className="text-sm font-medium">
            Iniciar sesión
          </Button>
          <Button className="text-sm font-medium">Buscar ofertas</Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline">Iniciar sesión</Button>
              <Button>Buscar ofertas</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
