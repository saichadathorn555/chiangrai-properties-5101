import { z } from "zod";
import { eq, sql } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import { articleStats } from "../database/schema";

const SLUGS = ["market-review-q4-2026"] as const;
const slug = z.object({ slug: z.enum(SLUGS) });

async function read(s: string) {
  const [row] = await db.select().from(articleStats).where(eq(articleStats.slug, s)).limit(1);
  return { views: row?.views ?? 0, likes: row?.likes ?? 0 };
}

async function bump(s: string, views: number, likes: number) {
  await db.insert(articleStats).values({ slug: s, views: Math.max(0, views), likes: Math.max(0, likes) })
    .onConflictDoUpdate({
      target: articleStats.slug,
      set: { views: sql`max(0, ${articleStats.views} + ${views})`, likes: sql`max(0, ${articleStats.likes} + ${likes})` },
    });
  return read(s);
}

export const insights = {
  stats: base.input(slug).handler(({ input }) => read(input.slug)),
  /** Client calls once per browser session. */
  view: base.input(slug).handler(({ input }) => bump(input.slug, 1, 0)),
  /** Client tracks liked state in localStorage (one like per browser). */
  like: base.input(slug.extend({ liked: z.boolean() })).handler(({ input }) => bump(input.slug, 0, input.liked ? 1 : -1)),
};
