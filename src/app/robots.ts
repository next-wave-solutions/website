import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/*
 * Crawling stays open on purpose: `/preview` and `/dev/*` are excluded via their noindex meta,
 * which crawlers can only read if those URLs are not disallowed here.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
