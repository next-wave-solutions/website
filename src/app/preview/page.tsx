import type { Metadata } from "next";
import { Home } from "@/components/home/Home";
import styles from "./preview.module.css";

export const metadata: Metadata = {
  title: "Preview",
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  return (
    <div className={styles.stage}>
      <Home />
    </div>
  );
}
