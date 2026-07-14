import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/site-nav";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit & Reserve — The Hedgehog Cafe, Chandigarh" },
      { name: "description", content: "Find, reserve or contact The Hedgehog Cafe. SCF 12, Inner Market, Sector 7-C, Chandigarh. Open 8:30 am – 11:30 pm daily." },
      { property: "og:title", content: "Visit — The Hedgehog Cafe" },
      { property: "og:description", content: "Sector 7, Chandigarh. Open daily 8:30 am – 11:30 pm." },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  const [sent, setSent] = useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = new FormData(e.currentTarget);

  const message = `Hi! I'd like to reserve a table.

Name: ${form.get("name")}
Phone: ${form.get("phone")}
Date: ${form.get("date")}
Time: ${form.get("time")}
Guests: ${form.get("guests")}
Occasion: ${form.get("occasion")}
Note: ${form.get("note")}`;

  window.open(
    `https://wa.me/919781160873?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  setSent(true);
};
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-accent">Come Say Hello</div>
          <h1 className="font-display text-5xl leading-tight text-primary sm:text-6xl">Visit the cafe.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Walk-ins welcome. For brunch, weekends and groups of six or more, reserve ahead — it saves everyone a wait.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-8 text-sm">
            <div>
              <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-accent">Address</div>
              <p className="font-display text-lg text-primary">SCF 12, Inner Market</p>
              <p className="font-display text-lg text-primary">Sector 7-C, Chandigarh 160019</p>
              <a href="https://maps.google.com/?q=Hedgehog+Cafe+Sector+7+Chandigarh" className="mt-2 inline-block text-xs uppercase tracking-[0.2em] text-accent hover:underline">
                Open in Google Maps →
              </a>
            </div>
            <div>
              <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-accent">Hours</div>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex justify-between"><span>Monday – Thursday</span><span>8:30 am – 11:30 pm</span></li>
                <li className="flex justify-between"><span>Friday – Saturday</span><span>8:30 am – 11:30 pm</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>9:00 am – 11:30 pm</span></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-accent">Contact</div>
              <p><a href="tel:+911724730478" className="text-primary hover:text-accent">0172 473 0478</a></p>
              <p><a href="mailto:hello@thehedgehog.cafe" className="text-primary hover:text-accent">hello@thehedgehog.cafe</a></p>
              <p><a href="https://instagram.com" className="text-primary hover:text-accent">@thehedgehogcafe</a></p>
            </div>
            <div>
              <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-accent">Order In</div>
              <p><a href="https://link.zomato.com" className="text-primary hover:text-accent">Zomato</a> · Kerbside pickup · No-contact delivery</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-7 space-y-5 border border-border bg-card p-8"
          >
            <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-accent">Reserve a Table</div>
            <h2 className="font-display text-3xl text-primary">Tell us when you'd like to visit.</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name"><input required id="name" name="name" className="input" /></Field>
              <Field label="Phone"><input required type="tel" id="phone" name="phone" className="input" /></Field>
              <Field label="Date"><input required type="date" id="date" name="date" className="input" /></Field>
              <Field label="Time"><input required type="time" id="time" name="time" className="input" /></Field>
              <Field label="Guests">
                <select id="guests" name="guests" className="input" defaultValue="2">
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n}</option>)}
                  <option>9+</option>
                </select>
              </Field>
              <Field label="Occasion (optional)"><input id="occasion" name="occasion" className="input" placeholder="Birthday, date night…" /></Field>
            </div>
            <Field label="A note for us (optional)">
              <textarea rows={3} id="note" name="note" className="input" placeholder="Window seat, dog joining, allergies…" />
            </Field>
            <button
              type="submit"
              className="w-full rounded-none border border-primary bg-primary px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-transparent hover:text-primary"
            >
              {sent ? "Continue On WhatsApp" : "Request Reservation"}
            </button>
            <p className="text-xs text-muted-foreground">Reservations are confirmed by phone. For same-day bookings please call us at 0172 473 0478.</p>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}