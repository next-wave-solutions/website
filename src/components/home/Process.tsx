import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./process.module.css";

const steps = [
  {
    index: "01",
    title: "Entendemos",
    description:
      "Escutamos o contexto, os objetivos e os desafios reais do seu negócio antes de qualquer decisão.",
  },
  {
    index: "02",
    title: "Planejamos",
    description:
      "Organizamos prioridades, caminhos e escolhas para construir com clareza e direção.",
  },
  {
    index: "03",
    title: "Desenvolvemos",
    description:
      "Transformamos o plano em um produto cuidadoso, utilizável e alinhado ao que foi definido.",
  },
  {
    index: "04",
    title: "Entregamos",
    description:
      "Colocamos a solução em uso com atenção à qualidade, à adoção e ao dia a dia de quem vai usar.",
  },
  {
    index: "05",
    title: "Evoluímos",
    description:
      "Continuamos próximos para ajustar, melhorar e acompanhar o crescimento do produto.",
  },
] as const;

export function Process() {
  return (
    <Section id="processo" className={styles.process} aria-labelledby="process-heading">
      <Container className={styles.inner}>
        <header className={styles.intro}>
          <SectionLabel className={`motion-reveal ${styles.label}`}>Processo</SectionLabel>
          <h2 id="process-heading" className={`${styles.headline} motion-reveal ${styles.delay1}`}>
            Cada projeto encontra
            <br />
            o seu <GradientText>fluxo.</GradientText>
          </h2>
          <p className={`${styles.lead} motion-reveal ${styles.delay2}`}>
            Seguimos etapas claras — entender, planejar, construir, entregar e evoluir — sem
            engessar o que torna o seu projeto único.
          </p>
        </header>

        <div className={styles.flow}>
          <svg
            className={styles.path}
            viewBox="0 0 1000 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              className={styles.pathStroke}
              d="M20 70 C 120 20, 180 20, 260 55 S 400 110, 500 60 S 680 10, 780 55 S 900 100, 980 45"
              pathLength="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className={styles.steps}>
            {steps.map((step, index) => {
              const delayClass = [
                styles.delay3,
                styles.delay4,
                styles.delay5,
                styles.delay6,
                styles.delay7,
              ][index];
              const offsetClass = [
                styles.offset0,
                styles.offset1,
                styles.offset2,
                styles.offset3,
                styles.offset4,
              ][index];

              return (
                <li key={step.index} className={`${styles.step} ${offsetClass} motion-reveal ${delayClass}`}>
                  <span className={styles.index} aria-hidden="true">
                    {step.index}
                  </span>
                  <h3 className={styles.title}>{step.title}</h3>
                  <p className={styles.description}>{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
