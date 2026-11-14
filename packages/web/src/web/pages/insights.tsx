import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Download } from "lucide-react";

/** English-only draft samples for the Insight & Market section. No figures are published here on purpose. */
const SECTIONS = ["Residential", "Commercial & Retail", "Land", "Infrastructure & Tourism", "Pros & Cons", "Outlook"];

function DraftBanner() {
  return (
    <div className="border-b border-[#B89270] bg-[#F3E3D3] px-6 py-3 text-center text-[13px] font-semibold tracking-[0.18em] text-[#77230D] uppercase">
      Draft Sample — Not for Publication
    </div>
  );
}

function InsightShell({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  useEffect(() => { document.title = `${title} — Chiangrai Properties`; }, [title]);
  return (
    <>
      <DraftBanner />
      <section className="wrap pt-14 pb-24">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-[12px] tracking-[0.16em] text-stone uppercase hover:text-[#927144]"><ArrowLeft className="size-3.5" /> Home</Link>
          <p className="eyebrow mt-8 text-[#927144]">{eyebrow}</p>
          <h1 className="mt-3 font-serif text-[34px] leading-[1.1] text-ink md:text-[52px]">{title}</h1>
          {children}
        </div>
      </section>
    </>
  );
}

export function MarketReviewPage() {
  return (
    <InsightShell eyebrow="Insight & Market · Latest Research" title="Chiang Rai Property Market Review Q4 2026">
      <p className="mt-6 text-[16px] leading-[1.8] text-stone">An overview of the Chiang Rai property market across residential, commercial, land and related sectors for the fourth quarter of 2026.</p>
      {/* oxlint-disable-next-line jsx-a11y/anchor-is-valid -- Placeholder until the PDF is ready. */}
      <a href="#" className="mt-8 inline-flex items-center gap-2.5 bg-[#927144] px-6 py-3.5 text-[12px] font-medium tracking-[0.16em] text-[#FBF8F4] uppercase transition-colors hover:bg-[#7d5f37]">
        <Download className="size-4" strokeWidth={1.5} /> Download PDF
      </a>
      <div className="mt-14 border-t border-line">
        {SECTIONS.map((h) => (
          <section key={h} className="border-b border-line py-8">
            <h2 className="font-serif text-[26px] leading-tight text-ink md:text-[30px]">{h}</h2>
            <p className="mt-3 text-[14px] text-stone italic">Content coming soon</p>
          </section>
        ))}
      </div>
    </InsightShell>
  );
}

export function TrendingTopicPage() {
  return (
    <InsightShell eyebrow="Insight & Market · Trending Topic" title="Trending Topic">
      <p className="mt-6 text-[16px] leading-[1.8] text-stone">Coming soon</p>
    </InsightShell>
  );
}
