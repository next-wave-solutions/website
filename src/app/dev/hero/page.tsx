import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Header } from "@/components/layout/Header";
import styles from "./hero-lab.module.css";

export const metadata: Metadata = {
  title: "Hero lab",
  robots: { index: false, follow: false },
};

export default function HeroLabPage() {
  return (
    <div className={styles.stage}>
      <Header tone="hero" />
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  );
}
