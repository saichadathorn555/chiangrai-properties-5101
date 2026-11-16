/** Simple CSS charts for Insight reports. Every value shown here is copied from the report text/tables; nothing is derived or estimated. */
type Row = { label: string; value: number; text: string; highlight?: boolean };

export function BarChart({ title, rows, note }: { title: string; rows: Row[]; note?: string }) {
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
    </figure>
  );
}

export function ChartGrid({ children }: { children: React.ReactNode }) {
  return <div className="mt-6 grid gap-4 md:grid-cols-2">{children}</div>;
}

export function Timeline({ title, items }: { title: string; items: { when: string; what: string }[] }) {
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
    </figure>
  );
}
