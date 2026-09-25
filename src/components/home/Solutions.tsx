import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SolutionsThreadsField } from "@/components/home/SolutionsThreadsField";
import styles from "./solutions.module.css";

const services = [
  {
    index: "01",
    title: "Sistemas Web",
    description:
      "Aplicações e plataformas pensadas para organizar processos, conectar pessoas e acompanhar o crescimento do seu negócio.",
  },
  {
    index: "02",
    title: "Aplicativos Mobile",
    description:
      "Experiências mobile construídas para fazer sentido na rotina de quem realmente vai usar.",
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
      <Container className={styles.layout}>
        <SolutionsThreadsField />

        <header className={styles.intro}>
          <SectionLabel className={`motion-reveal ${styles.label}`}>Soluções</SectionLabel>
          <h2 id="solutions-heading" className={`${styles.headline} motion-reveal ${styles.delay1}`}>
            Tecnologia feita
            <br />
            para acompanhar
            <br />
            o seu negócio.
          </h2>
          <p className={`${styles.lead} motion-reveal ${styles.delay2}`}>
            Criamos soluções digitais sob medida para transformar necessidades reais em produtos
            simples, eficientes e preparados para evoluir.
          </p>
        </header>

        <ol className={styles.list}>
          {services.map((service, index) => {
            const delayClass = [styles.delay3, styles.delay4, styles.delay5, styles.delay6][index];

            return (
              <li key={service.index} className={`${styles.item} motion-reveal ${delayClass}`}>
                <span className={styles.index} aria-hidden="true">
                  {service.index}
                </span>
                <div className={styles.body}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
