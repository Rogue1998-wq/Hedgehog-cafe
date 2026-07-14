import { Link } from "@tanstack/react-router";
import hedgehog from "@/assets/hedgehog.png";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={hedgehog} alt="" width={40} height={40} className="h-9 w-9" />
          <div className="leading-tight">
            <div className="font-display text-xl text-primary">The Hedgehog Cafe</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Est. Chandigarh</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link to="/" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Home</Link>
          <Link to="/menu" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Menu</Link>
          <Link to="/about" className="hover:text-primary" activeProps={{ className: "text-primary" }}>About</Link>
          <Link to="/visit" className="hover:text-primary" activeProps={{ className: "text-primary" }}>Visit</Link>
        </nav>
        <a
          href="tel:+911724730478"
          className="hidden rounded-none border border-primary bg-primary px-4 py-2 text-xs uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-transparent hover:text-primary sm:inline-block"
        >
          Reserve
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">The Hedgehog Cafe</div>
          <p className="mt-3 text-sm text-primary-foreground/70">
            A wood-panelled, book-lined kitchen serving all-day breakfast, wood-fired pizzas and quietly excellent coffee.
          </p>
        </div>
        <div className="text-sm">
          <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent">Find Us</div>
          <p className="text-primary-foreground/85">
            SCF 12, Inner Market<br />
            Sector 7-C, Chandigarh 160019
          </p>
          <p className="mt-3 text-primary-foreground/70">Open daily · 8:30 am – 11:30 pm</p>
        </div>
        <div className="text-sm">
          <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent">Get in Touch</div>
          <p><a href="tel:+911724730478" className="hover:text-accent">0172 473 0478</a></p>
          <p><a href="https://instagram.com" className="hover:text-accent">@thehedgehogcafe</a></p>
          <p><a href="https://link.zomato.com" className="hover:text-accent">Order on Zomato</a></p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-primary-foreground/60 sm:flex-row">
          <span>© {new Date().getFullYear()} The Hedgehog Cafe. All rights reserved.</span>
          <span className="italic">ਦ ਹੈਜ਼ਹੋਗ ਕੈਫੇ</span>
        </div>
      </div>
    </footer>
  );
}