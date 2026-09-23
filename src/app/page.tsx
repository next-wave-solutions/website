import type { Metadata } from "next";
import { ComingSoon } from "@/components/temporary/ComingSoon";

const description =
  "Estamos preparando a próxima onda. Em breve, uma nova experiência da Next Wave Solutions.";

export const metadata: Metadata = {
  title: {
    absolute: "Next Wave Solutions",
  },
  description,
  openGraph: {
    title: "Next Wave Solutions",
    description,
    locale: "pt_BR",
    type: "website",
  },
};

export default function Home() {
  return <ComingSoon />;
}
