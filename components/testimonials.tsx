import Image from "next/image"
import { Star, BadgeCheck, ShieldCheck, TrendingDown } from "lucide-react"

const testimonials = [
  {
    quote:
      "Iba a comprar unos auriculares a $199.000 y Preciva me los encontró a $149.000 en otra tienda. $50.000 que me ahorré en dos clics.",
    name: "Lucía Fernández",
    role: "Madrid",
    avatar: "/avatars/lucia.png",
    saved: "Ahorró $50.000",
  },
  {
    quote:
      "Uso la alerta de precio para todo. Me avisó cuando bajó la freidora de aire que quería y compré justo en el mejor momento.",
    name: "Marcos Ruiz",
    role: "Valencia",
    avatar: "/avatars/marcos.png",
    saved: "Ahorró $78.000",
  },
  {
    quote:
      "Antes perdía media tarde abriendo pestañas. Ahora comparo todas las tiendas de golpe y compro tranquila sabiendo que pago lo justo.",
    name: "Carmen Ortega",
    role: "Sevilla",
    avatar: "/avatars/carmen.png",
    saved: "Ahorró $312.000 al año",
  },
]

const trust = [
  {
    icon: TrendingDown,
    value: "$340.000",
    label: "Ahorro medio por usuario cada año",
  },
  {
    icon: BadgeCheck,
    value: "4,8/5",
    label: "Valoración media de 24.000 reseñas",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Gratis y sin registro obligatorio",
  },
]

export function Testimonials() {
  return (
    <section id="opiniones" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Opiniones reales</p>
        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Miles de personas ya pagan menos con Preciva
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          No lo decimos nosotros, lo dicen quienes comparan antes de comprar. Estas son algunas de sus historias.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-1 text-accent" aria-label="5 de 5 estrellas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
              {`"${t.quote}"`}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <Image
                src={t.avatar || "/placeholder.svg"}
                alt={`Foto de ${t.name}`}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">{t.name}</p>
                <p className="truncate text-xs text-muted-foreground">{t.role}</p>
              </div>
              <span className="ml-auto whitespace-nowrap rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                {t.saved}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 grid gap-6 rounded-2xl border border-border bg-secondary/50 p-6 sm:grid-cols-3 sm:p-8">
        {trust.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <item.icon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold text-foreground">{item.value}</p>
              <p className="text-pretty text-sm leading-snug text-muted-foreground">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
