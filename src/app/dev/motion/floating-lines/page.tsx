import type { Metadata } from "next";
import { HeroFloatingLinesLab } from "@/components/lab/motion/HeroFloatingLinesLab";
import { Header } from "@/components/layout/Header";
import styles from "../motion-lab.module.css";

export const metadata: Metadata = {
  title: "Motion lab · Floating Lines",
  robots: { index: false, follow: false },
};

export default function FloatingLinesLabPage() {
  return (
    <div className={styles.stage}>
      <Header tone="hero" />
      <main className={styles.main}>
        <p className={styles.note}>
          Experimento A — Floating Lines no Hero. A Home aprovada em{" "}
          <a href="/dev/home">/dev/home</a> permanece inalterada.
        </p>
        <HeroFloatingLinesLab />
      </main>
    </div>
  );
}
