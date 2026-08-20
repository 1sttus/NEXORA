import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const faqs = [
  {
    question: "What is NEXORA?",
    answer:
      "NEXORA is a digital asset and market intelligence platform designed to unify portfolio visibility, market watchlists, and decision support in a disciplined environment.",
  },
  {
    question: "Does the platform guarantee returns?",
    answer: "No. NEXORA is designed to improve clarity, not promise guaranteed profits or risk-free outcomes.",
  },
  {
    question: "How are market prices presented?",
    answer:
      "Market values are presented as configurable provider data with clear status indicators such as live, near-real-time, or delayed depending on source availability.",
  },
  {
    question: "How are financial records managed?",
    answer:
      "Financial operations are designed around server-side validation and ledger-based records rather than relying on client-side balance state.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-4 py-10 lg:px-8 lg:py-14">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">FAQ</p>
        <h1 className="mt-4 text-5xl font-medium tracking-[-0.07em] text-[var(--text)] md:text-6xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
          A few answers about the product structure, account flow, and the principles behind the interface.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <h2 className="text-xl font-medium text-[var(--text)]">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
