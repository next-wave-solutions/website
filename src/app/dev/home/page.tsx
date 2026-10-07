import type { Metadata } from "next";
import { Home } from "@/components/home/Home";
import styles from "./home-lab.module.css";

export const metadata: Metadata = {
  title: "Home lab",
};

export default function HomeLabPage() {
  return (
    <div className={styles.stage}>
      <Home />
    </div>
  );
}
