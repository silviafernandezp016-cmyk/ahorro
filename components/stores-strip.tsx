const stores = [
  "TechMarket",
  "MegaShop",
  "ElectroPlus",
  "OfertaZone",
  "CasaHogar",
  "ModaViva",
  "DigitalPro",
  "SuperCompra",
]

export function StoresStrip() {
  return (
    <section id="tiendas" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Analizamos precios de tus tiendas favoritas
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {stores.map((store) => (
            <span
              key={store}
              className="font-display text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {store}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
