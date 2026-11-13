import { Link } from "wouter";
import { useT } from "../i18n/context";
import { SITE } from "../lib/site";
import { LegalPage } from "../components/site/legal-page";

const PDPC = "www.pdpc.or.th";

/** Turns the regulator's web address into a link wherever it appears in a paragraph. */
function withPdpcLink(text: string) {
  const i = text.indexOf(PDPC);
  if (i < 0) return text;
  return <>{text.slice(0, i)}<a href={`https://${PDPC}`} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-clay">{PDPC}</a>{text.slice(i + PDPC.length)}</>;
}

export default function PrivacyPage() {
  const { t } = useT();
  const p = t.privacy;
  const link = "underline underline-offset-4 hover:text-clay";
  return (
    <LegalPage title={p.title} updated={p.updated}>
      <div className="space-y-12">
        {p.sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-serif text-[26px] leading-tight text-ink md:text-[30px]">{s.h}</h2>
            <div className="mt-4 space-y-4">
              {s.blocks.map((b, i) =>
                "ul" in b ? (
                  <ul key={i} className="list-disc space-y-2 pl-6 marker:text-clay">
                    {b.ul.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                ) : (
                  <p key={i}>{withPdpcLink(b.p)}</p>
                ),
              )}
            </div>
          </section>
        ))}
        <section>
          <h2 className="font-serif text-[26px] leading-tight text-ink md:text-[30px]">{p.contactTitle}</h2>
          <div className="mt-4 space-y-1.5">
            <p className="font-medium text-ink">{p.contactName}</p>
            <p>{p.emailLabel}: <a href={`mailto:${SITE.email}`} className={`${link} [overflow-wrap:anywhere]`}>{SITE.email}</a></p>
            <p>{p.phoneLabel}: <a href="tel:+66988488190" className={link}>{SITE.phone}</a></p>
            <p>{p.chatLabel}: {p.chatBefore}<Link to="/contact" className={link}>{p.chatLink}</Link>{p.chatAfter}</p>
            <p>{p.hoursLabel}: {p.hours}</p>
          </div>
        </section>
      </div>
    </LegalPage>
  );
}
