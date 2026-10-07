import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
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

export function About() {
  return (
    <Section id="sobre" className={styles.about} aria-labelledby="about-heading">
      <Container className={styles.layout}>
        <header className={styles.intro}>
          <SectionLabel className={`motion-reveal ${styles.label}`}>Sobre</SectionLabel>
          <h2 id="about-heading" className={`${styles.headline} motion-reveal ${styles.delay1}`}>
            Mais que código,
            <br />
            <GradientText>parceria de verdade.</GradientText>
          </h2>
          <p className={`${styles.lead} motion-reveal ${styles.delay2}`}>
            Boas soluções começam antes do código. Começam entendendo o negócio, as pessoas e o
            problema que realmente precisa ser resolvido.
          </p>
          <p className={`${styles.follow} motion-reveal ${styles.delay3}`}>
            Por isso, cada projeto é construído de perto, com conversa, clareza e espaço para
            evoluir.
          </p>
        </header>

        <div className={`${styles.principlesWrap} motion-reveal ${styles.delay4}`}>
          <svg
            className={`${styles.flow} motion-draw`}
            viewBox="0 0 40 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient
                id="about-flow-gradient"
                x1="20"
                y1="8"
                x2="20"
                y2="412"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.55" />
                <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <path
              className={styles.flowStroke}
              d="M20 8 C 8 70, 32 110, 20 160 S 8 250, 20 300 S 32 370, 20 412"
              pathLength="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ul className={styles.principles}>
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className={`${styles.principle} ${styles[`offset${index}` as keyof typeof styles]}`}
              >
                <span className={styles.index} aria-hidden="true">
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
