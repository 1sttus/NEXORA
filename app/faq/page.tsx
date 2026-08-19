const faqs = [
  {
    question: "What is NEXORA?",
    answer: "NEXORA is a digital asset and market intelligence platform designed to unify portfolio visibility, market watchlists, and decision support in a disciplined environment.",
  },
  {
    question: "Does the platform guarantee returns?",
    answer: "No. NEXORA is designed to improve clarity, not promise guaranteed profits or risk-free outcomes.",
  },
  {
    question: "How are market prices presented?",
    answer: "Market values are presented as configurable provider data with clear status indicators such as live, near-real-time, or delayed, depending on source availability.",
  },
  {
    question: "How are financial records managed?",
    answer: "Financial operations are designed around server-side validation and ledger-based records rather than relying on client-side balance state.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-[#F5F4EF]">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#A5ABB4]">FAQ</p>
        <h1 className="mt-4 text-5xl tracking-[-0.05em] text-[#F5F4EF]">Frequently asked questions</h1>

        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-[24px] border border-[#1D242A] bg-[#0F1518] p-6">
              <h2 className="text-xl font-medium text-[#F5F4EF]">{item.question}</h2>
              <p className="mt-3 text-base leading-7 text-[#A5ABB4]">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
