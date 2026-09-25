"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  useIsCompactViewport,
  usePrefersReducedMotion,
  useResolvedTheme,
} from "@/components/lab/motion/use-motion-lab";
import styles from "./final-cta-threads.module.css";

const Threads = dynamic(() => import("@/components/lab/motion/Threads"), {
  ssr: false,
});

function hexToRgb01(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((c) => c + c)
          .join("")
      : value;
  const n = Number.parseInt(full, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/**
 * Experimental Final CTA with Web Threads (React Bits Threads).
 * Lab-only — does not replace the production FinalCta.
 */
export function FinalCtaThreadsLab() {
  const theme = useResolvedTheme();
  const reduced = usePrefersReducedMotion();
  const compact = useIsCompactViewport(768);
  const light = theme === "light";

  const threadColor = light
    ? hexToRgb01("#7c3aed")
    : ([0.55, 0.42, 0.98] as [number, number, number]);

  return (
    <Section id="contato" className={styles.cta} aria-labelledby="cta-threads-heading">
      <div className={styles.atmosphere} aria-hidden="true" />

      <div className={styles.threadsStage} aria-hidden="true">
        {reduced ? (
          <div className={styles.staticEcho} />
        ) : (
          <Threads
            className={styles.threads}
            color={threadColor}
            amplitude={compact ? 0.55 : 0.8}
            distance={compact ? 0.16 : 0.24}
            lineCount={compact ? 12 : 18}
            enableMouseInteraction={!compact}
          />
        )}
      </div>

      <Container className={styles.inner}>
        <header className={styles.intro}>
          <SectionLabel className={styles.label}>Lab · Web Threads</SectionLabel>
          <h2 id="cta-threads-heading" className={styles.headline}>
            Toda <GradientText>próxima onda</GradientText>
            <br />
            começa com uma ideia.
          </h2>
        </header>

        <div className={styles.closing}>
          <p className={styles.lead}>
            Conte o que você tem em mente. A gente ajuda a transformar a ideia em um caminho claro
            para tirar do papel.
          </p>

          <div className={styles.actions}>
            <Button
              type="button"
              variant="primary"
              className={styles.primary}
              aria-label="Falar com a Next Wave. Contato por WhatsApp será configurado em breve."
            >
              Falar com a Next Wave
            </Button>
            <Button href="#solucoes" variant="secondary" className={styles.secondary}>
              Ver nossos serviços
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
