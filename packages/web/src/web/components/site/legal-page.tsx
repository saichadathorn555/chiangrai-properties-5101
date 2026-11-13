import { useT } from "../../i18n/context";

/** Shared shell for the Privacy Policy and Terms of Use: draft banner, page title and "last updated" line. */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  const { t } = useT();
  return (
    <>
      <div className="border-b border-[#B89270] bg-[#F3E3D3] px-6 py-3 text-center text-[13px] font-semibold tracking-[0.18em] text-[#77230D] uppercase">
        {t.draftBanner}
      </div>
      <section className="wrap pt-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="reveal d1 text-[34px] font-medium tracking-[0.08em] text-[#C3A38A] md:text-[52px]">{title}</h1>
          <p className="reveal d2 mt-3 text-[14px] text-stone">{updated}</p>
          <div className="reveal d3 mt-10 border-t border-line pt-10 text-[16px] leading-[1.85] text-ink/85">{children}</div>
        </div>
      </section>
    </>
  );
}
