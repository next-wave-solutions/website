import type { Metadata } from "next";
import { TechnologyFloatingLinesLab } from "@/components/lab/motion/TechnologyFloatingLinesLab";
import { Header } from "@/components/layout/Header";
import styles from "../motion-lab.module.css";

export const metadata: Metadata = {
  title: "Motion lab · Technology + Floating Lines",
  robots: { index: false, follow: false },
};

export default function TechnologyFloatingLinesLabPage() {
  return (
    <div className={styles.stage}>
      <Header />
      <main className={styles.main}>
        <p className={styles.note}>
          Experimento A (v2+) — Floating Lines no painel de princípios (desktop
          aprovado). WebGL desligado no mobile. Hero intacto. Comparar com{" "}
          <a href="/dev/home">/dev/home</a>.
        </p>
        <div className={styles.spacer} aria-hidden="true" />
        <TechnologyFloatingLinesLab />
        <div className={styles.spacer} aria-hidden="true" />
      </main>
    </div>
  );
}
