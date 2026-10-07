import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ThemeSync } from "@/components/theme/ThemeSync";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
});

const siteDescription =
  "Estamos preparando a próxima onda. Em breve, uma nova experiência da Next Wave Solutions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextwavesolutions.com.br"),
  title: {
    default: "Next Wave Solutions",
    template: "%s | Next Wave Solutions",
  },
  description: siteDescription,
  applicationName: "Next Wave Solutions",
  // Icon-sized variants via the image optimizer; the source mark is a ~500 KB 1774px PNG
  icons: {
    icon: [{ url: "/_next/image?url=%2Fbrand%2Fnextwave-mark.png&w=64&q=75" }],
    apple: [{ url: "/_next/image?url=%2Fbrand%2Fnextwave-mark.png&w=256&q=75" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Next Wave Solutions",
    title: "Next Wave Solutions",
    description: siteDescription,
    url: "https://nextwavesolutions.com.br",
  },
  twitter: {
    card: "summary",
    title: "Next Wave Solutions",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeSync />
        {children}
      </body>
    </html>
  );
}
