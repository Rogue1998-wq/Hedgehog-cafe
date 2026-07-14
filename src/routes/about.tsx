import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import coffee from "@/assets/coffee.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Hedgehog Cafe, Chandigarh" },
      { name: "description", content: "The story behind The Hedgehog Cafe — a wood-panelled, book-lined kitchen in Sector 7, Chandigarh." },
      { property: "og:title", content: "About — The Hedgehog Cafe" },
      { property: "og:description", content: "The story behind our wood-panelled, book-lined kitchen." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
        <div className="md:col-span-6">
          <img src={hero} alt="Interior" width={1600} height={1200} className="aspect-[4/5] w-full object-cover shadow-xl" />
        </div>
        <div className="md:col-span-6 flex flex-col justify-center">
          <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-accent">Our Story</div>
          <h1 className="font-display text-5xl leading-tight text-primary sm:text-6xl">
            A little cafe that grew<br /><em className="italic">around a library.</em>
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              The Hedgehog opened in 2011 with three tables, one espresso machine and a wall of secondhand books. The books stayed. The tables multiplied. The espresso machine has been replaced twice.
            </p>
            <p>
              We believe cafes should feel like a friend's living room — warm, unhurried, a little bit lived-in. Our menu is short so we can cook everything well. Our coffee is roasted for us in the Nilgiris. Our tea list is longer than it strictly needs to be.
            </p>
            <p>
              You are welcome to stay as long as you like, occupy a corner with your laptop, bring your dog, and — yes — take a book off the shelf.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={coffee} alt="Latte art" loading="lazy" width={1200} height={1400} className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-accent">The Kitchen</div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Cooked slowly. Served warmly.</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {[
                { h: "Two-day dough", p: "Every pizza base ferments for 48 hours. It's why the crust is airy and easy to digest." },
                { h: "Nilgiris coffee", p: "Single-estate beans, roasted for us. Extracted at 92°C, pulled short." },
                { h: "House smoking", p: "We smoke our own bacon and salmon in a small oak barrel out back." },
                { h: "Farm to shelf", p: "Vegetables from a small farm in Kharar. Bread baked in-house every morning." },
              ].map((c) => (
                <div key={c.h}>
                  <h3 className="font-display text-2xl text-accent">{c.h}</h3>
                  <p className="mt-1 text-primary-foreground/75">{c.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}