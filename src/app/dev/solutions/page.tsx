import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { Header } from "@/components/layout/Header";
import styles from "./solutions-lab.module.css";

export const metadata: Metadata = {
  title: "Solutions lab",
};

export default function SolutionsLabPage() {
  return (
    <div className={styles.stage}>
      <Header tone="hero" />
      <main className={styles.main}>
        <Hero />
        <Solutions />
      </main>
    </div>
  );
}
