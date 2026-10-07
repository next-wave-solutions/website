import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./projects.module.css";

const studies = [
  {
    id: "estudo-01",
    index: "01",
    status: "Conceito",
    category: "Web",
    title: "Experiência digital",
    description:
      "Exploração de uma presença digital clara, rápida e fácil de atualizar.",
    visual: "web",
  },
  {
    id: "estudo-02",
    index: "02",
    status: "Estudo",
    category: "Sistema",
    title: "Produto operacional",
    description:
      "Conceito de sistema que organiza processos e conecta pessoas em um fluxo contínuo.",
    visual: "system",
  },
  {
    id: "estudo-03",
    index: "03",
    status: "Next Wave Lab",
    category: "Mobile",
    title: "Rotina em movimento",
    description:
      "Estudo de aplicativo para o dia a dia de quem trabalha longe do computador.",
    visual: "mobile",
  },
] as const;

function StudyVisual({ kind }: { kind: (typeof studies)[number]["visual"] }) {
  if (kind === "web") {
    return (
      <div className={`${styles.visual} ${styles.visualWeb}`} aria-hidden="true">
        <div className={styles.browser}>
          <span className={styles.browserDots}>
            <span />
            <span />
            <span />
          </span>
          <div className={styles.browserBar} />
          <div className={styles.browserBody}>
            <span className={styles.blockWide} />
            <span className={styles.blockHalf} />
            <span className={styles.blockHalf} />
            <span className={styles.blockAccent} />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "system") {
    return (
      <div className={`${styles.visual} ${styles.visualSystem}`} aria-hidden="true">
        <div className={styles.systemGrid}>
          <span />
          <span />
          <span />
          <span className={styles.systemAccent} />
          <span />
          <span />
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.visual} ${styles.visualMobile}`} aria-hidden="true">
      <div className={styles.device}>
        <span className={styles.deviceNotch} />
        <div className={styles.deviceBody}>
          <span className={styles.deviceLine} />
          <span className={styles.deviceLine} />
          <span className={styles.deviceCard} />
          <span className={styles.deviceFlow} />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [featured, ...rest] = studies;

  return (
    <Section id="projetos" className={styles.projects} aria-labelledby="projects-heading">
      <Container className={styles.inner}>
        <header className={styles.intro}>
          <SectionLabel className={`motion-reveal ${styles.label}`}>Projetos</SectionLabel>
          <h2 id="projects-heading" className={`${styles.headline} motion-reveal ${styles.delay1}`}>
            Ideias que
            <br />
            <GradientText>ganham forma.</GradientText>
          </h2>
          <p className={`${styles.lead} motion-reveal ${styles.delay2}`}>
            Cada negócio pede uma solução diferente. Estes estudos exploram algumas das formas que
            uma ideia pode assumir quando estratégia, design e tecnologia trabalham juntas.
          </p>
        </header>

        <ol className={styles.gallery}>
          <li className={`${styles.feature} motion-reveal ${styles.delay3}`}>
            <StudyVisual kind={featured.visual} />
            <div className={styles.meta}>
              <p className={styles.statusRow}>
                <span className={styles.status}>{featured.status}</span>
                <span className={styles.separator} aria-hidden="true">
                  ·
                </span>
                <span className={styles.category}>{featured.category}</span>
                <span className={styles.index} aria-hidden="true">
                  {featured.index}
                </span>
              </p>
              <h3 className={styles.title}>{featured.title}</h3>
              <p className={styles.description}>{featured.description}</p>
            </div>
          </li>

          {rest.map((study, index) => {
            const delayClass = index === 0 ? styles.delay4 : styles.delay5;
            const studyClass = index === 0 ? styles.study2 : styles.study3;

            return (
              <li key={study.id} className={`${styles.study} ${studyClass} motion-reveal ${delayClass}`}>
                <StudyVisual kind={study.visual} />
                <div className={styles.meta}>
                  <p className={styles.statusRow}>
                    <span className={styles.status}>{study.status}</span>
                    <span className={styles.separator} aria-hidden="true">
                      ·
                    </span>
                    <span className={styles.category}>{study.category}</span>
                    <span className={styles.index} aria-hidden="true">
                      {study.index}
                    </span>
                  </p>
                  <h3 className={styles.title}>{study.title}</h3>
                  <p className={styles.description}>{study.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
