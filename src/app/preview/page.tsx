import type { Metadata } from "next";
import { Home } from "@/components/home/Home";
import styles from "./preview.module.css";

export const metadata: Metadata = {
  title: "Preview",
  description: "Pré-visualização interna da experiência Next Wave Solutions. Não indexar.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function PreviewPage() {
  return (
    <div className={styles.stage}>
      <Home />
    </div>
  );
}
