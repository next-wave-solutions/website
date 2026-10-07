import type { Metadata } from "next";
import { ThemeLab } from "./theme-lab";

export const metadata: Metadata = {
  title: "Theme lab",
};

export default function ThemeLabPage() {
  return <ThemeLab />;
}
