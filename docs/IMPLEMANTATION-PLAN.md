# Next Wave Solutions — Implementation Plan

## 1. Objetivo

Este documento define a ordem de implementação do site institucional da Next Wave Solutions.

O projeto deve evoluir de forma incremental.

Cada fase deve ser:

1. implementada;
2. validada;
3. revisada;
4. aprovada;

antes de avançar quando houver impacto visual ou arquitetural significativo.

O objetivo não é implementar o máximo possível de uma vez.

O objetivo é construir uma experiência consistente, performática e alinhada à identidade da Next Wave.

---

## 2. Documentos obrigatórios

Antes de implementar qualquer UI, ler:

- `/AGENTS.md`
- `/docs/PROJECT-BRIEF.md`
- `/docs/DESIGN-SYSTEM.md`
- `/docs/MOTION-GUIDELINES.md`
- `/docs/IMPLEMENTATION-PLAN.md`

Também consultar os wireframes e referências visuais relevantes.

A direção visual mais recente aprovada prevalece sobre wireframes antigos conflitantes.

Wireframes antigos podem continuar sendo utilizados como referência de:

- estrutura;
- conteúdo;
- hierarquia;
- intenção;

mas não necessariamente como referência estética final.

---

## 3. Direção visual atual

A direção aprovada é:

- light-first;
- Dark Mode opcional;
- editorial;
- clara;
- acolhedora;
- premium;
- autoral;
- tecnologicamente refinada;
- acessível para públicos técnicos e não técnicos.

Purple e Green permanecem como cores de assinatura.

A Wave permanece como principal elemento gráfico proprietário.

A influência marítima deve ser comportamental, não literal.

Princípios:

> Cada ideia tem seu próprio fluxo.

> A Next Wave não representa o mar. Ela se comporta como ele.

> A Next Wave não precisa parecer tecnologia para demonstrar excelência tecnológica.

> Identidade está nos detalhes.

---

## 4. Direções que não devem ser retomadas

A direção anterior excessivamente dark/neon não representa mais a direção principal aprovada.

Evitar utilizar como linguagem dominante:

- cyberpunk;
- synthwave;
- neon;
- glow;
- partículas;
- glassmorphism;
- grids futuristas;
- fotografia marítima recorrente;
- oceanos como background;
- estética gamer;
- estética exclusiva de desenvolvedores;
- templates SaaS genéricos;
- gradientes excessivos.

Dark Mode não deve reintroduzir essas características.

---

## 5. Regra de implementação

Ao receber uma fase para implementação:

1. ler a documentação relevante;
2. inspecionar a implementação existente;
3. identificar impacto;
4. implementar somente a fase solicitada;
5. validar tecnicamente;
6. validar visualmente quando aplicável;
7. registrar evidências quando solicitado;
8. reportar alterações;
9. parar.

Não avançar automaticamente para a próxima fase.

Não utilizar uma tarefa como justificativa para refatorar áreas não relacionadas sem necessidade.

---

## 6. Definition of Done

Uma fase visual não está concluída somente porque compila.

Quando aplicável, validar:

- fidelidade à direção visual;
- desktop;
- tablet;
- mobile;
- keyboard navigation;
- focus;
- contraste;
- reduced motion;
- Light Mode;
- Dark Mode;
- overflow;
- layout stability;
- TypeScript;
- lint;
- build;
- performance básica;
- console errors.

---

# Phase 0 — Documentation

## Status

Completed.

## Objetivo

Criar a documentação inicial necessária para orientar desenvolvimento e decisões de produto.

Inclui:

- Project Brief;
- Design System;
- Motion Guidelines;
- Implementation Plan;
- AGENTS;
- referências visuais;
- wireframes.

---

# Phase 1 — Foundation

## Status

Completed.

## Objetivo

Criar a base técnica do projeto.

Inclui:

- Next.js;
- App Router;
- React;
- TypeScript;
- Tailwind CSS;
- ESLint;
- pnpm;
- aliases;
- estrutura inicial de diretórios;
- `next/font`;
- globals;
- root layout;
- metadata inicial;
- scripts de validação.

A base deve permanecer simples.

Não adicionar dependências sem necessidade.

---

# Temporary Coming Soon

Existe uma experiência temporária publicada enquanto o site institucional definitivo é desenvolvido.

Ela é isolada da arquitetura visual definitiva da Home.

Arquivos relacionados podem incluir:

```text
src/components/temporary/ComingSoon.tsx
src/components/temporary/ComingSoonWave.tsx
src/components/temporary/ComingSoonGlow.tsx
src/components/temporary/coming-soon.module.css
```

Assets relacionados podem existir em:

```text
public/brand/
```

A Coming Soon:

- não representa o Design System definitivo;
- não deve ser utilizada como referência obrigatória para a Home;
- pode possuir direção visual diferente;
- deve permanecer funcional enquanto o novo site é desenvolvido.

Não remover, substituir ou alterar a Coming Soon sem solicitação explícita.

---

# Phase 1.5 — Brand Direction Update

## Status

Completed após atualização e revisão da documentação.

## Objetivo

Registrar a direção visual definida após a exploração de Art Direction.

Principais decisões:

- Light Mode como expressão principal;
- suporte a Dark Mode;
- redução da estética cyberpunk/neon;
- redução da representação literal do mar;
- maior acolhimento;
- maior neutralidade de segmento;
- identidade concentrada nos detalhes;
- Wave abstrata;
- Purple + Green como cores de assinatura;
- composição mais editorial;
- tecnologia demonstrada pela qualidade da experiência;
- posicionamento baseado em soluções sob medida.

Mensagem central atual:

> Cada ideia tem seu próprio fluxo.

Nenhuma alteração de implementação é necessária nesta fase.

---

# Phase 2 — Design System Foundation

## Status

Pending.

## Objetivo

Traduzir o Design System atualizado para código.

Esta fase deve criar somente a fundação visual.

Não implementar ainda as seções definitivas da Home.

---

## 2.1 Theme Architecture

Implementar suporte a:

- Light Mode;
- Dark Mode;
- preferência do sistema;
- escolha manual do usuário;
- persistência da escolha.

A escolha manual deve possuir precedência sobre a preferência do sistema.

Evitar flash de tema incorreto durante carregamento.

A implementação deve ser compatível com Server Components e evitar transformar o root inteiro em Client Component sem necessidade.

---

## 2.2 Color Tokens

Implementar tokens semânticos para:

- background;
- secondary background;
- surfaces;
- foreground;
- text;
- muted text;
- borders;
- focus;
- primary;
- accent;
- semantic states.

Componentes devem consumir tokens semânticos.

Evitar hardcode recorrente de cores.

---

## 2.3 Brand Colors

Preservar:

### Purple

```text
#8B5CF6
```

### Green

```text
#10B981
```

Com seus estados e variações definidos no Design System.

Essas cores são assinatura.

Não precisam aparecer simultaneamente em todos os componentes.

---

## 2.4 Gradient

Registrar o gradiente da marca como token/recurso reutilizável.

Direção:

```css
linear-gradient(
  90deg,
  #8B5CF6 0%,
  #6366F1 35%,
  #06B6D4 65%,
  #10B981 100%
);
```

Não aplicar automaticamente.

Disponibilizar para uso posterior.

---

## 2.5 Typography

Preservar:

### Headings

Manrope.

### Body / UI

Inter.

Utilizar `next/font`.

Definir:

- font families;
- pesos necessários;
- line-height;
- tracking;
- escala tipográfica;
- display typography foundations.

Evitar carregar pesos não utilizados.

---

## 2.6 Layout Tokens

Criar fundações para:

- container;
- gutters;
- section spacing;
- content width;
- responsive spacing.

Direção inicial:

```text
container max: 1440px
```

Não transformar esse valor em largura obrigatória para todo conteúdo.

---

## 2.7 Radius

Implementar tokens de radius conforme Design System.

Direção:

```text
8px
12px
16px
24px
32px
full
```

Não utilizar todos automaticamente.

---

## 2.8 Borders

Implementar:

- default border;
- strong border;
- Light/Dark equivalents.

Borders devem permanecer sutis.

---

## 2.9 Shadows

Criar fundações para:

- small;
- medium;
- large.

Sombras devem ser discretas.

Dark Mode deve priorizar diferença de superfície e border.

---

## 2.10 Semantic Colors

Implementar tokens para:

- info;
- success;
- warning;
- error.

Não criar componentes de alert nesta fase.

Somente fundação.

---

## 2.11 Focus

Criar padrão global consistente de `focus-visible`.

Deve:

- possuir contraste;
- funcionar em Light;
- funcionar em Dark;
- não depender apenas de cor quando contexto exigir mais informação.

---

## 2.12 Selection

Implementar seleção de texto coerente com a marca.

Validar contraste em ambos os temas.

---

## 2.13 Base Elements

Revisar estilos básicos de:

- `html`;
- `body`;
- headings;
- paragraphs;
- links;
- buttons;
- selection.

Não criar estilização global agressiva que dificulte composição posterior.

---

## 2.14 Reduced Motion Foundation

Adicionar fundação global para:

```css
@media (prefers-reduced-motion: reduce)
```

Não é necessário implementar motion complexo nesta fase.

Apenas garantir que a base esteja preparada.

---

## 2.15 Theme Toggle

A arquitetura de tema deve estar pronta nesta fase.

O componente visual definitivo de Theme Toggle pode ser criado na Phase 3.

Se um controle mínimo for necessário para testar Light/Dark durante desenvolvimento, ele deve ser claramente tratado como ferramenta temporária ou componente base.

---

## 2.16 Não implementar nesta fase

Não implementar:

- Header definitivo;
- Hero;
- Solutions;
- Process;
- Technology;
- Projects;
- About;
- Final CTA;
- Footer definitivo;
- Wave final;
- animações de scroll;
- partículas;
- React Bits;
- cards específicos da Home;
- conteúdo fictício.

---

## 2.17 Dependências

Nenhuma nova dependência deve ser adicionada sem necessidade clara.

Antes de instalar algo, verificar se:

1. CSS resolve;
2. browser APIs resolvem;
3. código existente resolve;
4. a dependência realmente reduz complexidade.

---

## 2.18 Validação

Executar:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Também validar manualmente:

- Light Mode;
- Dark Mode;
- preferência do sistema;
- persistência;
- flash de tema;
- fontes;
- focus;
- selection;
- console.

---

# Phase 3 — Base UI Components

## Status

Pending.

## Objetivo

Criar componentes realmente reutilizáveis.

Possíveis componentes:

- Button;
- Container;
- Section;
- SectionLabel;
- GradientText;
- Badge;
- ThemeToggle.

`Card` só deve ser criado caso exista padrão reutilizável real.

Não criar abstrações prematuras.

---

# Phase 4 — Motion Foundation

## Status

Pending.

## Objetivo

Criar primitivas necessárias para motion.

Avaliar nesta ordem:

1. CSS;
2. SVG;
3. Motion;
4. bibliotecas adicionais.

Possíveis fundações:

- reveal;
- stagger;
- reduced motion helpers;
- viewport detection;
- utilities para Wave;
- motion tokens.

Não criar framework interno de animação.

---

# Phase 5 — Header

## Status

Pending.

## Objetivo

Implementar navegação principal.

Inclui:

- logo;
- navegação;
- CTA;
- Theme Toggle;
- mobile navigation;
- keyboard navigation;
- focus;
- Light Mode;
- Dark Mode.

Pode existir mudança sutil de surface conforme scroll.

Não transformar Header em elemento excessivamente animado.

---

# Phase 6 — Hero

## Status

Pending.

## Objetivo

Construir a primeira experiência definitiva da nova identidade.

Mensagem principal atual:

> Cada ideia tem seu próprio fluxo.

Direção:

- Light-first;
- espaço negativo;
- headline forte;
- composição editorial;
- Wave abstrata;
- Purple + Green controlados;
- visual autoral;
- linguagem acessível;
- sem fotografia marítima obrigatória;
- sem cyberpunk;
- sem excesso de partículas.

O Hero pode possuir intensidade visual maior que outras seções.

---

## 6.1 Ordem de implementação

Implementar primeiro:

1. conteúdo;
2. layout;
3. tipografia;
4. responsividade;
5. Light/Dark;
6. Wave estática;
7. motion;
8. pointer interaction, caso realmente agregue.

Não começar pelo efeito.

---

# Phase 7 — Solutions

## Status

Pending.

## Serviços

- Sistemas Web;
- Aplicativos Mobile;
- Automações;
- Integrações.

## Objetivo

Comunicar soluções de forma compreensível para pessoas não técnicas.

A seção deve responder rapidamente:

> O que a Next Wave consegue construir para o meu negócio?

Evitar:

- jargão;
- grid SaaS genérico;
- excesso de cards;
- foco excessivo na stack.

---

# Phase 8 — Process

## Status

Pending.

## Etapas

1. Entendemos
2. Planejamos
3. Desenvolvemos
4. Entregamos
5. Evoluímos

## Objetivo

Demonstrar que existe método sem transmitir rigidez.

Essa é uma das principais oportunidades de utilizar a Wave como narrativa.

Ordem:

1. conteúdo;
2. layout;
3. responsividade;
4. Wave;
5. scroll behavior;
6. reduced motion.

---

# Phase 9 — Technology

## Status

Pending.

Mensagem:

> Construímos hoje pensando no amanhã.

## Objetivo

Demonstrar capacidade técnica sem transformar tecnologia no produto principal.

Evitar mural de logos como protagonista.

Tecnologias podem aparecer como segunda camada de leitura.

O visitante não técnico deve entender a seção sem conhecer nenhuma tecnologia utilizada.

---

# Phase 10 — Projects

## Status

Pending.

Mensagem conceitual:

> Ideias que viraram resultados.

## Objetivo

Mostrar trabalho real.

Preferir apresentação editorial.

Os projetos devem ser protagonistas.

Nunca inventar:

- clientes;
- métricas;
- projetos;
- resultados;
- depoimentos;
- logos de empresas.

Utilizar placeholders explicitamente identificados até existir conteúdo autorizado.

---

# Phase 11 — About

## Status

Pending.

Mensagem conceitual:

> Mais que código, parceria de verdade.

Pilares:

- proximidade;
- soluções reais;
- evolução contínua;
- confiança.

## Objetivo

Humanizar a Next Wave.

A seção pode possuir ritmo visual mais tranquilo.

Evitar discurso corporativo genérico.

---

# Phase 12 — Final CTA

## Status

Pending.

## Objetivo

Encerrar a narrativa e conduzir para contato.

CTA principal:

> Falar com a Next Wave

A Wave pode reaparecer com maior presença.

A seção pode possuir intensidade visual ligeiramente maior.

Não comprometer clareza da ação.

---

# Phase 13 — Footer

## Status

Pending.

Implementar:

- marca;
- navegação;
- informações reais disponíveis;
- links necessários;
- copyright.

Não inventar:

- telefone;
- e-mail;
- endereço;
- redes sociais;
- dados comerciais.

---

# Phase 14 — Global Wave Integration

## Status

Pending.

## Objetivo

Depois das seções existirem individualmente, avaliar a continuidade visual da Wave.

Importante:

> Não implementar um único SVG gigante apenas porque o conceito fala em continuidade.

A Wave pode assumir diferentes representações ao longo da página.

Exemplos:

- linha;
- underline;
- path;
- superfície;
- separador;
- interação;
- movimento.

A continuidade deve ser percebida conceitualmente.

Não necessariamente através de um único elemento DOM.

---

# Phase 15 — Motion Polish

## Status

Pending.

## Objetivo

Revisar motion global depois que a página estiver estruturalmente pronta.

Avaliar:

- excesso;
- repetição;
- timing;
- easing;
- intensidade;
- reduced motion;
- mobile;
- performance.

Remover efeitos que não agregam.

Adicionar motion somente onde houver ganho claro.

---

# Phase 16 — Responsive QA

## Status

Pending.

Validar aproximadamente:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Verificar:

- overflow;
- tipografia;
- spacing;
- touch;
- menu;
- Wave;
- imagens;
- CTAs;
- projetos;
- Light/Dark.

Mobile deve ser tratado como composição própria.

Não apenas desktop reduzido.

---

# Phase 17 — Accessibility QA

## Status

Pending.

Validar:

- semântica;
- headings;
- landmarks;
- keyboard;
- focus;
- contraste;
- aria;
- reduced motion;
- Theme Toggle;
- touch targets;
- zoom;
- leitura sem motion.

---

# Phase 18 — Performance

## Status

Pending.

Revisar:

- bundle;
- imagens;
- fonts;
- Client Components;
- animações;
- SVGs;
- blur;
- filters;
- listeners;
- third-party libraries;
- hydration;
- layout shift.

Priorizar Core Web Vitals.

Efeitos visuais não justificam degradação significativa.

---

# Phase 19 — SEO

## Status

Pending.

Implementar ou revisar:

- metadata;
- title;
- description;
- Open Graph;
- canonical;
- robots;
- sitemap;
- semantic HTML;
- structured data quando aplicável.

Não inventar dados empresariais.

Conteúdo importante deve existir semanticamente no HTML.

---

# Phase 20 — Content Review

## Status

Pending.

Pesquisar por:

- TODO;
- lorem ipsum;
- placeholders;
- fake data;
- claims não verificadas;
- contatos falsos;
- métricas fictícias;
- clientes fictícios;
- depoimentos fictícios;
- logos não autorizados.

Nada disso deve chegar à produção sem decisão explícita.

---

# Phase 21 — Visual QA

## Status

Pending.

Comparar implementação com:

- direção visual atual;
- wireframes ainda relevantes;
- Project Brief;
- Design System;
- Motion Guidelines.

Avaliar:

- Light Mode;
- Dark Mode;
- desktop;
- mobile.

Perguntas importantes:

> O site está acolhedor para pessoas não técnicas?

> Ainda parece uma empresa altamente competente?

> Existe identidade própria sem excesso de efeitos?

> O mar está presente como comportamento ou virou tema?

> Purple e Green estão funcionando como assinatura ou dominando a interface?

> A experiência parece Next Wave ou poderia pertencer a qualquer SaaS?

---

# Phase 22 — Technical QA

## Status

Pending.

Executar:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Corrigir erros antes de deploy.

Também verificar:

- console;
- hydration;
- warnings;
- dead code;
- imports;
- assets.

---

# Phase 23 — Browser QA

## Status

Pending.

Testar navegadores modernos relevantes.

Prioridade:

- Chromium;
- Safari / WebKit;
- Firefox.

Verificar especialmente:

- fonts;
- gradients;
- SVG;
- theme;
- sticky/fixed;
- animations;
- masks;
- filters.

---

# Phase 24 — Lighthouse

## Status

Pending.

Avaliar:

- Performance;
- Accessibility;
- Best Practices;
- SEO.

Não perseguir score sacrificando experiência ou arquitetura sem analisar o motivo.

Investigar os problemas reais.

---

# Phase 25 — Vercel Preview

## Status

Pending.

Criar/validar Preview antes da substituição definitiva da página temporária.

Verificar:

- deploy;
- assets;
- Light Mode;
- Dark Mode;
- mobile;
- links;
- WhatsApp;
- metadata;
- Open Graph;
- performance;
- console.

A Coming Soon deve continuar como produção enquanto a nova experiência não estiver aprovada.

---

# Phase 26 — Production

## Status

Pending.

Somente após aprovação explícita.

Etapas:

1. substituir a Coming Soon;
2. realizar deploy;
3. validar domínio;
4. validar `www`;
5. validar redirects;
6. validar SSL;
7. executar smoke test;
8. testar mobile;
9. testar CTA;
10. revisar analytics caso existam.

---

# Phase 27 — Post-launch Review

## Status

Pending.

Após publicação, revisar comportamento real.

Avaliar:

- erros;
- performance;
- conversão;
- navegação;
- comportamento mobile;
- páginas mais acessadas;
- pontos de abandono, caso analytics existam.

Melhorias futuras devem ser orientadas por necessidade real.

---

# Dependências

Antes de instalar qualquer dependência:

1. verificar se CSS resolve;
2. verificar se SVG resolve;
3. verificar se browser APIs resolvem;
4. verificar se já existe solução no projeto;
5. avaliar bundle;
6. avaliar manutenção;
7. justificar necessidade.

Não adicionar biblioteca apenas por conveniência.

---

# Motion

Quando uma animação for necessária, seguir:

1. CSS;
2. SVG;
3. Motion;
4. bibliotecas adicionais.

Motion não deve ser utilizado automaticamente para toda transição.

---

# React Bits

React Bits é uma possível fonte de:

- inspiração;
- efeitos;
- implementações específicas.

Não é Design System.

Qualquer elemento utilizado deve ser adaptado à identidade da Next Wave.

Evitar aparência de galeria de efeitos.

---

# shadcn/ui

shadcn/ui pode ser utilizado quando fizer sentido.

Não utilizar componentes default sem adaptação.

A implementação deve respeitar:

- tokens;
- tipografia;
- Light/Dark;
- radius;
- interactions;
- identidade.

---

# Code Quality

Preferir:

- componentes pequenos;
- responsabilidades claras;
- TypeScript estrito;
- props tipadas;
- Server Components;
- dados estáticos tipados;
- nomes claros;
- progressive enhancement.

Evitar:

- `any`;
- estado global sem necessidade;
- abstrações prematuras;
- componentes gigantes;
- página inteira client-side;
- dependências desnecessárias.

---

# Server Components

Server Components são padrão.

Adicionar `"use client"` somente quando necessário para:

- interação;
- estado;
- browser APIs;
- motion;
- Theme Provider quando tecnicamente necessário.

Isolar Client Components.

---

# Environment Variables

Possíveis variáveis:

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

Não hardcodar dados de produção que devam ser configuráveis.

Não inventar valores durante desenvolvimento.

---

# Evidências

Quando solicitado, salvar evidências de implementação.

Possíveis evidências:

- desktop Light;
- desktop Dark;
- mobile Light;
- mobile Dark;
- estados interativos;
- reduced motion;
- comportamento específico.

Não alterar a UI apenas para produzir uma screenshot mais bonita.

Evidência deve representar a implementação real.

---

# Commits

Preferir Conventional Commits.

Exemplos:

```text
docs: update Next Wave brand direction

feat: add theme foundation

feat: implement base design tokens

feat: add theme toggle

feat: implement hero section

fix: prevent theme flash

refactor: simplify wave animation
```

Commits devem representar mudanças coerentes.

---

# Branches

Seguir convenção definida pelo projeto/repositório.

Não criar branch adicional sem necessidade ou solicitação.

---

# Regra sobre conteúdo real

Nunca inventar:

- clientes;
- cases;
- métricas;
- depoimentos;
- resultados;
- parceiros;
- logos;
- contatos;
- informações comerciais.

Quando informação real não estiver disponível:

1. utilizar placeholder explicitamente identificado;
2. utilizar conteúdo Demo/Labs quando apropriado;
3. ou omitir temporariamente.

---

# Regra sobre referências visuais

Referências e wireframes são ferramentas.

Não são especificações imutáveis.

Uma referência pode fornecer:

- composição;
- ideia;
- ritmo;
- hierarquia;
- comportamento.

Não copiar cegamente elementos que conflitem com a direção atual.

---

# Regra sobre perfeccionismo

Não interromper o desenvolvimento buscando uma direção visual teoricamente perfeita antes de existir implementação real.

A direção atual é considerada suficientemente sólida para desenvolvimento.

Refinamentos devem acontecer através de:

- implementação;
- observação;
- QA;
- feedback;
- iteração.

O objetivo é evoluir uma identidade consistente.

Não buscar infinitamente uma imagem conceitual perfeita antes de construir.

---

# Hierarquia de decisão

Quando houver conflito:

1. solicitação atual explicitamente aprovada;
2. direção visual mais recente aprovada;
3. `DESIGN-SYSTEM.md`;
4. `MOTION-GUIDELINES.md`;
5. `PROJECT-BRIEF.md`;
6. wireframes ainda relevantes;
7. implementação existente;
8. defaults de bibliotecas.

A implementação antiga não deve bloquear uma decisão mais recente documentada.

---

# Princípios finais

> Implementar bem a fase atual é mais importante do que implementar mais fases.

> Conteúdo antes do efeito.

> Tecnologia é o meio. O resultado é o que importa.

> Identidade está nos detalhes.

> A Next Wave não representa o mar. Ela se comporta como ele.

> Cada ideia tem seu próprio fluxo.

---

# Regra final

Não avançar escopo sem autorização.

Ao concluir uma fase:

1. validar;
2. reportar;
3. parar.

A próxima fase começa somente quando houver decisão explícita para continuar.