# Next Wave Solutions — Design System

## 1. Objetivo

Este documento define a linguagem visual da Next Wave Solutions e deve orientar todas as decisões de interface do site institucional.

O Design System deve permitir uma experiência:

- clara;
- acolhedora;
- premium;
- contemporânea;
- autoral;
- elegante;
- acessível;
- responsiva;
- consistente.

A identidade da Next Wave deve ser percebida principalmente através de:

- composição;
- tipografia;
- ritmo;
- movimento;
- contraste;
- pequenos detalhes;
- microinterações;
- uso intencional da Wave;
- aplicação controlada das cores da marca.

A identidade não deve depender de excesso de efeitos.

Princípio:

> Identidade está nos detalhes.

---

## 2. Filosofia visual

A Next Wave deve equilibrar simplicidade e personalidade.

O objetivo não é criar uma interface visualmente complexa apenas para demonstrar capacidade técnica.

Também não queremos cair no extremo oposto de uma interface tão minimalista que poderia pertencer a qualquer empresa.

A experiência deve transmitir:

- confiança;
- cuidado;
- sofisticação;
- proximidade;
- personalidade;
- qualidade técnica.

O visitante deve perceber que existe intenção em cada decisão visual.

---

## 3. Light-first

O tema claro é a expressão visual principal da Next Wave.

Isso não significa utilizar branco puro em toda a página.

A direção deve priorizar:

- off-white;
- neutros levemente quentes;
- superfícies claras;
- texto grafite;
- bastante espaço negativo;
- contraste confortável.

A sensação desejada é:

> clara, elegante, humana e acolhedora.

Evitar aparência:

- hospitalar;
- excessivamente branca;
- excessivamente bege;
- corporativa genérica.

---

## 4. Dark Mode

A Next Wave também possuirá Dark Mode.

Dark Mode deve representar exatamente a mesma marca.

A mudança deve afetar principalmente:

- backgrounds;
- surfaces;
- foreground;
- borders;
- shadows;
- contraste.

Dark Mode não significa:

- cyberpunk;
- synthwave;
- neon;
- interface gamer;
- excesso de glow;
- excesso de partículas.

A mesma composição deve continuar elegante e acolhedora.

Princípio:

> O ambiente muda. A personalidade não.

---

## 5. Paleta da marca

As cores históricas da Next Wave continuam sendo Purple e Green.

Elas são cores de assinatura.

Não são cores obrigatórias em todos os elementos.

### Purple

```css
--primary: #8B5CF6;
--primary-hover: #6D28D9;
--primary-strong: #4C1D95;

--primary-soft: #F5F3FF;
--primary-soft-strong: #EDE9FE;
--primary-muted: #C4B5FD;
```

O Purple está associado principalmente a:

- criatividade;
- ideia;
- transformação;
- digital;
- experimentação.

### Green

```css
--accent: #10B981;
--accent-hover: #047857;
--accent-strong: #064E3B;

--accent-soft: #ECFDF5;
--accent-soft-strong: #D1FAE5;
--accent-muted: #6EE7B7;
```

O Green está associado principalmente a:

- evolução;
- movimento;
- resultado;
- continuidade;
- crescimento.

Essas associações são conceituais.

Não criar regras rígidas onde determinada cor obrigatoriamente significa determinada categoria.

---

## 6. Tema claro

Direção inicial de tokens:

```css
:root {
  --background: #FAF9F7;
  --background-secondary: #F5F3EF;
  --background-tertiary: #EFEEE9;

  --surface: #FFFFFF;
  --surface-secondary: #F7F6F3;
  --surface-hover: #F1EFEA;

  --foreground: #111827;

  --text-primary: #111827;
  --text-secondary: #4B5563;
  --text-muted: #6B7280;
  --text-subtle: #9CA3AF;

  --border: rgba(17, 24, 39, 0.10);
  --border-strong: rgba(17, 24, 39, 0.18);

  --focus: #8B5CF6;
}
```

Esses valores são ponto de partida.

Pequenos ajustes de temperatura e contraste são permitidos durante implementação e QA visual.

Não alterar a filosofia geral sem revisão da direção visual.

---

## 7. Tema escuro

Direção inicial:

```css
[data-theme="dark"] {
  --background: #0D1017;
  --background-secondary: #121720;
  --background-tertiary: #171D27;

  --surface: #151B24;
  --surface-secondary: #1A222D;
  --surface-hover: #202A37;

  --foreground: #F9FAFB;

  --text-primary: #F3F4F6;
  --text-secondary: #D1D5DB;
  --text-muted: #9CA3AF;
  --text-subtle: #6B7280;

  --border: rgba(255, 255, 255, 0.10);
  --border-strong: rgba(255, 255, 255, 0.18);

  --focus: #A78BFA;
}
```

Evitar preto absoluto como background predominante.

O Dark Mode deve continuar possuindo alguma temperatura e profundidade.

---

## 8. Cores semânticas

```css
--info: #3B82F6;
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
```

As cores semânticas devem ser utilizadas para significado funcional.

Exemplos:

- sucesso;
- aviso;
- erro;
- informação;
- validação;
- feedback.

Nunca depender exclusivamente da cor para comunicar estado.

Quando necessário, combinar:

- ícone;
- texto;
- label;
- forma.

---

## 9. Regra cromática

A página deve continuar visualmente forte mesmo se quase todas as cores da marca forem removidas.

Purple e Green devem adicionar reconhecimento.

Não sustentar toda a composição.

A ordem de decisão deve ser:

> neutros → hierarquia → composição → cor.

Evitar utilizar Purple ou Green apenas porque existe espaço disponível.

---

## 10. Gradiente da marca

O gradiente histórico continua fazendo parte da identidade.

### Gradiente principal

```css
linear-gradient(
  90deg,
  #8B5CF6 0%,
  #6366F1 35%,
  #06B6D4 65%,
  #10B981 100%
);
```

O azul/ciano funciona como transição entre Purple e Green.

Não deve necessariamente ser tratado como uma terceira cor principal da marca.

---

## 11. Uso de gradientes

Gradientes devem ser utilizados de maneira controlada.

Bons usos:

- Wave;
- pequenos detalhes gráficos;
- trechos específicos de texto;
- elementos especiais;
- estados de destaque;
- ilustrações abstratas;
- momentos específicos de CTA.

Evitar:

- todos os títulos em gradiente;
- todos os botões em gradiente;
- fundos inteiros constantemente em gradiente;
- bordas em gradiente em todos os cards;
- vários gradientes competindo simultaneamente.

Princípio:

> Gradiente é assinatura, não preenchimento.

---

## 12. Tipografia

A tipografia deve transmitir:

- clareza;
- confiança;
- modernidade;
- personalidade.

### Headings

Utilizar:

> Manrope

Aplicações principais:

- H1;
- H2;
- H3;
- grandes mensagens;
- CTAs importantes quando apropriado.

### Body / UI

Utilizar:

> Inter

Aplicações:

- parágrafos;
- navegação;
- labels;
- formulários;
- metadata;
- componentes de interface.

As fontes devem continuar sendo carregadas através de `next/font`.

---

## 13. Hierarquia tipográfica

A escala deve ser fluida e responsiva.

Preferir `clamp()` quando apropriado.

Direção conceitual:

```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
--text-5xl: 3rem;
--text-6xl: 3.75rem;
```

Display typography pode ultrapassar essa escala quando fizer parte da composição.

Não transformar números fixos acima em restrição absoluta.

---

## 14. Display Typography

Grandes títulos podem funcionar como elementos gráficos.

Permitido:

- quebras de linha intencionais;
- palavras isoladas;
- diferentes alinhamentos;
- composição assimétrica;
- pequenas interferências da Wave;
- acentos cromáticos pontuais.

Evitar:

- títulos gigantes sem função;
- sacrificar leitura por composição;
- textos que só funcionam em desktop.

O conteúdo deve permanecer compreensível sem animação.

---

## 15. Peso tipográfico

Evitar utilizar bold em tudo.

Criar contraste através de:

- tamanho;
- peso;
- espaço;
- posição;
- cor;
- largura.

Manrope pode assumir maior presença nos títulos.

Inter deve permanecer confortável para leitura contínua.

---

## 16. Texto em gradiente

Texto em gradiente é permitido.

Deve ser exceção.

Exemplo possível:

> Cada ideia tem seu próprio **fluxo**.

Somente uma palavra ou pequeno trecho pode receber tratamento especial.

Evitar transformar headlines inteiras em arco-íris.

---

## 17. Layout

A composição deve combinar:

- grid;
- espaço negativo;
- assimetria controlada;
- hierarquia forte;
- áreas de respiro.

O site não deve parecer um dashboard.

Também não deve parecer uma sequência infinita de containers centralizados idênticos.

---

## 18. Container

Direção inicial:

```css
--container-max: 1440px;
```

O conteúdo principal deve respeitar margens confortáveis.

O container máximo não significa que todos os elementos devem possuir essa largura.

Textos longos devem utilizar medidas menores para preservar leitura.

---

## 19. Grid editorial

A Next Wave pode utilizar composição editorial.

Isso significa permitir:

- títulos deslocados;
- numeração de seção;
- pequenos labels laterais;
- elementos fora do eixo principal;
- diferenças de proporção;
- whitespace proposital;
- imagens maiores que o bloco textual;
- pequenas quebras controladas de grid.

Assimetria não significa desorganização.

Toda composição deve possuir lógica visual.

---

## 20. Espaçamento

Espaço negativo é parte da identidade.

A página deve respirar.

Seções importantes podem possuir espaçamento generoso.

Entretanto, evitar:

- áreas enormes sem propósito;
- scroll excessivo apenas por estética;
- distâncias que quebrem relação entre conteúdos.

O espaçamento deve reforçar hierarquia.

---

## 21. Section Rhythm

As seções não precisam possuir a mesma densidade.

Algumas podem ser:

- abertas;
- silenciosas;
- minimalistas.

Outras podem ser:

- mais densas;
- mais interativas;
- mais expressivas.

Esse contraste ajuda a representar a ideia de equilíbrio.

---

## 22. Radius

Direção:

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-2xl: 32px;
--radius-full: 9999px;
```

Não aplicar radius automaticamente em todos os elementos.

Evitar aparência de:

> tudo é um card dentro de outro card.

---

## 23. Borders

Borders devem ser discretos.

Preferir:

- contraste de superfície;
- linhas finas;
- separadores;
- whitespace.

Antes de adicionar sombra, verificar se border ou contraste de superfície já resolve.

---

## 24. Shadows

No tema claro, sombras podem ajudar a separar superfícies.

Direção conceitual:

```css
--shadow-sm:
  0 1px 2px rgba(0, 0, 0, 0.03);

--shadow-md:
  0 8px 24px rgba(0, 0, 0, 0.05);

--shadow-lg:
  0 20px 50px rgba(0, 0, 0, 0.08);
```

Usar com moderação.

Evitar:

- sombras pesadas;
- sombras dramáticas;
- sombras coloridas recorrentes;
- neon shadow.

No Dark Mode, preferir diferença de superfície e border antes de sombras.

---

## 25. Glow

Glow não é um elemento padrão do Design System.

Pode existir excepcionalmente em:

- Wave;
- uma interação especial;
- um elemento gráfico;
- um momento específico da experiência.

Não utilizar glow como linguagem visual dominante.

Especialmente evitar:

- cards brilhando;
- textos brilhando;
- todos os botões brilhando;
- backgrounds permanentemente iluminados.

---

## 26. Wave

A Wave é o principal elemento gráfico proprietário da Next Wave.

Ela representa:

- movimento;
- continuidade;
- transformação;
- adaptação;
- evolução;
- fluxo.

A Wave não precisa representar literalmente água.

Pode assumir diferentes formas.

Exemplos:

- linha;
- trajetória;
- múltiplos fios;
- superfície abstrata;
- distorção;
- máscara;
- transição;
- underline;
- separador;
- interação.

---

## 27. Aparência da Wave

A Wave deve ser:

- elegante;
- leve;
- fluida;
- reconhecível;
- adaptável.

Ela pode utilizar o gradiente da marca.

Entretanto, não precisa estar sempre colorida.

Também pode existir como:

- linha neutra;
- relevo;
- sombra;
- recorte;
- diferença de superfície;
- distorção.

Isso ajuda a evitar repetição visual.

---

## 28. Frequência da Wave

A Wave não precisa aparecer em todas as seções.

Se utilizada constantemente, deixa de ser assinatura e vira decoração.

Priorizar momentos em que ela possui função:

- introdução;
- conexão;
- transformação;
- navegação;
- progressão;
- encerramento.

---

## 29. Referências marítimas

Referências marítimas devem permanecer sutis.

Evitar como linguagem recorrente:

- faróis;
- barcos;
- âncoras;
- timões;
- oceanos;
- praias;
- bússolas;
- fotografias de ondas.

Esses elementos podem existir excepcionalmente quando houver motivo narrativo real.

Nunca utilizar apenas para lembrar ao visitante que o nome da empresa possui "Wave".

Princípio:

> A Next Wave não representa o mar. Ela se comporta como ele.

---

## 30. Imagens

Imagens devem possuir função.

Possíveis usos:

- projetos;
- produtos;
- contexto;
- pessoas reais;
- detalhes humanos;
- storytelling.

Evitar banco de imagens genérico de:

- pessoas sorrindo em reunião;
- programadores olhando monitores;
- código em telas;
- equipes fictícias;
- escritórios que não pertencem à empresa.

Nunca apresentar algo fictício como real.

---

## 31. Pessoas

Quando a Next Wave possuir material real de equipe ou bastidores, imagens humanas podem ajudar a reduzir distância e aumentar confiança.

Preferir imagens:

- naturais;
- honestas;
- pouco encenadas;
- coerentes com a marca.

Não é obrigatório utilizar pessoas em todas as páginas.

---

## 32. Projetos

Projetos devem possuir grande importância visual.

A apresentação deve se aproximar de uma galeria editorial.

Preferir:

- mockups grandes;
- diferentes proporções;
- boa direção de arte;
- contexto suficiente;
- informação objetiva.

Evitar simplesmente repetir:

```text
[ card ]
[ card ]
[ card ]
```

em uma grade genérica.

O trabalho deve ser protagonista.

---

## 33. Conteúdo fictício

Nunca inventar:

- clientes;
- marcas atendidas;
- métricas;
- resultados;
- depoimentos;
- números;
- projetos;
- prêmios.

Durante desenvolvimento:

- identificar placeholder explicitamente;
- utilizar projetos Labs/Demo quando apropriado;
- ou esconder a seção até existir conteúdo real.

---

## 34. Botões

Botões devem possuir personalidade sem chamar mais atenção que o conteúdo.

### Primary

Características:

- alto contraste;
- leitura imediata;
- presença;
- área de clique confortável.

Pode utilizar Purple.

Gradiente pode ser utilizado quando houver justificativa visual.

Não assumir que todo Primary Button precisa ser gradiente.

### Secondary

Preferir:

- superfície neutra;
- border discreto;
- texto forte.

### Tertiary

Pode utilizar:

- texto;
- seta;
- underline;
- pequena microinteração.

---

## 35. Button Shape

Evitar extremos.

Botões não precisam ser:

- completamente quadrados;
- pills gigantes em todos os casos.

Radius deve acompanhar contexto e hierarquia.

CTAs principais podem possuir mais presença.

---

## 36. Cards

Cards devem existir quando ajudam a agrupar conteúdo.

Não utilizar card simplesmente porque existe um bloco de informação.

Antes de criar um card, considerar:

- whitespace;
- border;
- linha;
- grid;
- composição editorial.

Quando cards forem utilizados:

- superfície discreta;
- border sutil;
- radius consistente;
- hover delicado;
- hierarquia clara.

---

## 37. Glassmorphism

Glassmorphism não é linguagem principal.

Pode ser utilizado excepcionalmente em um contexto onde exista motivo visual.

Evitar:

- todos os cards translúcidos;
- blur pesado;
- estética de dashboard futurista.

---

## 38. Ícones

Preferir iconografia:

- simples;
- linear;
- consistente;
- facilmente compreensível.

Ícones devem ajudar a leitura.

Não utilizar ícones futuristas apenas para parecer tecnológico.

---

## 39. Labels

Labels pequenos podem contribuir para a linguagem editorial.

Exemplos:

```text
01 / SOLUÇÕES
02 / PROCESSO
03 / TECNOLOGIA
```

Também podem existir pequenas palavras de contexto.

Usar com moderação.

Não transformar a interface em uma ficha técnica.

---

## 40. Linhas e separadores

Linhas finas podem ser elementos importantes da linguagem visual.

Podem:

- organizar;
- conectar;
- criar ritmo;
- separar;
- servir como origem para microinterações.

Algumas linhas podem adquirir comportamento inspirado na Wave.

---

## 41. Background

O background principal deve permanecer simples.

Permitido:

- pequenas mudanças de tonalidade;
- textura extremamente sutil;
- noise quase imperceptível;
- linhas abstratas ocasionais;
- elementos gráficos pontuais.

Evitar:

- grids tecnológicos constantes;
- partículas permanentes;
- grandes glows;
- fundos visualmente ocupados.

---

## 42. Noise / Texture

Uma textura muito sutil pode ajudar a remover a sensação de interface excessivamente digital.

Se utilizada:

- quase imperceptível;
- baixo contraste;
- sem prejudicar performance;
- sem prejudicar legibilidade.

Não deve parecer filtro vintage.

---

## 43. Header

O Header deve ser simples.

Prioridades:

- marca;
- navegação;
- CTA;
- Theme Toggle.

Ele pode começar integrado ao Hero e ganhar superfície conforme scroll, caso isso faça sentido durante implementação.

Evitar Header excessivamente grande.

---

## 44. Logo

A logo atual da Next Wave permanece como referência oficial até decisão explícita em contrário.

Não redesenhar automaticamente a logo para combinar com determinada seção.

A identidade visual deve se adaptar à marca, não exigir rebranding sem necessidade.

Garantir versões adequadas para:

- fundo claro;
- fundo escuro;
- tamanhos pequenos.

---

## 45. Hero

O Hero pode ser uma das áreas mais expressivas da página.

Direção:

- light-first;
- muito espaço negativo;
- headline forte;
- composição editorial;
- Wave abstrata;
- Purple e Green controlados;
- detalhes de movimento;
- mensagem compreensível para público não técnico.

Mensagem principal atual:

> Cada ideia tem seu próprio fluxo.

O Hero pode utilizar uma quantidade de experimentação maior que o restante da Home.

Isso não significa que sua intensidade visual deve ser repetida em todas as seções.

---

## 46. Solutions

A seção de soluções deve ser extremamente clara.

O visitante deve entender rapidamente que a Next Wave pode construir:

- sistemas web;
- aplicativos;
- automações;
- integrações.

Evitar linguagem excessivamente técnica.

Visualmente, evitar automaticamente uma grade SaaS de quatro cards idênticos.

Explorar composição antes de recorrer a cards.

---

## 47. Process

O Process é uma das principais oportunidades de expressão da identidade.

A Wave pode conectar:

1. Entendemos
2. Planejamos
3. Desenvolvemos
4. Entregamos
5. Evoluímos

A seção pode possuir maior intensidade visual.

Mesmo assim, compreensão do processo vem antes do efeito.

---

## 48. Technology

Tecnologia deve possuir tratamento elegante e acessível.

Mensagem conceitual:

> Construímos hoje pensando no amanhã.

Evitar utilizar uma parede de logos como protagonista.

Tecnologias podem aparecer como segunda camada de leitura.

O visitante não técnico deve entender a seção mesmo ignorando completamente os nomes das ferramentas.

---

## 49. About

A seção About deve ajudar a humanizar a Next Wave.

Pode ser mais tranquila visualmente.

Priorizar:

- proximidade;
- confiança;
- filosofia;
- maneira de trabalhar.

Evitar discurso corporativo genérico.

---

## 50. Final CTA

O Final CTA pode recuperar um pouco mais da presença visual da marca.

Pode utilizar:

- Wave;
- cor;
- composição mais expressiva;
- uma microinteração especial.

Ainda assim, deve permanecer claro e simples.

CTA principal:

> Falar com a Next Wave

---

## 51. Theme Toggle

O site possuirá Light e Dark Mode.

O Theme Toggle deve:

- ser acessível por teclado;
- possuir nome acessível;
- indicar estado;
- persistir escolha;
- evitar flash de tema incorreto;
- funcionar sem depender de hover.

A implementação deve considerar `prefers-color-scheme`.

Quando houver escolha manual do usuário, ela deve ter precedência.

---

## 52. Theme Transition

A transição entre temas pode possuir personalidade.

Uma microinteração envolvendo a Wave pode ser explorada.

Entretanto:

- não bloquear a interface;
- não criar uma animação longa;
- respeitar reduced motion;
- não adicionar complexidade desnecessária.

Uma troca simples e bem executada é preferível a um efeito complexo mal executado.

---

## 53. Focus

Todos os elementos interativos devem possuir estado `focus-visible`.

Direção:

```css
:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 3px;
}
```

A implementação pode variar conforme o componente.

Nunca remover focus sem fornecer alternativa acessível.

---

## 54. Selection

A seleção de texto pode carregar discretamente a identidade.

Exemplo conceitual:

```css
::selection {
  background: var(--primary);
  color: #ffffff;
}
```

Validar contraste em ambos os temas.

---

## 55. Links

Links dentro de conteúdo devem ser identificáveis.

Não depender exclusivamente de hover.

Podem utilizar:

- underline;
- peso;
- cor;
- seta;
- microinteração.

Links de navegação podem possuir tratamento diferente.

---

## 56. Responsive

Mobile não é desktop reduzido.

Cada seção deve ser reconsiderada.

Prioridades no mobile:

1. conteúdo;
2. legibilidade;
3. interação;
4. hierarquia;
5. identidade;
6. efeitos.

Elementos decorativos podem ser:

- simplificados;
- reposicionados;
- reduzidos;
- removidos.

---

## 57. Breakpoints

Os breakpoints devem seguir a estratégia do Tailwind quando possível.

QA visual deve considerar aproximadamente:

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

Não desenvolver apenas para 1440px.

---

## 58. Accessibility

A identidade nunca pode comprometer acessibilidade.

Validar:

- contraste;
- focus;
- keyboard;
- headings;
- landmarks;
- aria;
- reduced motion;
- touch targets;
- zoom;
- legibilidade.

WCAG deve ser considerada durante desenvolvimento, não apenas no final.

---

## 59. Reduced Motion

A interface deve permanecer visualmente completa com `prefers-reduced-motion: reduce`.

Quando ativo:

- reduzir movimentos contínuos;
- remover parallax;
- remover pointer-following;
- simplificar transições;
- manter Wave visível quando relevante;
- preservar todo conteúdo.

---

## 60. Performance visual

Evitar que decisões estéticas causem degradação desnecessária.

Utilizar com cuidado:

- blur;
- backdrop-filter;
- filtros;
- grandes imagens;
- SVGs complexos;
- partículas;
- efeitos contínuos;
- sombras pesadas.

O próprio site é uma demonstração da qualidade técnica da Next Wave.

---

## 61. Tailwind

Tokens devem ser centralizados.

Tailwind deve consumir o Design System.

Evitar valores arbitrários repetidos espalhados pelos componentes.

Quando um valor representa uma decisão recorrente de design, transformá-lo em token.

Quando é realmente específico de uma única composição, um valor local pode ser aceitável.

---

## 62. shadcn/ui

shadcn/ui pode ser utilizado como base quando fizer sentido.

Não utilizar aparência default como identidade final.

Componentes devem ser adaptados para:

- tokens;
- typography;
- radius;
- interaction;
- Light/Dark;
- identidade Next Wave.

---

## 63. React Bits

React Bits pode fornecer inspiração ou implementação para efeitos específicos.

Não é Design System.

Não transformar o site em uma coleção de componentes do React Bits.

Todo elemento utilizado deve parecer pertencente à Next Wave.

---

## 64. Server / Client

A direção visual não justifica transformar toda a aplicação em Client Component.

Preferir Server Components.

Utilizar Client Components apenas quando necessário para:

- interação;
- estado;
- animação;
- APIs de browser.

Isolar comportamento interativo em componentes pequenos.

---

## 65. Conteúdo antes do efeito

Toda seção deve funcionar:

- sem animação;
- sem hover;
- sem JavaScript visual adicional.

Motion deve melhorar uma experiência já funcional.

Não depender de efeitos para transmitir informação essencial.

---

## 66. Easter Eggs

Referências geek podem existir.

Devem ser sutis.

Exemplos possíveis:

- nomenclatura;
- pequenos detalhes;
- coordenadas;
- estados especiais;
- interações escondidas;
- referências discretas.

Não utilizar cultura geek como estética dominante.

O visitante não precisa entender a referência para aproveitar a experiência.

---

## 67. Personalização visual

O site deve demonstrar que a Next Wave valoriza soluções sob medida.

Isso significa evitar uma aparência excessivamente modular e repetitiva.

Nem todas as seções precisam compartilhar:

- o mesmo grid;
- o mesmo card;
- o mesmo alinhamento;
- a mesma densidade;
- o mesmo comportamento.

Consistência deve existir nos fundamentos.

Personalidade pode existir na composição.

---

## 68. O que evitar

Não utilizar como linguagem dominante:

- cyberpunk;
- synthwave;
- neon;
- glow;
- glassmorphism;
- partículas;
- grids futuristas;
- oceano;
- fotografia marítima;
- terminais;
- código como decoração;
- dashboards;
- gradientes excessivos;
- cards excessivos;
- template SaaS;
- estética exclusiva de desenvolvedores.

---

## 69. Teste de neutralidade de segmento

Ao avaliar uma tela, fazer a seguinte pergunta:

> Uma profissional autônoma, uma clínica, um restaurante ou uma empresa tradicional conseguiria se imaginar contratando a Next Wave ao ver esta página?

Se a interface parecer destinada exclusivamente ao setor de tecnologia, reconsiderar a direção.

Isso não significa tornar o site genérico.

Significa evitar nichar visualmente a empresa sem intenção.

---

## 70. Teste de identidade

Também perguntar:

> Se removermos a logo, ainda existe algo nesta experiência que poderia ser reconhecido como Next Wave?

A resposta deve surgir através da combinação de:

- tipografia;
- Wave;
- composição;
- movimento;
- detalhes;
- ritmo;
- personalidade.

Não apenas através de Purple e Green.

---

## 71. Hierarquia de decisão

Quando houver conflito entre referências:

1. requisito atual explicitamente aprovado;
2. direção visual mais recente aprovada;
3. wireframe aprovado mais recente;
4. `DESIGN-SYSTEM.md`;
5. `MOTION-GUIDELINES.md`;
6. `PROJECT-BRIEF.md`;
7. implementação existente;
8. defaults de bibliotecas.

Wireframes antigos que representem a direção dark/neon anterior não devem prevalecer sobre a direção atual.

---

## 72. Princípios fundamentais

### Princípio 1

> Identidade está nos detalhes.

### Princípio 2

> A Next Wave não representa o mar. Ela se comporta como ele.

### Princípio 3

> A Next Wave não precisa parecer tecnologia para demonstrar excelência tecnológica.

### Princípio 4

> Gradiente é assinatura, não preenchimento.

### Princípio 5

> O ambiente muda. A personalidade não.

### Princípio 6

> Neutros primeiro. Cor depois.

---

## 73. Regra final

O Design System não deve produzir uma interface genérica.

Também não deve produzir uma interface que precise gritar para possuir personalidade.

O objetivo é que alguém utilize o site e perceba:

> "Isso foi cuidadosamente pensado."

A identidade da Next Wave deve surgir da soma de pequenas decisões coerentes.

Não da quantidade de efeitos utilizados.