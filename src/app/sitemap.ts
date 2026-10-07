import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/** Only genuinely indexable production URLs. `/preview` and `/dev/*` never belong here. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/` }];
}
