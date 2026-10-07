import type { Metadata } from "next";
import { SolutionsThreadsLab } from "@/components/lab/motion/SolutionsThreadsLab";
import { Header } from "@/components/layout/Header";
import styles from "../motion-lab.module.css";

export const metadata: Metadata = {
  title: "Motion lab · Solutions + Threads",
};

export default function SolutionsThreadsLabPage() {
  return (
    <div className={styles.stage}>
      <Header />
      <main className={styles.main}>
        <p className={styles.note}>
          Experimento B (v3) — Threads como território editorial em Solutions (não
          linha acidental). Desktop only; mobile sem WebGL. Comparar com{" "}
          <a href="/dev/home">/dev/home</a>.
        </p>
        <div className={styles.spacer} aria-hidden="true" />
        <SolutionsThreadsLab />
        <div className={styles.spacer} aria-hidden="true" />
      </main>
    </div>
  );
}
