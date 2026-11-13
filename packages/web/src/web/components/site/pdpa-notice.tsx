import { Link } from "wouter";
import { useT } from "../../i18n/context";

/** One-line PDPA notice shown directly above every form's submit button (no consent checkbox). */
export function PdpaNotice({ className = "" }: { className?: string }) {
  const { t } = useT();
  return (
    <p className={`text-[13px] leading-relaxed text-stone ${className}`}>
      {t.pdpa.before}
      <Link to="/privacy" className="text-ink underline underline-offset-4 hover:text-clay">{t.pdpa.link}</Link>
      {t.pdpa.after}
    </p>
  );
}
