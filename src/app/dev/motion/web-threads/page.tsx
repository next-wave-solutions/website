import type { Metadata } from "next";
import { FinalCtaThreadsLab } from "@/components/lab/motion/FinalCtaThreadsLab";
import { Header } from "@/components/layout/Header";
import styles from "../motion-lab.module.css";

export const metadata: Metadata = {
  title: "Motion lab · Web Threads",
  robots: { index: false, follow: false },
};

export default function WebThreadsLabPage() {
  return (
    <div className={styles.stage}>
      <Header />
      <main className={styles.main}>
        <p className={styles.note}>
          Experimento B — Web Threads no Final CTA. A Home aprovada em{" "}
          <a href="/dev/home">/dev/home</a> permanece inalterada.
        </p>
        <div className={styles.spacer} aria-hidden="true" />
        <FinalCtaThreadsLab />
      </main>
    </div>
  );
}
