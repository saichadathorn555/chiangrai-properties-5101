import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useT } from "../i18n/context";
import { lineHref, whatsappHref } from "../lib/site";
import { LineIcon, WhatsAppIcon } from "../components/site/layout";

function ContactButtons({ center = false }: { center?: boolean }) {
  const { t } = useT();
  const c = t.coAgent;
  return (
    <div className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
      <a href={lineHref()} target="_blank" rel="noreferrer" className="btn-ink"><LineIcon /> {c.line}</a>
      <a href={whatsappHref()} target="_blank" rel="noreferrer" className="btn-line"><WhatsAppIcon /> {c.whatsapp}</a>
      <Link to="/contact" className="btn-line">{c.contact} <ArrowRight className="size-3.5" /></Link>
    </div>
  );
}

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-5 border-b border-line pb-6">
      <span className="font-serif text-clay">{n}</span>
      <h2 className="display translated-heading min-w-0 [--heading-size:34px] md:[--heading-size:48px]">{title}</h2>
    </div>
  );
}

export default function BecomeCoAgentPage() {
  const { t } = useT();
  const c = t.coAgent;
  return (
    <>
      <section className="wrap pt-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="min-w-0 md:col-span-6 md:pt-6">
            <p className="eyebrow reveal d1 text-clay">{c.eyebrow}</p>
            <h1 className="display translated-heading reveal d2 mt-4 [--heading-size:44px] md:[--heading-size:68px]">{c.title}</h1>
            <p className="reveal d3 mt-7 max-w-xl text-[17px] leading-[1.75] text-ink/80">{c.body}</p>
            <div className="reveal d4 mt-10"><ContactButtons /></div>
          </div>
          <div className="reveal d3 md:col-span-5 md:col-start-8">
            <div className="aspect-[4/5] overflow-hidden bg-nude">
              <img src="/images/retail-2.jpg" alt="" className="size-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="wrap mt-28 md:mt-36">
        <SectionHead n="01" title={c.whoTitle} />
        <ul className="grid gap-10 pt-10 md:grid-cols-3">
          {c.who.map((w) => (
            <li key={w}>
              <div className="h-px w-10 bg-clay" />
              <p className="mt-5 font-serif text-[22px] leading-snug md:text-[24px]">{w}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-28 bg-nude/70 grain md:mt-36">
        <div className="wrap py-20 md:py-28">
          <SectionHead n="02" title={c.providesTitle} />
          <ul className="grid gap-x-12 gap-y-10 pt-10 md:grid-cols-2 lg:grid-cols-3">
            {c.provides.map((p) => (
              <li key={p.t}>
                <h3 className="font-serif text-[24px] leading-tight">{p.t}</h3>
                <p className="mt-3 text-stone">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap mt-28 md:mt-36">
        <SectionHead n="03" title={c.doesTitle} />
        <ul className="grid gap-x-12 md:grid-cols-2">
          {c.does.map((d, i) => (
            <li key={d} className="flex gap-5 border-b border-line py-6">
              <span className="font-serif text-clay">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[16px] leading-relaxed text-ink/85">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="join" className="wrap mt-28 md:mt-36">
        <SectionHead n="04" title={c.joinTitle} />
        <ol className="grid gap-10 pt-10 md:grid-cols-2 lg:grid-cols-4">
          {c.steps.map((s, i) => (
            <li key={s.t} className="border-t-2 border-peach pt-6">
              <span className="eyebrow text-clay">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-serif text-[24px] leading-tight">{s.t}</h3>
              <p className="mt-3 text-stone">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap mt-28 md:mt-36">
        <div className="bg-peach/60 px-8 py-16 text-center md:px-20 md:py-20">
          <h2 className="display translated-heading mx-auto max-w-3xl [--heading-size:40px] md:[--heading-size:56px]">{c.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-ink/75">{c.ctaBody}</p>
          <div className="mt-10"><ContactButtons center /></div>
        </div>
      </section>
    </>
  );
}
