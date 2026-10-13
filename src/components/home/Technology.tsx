import { SplitWords, WordUnit } from "@/components/motion/SplitWords";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechnologyCapabilities } from "@/components/home/TechnologyCapabilities";
import { TechnologyCardSwap, type Principle } from "@/components/home/TechnologyCardSwap";
import { TechnologyFloatingLinesField } from "@/components/home/TechnologyFloatingLinesField";
import styles from "./technology.module.css";

const principles: readonly Principle[] = [
  {
    title: "Desempenho",
    description: "Produtos rápidos e eficientes desde a base.",
    icon: "performance",
  },
  {
    title: "Segurança",
    description: "Decisões técnicas pensadas para proteger dados e operações.",
    icon: "security",
  },
  {
    title: "Escalabilidade",
    description: "Estruturas preparadas para acompanhar o crescimento do produto.",
    icon: "scale",
  },
  {
    title: "Manutenção",
    description: "Código organizado para facilitar evolução e novas funcionalidades.",
    icon: "maintenance",
  },
];

const capabilities = ["Web", "Mobile", "APIs", "Cloud", "Integrações"] as const;

export function Technology() {
  return (
    <Section id="tecnologia" className={styles.technology} aria-labelledby="technology-heading">
      <TechnologyFloatingLinesField />

      <Container className={styles.layout}>
        <div className={styles.copy}>
          <header className={styles.intro}>
            <SectionLabel className={`motion-reveal ${styles.label}`}>Tecnologia</SectionLabel>
            <h2 id="technology-heading" className={`${styles.headline} motion-words`}>
              <SplitWords text="Construímos hoje" />
              <br />
              <SplitWords text="pensando no" start={2} />{" "}
              <WordUnit index={4}>
                <GradientText>amanhã.</GradientText>
              </WordUnit>
            </h2>
            <p className={`${styles.lead} motion-reveal ${styles.delay2}`}>
              <span className={styles.leadLine}>Tecnologia é uma ferramenta.</span>
              <span className={styles.leadEmphasis}>O resultado é o que importa.</span>
            </p>
          </header>

          <div className={`${styles.capabilitiesArea} motion-reveal ${styles.delay3}`}>
            <TechnologyCapabilities items={capabilities} />
          </div>
        </div>

        <div className={`${styles.structure} motion-reveal ${styles.delay4}`}>
          <TechnologyCardSwap principles={principles} />
        </div>
      </Container>
    </Section>
  );
}
