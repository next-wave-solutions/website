import type { Metadata } from "next";

export const SITE_URL = "https://nextwavesolutions.com.br";
export const SITE_NAME = "Next Wave Solutions";

export const HOME_TITLE = "Next Wave Solutions | Soluções digitais sob medida";
export const HOME_DESCRIPTION =
  "Criamos sistemas web, aplicativos mobile, automações e integrações sob medida para as necessidades reais do seu negócio, prontos para evoluir com ele.";

/** Never applied to `/dev/*`; only the public root may claim the canonical URL. */
export function publicRootMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
      url: "/",
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

/** Social image intentionally absent until a final brand asset is approved. */
export const homeMetadata = publicRootMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
});

export const noIndexRobots: Metadata["robots"] = {
  index: false,
  follow: false,
  nocache: true,
  googleBot: {
    index: false,
    follow: false,
    noimageindex: true,
  },
};

/** Only verified facts: no logo, contact, address or social profiles until approved. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};
