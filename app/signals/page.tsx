import { ArrowRight, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const signalCards = [
  { title: "BTC Breakout", direction: "Long", entry: "$68,240", target: "$71,920", stop: "$66,710", risk: "2.4%" },
  { title: "ETH Trend", direction: "Long", entry: "$3,790", target: "$4,050", stop: "$3,600", risk: "1.8%" },
  { title: "SOL Momentum", direction: "Long", entry: "$161.20", target: "$176.00", stop: "$152.00", risk: "3.0%" },
  { title: "XAU Hedge", direction: "Neutral", entry: "$2,420", target: "$2,460", stop: "$2,390", risk: "1.2%" },
];

export default function SignalsPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
        <div className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">Signals</p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-medium tracking-[-0.07em] text-[var(--text)] md:text-5xl">
                Premium signal intelligence
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-soft)]">
                A simple, readable view of the current signal set, with no unnecessary visual pressure.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]">
              Explore marketplace
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {signalCards.map((signal) => (
            <article key={signal.title} className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-[var(--text)]">{signal.title}</div>
                <span className="rounded-full border border-[var(--line)] bg-[var(--soft)] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  {signal.direction}
                </span>
              </div>

              <div className="mt-6 space-y-3 text-sm text-[var(--text-soft)]">
                <div className="flex justify-between">
                  <span>Entry</span>
                  <span className="text-[var(--text)]">{signal.entry}</span>
                </div>
                <div className="flex justify-between">
                  <span>Target</span>
                  <span className="text-[var(--text)]">{signal.target}</span>
                </div>
                <div className="flex justify-between">
                  <span>Stop</span>
                  <span className="text-[var(--text)]">{signal.stop}</span>
                </div>
                <div className="flex justify-between">
                  <span>Risk</span>
                  <span className="text-[var(--success)]">{signal.risk}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,#f9f7f2)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Signal process</div>
            <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">What makes a signal feel useful</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                "Entry, target, and stop are visible together.",
                "Risk is compact and easy to compare.",
                "The design avoids clutter so focus stays high.",
              ].map((note) => (
                <div key={note} className="rounded-[20px] border border-[var(--line)] bg-[var(--panel)] p-4 text-sm leading-7 text-[var(--text-soft)]">
                  {note}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--soft)] text-[var(--gold)]">
              <ShieldCheck size={18} />
            </div>
            <h3 className="mt-5 text-2xl font-medium text-[var(--text)]">Permission aware</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              The signals view stays aligned with the minimal product system and keeps the focus on the trade itself.
            </p>
          </aside>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
