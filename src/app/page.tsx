import { JsonLd } from "@/components/seo/JsonLd";
import { ComingSoon } from "@/components/temporary/ComingSoon";
import { organizationJsonLd, publicRootMetadata, SITE_NAME } from "@/lib/seo";

/** Temporary Coming Soon SEO. At launch, switch to `homeMetadata` from `@/lib/seo`. */
export const metadata = publicRootMetadata({
  title: SITE_NAME,
  description:
    "Estamos preparando a próxima onda. Em breve, uma nova experiência da Next Wave Solutions.",
});

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <ComingSoon />
    </>
  );
}
