import { TrendingDown } from "lucide-react"

const columns = [
  {
    title: "Producto",
    links: ["Cómo funciona", "Categorías", "Ofertas del día", "Alertas de precio"],
  },
  {
    title: "Empresa",
    links: ["Sobre nosotros", "Blog", "Trabaja con nosotros", "Prensa"],
  },
  {
    title: "Ayuda",
    links: ["Centro de ayuda", "Contacto", "Preguntas frecuentes", "Estado del servicio"],
  },
  {
    title: "Legal",
    links: ["Privacidad", "Términos", "Cookies", "Aviso legal"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <TrendingDown className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-foreground">Preciva</span>
            </a>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              El comparador de precios que analiza cientos de tiendas para que siempre pagues lo justo.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Preciva. Todos los derechos reservados.</p>
          <p className="text-sm text-muted-foreground">Hecho para compradores inteligentes.</p>
        </div>
      </div>
    </footer>
  )
}
