"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  useIsCompactViewport,
  usePrefersReducedMotion,
  useResolvedTheme,
} from "@/components/lab/motion/use-motion-lab";
import styles from "./technology-floating-lines-lab.module.css";

const FloatingLines = dynamic(() => import("@/components/lab/motion/FloatingLines"), {
  ssr: false,
});

const BRAND_GRADIENT = ["#8b5cf6", "#6366f1", "#06b6d4", "#10b981"];

const principles = [
  {
    title: "Desempenho",
    description: "Produtos rápidos e eficientes desde a base.",
  },
  {
    title: "Segurança",
    description: "Decisões técnicas pensadas para proteger dados e operações.",
  },
  {
    title: "Escalabilidade",
    description: "Estruturas preparadas para acompanhar o crescimento do produto.",
  },
  {
    title: "Manutenção",
    description: "Código organizado para facilitar evolução e novas funcionalidades.",
  },
] as const;

/**
 * Lab-only Technology with localized Floating Lines inside the principles panel.
 * Does not replace the approved Technology section or the Hero.
 */
export function TechnologyFloatingLinesLab() {
  const theme = useResolvedTheme();
  const reduced = usePrefersReducedMotion();
  const compact = useIsCompactViewport(1024);
  const light = theme === "light";

  return (
    <Section
      id="tecnologia"
      className={styles.technology}
      aria-labelledby="technology-fl-heading"
    >
      <Container className={styles.layout}>
        <header className={styles.intro}>
          <SectionLabel className={styles.label}>Tecnologia · Lab Floating Lines</SectionLabel>
          <h2 id="technology-fl-heading" className={styles.headline}>
            Construímos hoje
            <br />
            pensando no <GradientText>amanhã.</GradientText>
          </h2>
          <p className={styles.lead}>
            <span className={styles.leadLine}>Tecnologia é uma ferramenta.</span>
            <span className={styles.leadEmphasis}>O resultado é o que importa.</span>
          </p>
        </header>

        <p className={styles.capabilities} aria-label="Áreas de atuação">
          <span>Web</span>
          <span aria-hidden="true" className={styles.dot}>
            ·
          </span>
          <span>Mobile</span>
          <span aria-hidden="true" className={styles.dot}>
            ·
          </span>
          <span>APIs</span>
          <span aria-hidden="true" className={styles.dot}>
            ·
          </span>
          <span>Cloud</span>
          <span aria-hidden="true" className={styles.dot}>
            ·
          </span>
          <span>Integrações</span>
        </p>

        <div className={styles.structure}>
          {/* Desktop-only WebGL — mobile keeps the clean principles grid */}
          {!reduced && !compact ? (
            <div className={styles.linesSlot} aria-hidden="true">
              <FloatingLines
                className={styles.lines}
                linesGradient={BRAND_GRADIENT}
                enabledWaves={["middle", "bottom"]}
                lineCount={[3, 3]}
                lineDistance={[7, 6]}
                animationSpeed={0.28}
                interactive={false}
                parallax={false}
                mixBlendMode={light ? "multiply" : "screen"}
                lightMode={light}
                backgroundColor={light ? "#faf9f7" : "#0d1017"}
                maxPixelRatio={1.75}
              />
            </div>
          ) : reduced && !compact ? (
            <div className={styles.staticOrganism} aria-hidden="true" />
          ) : null}

          <div className={styles.frame} aria-hidden="true">
            <span className={styles.corner} data-corner="tl" />
            <span className={styles.corner} data-corner="tr" />
            <span className={styles.corner} data-corner="bl" />
            <span className={styles.corner} data-corner="br" />
            <span className={styles.gridLine} data-axis="x" />
            <span className={styles.gridLine} data-axis="y" />
          </div>

          <ul className={styles.principles}>
            {principles.map((principle) => (
              <li key={principle.title} className={styles.principle}>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleCopy}>{principle.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
