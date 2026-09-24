"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useThemePreference } from "@/components/theme/use-theme-preference";

export function ThemeLab() {
  const preference = useThemePreference();

  return (
    <main style={{ minHeight: "100dvh", background: "var(--background)", color: "var(--text-primary)" }}>
      <Container>
        <Section>
          <SectionLabel>Laboratório de desenvolvimento</SectionLabel>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginTop: "1rem" }}>
            <h1 style={{ margin: 0, fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Cada ideia tem seu próprio <GradientText>fluxo</GradientText>.
            </h1>
            <ThemeToggle />
          </div>
          <p style={{ maxWidth: "var(--content-measure)", marginTop: "1rem", color: "var(--text-secondary)" }}>
            Ferramenta interna para validar as primitivas. Preferência atual: {preference}.
          </p>
        </Section>
        <Section spacing="none" style={{ paddingBottom: "var(--section-space)" }}>
          <SectionLabel>01 / Ações</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", marginTop: "1.25rem" }}>
            <Button>Primário</Button>
            <Button variant="secondary">Secundário</Button>
            <Button variant="tertiary">Terciário</Button>
            <Button disabled>Desativado</Button>
            <Button variant="secondary" disabled>
              Secundário desativado
            </Button>
            <Button variant="tertiary" disabled>
              Terciário desativado
            </Button>
          </div>
        </Section>
        <Section spacing="none" style={{ paddingBottom: "var(--section-space)" }}>
          <SectionLabel>02 / Motion</SectionLabel>
          <p className="motion-reveal" style={{ maxWidth: "var(--content-measure)", marginTop: "1.25rem", color: "var(--text-secondary)" }}>
            Entrada discreta, com o conteúdo disponível mesmo sem animação.
          </p>
        </Section>
      </Container>
    </main>
  );
}
