import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import hero from "@/assets/hero.jpg";
import pizza from "@/assets/pizza.jpg";
import coffee from "@/assets/coffee.jpg";
import dessert from "@/assets/dessert.jpg";
import { menu } from "@/lib/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Hedgehog Cafe — Book-lined kitchen in Sector 7, Chandigarh" },
      { name: "description", content: "Wood-panelled, book-lined cafe in Chandigarh. All-day breakfast, wood-fired pizza, burgers, single-origin coffee and a proper tea library." },
      { property: "og:title", content: "The Hedgehog Cafe" },
      { property: "og:description", content: "Wood-panelled, book-lined. Breakfast to nightcap in Sector 7, Chandigarh." },
    ],
  }),
  component: Home,
});

function Home() {
  const highlights = menu[2].items.slice(0, 3);
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid gap-10 px-6 pb-16 pt-10 md:grid-cols-12 md:gap-8 md:pt-16 lg:pt-20 max-w-6xl mx-auto">
          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" />
              Sector 7 · Chandigarh · Est. 2011
            </div>
            <h1 className="font-display text-5xl leading-[0.98] text-primary sm:text-6xl lg:text-7xl">
              A cafe with the<br />
              <em className="italic text-accent">quiet hum</em> of<br />
              old bookshops.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Breakfast that starts slow. Wood-fired pizza that starts loud. Coffee, tea and a good chair by the window — all day, every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="rounded-none border border-primary bg-primary px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-transparent hover:text-primary"
              >
                Read the Menu
              </Link>
              <a
                href="tel:+911724730478"
                className="rounded-none border border-primary px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                Reserve a table
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-6 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Rating</dt>
                <dd className="mt-1 font-display text-2xl text-primary">4.3 <span className="text-sm text-muted-foreground">/5</span></dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Reviews</dt>
                <dd className="mt-1 font-display text-2xl text-primary">1,911</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Per person</dt>
                <dd className="mt-1 font-display text-2xl text-primary">₹200–1,000</dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-6">
            <div className="relative">
              <img
                src={hero}
                alt="Interior of The Hedgehog Cafe with wood panelling and bookshelves"
                width={1600}
                height={1200}
                className="aspect-[4/5] w-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 hidden bg-accent px-5 py-4 font-display text-primary shadow-xl md:block">
                <div className="text-xs uppercase tracking-[0.2em]">Open today</div>
                <div className="text-lg">until 11:30 pm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 py-4 text-[11px] uppercase tracking-[0.28em]">
          <span>Great Coffee</span><span className="text-accent">✦</span>
          <span>Great Dessert</span><span className="text-accent">✦</span>
          <span>Tea Library</span><span className="text-accent">✦</span>
          <span>Live Music</span><span className="text-accent">✦</span>
          <span>Good for Laptops</span><span className="text-accent">✦</span>
          <span>Dogs Allowed</span>
        </div>
      </div>

      {/* Story */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-accent">Chapter One</div>
          <h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl">
            A room that feels like a favourite paperback.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Tucked into the inner market of Sector 7, The Hedgehog is a small kitchen with a big library. Dark wood, brass lamps, and shelves that climb to the ceiling — the sort of room where the afternoon quietly gets away from you.
          </p>
          <p>
            We serve honest food from a short menu. Sourdough that ferments for two days. Coffee from a family roaster in Coonoor. Cocktails poured slowly. And, always, a chair by the window with your name on it.
          </p>
          <p className="pt-2 font-display italic text-primary">
            — Come for breakfast. Stay for the second pot of tea.
          </p>
        </div>
      </section>

      {/* Signatures */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-accent">From the wood-fired oven</div>
              <h2 className="font-display text-4xl sm:text-5xl">The Signatures</h2>
            </div>
            <Link to="/menu" className="hidden text-xs uppercase tracking-[0.22em] text-accent hover:underline sm:block">
              See full menu →
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { img: pizza, title: "Margherita", desc: "Buffalo mozzarella, San Marzano tomato, torn basil, extra-virgin olive oil.", price: "₹625" },
              { img: coffee, title: "Nilgiris Flat White", desc: "Single-origin espresso, silken micro-foam. Poured with intent.", price: "₹215" },
              { img: dessert, title: "Warm Fudgy Brownie", desc: "Dark chocolate brownie, vanilla bean ice cream, salted caramel.", price: "₹325" },
            ].map((it) => (
              <article key={it.title} className="group">
                <div className="overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    width={1200}
                    height={1200}
                    className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl">{it.title}</h3>
                  <span className="font-display text-lg text-accent">{it.price}</span>
                </div>
                <p className="mt-2 text-sm text-primary-foreground/70">{it.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 hidden">{highlights.length}</div>
        </div>
      </section>

      {/* Atmosphere / details */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-accent">The Atmosphere</div>
          <h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl">
            Cozy, quiet, a little romantic. Never precious.
          </h2>
        </div>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
          {[
            { h: "Good for", items: ["Breakfast meetings", "Solo dining", "Slow lunches", "Working on laptop", "First dates"] },
            { h: "You'll find", items: ["Wood-fired pizza", "Great coffee", "A proper tea library", "Cocktails after 6", "Live music, Fridays"] },
            { h: "Also known for", items: ["Wheelchair accessible", "Dogs allowed inside", "Kerbside pickup", "No-contact delivery", "Free parking"] },
          ].map((col) => (
            <div key={col.h}>
              <h3 className="mb-4 border-b border-border pb-3 font-display text-xl text-primary">{col.h}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {col.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 text-center">
            <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-accent">Kind words</div>
            <h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl">From the guestbook</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { q: "The kind of place you find once and return to for a decade. The coffee is exceptional and the bookshelves are not for show.", n: "Ananya S." },
              { q: "Ordered the Margherita and the brownie. Stayed three hours reading. Nobody minded. That, to me, is the mark of a great cafe.", n: "Rohan K." },
              { q: "Warmly lit, deliciously fed, quietly music-ed. My favourite corner in Chandigarh.", n: "Meera J." },
            ].map((r) => (
              <figure key={r.n} className="border-t-2 border-accent pt-6">
                <blockquote className="font-display text-xl italic leading-snug text-primary">
                  “{r.q}”
                </blockquote>
                <figcaption className="mt-4 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  — {r.n}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-accent">Come Visit</div>
        <h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl">
          SCF 12, Inner Market, Sector 7-C
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          We're open every day from 8:30 in the morning until 11:30 at night. Walk-ins welcome; brunch reservations recommended.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://maps.google.com/?q=Hedgehog+Cafe+Sector+7+Chandigarh"
            className="rounded-none border border-primary bg-primary px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground hover:bg-transparent hover:text-primary"
          >
            Get Directions
          </a>
          <Link to="/visit" className="rounded-none border border-primary px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary hover:bg-primary hover:text-primary-foreground">
            Reserve a Table
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}