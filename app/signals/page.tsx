import { ArrowRight } from "lucide-react";

const signalCards = [
  { title: "BTC Breakout", direction: "Long", entry: "$68,240", tp: "$71,920", sl: "$66,710", risk: "2.4%" },
  { title: "ETH Trend", direction: "Long", entry: "$3,790", tp: "$4,050", sl: "$3,600", risk: "1.8%" },
  { title: "SOL Momentum", direction: "Long", entry: "$161.20", tp: "$176.00", sl: "$152.00", risk: "3.0%" },
  { title: "XAU Hedge", direction: "Neutral", entry: "$2,420", tp: "$2,460", sl: "$2,390", risk: "1.2%" },
];

export default function SignalsPage() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-[#F5F4EF]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <header className="rounded-[28px] border border-[#1D242A] bg-[#0F1518] p-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[#A5ABB4]">Signals</p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="text-4xl tracking-[-0.05em] text-[#F5F4EF]">Premium signal intelligence</h1>
            <button className="inline-flex items-center gap-2 rounded-full bg-[#C9A96A] px-4 py-2 text-sm font-medium text-[#11161B]">
              Explore marketplace
              <ArrowRight size={16} />
            </button>
          </div>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {signalCards.map((signal) => (
            <article key={signal.title} className="rounded-[24px] border border-[#1D242A] bg-[#0F1518] p-5">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-[#F5F4EF]">{signal.title}</div>
                <span className="rounded-full bg-[#1D2B26] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[#71D99E]">
                  {signal.direction}
                </span>
              </div>

              <div className="mt-6 space-y-3 text-sm text-[#A5ABB4]">
                <div className="flex justify-between"><span>Entry</span><span className="text-[#F5F4EF]">{signal.entry}</span></div>
                <div className="flex justify-between"><span>Take Profit</span><span className="text-[#F5F4EF]">{signal.tp}</span></div>
                <div className="flex justify-between"><span>Stop Loss</span><span className="text-[#F5F4EF]">{signal.sl}</span></div>
                <div className="flex justify-between"><span>Risk</span><span className="text-[#F5F4EF]">{signal.risk}</span></div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
