import { Home } from "@/components/home/Home";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeMetadata, organizationJsonLd } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <div className={styles.stage}>
        <Home />
      </div>
    </>
  );
}
