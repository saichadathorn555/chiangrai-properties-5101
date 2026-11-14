import { useT } from "../i18n/context";
import { ContactInquiryForm } from "../components/site/contact-inquiry-form";
import { SITE, lineHref } from "../lib/site";
import { SocialIcons } from "../components/site/social-icons";

export default function ContactPage() {
  const { t } = useT();
  return (
    <section className="wrap pt-14">
      <h1 className="reveal d1 text-[40px] font-medium tracking-[0.12em] text-[#C3A38A] md:text-[56px]">CONTACT</h1>
      <p className="reveal d2 mt-3 text-[16px] leading-relaxed text-stone">{t.contact.title}</p>
      <div className="mt-10 grid gap-12 border-t border-line pt-10 md:grid-cols-12 md:gap-8">
        <div className="space-y-7 md:col-span-4">
          <div>
            <p className="eyebrow text-stone">Phone</p>
            <a href="tel:+66988488190" className="mt-2 block text-[16px] text-ink underline-offset-4 hover:text-bronze hover:underline">{SITE.phone}</a>
          </div>
          <div>
            <p className="eyebrow text-stone">Email</p>
            <a href={`mailto:${SITE.email}`} className="mt-2 block text-[16px] text-ink underline-offset-4 hover:text-[#B89270] hover:underline [overflow-wrap:anywhere]">{SITE.email}</a>
          </div>
          <figure>
            <p className="eyebrow mb-3 text-stone">Line Official QR Code</p>
            <a href={lineHref()} target="_blank" rel="noreferrer" aria-label="Chat with Chiangrai Properties on LINE" className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze">
              <img src="/images/line-qr-official-bronze.png" alt="Official Chiangrai Properties LINE QR code" className="h-[3cm] w-[3cm] border border-sand" />
            </a>
            <figcaption className="mt-2 text-[11px] text-stone">Scan or tap to chat on LINE</figcaption>
          </figure>
          <SocialIcons />
        </div>
        <div className="min-w-0 md:col-span-7 md:col-start-6">
          <ContactInquiryForm />
        </div>
      </div>
    </section>
  );
}
