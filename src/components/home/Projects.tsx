import type { CSSProperties } from "react";
import { SplitWords, WordUnit } from "@/components/motion/SplitWords";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectStackEffects } from "./ProjectStackEffects";
import { SilkField } from "./SilkField";
import styles from "./projects.module.css";

const concepts = [
  {
    id: "conceito-clinica",
    index: "01",
    segment: "Clínica",
    kind: "Sistema web",
    title: "Agenda que se organiza sozinha",
    description:
      "Pacientes marcam e remarcam online, recebem lembretes e a recepção acompanha o dia inteiro em uma só tela.",
    features: ["Agendamento online", "Lembretes automáticos", "Visão do dia em uma tela"],
    screen: "agenda",
  },
  {
    id: "conceito-restaurante",
    index: "02",
    segment: "Restaurante",
    kind: "Sistema de gestão",
    title: "Pedidos em um só fluxo",
    description:
      "Pedidos do salão, do balcão e do delivery chegam ao mesmo painel e seguem da cozinha até a entrega.",
    features: ["Pedidos centralizados", "Status em tempo real", "Cozinha e entrega conectadas"],
    screen: "orders",
  },
  {
    id: "conceito-comercio",
    index: "03",
    segment: "Comércio local",
    kind: "Aplicativo",
    title: "Clientes que voltam",
    description:
      "Um aplicativo de fidelidade simples: o cliente junta pontos a cada compra e é avisado quando ganha uma recompensa.",
    features: ["Pontos a cada compra", "Avisos de recompensa", "Relação contínua com o cliente"],
    screen: "loyalty",
  },
] as const;

type Screen = (typeof concepts)[number]["screen"];

const order = (n: number) => ({ "--n": n }) as CSSProperties;

function AgendaScreen() {
  const rows = [
    { time: "08:00", label: "Consulta", tone: "primary" },
    { time: "09:00", label: "Retorno", tone: "accent" },
    { time: "10:00", label: "", tone: "new" },
    { time: "11:00", label: "Avaliação", tone: "primary" },
    { time: "14:00", label: "Consulta", tone: "accent" },
  ] as const;

  return (
    <div className={styles.window}>
      <div className={styles.windowBar}>
        <span className={styles.windowDots}>
          <span />
          <span />
          <span />
        </span>
        <span className={styles.windowTitle}>Agenda · Hoje</span>
      </div>
      <div className={styles.agenda}>
        {rows.map((row, index) => (
          <div key={row.time} className={styles.agendaRow} style={order(index)}>
            <span className={styles.agendaTime}>{row.time}</span>
            <span className={styles.agendaSlot}>
              {row.tone === "new" ? (
                <span className={`${styles.appt} ${styles.apptNew}`}>Consulta · confirmada</span>
              ) : (
                <span className={styles.appt} data-tone={row.tone}>
                  {row.label}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
      <span className={styles.toast}>
        <span className={styles.toastCheck} />
        Lembrete enviado ao paciente
      </span>
    </div>
  );
}

function OrdersScreen() {
  const columns = [
    { title: "Novos", tickets: ["Mesa 2", "Balcão"] },
    { title: "Em preparo", tickets: ["Delivery"] },
    { title: "Prontos", tickets: ["Mesa 7"] },
  ];

  return (
    <div className={styles.board}>
      {columns.map((column) => (
        <div key={column.title} className={styles.boardColumn}>
          <span className={styles.boardTitle}>{column.title}</span>
          {column.tickets.map((ticket) => (
            <span key={ticket} className={styles.ticket}>
              <span className={styles.ticketName}>{ticket}</span>
              <span className={styles.ticketLine} />
            </span>
          ))}
        </div>
      ))}
      <span className={`${styles.ticket} ${styles.ticketMoving}`}>
        <span className={styles.ticketName}>Mesa 4</span>
        <span className={styles.ticketLine} />
      </span>
    </div>
  );
}

function LoyaltyScreen() {
  return (
    <div className={styles.phone}>
      <span className={styles.phoneNotch} />
      <span className={styles.notice}>
        <span className={styles.noticeDot} />
        Recompensa disponível
      </span>
      <div className={styles.phoneBody}>
        <span className={styles.phoneLabel}>Seus pontos</span>
        <div className={styles.stamps}>
          {Array.from({ length: 8 }, (_, index) => (
            <span key={index} className={styles.stamp} style={order(index)} />
          ))}
        </div>
        <span className={styles.phoneBar} />
        <span className={`${styles.phoneBar} ${styles.phoneBarShort}`} />
      </div>
    </div>
  );
}

function ConceptScreen({ screen }: { screen: Screen }) {
  return (
    <div className={styles.screen} data-screen={screen} aria-hidden="true">
      {screen === "agenda" ? <AgendaScreen /> : null}
      {screen === "orders" ? <OrdersScreen /> : null}
      {screen === "loyalty" ? <LoyaltyScreen /> : null}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projetos" className={styles.projects} aria-labelledby="projects-heading">
      <SilkField variant="projects" className={styles.silkField} silkClassName={styles.silk} />
      <Container className={styles.inner}>
        <header className={styles.intro}>
          <SectionLabel className={`motion-reveal ${styles.label}`}>Projetos</SectionLabel>
          <h2 id="projects-heading" className={`${styles.headline} motion-words`}>
            <SplitWords text="Ideias que" />
            <br />
            <WordUnit index={2}>
              <GradientText>ganham forma.</GradientText>
            </WordUnit>
          </h2>
          <p className={`${styles.lead} motion-reveal ${styles.delay2}`}>
            Cada negócio pede uma solução diferente. Estes conceitos mostram como uma ideia pode
            ganhar forma no dia a dia de diferentes tipos de negócio.
          </p>
        </header>

        <ol className={styles.stack} data-project-stack="">
          {concepts.map((concept, index) => (
            <li key={concept.id} className={styles.panel} style={order(index)} data-stack-item="">
              <article className={styles.card} aria-labelledby={`${concept.id}-title`}>
                <div className={styles.meta}>
                  <p className={styles.statusRow}>
                    <span className={styles.status}>Conceito</span>
                    <span className={styles.separator} aria-hidden="true">
                      ·
                    </span>
                    <span className={styles.category}>{concept.segment}</span>
                    <span className={styles.index} aria-hidden="true">
                      {concept.index}
                    </span>
                  </p>
                  <h3 id={`${concept.id}-title`} className={styles.title}>
                    {concept.title}
                  </h3>
                  <p className={styles.description}>{concept.description}</p>
                  <ul className={styles.features}>
                    {concept.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <p className={styles.kind}>{concept.kind}</p>
                </div>
                <ConceptScreen screen={concept.screen} />
              </article>
            </li>
          ))}
        </ol>

        <p className={styles.note}>
          Conceitos criados pela Next Wave para ilustrar possibilidades. Os primeiros cases chegam em
          breve.
        </p>
      </Container>
      <ProjectStackEffects />
    </Section>
  );
}
