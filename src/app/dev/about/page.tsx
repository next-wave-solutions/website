import type { Metadata } from "next";
import { About } from "@/components/home/About";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import { Solutions } from "@/components/home/Solutions";
import { Technology } from "@/components/home/Technology";
import { Header } from "@/components/layout/Header";
import styles from "./about-lab.module.css";

export const metadata: Metadata = {
  title: "About lab",
  robots: { index: false, follow: false },
};

export default function AboutLabPage() {
  return (
    <div className={styles.stage}>
      <Header tone="hero" />
      <main className={styles.main}>
        <Hero />
        <Solutions />
        <Process />
        <Technology />
        <Projects />
        <About />
      </main>
    </div>
  );
}
