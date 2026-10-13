import { FlowPath } from "@/components/motion/FlowPath";
import { SplitWords, WordUnit } from "@/components/motion/SplitWords";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SilkField } from "./SilkField";
import styles from "./process.module.css";

const steps = [
  {
    index: "01",
    title: "Entendemos",
    icon: "listen",
    description:
      "Escutamos o contexto, os objetivos e os desafios reais do seu negócio antes de qualquer decisão.",
  },
  {
    index: "02",
    title: "Planejamos",
    icon: "plan",
    description:
      "Organizamos prioridades, caminhos e escolhas para construir com clareza e direção.",
  },
  {
    index: "03",
    title: "Desenvolvemos",
    icon: "build",
    description:
      "Construímos a solução com cuidado, fiel ao que foi planejado e fácil de usar.",
  },
  {
    index: "04",
    title: "Entregamos",
    icon: "deliver",
    description:
      "Colocamos a solução em funcionamento, com atenção à qualidade e ao dia a dia de quem vai usar.",
  },
  {
    index: "05",
    title: "Evoluímos",
    icon: "evolve",
    description:
      "Seguimos por perto para ajustar e melhorar a solução conforme o seu negócio muda.",
  },
] as const;

/* Line glyphs, one per step; drawn again whenever the step becomes current */
const icons = {
  listen: ["M7.5 12h.01", "M11 8.5a5 5 0 0 1 0 7", "M14.5 5.5a9 9 0 0 1 0 13"],
  plan: ["M5 18.5h5a3.25 3.25 0 0 0 0-6.5h-2a3.25 3.25 0 0 1 0-6.5h8.5", "M16 3l2.5 2.5L16 8"],
  build: ["M12 4l8 4-8 4-8-4z", "M4 12l8 4 8-4", "M4 16l8 4 8-4"],
  deliver: ["M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 1 1 0-17", "M8.5 12.5l2.5 2.5 4.5-5"],
  evolve: ["M3.5 17.5c3 0 4-4.5 7-4.5s3.5 3 6.5 0 2.5-6.5 3.5-6.5", "M16.5 6.5h4v4"],
} as const;

function StepIcon({ kind }: { kind: keyof typeof icons }) {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" focusable="false">
      {icons[kind].map((d) => (
        <path key={d} d={d} pathLength="1" />
      ))}
    </svg>
  );
}

export function Process() {
  return (
    <Section id="processo" className={styles.process} aria-labelledby="process-heading">
      <SilkField variant="process" className={styles.silkField} silkClassName={styles.silk} />
      <Container className={styles.inner}>
        <header className={styles.intro}>
          <SectionLabel className={`motion-reveal ${styles.label}`}>Processo</SectionLabel>
          <h2 id="process-heading" className={`${styles.headline} motion-words`}>
            <SplitWords text="Cada projeto encontra" />
            <br />
            <SplitWords text="o seu" start={3} />{" "}
            <WordUnit index={5}>
              <GradientText>fluxo.</GradientText>
            </WordUnit>
          </h2>
          <p className={`${styles.lead} motion-reveal ${styles.delay2}`}>
            Seguimos etapas claras, sem engessar o que torna o seu projeto único.
          </p>
        </header>

        <div className={styles.flow}>
          <FlowPath className={styles.path} mode="loop" head />

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
                  <span className={styles.node} data-flow-node="" aria-hidden="true" />
                  <span className={styles.stepHead} aria-hidden="true">
                    <span className={styles.index}>{step.index}</span>
                    <StepIcon kind={step.icon} />
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
