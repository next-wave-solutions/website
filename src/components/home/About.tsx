import type { CSSProperties } from "react";
import { FlowPath } from "@/components/motion/FlowPath";
import { SplitWords, WordUnit } from "@/components/motion/SplitWords";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AboutLineWavesField } from "./AboutLineWavesField";
import styles from "./about.module.css";

const principles = [
  {
    index: "01",
    title: "Proximidade",
    description: "Conversamos com você para entender o que importa no seu negócio.",
  },
  {
    index: "02",
    title: "Soluções reais",
    description: "Tecnologia aplicada ao problema certo, não tecnologia por tecnologia.",
  },
  {
    index: "03",
    title: "Evolução contínua",
    description: "Produtos digitais mudam junto com negócios e pessoas.",
  },
  {
    index: "04",
    title: "Confiança",
    description: "Clareza nas decisões e parceria durante todo o caminho.",
  },
] as const;

const LEAD_WORDS =
  "Boas soluções começam antes do código. Começam entendendo o negócio, as pessoas e o problema que realmente precisa ser resolvido.".split(
    " ",
  );

export function About() {
  return (
    <Section id="sobre" className={styles.about} aria-labelledby="about-heading">
      <AboutLineWavesField className={styles.wavesField} wavesClassName={styles.waves} />

      <Container className={styles.layout}>
        <header className={styles.intro}>
          <SectionLabel className={`motion-reveal ${styles.label}`}>Sobre</SectionLabel>
          <h2 id="about-heading" className={`${styles.headline} motion-words`}>
            <SplitWords text="Mais que código," />
            <br />
            <WordUnit index={3}>
              <GradientText>parceria de verdade.</GradientText>
            </WordUnit>
          </h2>
          <p
            className={`${styles.lead} motion-reveal motion-read ${styles.delay2}`}
            data-scroll-progress="read"
            style={{ "--words": LEAD_WORDS.length } as CSSProperties}
          >
            <SplitWords text={LEAD_WORDS.join(" ")} />
          </p>
          <p className={`${styles.follow} motion-reveal ${styles.delay3}`}>
            Por isso, cada projeto é construído de perto, com conversa, clareza e espaço para
            evoluir.
          </p>
        </header>

        <div className={`${styles.principlesWrap} motion-reveal ${styles.delay4}`}>
          <FlowPath className={styles.flow} mode="loop" head />

          <ul className={styles.principles}>
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className={`${styles.principle} ${styles[`offset${index}` as keyof typeof styles]}`}
              >
                <span className={styles.index} aria-hidden="true">
                  <span className={styles.node} data-flow-node="" />
                  {principle.index}
                </span>
                <div className={styles.principleBody}>
                  <h3 className={styles.principleTitle}>{principle.title}</h3>
                  <p className={styles.principleCopy}>{principle.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
