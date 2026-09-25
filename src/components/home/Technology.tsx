import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./technology.module.css";

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

export function Technology() {
  return (
    <Section id="tecnologia" className={styles.technology} aria-labelledby="technology-heading">
      <Container className={styles.layout}>
        <header className={styles.intro}>
          <SectionLabel className={`motion-reveal ${styles.label}`}>Tecnologia</SectionLabel>
          <h2 id="technology-heading" className={`${styles.headline} motion-reveal ${styles.delay1}`}>
            Construímos hoje
            <br />
            pensando no <GradientText>amanhã.</GradientText>
          </h2>
          <p className={`${styles.lead} motion-reveal ${styles.delay2}`}>
            <span className={styles.leadLine}>Tecnologia é uma ferramenta.</span>
            <span className={styles.leadEmphasis}>O resultado é o que importa.</span>
          </p>
        </header>

        <p className={`${styles.capabilities} motion-reveal ${styles.delay3}`} aria-label="Áreas de atuação">
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

        <div className={`${styles.structure} motion-reveal ${styles.delay4}`}>
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
