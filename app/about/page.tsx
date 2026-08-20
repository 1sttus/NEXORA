import { ShieldCheck, Sparkles, TrendingUp, Wallet2 } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const principles = [
  {
    icon: Sparkles,
    title: "Calm product design",
    description: "We keep the interface compact, readable, and intentionally low-noise so the important details stand out first.",
  },
  {
    icon: TrendingUp,
    title: "Market clarity",
    description: "The platform is built to make live information feel easier to scan, compare, and act on.",
  },
  {
    icon: ShieldCheck,
    title: "Trust by default",
    description: "Permission boundaries, protected flows, and transparent state are central to the experience.",
  },
  {
    icon: Wallet2,
    title: "Portfolio focus",
    description: "Balances, signals, and account actions are presented with enough structure to stay useful but never crowded.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">About NEXORA</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-medium tracking-[-0.07em] text-[var(--text)] md:text-6xl">
              Built for clarity and disciplined decision-making.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--text-soft)]">
              NEXORA is a premium market intelligence platform focused on clean visual hierarchy, transparent
              workflows, and a calmer path from signal to action.
            </p>
          </div>

          <div className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Product stance</div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--text-soft)]">
              <p>
                The goal is not to overwhelm users with dense dashboards or oversized visuals. The goal is to make
                the current state of the account obvious and usable.
              </p>
              <p>
                We are designing for people who want a clean workspace, reliable context, and a design system that
                feels modern without becoming decorative.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--soft)] text-[var(--gold)]">
                <principle.icon size={18} />
              </div>
              <h2 className="mt-5 text-xl font-medium text-[var(--text)]">{principle.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{principle.description}</p>
            </article>
          ))}
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
