"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Coins,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet2,
} from "lucide-react";

import { cn } from "@/lib/cn";

const marketTicker = [
  { symbol: "BTC/USD", value: "$68,420.12", delta: "+2.84%" },
  { symbol: "ETH/USD", value: "$3,810.56", delta: "+1.67%" },
  { symbol: "SOL/USD", value: "$164.90", delta: "+4.12%" },
  { symbol: "XAU/USD", value: "$2,426.70", delta: "+0.74%" },
  { symbol: "SPX", value: "5,482.13", delta: "+0.63%" },
];

const heroStats = [
  { label: "Portfolio value", value: "$34,010.00", delta: "+2.25%" },
  { label: "24h P&L", value: "+$1,810.05", delta: "+4.8%" },
  { label: "Staked assets", value: "$12,500.00", delta: "+1.2%" },
];

const signalCards = [
  { title: "BTC Breakout", direction: "Long", entry: "$68,240", target: "$71,920", stop: "$66,710" },
  { title: "ETH Trend", direction: "Long", entry: "$3,790", target: "$4,050", stop: "$3,600" },
  { title: "SOL Momentum", direction: "Long", entry: "$161.20", target: "$176.00", stop: "$152.00" },
  { title: "XAU Hedge", direction: "Neutral", entry: "$2,420", target: "$2,460", stop: "$2,390" },
];

const featureCards = [
  {
    icon: Wallet2,
    title: "Portfolio controls",
    description: "Keep balances, performance, and withdrawals in one calm surface that is built for clarity.",
  },
  {
    icon: TrendingUp,
    title: "Market intelligence",
    description: "See live pricing, ranking shifts, and trend context without noisy dashboard clutter.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by design",
    description: "Every action stays permission-aware, auditable, and ready for a proper auth backend later.",
  },
  {
    icon: BarChart3,
    title: "Signal-ready execution",
    description: "Surface entries, targets, and stop levels in a workspace that stays focused under pressure.",
  },
];

const protectionNotes = [
  "Protected sessions for user and admin flows",
  "Transparent market overlays and clear deltas",
  "Risk posture visible before every action",
];

function FloatingCoin({
  reduceMotion,
  className,
  size = 120,
  delay = 0,
  orbit = false,
}: {
  reduceMotion: boolean;
  className?: string;
  size?: number;
  delay?: number;
  orbit?: boolean;
}) {
  const animation = reduceMotion
    ? undefined
    : orbit
      ? { rotate: 360 }
      : { y: [0, -10, 0], rotate: [0, 12, 0] };

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "relative flex items-center justify-center rounded-full border border-[#f0d49a]/35 bg-[radial-gradient(circle_at_30%_28%,#fff6d6_0%,#e8c56f_26%,#ba8c32_58%,#6b4612_100%)] shadow-[0_24px_80px_rgba(215,183,124,0.25)]",
        className,
      )}
      style={{ width: size, height: size }}
      animate={animation}
      transition={
        reduceMotion
          ? undefined
          : {
              duration: orbit ? 18 : 6.5,
              repeat: Infinity,
              ease: orbit ? "linear" : "easeInOut",
              delay,
            }
      }
    >
      <span className="absolute inset-[12%] rounded-full border border-white/20" />
      <span className="absolute inset-[23%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.34),rgba(255,255,255,0.04))]" />
      <Coins size={Math.round(size * 0.28)} className="relative z-10 text-[#1f1608]" strokeWidth={1.8} />
    </motion.div>
  );
}

function FeatureTile({
  icon: Icon,
  title,
  description,
  reduceMotion,
  delay,
}: {
  icon: typeof Wallet2;
  title: string;
  description: string;
  reduceMotion: boolean;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.28)] transition"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#2d3740] bg-[#111a1f] text-[#d7b77c]">
        <Icon size={18} />
      </div>
      <h3 className="mt-5 text-xl font-medium text-[#f5f4ef]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#a7afb8]">{description}</p>
    </motion.article>
  );
}

function SignalCard({
  title,
  direction,
  entry,
  target,
  stop,
  reduceMotion,
  delay,
}: {
  title: string;
  direction: string;
  entry: string;
  target: string;
  stop: string;
  reduceMotion: boolean;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="rounded-[22px] border border-white/10 bg-[#0e151b] p-4 shadow-[0_16px_44px_rgba(0,0,0,0.24)] transition"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#f5f4ef]">{title}</span>
        <span className="rounded-full bg-[#11231a] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[#72d9a0]">
          {direction}
        </span>
      </div>
      <div className="mt-5 space-y-2 text-sm text-[#a7afb8]">
        <div className="flex justify-between gap-4">
          <span>Entry</span>
          <span className="text-[#f5f4ef]">{entry}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Target</span>
          <span className="text-[#f5f4ef]">{target}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Stop</span>
          <span className="text-[#f5f4ef]">{stop}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion() ?? false;
  const tickerLoop = [...marketTicker, ...marketTicker];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070b] text-[#f5f4ef]">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden="true"
          className="absolute -left-28 top-20 h-96 w-96 rounded-full bg-[#d7b77c]/12 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, -18, 0], scale: [1, 1.05, 1] }}
          transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute right-[-6rem] top-16 h-[30rem] w-[30rem] rounded-full bg-[#6ed8e6]/10 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, -28, 0], y: [0, 20, 0], scale: [1, 0.96, 1] }}
          transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(215,183,124,0.12),transparent_28%),linear-gradient(180deg,rgba(5,7,11,0.82),rgba(5,7,11,1))]" />
        <div
          className="absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-30">
          <div className="rounded-full border border-white/10 bg-[#081015]/75 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2d3740] bg-[#111a1f] text-lg font-semibold text-[#d7b77c]">
                  N
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-[#9aa4ad]">NEXORA</div>
                  <div className="text-xs text-[#d9d7d1]">Clarity for every market move</div>
                </div>
              </Link>

              <nav className="hidden items-center gap-7 text-sm text-[#c9d0d6] md:flex">
                <Link href="#overview" className="transition hover:text-[#f5f4ef]">
                  Overview
                </Link>
                <Link href="#markets" className="transition hover:text-[#f5f4ef]">
                  Markets
                </Link>
                <Link href="#signals" className="transition hover:text-[#f5f4ef]">
                  Signals
                </Link>
                <Link href="#security" className="transition hover:text-[#f5f4ef]">
                  Security
                </Link>
              </nav>

              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-[#f5f4ef] transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d7b77c] px-4 py-2 text-sm font-semibold text-[#11171b] transition hover:bg-[#e6c88a]"
                >
                  Create account
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section
          id="overview"
          className="relative mt-6 overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,17,22,0.96),rgba(8,12,16,0.96))] px-5 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.45)] lg:px-10 lg:py-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2b3740] bg-[#101a1f] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#d7b77c]">
                <Sparkles size={12} />
                Clarity for every market move
              </div>

              <h1 className="mt-6 max-w-xl text-5xl font-medium tracking-[-0.07em] text-[#f5f4ef] md:text-7xl">
                A calmer market terminal with a coin that never sits still.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#a7afb8] md:text-lg">
                NEXORA blends portfolio visibility, live market data, and disciplined signal intelligence into a premium
                workspace that feels cinematic instead of crowded.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b77c] px-6 py-3 text-sm font-semibold text-[#12171b] transition hover:bg-[#e6c88a]"
                >
                  Get started
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full border border-[#303b43] bg-[#0f171b] px-6 py-3 text-sm font-medium text-[#f5f4ef] transition hover:border-[#4a535b] hover:bg-[#111a1f]"
                >
                  Sign in
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#cdd4da]">
                {["Portfolio clarity", "Live market flow", "Permissioned sessions"].map((item) => (
                  <div key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.08 * index }}
                    className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">{stat.label}</div>
                    <div className="mt-3 text-2xl font-medium text-[#f5f4ef]">{stat.value}</div>
                    <div className="mt-1 text-sm text-[#72d9a0]">{stat.delta}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -right-8 top-[-3rem] hidden h-56 w-56 lg:block">
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-[#d7b77c]/18"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute left-1/2 top-0 -translate-x-1/2"
                  animate={reduceMotion ? undefined : { rotate: -360 }}
                  transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: "linear" }}
                >
                  <FloatingCoin reduceMotion={reduceMotion} size={92} />
                </motion.div>
              </div>

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#091015] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,183,124,0.16),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(110,216,230,0.10),transparent_36%)]" />
                <FloatingCoin reduceMotion={reduceMotion} className="absolute left-5 top-5 hidden lg:flex opacity-90" size={70} delay={1.1} />
                <FloatingCoin reduceMotion={reduceMotion} className="absolute bottom-5 right-5 hidden lg:flex opacity-80" size={58} delay={0.7} />

                <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-[#9aa4ad]">Portfolio</div>
                    <h2 className="mt-2 text-4xl font-medium tracking-[-0.06em] text-[#f5f4ef]">$34,010.00</h2>
                  </div>
                  <div className="rounded-full border border-[#224235] bg-[#102418] px-3 py-1.5 text-xs font-medium text-[#72d9a0]">
                    +2.25%
                  </div>
                </div>

                <div className="relative mt-5 grid gap-4 xl:grid-cols-[1.04fr_0.96fr]">
                  <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Market pulse</div>
                      <div className="text-xs text-[#72d9a0]">Live</div>
                    </div>
                    <div className="mt-3 grid h-44 grid-cols-6 items-end gap-2">
                      {[42, 58, 51, 72, 64, 92].map((height, index) => (
                        <motion.div
                          key={height}
                          className="rounded-t-[18px] bg-[linear-gradient(180deg,#d7b77c_0%,#cdd8e6_48%,#6ed8e6_100%)] shadow-[0_8px_30px_rgba(110,216,230,0.18)]"
                          style={{ height: `${height}%` }}
                          initial={{ opacity: 0.4, scaleY: 0.5 }}
                          animate={reduceMotion ? undefined : { opacity: 1, scaleY: [0.92, 1, 0.94] }}
                          transition={{ duration: 2.4 + index * 0.15, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
                        />
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-[#a7afb8]">
                      <span>Risk posture</span>
                      <span className="text-[#72d9a0]">Balanced</span>
                    </div>
                  </div>

                  <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Watchlist</div>
                    <div className="mt-4 space-y-3">
                      {marketTicker.slice(0, 4).map((asset) => (
                        <div key={asset.symbol} className="flex items-center justify-between rounded-[18px] border border-white/10 bg-[#0e151b] px-3 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#121b21] text-sm font-semibold text-[#d7b77c]">
                              {asset.symbol.slice(0, 1)}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-[#f5f4ef]">{asset.symbol}</div>
                              <div className="text-[11px] uppercase tracking-[0.18em] text-[#9aa4ad]">{asset.value}</div>
                            </div>
                          </div>
                          <div className="text-xs font-medium text-[#72d9a0]">{asset.delta}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Deposit", value: "Instant" },
                    { label: "Risk", value: "Monitored" },
                    { label: "Signals", value: "12 live" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.08 * index }}
                      className="rounded-[20px] border border-white/10 bg-[#0e151b] px-4 py-3"
                    >
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">{item.label}</div>
                      <div className="mt-2 text-base font-medium text-[#f5f4ef]">{item.value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mt-6">
          <div className="overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
            <motion.div
              className="flex w-max gap-3 px-4 py-3"
              animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={reduceMotion ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {tickerLoop.map((item, index) => (
                <div
                  key={`${item.symbol}-${index}`}
                  className="flex min-w-[220px] items-center justify-between rounded-full border border-white/10 bg-[#0d1418] px-4 py-2 text-sm"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#9aa4ad]">{item.symbol}</div>
                    <div className="mt-1 text-[#f5f4ef]">{item.value}</div>
                  </div>
                  <div className="text-[#72d9a0]">{item.delta}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="signals" className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Signals</div>
                <h2 className="mt-2 text-3xl font-medium tracking-[-0.06em] text-[#f5f4ef]">Actionable signal intelligence</h2>
              </div>
              <Link href="/signals" className="inline-flex items-center gap-2 text-sm text-[#d7b77c]">
                Explore signals <ChevronRight size={16} />
              </Link>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {signalCards.map((signal, index) => (
                <SignalCard key={signal.title} {...signal} reduceMotion={reduceMotion} delay={0.05 * index} />
              ))}
            </div>
          </div>

          <aside className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,21,27,0.98),rgba(9,15,21,0.98))] p-5 sm:p-6">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Security posture</div>
            <h3 className="mt-2 text-2xl font-medium text-[#f5f4ef]">Calm by design</h3>
            <p className="mt-3 text-sm leading-7 text-[#a7afb8]">
              The interface is built to keep the important pieces visible first, so traders can read the room without
              chasing the noise.
            </p>

            <div className="mt-6 space-y-3">
              {protectionNotes.map((note) => (
                <div key={note} className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#11231a] text-[#72d9a0]">
                    <ShieldCheck size={15} />
                  </div>
                  <span className="text-sm text-[#d9d7d1]">{note}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-[#0d1418] p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#a7afb8]">Compliance</span>
                <span className="text-sm text-[#72d9a0]">Healthy</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-[#111a1f]">
                <div className="h-2 w-[84%] rounded-full bg-[#d7b77c]" />
              </div>
            </div>
          </aside>
        </section>

        <section id="security" className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature, index) => (
            <FeatureTile
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              reduceMotion={reduceMotion}
              delay={0.05 * index}
            />
          ))}
        </section>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(13,20,24,0.98),rgba(17,28,36,0.95))] px-6 py-8 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Start here</div>
              <h3 className="mt-2 text-3xl font-medium tracking-[-0.06em] text-[#f5f4ef]">
                Ready for your next market move?
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#a7afb8]">
                Move into the workspace, inspect signals, and keep your decision flow calm from the first glance.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-[#f5f4ef] transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b77c] px-5 py-3 text-sm font-semibold text-[#11171b] transition hover:bg-[#e6c88a]"
              >
                Create account
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-8 flex flex-col gap-4 pb-10 pt-3 text-sm text-[#9aa4ad] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#101a1f] text-xs font-semibold text-[#d7b77c]">
              N
            </div>
            <div>NEXORA © 2026</div>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/markets">Markets</Link>
            <Link href="/signals">Signals</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Signup</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
