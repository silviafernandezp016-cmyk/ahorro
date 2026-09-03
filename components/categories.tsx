import { Dumbbell, Home, Laptop, Shirt, Sparkles, ToyBrick } from "lucide-react"

const categories = [
  { icon: Laptop, name: "Electrónica", count: "1,2M productos" },
  { icon: Home, name: "Hogar", count: "890K productos" },
  { icon: Shirt, name: "Moda", count: "2,1M productos" },
  { icon: Dumbbell, name: "Deporte", count: "540K productos" },
  { icon: Sparkles, name: "Belleza", count: "410K productos" },
  { icon: ToyBrick, name: "Juguetes", count: "320K productos" },
]

export function Categories() {
  return (
    <section id="categorias" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Categorías</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Compara en cualquier categoría
            </h2>
          </div>
          <a href="#" className="text-sm font-medium text-primary hover:underline">
            Ver todas las categorías →
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <cat.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">{cat.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{cat.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
