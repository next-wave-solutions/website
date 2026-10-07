import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerLinks } from "./nav";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} aria-labelledby="footer-brand">
      <div className={styles.edge} aria-hidden="true" />

      <Container className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <Link className={styles.brand} href="/" id="footer-brand">
              <Image
                className={styles.mark}
                src="/brand/nextwave-mark.png"
                alt=""
                width={124}
                height={68}
              />
              <span className={styles.brandName}>Next Wave Solutions</span>
            </Link>
            <p className={styles.tagline}>Cada ideia tem seu próprio fluxo.</p>
          </div>

          <nav className={styles.nav} aria-label="Rodapé">
            {footerLinks.map((link) => (
              <a key={link.href} className={styles.link} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <svg
            className={`${styles.wave} motion-draw`}
            viewBox="0 0 240 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="footer-wave-gradient"
                x1="0"
                y1="6"
                x2="240"
                y2="6"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.08" />
                <stop offset="45%" stopColor="var(--primary)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <path
              className={styles.waveStroke}
              d="M0 7 C 40 2, 80 2, 120 7 S 200 12, 240 6"
              pathLength="1"
              vectorEffect="non-scaling-stroke"
              stroke="url(#footer-wave-gradient)"
            />
          </svg>

          <p className={styles.copyright}>© 2026 Next Wave Solutions</p>
        </div>
      </Container>
    </footer>
  );
}
