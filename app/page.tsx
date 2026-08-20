"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Coins,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet2,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const marketTicker = [
  { symbol: "BTC/USD", value: "$68,420.12", delta: "+2.84%" },
  { symbol: "ETH/USD", value: "$3,810.56", delta: "+1.67%" },
  { symbol: "SOL/USD", value: "$164.90", delta: "+4.12%" },
  { symbol: "XAU/USD", value: "$2,426.70", delta: "+0.74%" },
  { symbol: "SPX", value: "5,482.13", delta: "+0.63%" },
];

const metrics = [
  { label: "Portfolio value", value: "$34,010.00", delta: "+2.25%" },
  { label: "24h P&L", value: "+$1,810.05", delta: "+4.8%" },
  { label: "Staked assets", value: "$12,500.00", delta: "+1.2%" },
];

const featureCards = [
  {
    icon: Wallet2,
    title: "Portfolio controls",
    description: "Keep balances and performance easy to read, with one calm surface for decision making.",
  },
  {
    icon: TrendingUp,
    title: "Market intelligence",
    description: "See a restrained market view with the right level of data density and very little noise.",
  },
  {
    icon: ShieldCheck,
    title: "Security first",
    description: "The product keeps user and admin flows separated and ready for stronger permissions later.",
  },
  {
    icon: BarChart3,
    title: "Signal-ready",
    description: "Entry, target, and stop levels stay visible without turning the page into a trading cockpit.",
  },
];

const signalCards = [
  { title: "BTC Breakout", direction: "Long", entry: "$68,240", target: "$71,920" },
  { title: "ETH Trend", direction: "Long", entry: "$3,790", target: "$4,050" },
  { title: "SOL Momentum", direction: "Long", entry: "$161.20", target: "$176.00" },
];

function FloatingCoin({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      aria-hidden="true"
      className="relative flex h-32 w-32 items-center justify-center rounded-full border border-[var(--line)] bg-[radial-gradient(circle_at_28%_28%,#fffdf8_0%,#f1d99e_18%,#caa15e_54%,#8a6424_100%)] shadow-[0_16px_40px_rgba(156,122,61,0.18)]"
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -8, 0],
              rotate: [0, 10, 0],
            }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    >
      <span className="absolute inset-[12%] rounded-full border border-white/20" />
      <span className="absolute inset-[28%] rounded-full bg-[rgba(255,255,255,0.35)]" />
      <Coins size={34} className="relative z-10 text-[#3f2c10]" strokeWidth={1.7} />
    </motion.div>
  );
}

function MinimalCard({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
    >
      <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">{title}</div>
      <div className="mt-4">{children}</div>
    </motion.article>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion() ?? false;
  const tickerLoop = [...marketTicker, ...marketTicker];

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden="true"
          className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[rgba(156,122,61,0.08)] blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 24, 0], y: [0, -12, 0] }}
          transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute right-[-6rem] top-16 h-[28rem] w-[28rem] rounded-full bg-[rgba(80,131,154,0.08)] blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, -20, 0], y: [0, 16, 0] }}
          transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <SiteHeader />

      <section className="relative mx-auto max-w-7xl px-4 pb-6 pt-10 lg:px-8 lg:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[var(--gold)] shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
              <Sparkles size={12} />
              Minimal market clarity
            </div>

            <h1 className="mt-6 max-w-xl text-5xl font-medium tracking-[-0.07em] text-[var(--text)] md:text-7xl">
              A quieter trading interface for clearer decisions.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--text-soft)] md:text-lg">
              NEXORA brings portfolio visibility, live market data, and signal context together in a cleaner,
              more modern workspace.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]"
              >
                Get started
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)]"
              >
                Sign in
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--text-soft)]">
              {["Portfolio first", "Signals second", "Admin ready"].map((item) => (
                <div key={item} className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <MinimalCard key={metric.label} title={metric.label} delay={0.05 * index}>
                  <div className="text-2xl font-medium text-[var(--text)]">{metric.value}</div>
                  <div className="mt-1 text-sm text-[var(--success)]">{metric.delta}</div>
                </MinimalCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            className="relative"
          >
            <div className="absolute -right-6 -top-6 hidden lg:block">
              <motion.div
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "linear" }}
              >
                <FloatingCoin reduceMotion={reduceMotion} />
              </motion.div>
            </div>

            <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_18px_48px_rgba(15,23,42,0.04)] sm:p-6">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">Market snapshot</div>
                  <div className="mt-2 text-4xl font-medium tracking-[-0.06em] text-[var(--text)]">$34,010.00</div>
                </div>
                <div className="rounded-full border border-[rgba(21,128,61,0.22)] bg-[rgba(21,128,61,0.08)] px-3 py-1.5 text-xs font-medium text-[var(--success)]">
                  +2.25%
                </div>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-[linear-gradient(180deg,#fdfcf9,#f6f2ea)] p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff6d8,transparent_42%)] opacity-70" />
                  <div className="relative flex h-full items-center justify-center py-10">
                    <motion.div
                      animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 8, 0] }}
                      transition={reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FloatingCoin reduceMotion={reduceMotion} />
                    </motion.div>
                  </div>
                  <div className="relative mt-2 text-center text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                    Floating coin motion
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Live flow</div>
                      <div className="text-xs text-[var(--success)]">Updated now</div>
                    </div>
                    <div className="mt-4 grid h-36 grid-cols-6 items-end gap-2">
                      {[44, 58, 52, 71, 65, 91].map((height, index) => (
                        <motion.div
                          key={`${height}-${index}`}
                          className="rounded-t-[16px] bg-[linear-gradient(180deg,#cdb07b_0%,#a98649_100%)]"
                          style={{ height: `${height}%` }}
                          initial={{ opacity: 0.6 }}
                          animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.8] }}
                          transition={{ duration: 2.4 + index * 0.15, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {marketTicker.slice(0, 4).map((asset) => (
                      <div
                        key={asset.symbol}
                        className="flex items-center justify-between rounded-[20px] border border-[var(--line)] bg-[var(--panel)] px-4 py-3"
                      >
                        <div>
                          <div className="text-sm font-medium text-[var(--text)]">{asset.symbol}</div>
                          <div className="mt-1 text-xs text-[var(--muted)]">{asset.value}</div>
                        </div>
                        <div className="text-sm font-medium text-[var(--success)]">{asset.delta}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
        <div className="overflow-hidden rounded-full border border-[var(--line)] bg-[var(--panel)] shadow-[0_12px_32px_rgba(15,23,42,0.04)]">
          <motion.div
            className="flex w-max gap-3 px-4 py-3"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={reduceMotion ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {tickerLoop.map((item, index) => (
              <div
                key={`${item.symbol}-${index}`}
                className="flex min-w-[220px] items-center justify-between rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-2 text-sm"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{item.symbol}</div>
                  <div className="mt-1 text-[var(--text)]">{item.value}</div>
                </div>
                <div className="text-[var(--success)]">{item.delta}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="overview" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature, index) => (
            <MinimalCard key={feature.title} title={feature.title} delay={0.04 * index}>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--soft)] text-[var(--gold)]">
                <feature.icon size={18} />
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">{feature.description}</p>
            </MinimalCard>
          ))}
        </div>
      </section>

      <section id="signals" className="mx-auto max-w-7xl px-4 py-2 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:p-6">
            <div className="flex flex-col gap-3 border-b border-[var(--line)] pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Signals</div>
                <h2 className="mt-2 text-3xl font-medium tracking-[-0.06em] text-[var(--text)]">Actionable signal intelligence</h2>
              </div>
              <Link href="/signals" className="inline-flex items-center gap-2 text-sm text-[var(--gold)]">
                Explore signals <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {signalCards.map((signal) => (
                <div key={signal.title} className="rounded-[22px] border border-[var(--line)] bg-[var(--soft)] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-[var(--text)]">{signal.title}</div>
                    <div className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      {signal.direction}
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-[var(--text-soft)]">
                    <div className="flex justify-between">
                      <span>Entry</span>
                      <span className="text-[var(--text)]">{signal.entry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Target</span>
                      <span className="text-[var(--text)]">{signal.target}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,#f9f7f2)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:p-6">
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Security posture</div>
            <h3 className="mt-2 text-2xl font-medium text-[var(--text)]">Calm by design</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
              The interface keeps the important parts in view first, so the product feels less like a dashboard and more like a well-edited tool.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Protected user and admin flows",
                "Transparent market overlays",
                "Readable risk posture at a glance",
              ].map((note) => (
                <div key={note} className="flex items-center gap-3 rounded-[18px] border border-[var(--line)] bg-[var(--panel)] px-4 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--gold)]">
                    <ShieldCheck size={15} />
                  </div>
                  <span className="text-sm text-[var(--text-soft)]">{note}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="security" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] px-6 py-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Start here</div>
              <h3 className="mt-2 text-3xl font-medium tracking-[-0.06em] text-[var(--text)]">
                Ready for a cleaner market workspace?
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-soft)]">
                Move into the product, inspect the signals, and keep your decision flow calm from the first glance.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)]"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]"
              >
                Create account
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
