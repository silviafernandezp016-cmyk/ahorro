import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingDown } from "lucide-react"

const deals = [
  {
    image: "/products/sneakers.png",
    name: "Zapatillas RunLite Pro",
    stores: 12,
    now: "$64.900",
    was: "$99.950",
    discount: "-35%",
  },
  {
    image: "/products/smartwatch.png",
    name: "Smartwatch Pulse 4",
    stores: 9,
    now: "$129.000",
    was: "$189.000",
    discount: "-32%",
  },
  {
    image: "/products/coffee.png",
    name: "Cafetera EspressoLab",
    stores: 15,
    now: "$199.990",
    was: "$279.000",
    discount: "-28%",
  },
  {
    image: "/products/headphones.png",
    name: "Auriculares SoundPro X",
    stores: 4,
    now: "$245.990",
    was: "$312.000",
    discount: "-21%",
  },
]

export function FeaturedDeals() {
  return (
    <section id="ofertas" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Ofertas destacadas</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Las mejores bajadas de precio de hoy
          </h2>
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          Ver todas las ofertas <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {deals.map((deal) => (
          <article
            key={deal.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-md"
          >
            <div className="relative aspect-square bg-muted">
              <img
                src={deal.image || "/placeholder.svg"}
                alt={deal.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground">
                <TrendingDown className="h-3 w-3" />
                {deal.discount}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-xs text-muted-foreground">Comparado en {deal.stores} tiendas</p>
              <h3 className="mt-1 font-semibold leading-snug text-foreground">{deal.name}</h3>
              <div className="mt-auto flex items-end justify-between pt-4">
                <div>
                  <p className="font-mono text-xl font-bold text-foreground">{deal.now}</p>
                  <p className="font-mono text-sm text-muted-foreground line-through">{deal.was}</p>
                </div>
                <Button size="sm" variant="ghost" className="text-primary hover:text-primary">
                  Comparar
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
