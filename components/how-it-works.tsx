import { Bell, ScanSearch, ShoppingBag } from "lucide-react"

const steps = [
  {
    icon: ScanSearch,
    title: "Busca tu producto",
    description:
      "Escribe lo que quieres comprar. Rastreamos al instante los precios en cientos de tiendas online.",
  },
  {
    icon: ShoppingBag,
    title: "Compara y elige",
    description:
      "Vemos por ti todas las ofertas ordenadas de más barata a más cara, con gastos de envío incluidos.",
  },
  {
    icon: Bell,
    title: "Ahorra y avisa",
    description:
      "Compra al mejor precio o crea una alerta y te avisamos en cuanto el producto baje de precio.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Cómo funciona</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ahorrar dinero nunca fue tan sencillo
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Tres pasos y listo. Nosotros hacemos el trabajo pesado de comparar para que tú solo pagues lo justo.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.title} className="relative rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </span>
              <span className="font-display text-4xl font-bold text-muted/80">{`0${i + 1}`}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
