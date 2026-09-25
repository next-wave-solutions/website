import type { Metadata } from "next";
import { Home } from "@/components/home/Home";
import styles from "./home-lab.module.css";

export const metadata: Metadata = {
  title: "Home lab",
  robots: { index: false, follow: false },
};

export default function HomeLabPage() {
  return (
    <div className={styles.stage}>
      <Home />
    </div>
  );
}
