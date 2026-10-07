import type { Metadata } from "next";
import { Home } from "@/components/home/Home";
import { noIndexRobots } from "@/lib/seo";
import styles from "./preview.module.css";

/** Public review route: crawlable (so noindex is seen) but never indexed, canonicalized or in the sitemap. */
export const metadata: Metadata = {
  title: "Preview",
  robots: noIndexRobots,
};

export default function PreviewPage() {
  return (
    <div className={styles.stage}>
      <Home />
    </div>
  );
}
