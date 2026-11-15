import { useEffect, useRef, useState } from "react";
import { Check, Eye, Heart, Link2, Share2 } from "lucide-react";
import { client } from "../../lib/api";

type Slug = "market-review-q4-2026";
type Stats = { views: number; likes: number };

/** Shared counter state so the top and bottom bars stay in sync. View counted once per browser session; like once per browser. */
const listeners = new Set<(s: Stats) => void>();
let cache: Stats | null = null;
let started = false;
function publish(s: Stats) { cache = s; listeners.forEach((l) => l(s)); }

function useStats(slug: Slug) {
  const [stats, setStats] = useState<Stats | null>(cache);
  useEffect(() => {
    listeners.add(setStats);
    if (!started) {
      started = true;
      const key = `crp-viewed-${slug}`;
      const counted = sessionStorage.getItem(key);
      (counted ? client.insights.stats({ slug }) : client.insights.view({ slug }))
        .then((s) => { if (!counted) sessionStorage.setItem(key, "1"); publish(s); })
        .catch(() => publish({ views: 0, likes: 0 }));
    }
    return () => { listeners.delete(setStats); };
  }, [slug]);
  return stats;
}

export function EngagementBar({ slug, title }: { slug: Slug; title: string }) {
  const stats = useStats(slug);
  const likeKey = `crp-liked-${slug}`;
  const [liked, setLiked] = useState(() => localStorage.getItem(likeKey) === "1");
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sync = () => setLiked(localStorage.getItem(likeKey) === "1");
    window.addEventListener("crp-like", sync);
    return () => window.removeEventListener("crp-like", sync);
  }, [likeKey]);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    window.addEventListener("mousedown", close);
    return () => window.removeEventListener("mousedown", close);
  }, [open]);

  async function toggleLike() {
    const next = !liked;
    localStorage.setItem(likeKey, next ? "1" : "0");
    setLiked(next);
    window.dispatchEvent(new Event("crp-like"));
    if (cache) publish({ ...cache, likes: Math.max(0, cache.likes + (next ? 1 : -1)) });
    try { publish(await client.insights.like({ slug, liked: next })); } catch { /* keep optimistic count */ }
  }

  const url = typeof window !== "undefined" ? window.location.href.split("#")[0]! : "";
  const u = encodeURIComponent(url);
  const tx = encodeURIComponent(title);
  const targets = [
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { label: "LINE", href: `https://social-plugins.line.me/lineit/share?url=${u}` },
    { label: "WhatsApp", href: `https://wa.me/?text=${tx}%20${u}` },
    { label: "X", href: `https://twitter.com/intent/tweet?url=${u}&text=${tx}` },
  ];

  async function share() {
    const mobile = window.matchMedia("(pointer: coarse)").matches;
    if (mobile && navigator.share) {
      try { await navigator.share({ title, url }); } catch { /* cancelled */ }
      return;
    }
    setOpen((o) => !o);
  }

  async function copy() {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* ignore */ }
  }

  const btn = "inline-flex items-center gap-2 border border-line px-3.5 py-2 text-[12px] tracking-[0.12em] uppercase transition-colors hover:border-[#927144] hover:text-[#927144]";
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 border-y border-line py-4 text-[13px] text-stone">
      <span className="mr-auto inline-flex items-center gap-2" aria-live="polite">
        <Eye className="size-4 text-[#927144]" strokeWidth={1.5} />
        {stats ? `${stats.views.toLocaleString("en-US")} ${stats.views === 1 ? "view" : "views"}` : "—"}
      </span>
      <button type="button" onClick={toggleLike} aria-pressed={liked} aria-label={liked ? "Unlike this article" : "Like this article"} className={`${btn} ${liked ? "border-[#927144] text-[#927144]" : "text-ink"}`}>
        <Heart className="size-4" strokeWidth={1.5} fill={liked ? "currentColor" : "none"} /> Like <span className="tabular-nums">{stats?.likes ?? 0}</span>
      </button>
      <div ref={ref} className="relative">
        <button type="button" onClick={share} aria-expanded={open} aria-haspopup="menu" className={`${btn} text-ink`}>
          <Share2 className="size-4" strokeWidth={1.5} /> Share / Repost
        </button>
        {open && (
          <div role="menu" className="absolute right-0 z-30 mt-2 w-48 border border-line bg-paper py-1 shadow-[0_12px_30px_-12px_#2a252266]">
            {targets.map((t) => (
              <a key={t.label} role="menuitem" href={t.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block px-4 py-2 text-[13px] text-ink hover:bg-[#F3E9DD] hover:text-[#927144]">{t.label}</a>
            ))}
            <button type="button" role="menuitem" onClick={copy} className="flex w-full items-center gap-2 px-4 py-2 text-left text-[13px] text-ink hover:bg-[#F3E9DD] hover:text-[#927144]">
              {copied ? <><Check className="size-3.5" /> Link copied</> : <><Link2 className="size-3.5" /> Copy link</>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
