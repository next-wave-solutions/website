import type { CSSProperties } from "react";
import { SplitWords, WordUnit } from "@/components/motion/SplitWords";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SolutionsThreadsField } from "@/components/home/SolutionsThreadsField";
import styles from "./solutions.module.css";

const services = [
  {
    index: "01",
    title: "Sistemas Web",
    description:
      "Plataformas que organizam processos, centralizam informações e facilitam a gestão do seu negócio.",
  },
  {
    index: "02",
    title: "Aplicativos Mobile",
    description:
      "Aplicativos construídos em torno da rotina de quem vai usar.",
  },
  {
    index: "03",
    title: "Automações",
    description:
      "Fluxos que eliminam tarefas repetitivas, reduzem trabalho manual e deixam sua operação mais eficiente.",
  },
  {
    index: "04",
    title: "Integrações",
    description:
      "Conectamos sistemas, serviços e dados para que diferentes partes do seu negócio trabalhem juntas.",
  },
] as const;

export function Solutions() {
  return (
    <Section id="solucoes" className={styles.solutions} aria-labelledby="solutions-heading">
      <SolutionsThreadsField />

      <Container className={styles.layout}>
        <header className={styles.intro}>
          <SectionLabel className={`motion-reveal ${styles.label}`}>Soluções</SectionLabel>
          <h2 id="solutions-heading" className={`${styles.headline} motion-words`}>
            <SplitWords text="Tecnologia feita" />
            <br />
            <SplitWords text="para acompanhar" start={2} />
            <br />
            <SplitWords text="o seu" start={4} />{" "}
            <WordUnit index={6}>
              <GradientText>negócio.</GradientText>
            </WordUnit>
          </h2>
          <p className={`${styles.lead} motion-reveal ${styles.delay2}`}>
            Criamos soluções digitais sob medida, simples de usar e construídas a partir das
            necessidades reais de cada negócio.
          </p>
        </header>

        <ol className={styles.list} data-active-group="">
          {services.map((service, index) => (
            <li
              key={service.index}
              className={`${styles.item} motion-reveal`}
              style={{ "--n": index + 3 } as CSSProperties}
              data-active-item=""
              data-spotlight=""
            >
              <span className={styles.index} aria-hidden="true">
                {service.index}
              </span>
              <div className={styles.body}>
                <h3 className={styles.title}>
                  <span className={styles.titleText}>{service.title}</span>
                  <svg
                    className={styles.wave}
                    viewBox="0 0 48 8"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M1 4Q7 0 13 4T25 4T37 4T47 4" pathLength="1" />
                  </svg>
                </h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
