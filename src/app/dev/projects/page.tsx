import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import { Solutions } from "@/components/home/Solutions";
import { Technology } from "@/components/home/Technology";
import { Header } from "@/components/layout/Header";
import styles from "./projects-lab.module.css";

export const metadata: Metadata = {
  title: "Projects lab",
  robots: { index: false, follow: false },
};

export default function ProjectsLabPage() {
  return (
    <div className={styles.stage}>
      <Header tone="hero" />
      <main className={styles.main}>
        <Hero />
        <Solutions />
        <Process />
        <Technology />
        <Projects />
      </main>
    </div>
  );
}
