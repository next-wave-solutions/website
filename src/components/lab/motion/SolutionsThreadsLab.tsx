"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  useIsCompactViewport,
  usePrefersReducedMotion,
  useResolvedTheme,
} from "@/components/lab/motion/use-motion-lab";
import styles from "./solutions-threads-lab.module.css";

const Threads = dynamic(() => import("@/components/lab/motion/Threads"), {
  ssr: false,
});

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

function hexToRgb01(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((c) => c + c)
          .join("")
      : value;
  const n = Number.parseInt(full, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/**
 * Lab-only Solutions with localized Web Threads in editorial whitespace.
 * Desktop composition only — mobile keeps a clean layout (no WebGL).
 * Does not replace the approved Solutions section.
 */
export function SolutionsThreadsLab() {
  const theme = useResolvedTheme();
  const reduced = usePrefersReducedMotion();
  const compact = useIsCompactViewport(1024);
  const light = theme === "light";

  const colorStart = light
    ? hexToRgb01("#7c3aed")
    : ([0.58, 0.44, 0.98] as [number, number, number]);
  const colorMid = light
    ? hexToRgb01("#2563eb")
    : ([0.38, 0.52, 0.96] as [number, number, number]);
  const colorEnd = light
    ? hexToRgb01("#0d9488")
    : ([0.2, 0.78, 0.7] as [number, number, number]);

  const showThreads = !reduced && !compact;

  return (
    <Section id="solucoes" className={styles.solutions} aria-labelledby="solutions-threads-heading">
      <Container className={styles.layout}>
        {showThreads ? (
          <div className={styles.threadsField} aria-hidden="true">
            <Threads
              className={styles.threads}
              color={colorStart}
              colorMid={colorMid}
              colorEnd={colorEnd}
              amplitude={1.32}
              distance={0.46}
              lineCount={15}
              timeScale={0.55}
              chromaBoost={light ? 0.32 : 0.06}
              enableMouseInteraction
            />
          </div>
        ) : null}

        {reduced && !compact ? <div className={styles.staticField} aria-hidden="true" /> : null}

        <header className={styles.intro}>
          <SectionLabel className={styles.label}>Soluções · Lab Threads</SectionLabel>
          <h2 id="solutions-threads-heading" className={styles.headline}>
            Tecnologia feita
            <br />
            para acompanhar
            <br />
            o seu negócio.
          </h2>
          <p className={styles.lead}>
            Criamos soluções digitais sob medida para transformar necessidades reais em produtos
            simples, eficientes e preparados para evoluir.
          </p>
        </header>

        <ol className={styles.list}>
          {services.map((service) => (
            <li key={service.index} className={styles.item}>
              <span className={styles.index} aria-hidden="true">
                {service.index}
              </span>
              <div className={styles.body}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
