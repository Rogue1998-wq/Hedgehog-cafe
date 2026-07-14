import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { menu } from "@/lib/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Hedgehog Cafe, Chandigarh" },
      { name: "description", content: "All-day breakfast, wood-fired pizzas, burgers, coffee, tea and cocktails at The Hedgehog Cafe in Sector 7, Chandigarh." },
      { property: "og:title", content: "Menu — The Hedgehog Cafe" },
      { property: "og:description", content: "Breakfast, wood-fired pizza, coffee, tea and cocktails." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <header className="border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-accent">The Full Menu</div>
          <h1 className="font-display text-5xl text-primary sm:text-6xl">Bill of Fare</h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            A short menu, cooked from scratch. Sourdough ferments for two days. Coffee is single-origin. Prices are in Indian Rupees and include all taxes.
          </p>
          <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {menu.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-primary">{s.title}</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        {menu.map((section, i) => (
          <section key={section.id} id={section.id} className={i > 0 ? "mt-20" : ""}>
            <div className="mb-8 text-center">
              <h2 className="font-display text-4xl text-primary">{section.title}</h2>
              {section.blurb && (
                <p className="mt-2 font-display italic text-muted-foreground">{section.blurb}</p>
              )}
              <div className="mx-auto mt-6 h-px w-20 bg-accent" />
            </div>

            <ul className="divide-y divide-border/60">
              {section.items.map((item) => (
                <li key={item.name} className="grid grid-cols-[auto_1fr_auto] gap-x-4 py-5 md:gap-x-6">
                  <span
                    className={`mt-2 h-2.5 w-2.5 shrink-0 border ${
                      item.veg ? "border-forest" : "border-burgundy"
                    } flex items-center justify-center`}
                    aria-label={item.veg ? "Vegetarian" : "Non-vegetarian"}
                    title={item.veg ? "Vegetarian" : "Non-vegetarian"}
                  >
                    <span
                      className={`h-1 w-1 rounded-full ${
                        item.veg ? "bg-forest" : "bg-burgundy"
                      }`}
                    />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-xl text-primary">{item.name}</h3>
                      <span className="hidden flex-1 border-b border-dotted border-border/80 md:block" />
                    </div>
                    {item.desc && (
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    )}
                  </div>
                  <span className="mt-1 whitespace-nowrap font-display text-lg text-primary">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="mt-20 text-center text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Please inform us of any allergies · Kitchen closes at 11:00 pm
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}