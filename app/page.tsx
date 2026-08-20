"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CirclePlay,
  Coins,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet2,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const marketTicker = [
  { symbol: "BTC", value: "$68,420.12", delta: "+2.84%" },
  { symbol: "ETH", value: "$3,810.56", delta: "+1.67%" },
  { symbol: "SOL", value: "$164.90", delta: "+4.12%" },
  { symbol: "XAU", value: "$2,426.70", delta: "+0.74%" },
  { symbol: "SPX", value: "5,482.13", delta: "+0.63%" },
];

const walletAssets = [
  { symbol: "BTC", label: "Bitcoin", price: "$68,420.12", change: "+2.84%", accent: "from-[#f7931a] to-[#ffd486]" },
  { symbol: "ETH", label: "Ethereum", price: "$3,810.56", change: "+1.67%", accent: "from-[#6f7afc] to-[#c7d0ff]" },
  { symbol: "SOL", label: "Solana", price: "$164.90", change: "+4.12%", accent: "from-[#14f1d9] to-[#8fe9d4]" },
  { symbol: "XAU", label: "Gold", price: "$2,426.70", change: "+0.74%", accent: "from-[#d6b26f] to-[#f4dca0]" },
];

const metrics = [
  { label: "Tracked pairs", value: "140+", delta: "+12%" },
  { label: "Assets monitored", value: "24K+", delta: "+9%" },
  { label: "Portfolio insight", value: "96.4%", delta: "+1.8%" },
];

const featureCards = [
  { icon: Wallet2, title: "Portfolio clarity", description: "One clean view of balances, market movement, and allocation decisions." },
  { icon: TrendingUp, title: "Market intelligence", description: "Track prices, sentiment, and momentum with configurable asset visibility." },
  { icon: ShieldCheck, title: "Secure operations", description: "Protect the user and admin flow with a stronger, clearer operational model." },
  { icon: BarChart3, title: "Deep analytics", description: "Turn price movement into readable signals that are fast to scan and easy to act on." },
];

const steps = [
  { number: "01", title: "Create account", text: "Set up your workspace and secure your access in minutes." },
  { number: "02", title: "Fund your account", text: "Add capital with a transparent deposit flow and clear routing." },
  { number: "03", title: "Monitor markets", text: "Observe live market movement and pricing across supported assets." },
  { number: "04", title: "Manage portfolio", text: "Track allocation, signal activity, and payouts from one place." },
];

const tableRows = [
  { name: "Bitcoin", symbol: "BTC", price: "$68,420.12", day: "+2.84%", week: "+8.63%", volume: "$28.6B", cap: "$1.34T" },
  { name: "Ethereum", symbol: "ETH", price: "$3,810.56", day: "+1.67%", week: "+5.91%", volume: "$17.2B", cap: "$456.4B" },
  { name: "Solana", symbol: "SOL", price: "$164.90", day: "+4.12%", week: "+12.4%", volume: "$6.7B", cap: "$75.2B" },
  { name: "BNB", symbol: "BNB", price: "$588.11", day: "+0.92%", week: "+3.10%", volume: "$2.1B", cap: "$87.2B" },
  { name: "XRP", symbol: "XRP", price: "$0.62", day: "+1.20%", week: "+4.23%", volume: "$1.9B", cap: "$35.8B" },
];

function AnimatedBackground({ reduceMotion }: { reduceMotion: boolean }) {
  const particles = Array.from({ length: 34 }, (_, index) => ({
    left: `${(index * 17) % 100}%`,
    top: `${(index * 23) % 100}%`,
    size: 2 + ((index * 7) % 5),
    delay: index * 0.7,
    opacity: 0.2 + ((index * 11) % 6) * 0.08,
  }));

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { backgroundPosition: ["50% 0%", "35% 20%", "50% 0%"] }}
        transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(126,74,255,0.38), rgba(16,5,42,0.98) 52%, rgba(9,6,22,1) 100%)",
        }}
      />

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-[#f7d27a]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={reduceMotion ? undefined : { y: [0, -18, 0], x: [0, 8, 0], opacity: [particle.opacity, particle.opacity + 0.2, particle.opacity] }}
          transition={reduceMotion ? undefined : { duration: 9 + (index % 5), repeat: Infinity, ease: "easeInOut", delay: particle.delay }}
        />
      ))}

      <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
        <path d="M180 600C350 520 420 360 620 420C770 470 920 320 1040 220" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="6 10" />
        <path d="M120 180C260 240 390 180 470 140C590 80 720 90 840 160C930 210 1040 280 1100 360" stroke="rgba(110,71,255,0.26)" strokeWidth="1" strokeDasharray="6 10" />
      </svg>

      <motion.div
        className="absolute left-[12%] top-[18%] h-40 w-40 rounded-full border border-[#a98dff]/20"
        animate={reduceMotion ? undefined : { x: [0, 12, 0], y: [0, -10, 0] }}
        transition={reduceMotion ? undefined : { duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[18%] h-52 w-52 rounded-full border border-[#ff8b5b]/15"
        animate={reduceMotion ? undefined : { x: [0, -14, 0], y: [0, 12, 0] }}
        transition={reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function FloatingAssetCard({
  symbol,
  label,
  price,
  change,
  accent,
  className,
}: {
  symbol: string;
  label: string;
  price: string;
  change: string;
  accent: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute rounded-[22px] border border-white/10 bg-[rgba(17,11,31,0.7)] p-3 shadow-[0_20px_50px_rgba(7,5,19,0.42)] backdrop-blur-md ${className ?? ""}`}
      animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-sm font-bold text-[#120b20]`}>
          {symbol.slice(0, 1)}
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-[#a8a1bc]">{label}</div>
          <div className="mt-1 text-sm font-semibold text-white">{price}</div>
        </div>
      </div>
      <div className="mt-3 inline-flex rounded-full bg-[#123b2c] px-2 py-1 text-[10px] font-medium text-[#35d27f]">{change}</div>
    </motion.div>
  );
}

function MinimalCard({ title, children, delay = 0 }: { title: string; children: ReactNode; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className="rounded-[24px] border border-white/10 bg-[rgba(17,11,31,0.7)] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] backdrop-blur-sm"
    >
      <div className="text-[10px] uppercase tracking-[0.22em] text-[#a8a1bc]">{title}</div>
      <div className="mt-4">{children}</div>
    </motion.article>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion() ?? false;
  const tickerLoop = [...marketTicker, ...marketTicker];

  return (
    <main className="relative overflow-hidden bg-[#10052a] text-white">
      <div className="relative isolate overflow-hidden">
        <AnimatedBackground reduceMotion={reduceMotion} />
        <SiteHeader />

        <section className="relative mx-auto max-w-[1280px] px-4 pb-16 pt-10 md:px-6 lg:px-8 lg:pt-16">
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[#f7d27a] backdrop-blur-sm">
                <Sparkles size={12} /> Crypto for the future
              </div>

              <h1 className="mt-6 text-5xl font-black tracking-[-0.08em] text-white md:text-7xl xl:text-[88px]">
                Buy, Sell and<br />Trade Digital Assets.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#c7bedf] md:text-lg">
                Track the markets, manage your portfolio and move with greater clarity from one intelligent platform.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/register" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff8a5b] px-6 py-3.5 text-sm font-semibold text-[#170d24] shadow-[0_18px_35px_rgba(255,138,91,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff9d73]">
                  Get Started
                  <ArrowRight size={16} />
                </Link>
                <Link href="/markets" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#a98dff] hover:bg-white/10">
                  Explore Markets
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#c7bedf]">
                {['Portfolio first', 'Market data', 'Signals ready'].map((item) => (
                  <div key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <MinimalCard key={metric.label} title={metric.label} delay={0.06 * index}>
                    <div className="text-2xl font-semibold tracking-[-0.05em] text-white">{metric.value}</div>
                    <div className="mt-1 text-sm text-[#35d27f]">{metric.delta}</div>
                  </MinimalCard>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="relative z-10 hidden min-h-[520px] lg:block">
              <div className="absolute -left-8 top-16 opacity-80">
                <FloatingAssetCard symbol="BTC" label="Bitcoin" price="$68,420.12" change="+2.84%" accent="from-[#f7931a] to-[#f5d998]" className="w-[190px]" />
              </div>
              <div className="absolute left-14 top-0 opacity-90">
                <FloatingAssetCard symbol="ETH" label="Ethereum" price="$3,810.56" change="+1.67%" accent="from-[#7f90ff] to-[#dfe4ff]" className="w-[210px]" />
              </div>
              <div className="absolute right-2 top-28 opacity-80">
                <FloatingAssetCard symbol="SOL" label="Solana" price="$164.90" change="+4.12%" accent="from-[#27d8c4] to-[#a7fff6]" className="w-[190px]" />
              </div>

              <div className="absolute inset-x-12 bottom-6 rounded-[34px] border border-white/10 bg-[rgba(12,8,23,0.75)] p-5 shadow-[0_30px_80px_rgba(32,18,76,0.52)] backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.24em] text-[#a8a1bc]">Portfolio value</div>
                    <div className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-white">$34,010.00</div>
                  </div>
                  <div className="rounded-full border border-[#35d27f]/30 bg-[#123b2c] px-3 py-1.5 text-xs font-medium text-[#35d27f]">+2.25%</div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#a8a1bc]">24h change</div>
                    <div className="mt-3 text-2xl font-semibold text-white">+$1,810.05</div>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#a8a1bc]">Active signals</div>
                    <div className="mt-3 text-2xl font-semibold text-white">12</div>
                  </div>
                </div>

                <div className="mt-5 flex h-24 items-end gap-2">
                  {[38, 52, 58, 48, 76, 62, 88, 72].map((height, index) => (
                    <motion.div
                      key={height + index}
                      className="w-full rounded-t-[12px] bg-gradient-to-t from-[#7d61ff] via-[#9a87ff] to-[#ebdcff]"
                      style={{ height: `${height}%` }}
                      animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.82] }}
                      transition={{ duration: 4 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-[1280px] px-4 pb-6 md:px-6 lg:px-8">
          <div className="overflow-hidden rounded-full border border-white/10 bg-[rgba(16,9,31,0.8)] shadow-[0_18px_50px_rgba(10,5,21,0.34)] backdrop-blur-md">
            <motion.div className="flex w-max gap-3 px-4 py-3" animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }} transition={reduceMotion ? undefined : { duration: 26, repeat: Infinity, ease: "linear" }}>
              {tickerLoop.map((item, index) => (
                <div key={`${item.symbol}-${index}`} className="flex min-w-[210px] items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#a8a1bc]">{item.symbol}</div>
                    <div className="mt-1 font-medium text-white">{item.value}</div>
                  </div>
                  <div className="text-[#35d27f]">{item.delta}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 lg:px-8">
        <div className="rounded-[30px] border border-white/10 bg-[rgba(17,11,31,0.66)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-[#a8a1bc]">Your portfolio. one intelligent view.</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">Connect your wallet</h2>
            </div>
            <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff8a5b] hover:text-[#ffbe9e]">
              Open Dashboard
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {walletAssets.map((asset, index) => (
              <motion.div
                key={asset.symbol}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${asset.accent} text-sm font-bold text-[#120b20]`}>
                    {asset.symbol.slice(0, 1)}
                  </div>
                  <div className="text-xs font-medium text-[#35d27f]">{asset.change}</div>
                </div>
                <div className="mt-5 text-[10px] uppercase tracking-[0.22em] text-[#a8a1bc]">{asset.label}</div>
                <div className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">{asset.price}</div>
                <div className="mt-4 h-10 rounded-full bg-[rgba(255,255,255,0.03)]">
                  <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-[#ff8a5b] to-[#ffcf70]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[30px] border border-white/10 bg-[#f7f4ff] p-6 text-[#11101a] shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:p-8">
            <div className="text-[10px] uppercase tracking-[0.24em] text-[#625b7c]">Built for clearer market decisions</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] md:text-5xl">NEXORA makes fast execution feel calm.</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#48405f]">
              The platform is intended to help users monitor portfolio movement, compare assets, and stay oriented when the market gets noisy.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { value: "25M+", label: "Market data points" },
                { value: "140+", label: "Supported markets" },
                { value: "56M+", label: "Tracked transactions" },
                { value: "24/7", label: "Platform availability" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[22px] border border-[#e7defb] bg-white/80 p-4">
                  <div className="text-3xl font-semibold tracking-[-0.06em] text-[#11101a]">{stat.value}</div>
                  <div className="mt-2 text-sm text-[#5a5470]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="rounded-[30px] border border-white/10 bg-[rgba(17,11,31,0.7)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.14)] md:p-8">
            <div className="text-[10px] uppercase tracking-[0.24em] text-[#a8a1bc]">Platform focus</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white">Designed for confident decisions.</h2>
            <div className="mt-6 space-y-4">
              {[
                'Real-time market visibility',
                'A calmer portfolio overview',
                'Operational admin controls',
                'Clear referral and payout flows',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/5 p-3 text-sm text-[#d9d3ea]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7d27a] text-[#170d24]">
                    <Gauge size={14} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-[10px] uppercase tracking-[0.24em] text-[#a8a1bc]">How it works</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">Built for a smoother trading routine.</h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }} className="relative rounded-[24px] border border-white/10 bg-[rgba(17,11,31,0.7)] p-5">
              <div className="flex items-center justify-between">
                <div className="text-[#f7d27a]">{step.number}</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-[#ff8a5b]">
                  {index === 0 ? <CirclePlay size={16} /> : index === 1 ? <Wallet2 size={16} /> : index === 2 ? <TrendingUp size={16} /> : <Layers3 size={16} />}
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c7bedf]">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[30px] border border-white/10 bg-[rgba(11,7,24,0.8)] p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.24em] text-[#a8a1bc]">Market intelligence</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">Premium market data, presented clearly.</h2>

            <div className="mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.02)]">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="border-b border-white/10 text-[#a8a1bc]">
                    <tr>
                      <th className="px-4 py-4 font-medium">Asset</th>
                      <th className="px-4 py-4 font-medium">Price</th>
                      <th className="px-4 py-4 font-medium">24H</th>
                      <th className="px-4 py-4 font-medium">7D</th>
                      <th className="px-4 py-4 font-medium">Volume</th>
                      <th className="px-4 py-4 font-medium">Market cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row) => (
                      <tr key={row.symbol} className="border-b border-white/10 text-[#dfe5ff] last:border-b-0">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7d27a] text-xs font-bold text-[#170d24]">{row.symbol.slice(0, 1)}</div>
                            <div>
                              <div className="font-medium text-white">{row.name}</div>
                              <div className="text-[10px] uppercase tracking-[0.2em] text-[#a8a1bc]">{row.symbol}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 font-medium text-white">{row.price}</td>
                        <td className="px-4 py-4 text-[#35d27f]">{row.day}</td>
                        <td className="px-4 py-4 text-[#35d27f]">{row.week}</td>
                        <td className="px-4 py-4">{row.volume}</td>
                        <td className="px-4 py-4">{row.cap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[rgba(17,11,31,0.7)] p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.24em] text-[#a8a1bc]">Why choose NEXORA</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white">A serious platform for active users.</h2>

            <div className="mt-6 space-y-4">
              {[
                { title: 'Security', text: 'Operational controls built to keep user and admin experience coherent.', icon: ShieldCheck },
                { title: 'Protection', text: 'Risk-aware workflows and better visibility into sensitive actions.', icon: Gauge },
                { title: 'Transparency', text: 'Clear reporting for balances, payouts, and referrals across the product.', icon: BarChart3 },
                { title: 'Market intelligence', text: 'Live market context, portfolio insight, and decision-ready summaries.', icon: TrendingUp },
              ].map(({ title, text, icon: Icon }) => (
                <div key={title} className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22113b] text-[#f7d27a]">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">{title}</div>
                      <div className="mt-1 text-sm leading-6 text-[#c7bedf]">{text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-white/10 bg-[#f7f4ff] p-6 text-[#11101a] shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:p-8">
            <div className="text-[10px] uppercase tracking-[0.24em] text-[#625b7c]">Portfolio experience</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] md:text-5xl">Manage your portfolio with confidence.</h2>
            <div className="mt-6 space-y-4">
              {['Real-time tracking', 'Portfolio allocation', 'Transaction history', 'Market visibility'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[18px] border border-[#e6dcff] bg-white/80 p-3 text-sm text-[#302a45]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#efe9ff] text-[#5d49b8]">
                    <TrendingUp size={14} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[rgba(17,11,31,0.7)] p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.24em] text-[#a8a1bc]">Grow with NEXORA</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white">Referral earnings and distribution.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#a8a1bc]">Referral earnings</div>
                <div className="mt-3 text-3xl font-semibold text-white">$12.4K</div>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#a8a1bc]">Conversions</div>
                <div className="mt-3 text-3xl font-semibold text-white">421</div>
              </div>
            </div>
            <Link href="/dashboard/referral" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#ff8a5b] px-5 py-3 text-sm font-semibold text-[#170d24]">Start Referring</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(116,79,255,0.28),rgba(17,11,31,0.95)_45%)] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.2)] md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-[#a8a1bc]">Next move</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">Your next market move starts here.</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-[#d2c8f8]">Create your account and explore a clearer way to monitor your digital assets.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="inline-flex items-center justify-center rounded-full bg-[#ff8a5b] px-6 py-3.5 text-sm font-semibold text-[#170d24]">Get Started</Link>
              <Link href="/login" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white">Sign In</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
