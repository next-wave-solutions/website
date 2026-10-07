import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ThemeSync } from "@/components/theme/ThemeSync";
import { HOME_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";
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

/*
 * Inherited by every route. Canonical, Open Graph and Twitter live on the public root page only,
 * so `/dev/*` never inherits an official URL.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  // Icon-sized variants via the image optimizer; the source mark is a ~500 KB 1774px PNG
  icons: {
    icon: [{ url: "/_next/image?url=%2Fbrand%2Fnextwave-mark.png&w=64&q=75" }],
    apple: [{ url: "/_next/image?url=%2Fbrand%2Fnextwave-mark.png&w=256&q=75" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
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
