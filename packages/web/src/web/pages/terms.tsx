import { Link } from "wouter";
import { useT } from "../i18n/context";
import { SITE } from "../lib/site";
import { LegalPage } from "../components/site/legal-page";

export default function TermsPage() {
  const { t } = useT();
  const s = t.terms;
  const link = "underline underline-offset-4 hover:text-clay";
  return (
    <LegalPage title={s.title} updated={s.updated}>
      <p>
        {s.before}
        <Link to="/privacy" className={link}>{s.link}</Link>
        {s.after}
      </p>
      <p className="mt-8">
        {s.contactLabel}: <a href={`mailto:${SITE.email}`} className={`${link} [overflow-wrap:anywhere]`}>{SITE.email}</a>
        <span className="mx-2 text-sand" aria-hidden>|</span>
        <a href="tel:+66988488190" className={link}>{SITE.phone}</a>
      </p>
    </LegalPage>
  );
}
