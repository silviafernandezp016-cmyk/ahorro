import { Button } from "@/components/ui/button"
import { Check, Search, Star, TrendingDown } from "lucide-react"

const priceRows = [
  { store: "TechMarket", price: "$275.000", best: false },
  { store: "MegaShop", price: "$239.500", best: false },
  { store: "ElectroPlus", price: "$189.990", best: true },
  { store: "OfertaZone", price: "$298.000", best: false },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        {/* Left: copy + search */}
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            Comparamos más de 800 tiendas online
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Encuentra el precio más bajo en <span className="text-primary">segundos</span>
          </h1>

          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Preciva analiza las ofertas de cientos de tiendas por ti. Busca cualquier producto y quédate solo con el
            mejor precio.
          </p>

          {/* Search bar */}
          <form className="mt-8 flex w-full max-w-md flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="¿Qué producto buscas?"
                aria-label="Buscar producto"
                className="h-12 w-full rounded-xl border border-border bg-card pl-11 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <Button type="submit" className="h-12 px-6 text-sm font-semibold">
              Comparar
            </Button>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" /> 100% gratis
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" /> Sin registro
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" /> Precios en tiempo real
            </span>
          </div>
        </div>

        {/* Right: signature live comparison card */}
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/5" aria-hidden />
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-4 border-b border-border pb-5">
              <img
                src="/products/headphones.png"
                alt="Auriculares inalámbricos SoundPro X"
                className="h-20 w-20 rounded-xl bg-muted object-cover"
              />
              <div className="min-w-0">
                <p className="truncate font-semibold text-foreground">Auriculares SoundPro X</p>
                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  <span className="font-medium text-foreground">4,8</span>
                  <span>· 2.341 valoraciones</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Comparando 4 tiendas</p>
              </div>
            </div>

            <ul className="mt-4 flex flex-col gap-2">
              {priceRows.map((row) => (
                <li
                  key={row.store}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3 transition-colors ${
                    row.best ? "border-primary bg-primary/5" : "border-border bg-background"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                        row.best ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {row.store.slice(0, 2).toUpperCase()}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">{row.store}</span>
                      {row.best && (
                        <span className="text-xs font-medium text-primary">Mejor precio</span>
                      )}
                    </div>
                  </div>
                  <span
                    className={`font-mono text-sm font-semibold ${
                      row.best ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {row.price}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-foreground px-4 py-3 text-background">
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <TrendingDown className="h-4 w-4 text-accent" />
                Ahorras hasta
              </span>
              <span className="font-mono text-lg font-bold text-accent">$108.010</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
