/** Simple CSS charts for Insight reports. Every value shown here is copied from the report text/tables; nothing is derived or estimated. */
type Row = { label: string; value: number; text: string; highlight?: boolean };

const Source = ({ children }: { children: React.ReactNode }) => <p className="mt-3 text-[11px] tracking-[0.02em] text-stone/90 italic">Source: {children}</p>;
const Cap = ({ children }: { children: React.ReactNode }) => <figcaption className="text-[12px] font-semibold tracking-[0.1em] text-[#927144] uppercase">{children}</figcaption>;

export function BarChart({ title, rows, note, source }: { title: string; rows: Row[]; note?: string; source?: string }) {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <figure className="border border-[#E2D2B8] bg-[#FBF7F1] p-4">
      <figcaption className="text-[12px] font-semibold tracking-[0.1em] text-[#927144] uppercase">{title}</figcaption>
      <div className="mt-4 space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[88px_1fr_auto] items-center gap-3 text-[13px] sm:grid-cols-[130px_1fr_auto]">
            <span className="leading-tight text-ink">{r.label}</span>
            <div className="h-3 min-w-0" aria-hidden>
              <div className={`h-full ${r.highlight ? "bg-[#927144]" : "bg-[#D9C3A0]"}`} style={{ width: `${Math.max(2, (r.value / max) * 100)}%` }} />
            </div>
            <span className="text-right whitespace-nowrap text-stone tabular-nums">{r.text}</span>
          </div>
        ))}
      </div>
      {note && <p className="mt-3 text-[12px] text-stone">{note}</p>}
      {source && <Source>{source}</Source>}
    </figure>
  );
}

export function ChartGrid({ children }: { children: React.ReactNode }) {
  return <div className="mt-6 grid gap-4 md:grid-cols-2">{children}</div>;
}

export function Timeline({ title, items, source }: { title: string; items: { when: string; what: string }[]; source?: string }) {
  return (
    <figure className="mt-6 border border-[#E2D2B8] bg-[#FBF7F1] p-4">
      <figcaption className="text-[12px] font-semibold tracking-[0.1em] text-[#927144] uppercase">{title}</figcaption>
      <ol className="relative mt-5 grid gap-5 md:grid-cols-4 md:gap-4">
        <span className="absolute top-[7px] right-0 left-0 hidden h-px bg-[#D9C3A0] md:block" aria-hidden />
        {items.map((i) => (
          <li key={i.when + i.what} className="relative flex gap-3 md:block">
            <span className="relative z-10 mt-1 block size-3.5 shrink-0 rounded-full border-2 border-[#927144] bg-[#FBF7F1] md:mt-0" aria-hidden />
            <div className="md:mt-3">
              <p className="text-[13px] font-semibold text-ink">{i.when}</p>
              <p className="mt-1 text-[13px] leading-snug text-stone">{i.what}</p>
            </div>
          </li>
        ))}
      </ol>
      {source && <Source>{source}</Source>}
    </figure>
  );
}

/** Section photo with credit line (Wikimedia Commons licences). */
export function Photo({ src, alt, caption, credit, href, className = "" }: { src: string; alt: string; caption: string; credit: string; href: string; className?: string }) {
  return (
    <figure className={`mb-8 ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
      <figcaption className="mt-2 text-[11px] leading-snug text-stone">
        {caption} · Photo: <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#927144]">{credit} (Wikimedia Commons)</a>
      </figcaption>
    </figure>
  );
}

/** Pull-quote: only sentences already in the report. */
export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 border-l-4 border-[#927144] bg-[#FBF7F1] px-5 py-5 font-serif text-[20px] leading-snug text-ink italic md:px-7 md:text-[24px]">
      <span className="mb-2 block font-sans text-[11px] font-semibold tracking-[0.16em] text-[#927144] not-italic uppercase">Key insight</span>
      “{children}”
    </blockquote>
  );
}

export function Donut({ title, value, text, label, rest, source }: { title: string; value: number; text: string; label: string; rest: string; source: string }) {
  const r = 42, c = 2 * Math.PI * r;
  return (
    <figure className="border border-[#E2D2B8] bg-[#FBF7F1] p-4">
      <Cap>{title}</Cap>
      <div className="mt-4 flex items-center gap-5">
        <svg viewBox="0 0 100 100" className="size-28 shrink-0 -rotate-90 sm:size-32" role="img" aria-label={`${text} ${label}`}>
          <circle cx="50" cy="50" r={r} fill="none" stroke="#E8DAC3" strokeWidth="14" />
          <circle cx="50" cy="50" r={r} fill="none" stroke="#927144" strokeWidth="14" strokeDasharray={`${(value / 100) * c} ${c}`} />
        </svg>
        <div className="min-w-0">
          <p className="font-serif text-[34px] leading-none text-ink">{text}</p>
          <p className="mt-2 flex items-center gap-2 text-[13px] text-ink"><span className="size-2.5 shrink-0 bg-[#927144]" aria-hidden />{label}</p>
          <p className="mt-1 flex items-center gap-2 text-[13px] text-stone"><span className="size-2.5 shrink-0 bg-[#E8DAC3]" aria-hidden />{rest}</p>
        </div>
      </div>
      <Source>{source}</Source>
    </figure>
  );
}

export function ColumnChart({ title, rows, unit = "", note, source }: { title: string; rows: Row[]; unit?: string; note?: string; source: string }) {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <figure className="border border-[#E2D2B8] bg-[#FBF7F1] p-4">
      <Cap>{title}</Cap>
      <div className="mt-5 flex h-44 items-end justify-around gap-3 border-b border-[#D9C3A0] px-2">
        {rows.map((r) => (
          <div key={r.label} className="flex h-full w-full max-w-[72px] flex-col items-center justify-end">
            <span className="mb-1 text-[13px] font-semibold text-ink tabular-nums">{r.text}{unit}</span>
            <div className={`w-full ${r.highlight ? "bg-[#927144]" : "bg-[#D9C3A0]"}`} style={{ height: `${Math.max(3, (r.value / max) * 80)}%` }} aria-hidden />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-around gap-3 px-2">
        {rows.map((r) => <span key={r.label} className="w-full max-w-[72px] text-center text-[12px] leading-tight text-stone">{r.label}</span>)}
      </div>
      {note && <p className="mt-3 text-[12px] text-stone">{note}</p>}
      <Source>{source}</Source>
    </figure>
  );
}

export function KpiRow({ items, source }: { items: { value: string; label: string }[]; source: string }) {
  return (
    <figure className="mt-6">
      <div className="grid grid-cols-2 gap-px border border-[#E2D2B8] bg-[#E2D2B8] md:grid-cols-3">
        {items.map((k) => (
          <div key={k.label} className="bg-[#FBF7F1] p-4">
            <p className="font-serif text-[21px] leading-none text-[#927144] tabular-nums md:text-[26px]">{k.value}</p>
            <p className="mt-2 text-[12px] leading-snug text-stone">{k.label}</p>
          </div>
        ))}
      </div>
      <Source>{source}</Source>
    </figure>
  );
}
