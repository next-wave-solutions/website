import type { MetadataRoute } from "next";

/** Public sitemap — Coming Soon only until Home launches at `/`. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nextwavesolutions.com.br",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
