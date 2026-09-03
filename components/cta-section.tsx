import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const stats = [
  { value: "800+", label: "Tiendas analizadas" },
  { value: "12M", label: "Productos comparados" },
  { value: "$460.000", label: "Ahorro medio al año" },
]

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-center sm:px-12 sm:py-20">
        <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
          Empieza a ahorrar en tu próxima compra
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-lg leading-relaxed text-background/70">
          Únete a más de 3 millones de personas que ya comparan con Preciva antes de comprar.
        </p>

        <div className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="¿Qué producto buscas?"
              aria-label="Buscar producto"
              className="h-12 w-full rounded-xl border border-transparent bg-background pl-11 pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button className="h-12 px-6 text-sm font-semibold">Comparar gratis</Button>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-background/15 pt-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-background sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-background/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
