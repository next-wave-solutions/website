# Next Wave Solutions — Instruções para agentes

O site já está pronto. O trabalho agora é manutenção e ajustes pontuais.

## Forma de trabalhar

- Faça só o que foi pedido. Sem redesigns, refactors ou "melhorias" não solicitadas.
- Não é preciso ler `/docs` antes de cada tarefa. Consulte só se o pedido envolver algo que o código não responde.
- **Não teste no navegador, a menos que eu peça.** Para validar, use `pnpm lint` e `pnpm typecheck` (e `pnpm build` quando a mudança for estrutural).
- Respostas curtas e diretas.
- Não instale dependências sem motivo claro.

## Direção visual (resumo)

- Light-first, superfícies neutras quentes, composição editorial, bastante respiro.
- Dark Mode equivalente e elegante — sem neon, cyberpunk ou glow excessivo.
- Roxo e verde são assinatura, não preenchimento. Gradiente com moderação.
- Use os tokens existentes (cores, radius, sombras, tipografia); não hardcode valores que já têm token.
- Tipografia: Manrope (títulos) e Inter (texto), via `next/font`.
- Evite visual de SaaS genérico, excesso de cards e estética "de tecnologia".

## Código

- Server Components por padrão; Client Components só onde há interação.
- Prefira CSS > SVG > Motion para animações. Animar `transform`/`opacity`.
- Sempre respeitar `prefers-reduced-motion`.
- Acessibilidade: HTML semântico, foco visível, contraste, alvos de toque.
- Conteúdo importante sempre em HTML (SEO), nunca só em imagem/canvas/animação.

## Conteúdo

- Nunca invente clientes, depoimentos, métricas, contatos, parceiros ou resultados.
- Projetos fictícios devem ser marcados como conceito/demo.

## Git

- Nunca adicionar trailers de atribuição (`Co-authored-by`, `Made-with` etc.) nos commits.
