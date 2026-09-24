import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Header lab",
  robots: { index: false, follow: false },
};

export default function HeaderLabPage() {
  return (
    <div id="topo" style={{ minHeight: "180vh", background: "var(--background)", color: "var(--text-primary)" }}>
      <Header />
      <main style={{ padding: "3rem var(--gutter) 6rem" }}>
        <p style={{ maxWidth: "var(--content-measure)", color: "var(--text-secondary)" }}>
          Ambiente de desenvolvimento do Header. A página pública continua sendo a Coming Soon.
        </p>
      </main>
    </div>
  );
}
