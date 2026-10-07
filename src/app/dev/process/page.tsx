import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Solutions } from "@/components/home/Solutions";
import { Header } from "@/components/layout/Header";
import styles from "./process-lab.module.css";

export const metadata: Metadata = {
  title: "Process lab",
};

export default function ProcessLabPage() {
  return (
    <div className={styles.stage}>
      <Header tone="hero" />
      <main className={styles.main}>
        <Hero />
        <Solutions />
        <Process />
      </main>
    </div>
  );
}
