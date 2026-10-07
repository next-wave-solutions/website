import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { headerCta, headerLinks } from "./nav";
import styles from "./header.module.css";

type HeaderProps = {
  tone?: "default" | "hero";
};

export function Header({ tone = "default" }: HeaderProps) {
  return (
    <header className={[styles.header, tone === "hero" ? styles.onHero : ""].filter(Boolean).join(" ")}>
      <a className="skipLink" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Container className={styles.inner}>
        <Link className={styles.brand} href="/" prefetch={false}>
          <Image
            className={styles.mark}
            src="/brand/nextwave-mark.png"
            alt=""
            width={124}
            height={68}
            priority
          />
          <span>Next Wave</span>
        </Link>
        <nav className={styles.desktopNav} aria-label="Principal">
          {headerLinks.map((link) => (
            <a key={link.href} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <ThemeToggle />
          <Button href={headerCta.href} className={styles.desktopCta}>
            {headerCta.label}
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
