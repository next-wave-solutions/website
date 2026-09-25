export const headerLinks = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#processo", label: "Processo" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
] as const;

export const footerLinks = [
  ...headerLinks,
  { href: "#contato", label: "Contato" },
] as const;

export const headerCta = {
  href: "#contato",
  label: "Falar com a Next Wave",
} as const;
