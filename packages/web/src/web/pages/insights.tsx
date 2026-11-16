import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { EngagementBar } from "../components/site/engagement-bar";
import { MarketReviewArticle, MarketReviewMeta } from "./market-review-content";

/** English-only draft samples for the Insight & Market section. The market review renders the approved draft report text. */
const TITLE = "Chiang Rai Property Market Review Q4 2026";

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
    <InsightShell eyebrow="Insight & Market · Latest Research" title={TITLE}>
      <MarketReviewMeta />
      <EngagementBar slug="market-review-q4-2026" title={TITLE} />
      <MarketReviewArticle />
      <EngagementBar slug="market-review-q4-2026" title={TITLE} />
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
