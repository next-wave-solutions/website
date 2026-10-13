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
        <div className={styles.brandBlock}>
          <Link className={styles.brand} href="/" id="footer-brand" prefetch={false}>
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

        <p className={styles.copyright}>
          © 2026<span className={styles.copyrightName}> Next Wave Solutions</span>
        </p>
      </Container>
    </footer>
  );
}
