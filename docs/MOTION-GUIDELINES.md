# Next Wave Solutions — Motion Guidelines

## 1. Objetivo

Motion é parte importante da identidade da Next Wave Solutions.

Entretanto:

> Movimento não significa quantidade de animação.

Motion deve contribuir para:

- narrativa;
- continuidade;
- feedback;
- hierarquia;
- personalidade;
- percepção de qualidade;
- sensação de fluidez;
- conexão entre elementos.

Nunca deve competir com o conteúdo.

A experiência precisa continuar bonita, compreensível e funcional mesmo sem animações.

---

## 2. Conceito de movimento

O comportamento do movimento é inspirado no mar.

Não através da representação literal de água.

Mas através de:

- fluxo;
- inércia;
- aceleração;
- desaceleração;
- continuidade;
- calmaria;
- intensidade;
- transformação;
- adaptação;
- retorno ao equilíbrio.

Princípio fundamental:

> A Next Wave não representa o mar. Ela se comporta como ele.

A inspiração marítima deve ser percebida mais pelo comportamento da interface do que pela presença de elementos marítimos.

---

## 3. Filosofia

A experiência deve possuir momentos de:

- silêncio;
- movimento;
- intensidade;
- repouso.

Não animar tudo simultaneamente.

O contraste entre elementos estáticos e elementos em movimento aumenta o impacto das animações importantes.

Uma página onde tudo se move o tempo inteiro perde hierarquia.

Princípio:

> Se tudo se move, nada parece importante.

---

## 4. Motion como identidade

A personalidade da Next Wave deve aparecer principalmente em pequenas decisões de movimento.

Isso inclui:

- como elementos entram;
- como botões respondem;
- como linhas se transformam;
- como a Wave se comporta;
- como seções se conectam;
- como Light e Dark se alternam;
- como estados mudam.

O objetivo não é criar efeitos espetaculares em todos os momentos.

O objetivo é fazer interações simples parecerem cuidadosamente construídas.

---

## 5. Wave

A Wave é o principal elemento proprietário de motion da Next Wave.

Ela representa:

- movimento;
- transformação;
- continuidade;
- adaptação;
- evolução;
- fluxo.

Ela pode:

- atravessar partes da página;
- conectar elementos;
- reagir ao scroll;
- transformar sua forma;
- dividir-se;
- convergir;
- desaparecer;
- reaparecer;
- responder discretamente ao ponteiro;
- funcionar como underline;
- funcionar como trajetória;
- funcionar como transição;
- revelar conteúdo.

Ela não precisa existir visualmente em todas as seções.

Às vezes sua presença pode ser apenas sugerida pelo comportamento de outros elementos.

---

## 6. Wave não significa oceano

A animação da Wave não deve tentar simular água realista.

Evitar:

- ondas oceânicas realistas em todas as seções;
- física exagerada de água;
- splash;
- bolhas;
- espuma;
- efeitos aquáticos literais.

A Wave deve permanecer abstrata.

Sua inspiração vem do comportamento natural do movimento.

---

## 7. Intensidade narrativa

A página deve possuir ritmo.

A intensidade de motion pode variar conforme a seção.

### Hero

Intensidade:

> média.

O visitante deve perceber imediatamente que existe algo especial.

Entretanto, não deve ser bombardeado por efeitos.

Possibilidades:

- Wave em movimento suave;
- pequena transformação tipográfica;
- reveal;
- interação sutil com pointer;
- mudança delicada de profundidade.

---

### Solutions

Intensidade:

> baixa.

Conteúdo e compreensão são protagonistas.

Motion deve ajudar principalmente em:

- hover;
- reveal;
- transição;
- feedback.

---

### Process

Intensidade:

> média / alta.

Essa é uma das principais oportunidades para a Wave assumir papel narrativo.

O movimento pode representar progressão:

```text
IDEIA
  ↓
ENTENDEMOS
  ↓
PLANEJAMOS
  ↓
DESENVOLVEMOS
  ↓
ENTREGAMOS
  ↓
EVOLUÍMOS
```

A intensidade pode aumentar e depois retornar ao equilíbrio.

---

### Technology

Intensidade:

> baixa / média.

O movimento deve demonstrar refinamento.

Não complexidade.

Evitar transformar a seção em demonstração de efeitos tecnológicos.

---

### Projects

Intensidade:

> média.

Motion deve ajudar a explorar o trabalho.

Possibilidades:

- imagem reagindo ao hover;
- transições editoriais;
- pequenas mudanças de escala;
- reveal;
- movimento de metadata;
- mudanças sutis de enquadramento.

O projeto continua sendo protagonista.

---

### About

Intensidade:

> baixa.

A seção deve respirar.

Motion pode ser mais humano, lento e discreto.

---

### Final CTA

Intensidade:

> média.

A Wave pode ganhar novamente maior presença para fechar a narrativa.

O efeito deve conduzir para a ação.

Não competir com ela.

---

## 8. Entrada inicial

Não utilizar intro obrigatória.

Não bloquear acesso ao site para mostrar:

- logo;
- loader;
- vídeo;
- animação institucional.

O conteúdo deve estar disponível imediatamente.

Uma entrada inicial pode utilizar:

- opacity;
- pequeno translate;
- stagger curto;
- Wave entrando discretamente.

Nunca atrasar artificialmente o visitante.

---

## 9. Reveal

Reveals devem ser sutis.

Preferir:

- opacity;
- translateY pequeno;
- translateX pequeno quando conceitualmente apropriado;
- clip;
- mask;
- pequenas mudanças de blur apenas quando performáticas.

Evitar:

- grandes deslocamentos;
- bounce;
- elementos voando;
- rotações exageradas;
- delays longos.

Faixa recomendada:

```text
400–800ms
```

---

## 10. Distância de reveal

Quando utilizar translate, manter distância pequena.

Direção conceitual:

```text
8–32px
```

Não transformar cada reveal em uma entrada dramática.

Quanto mais frequente o comportamento, mais discreto ele deve ser.

---

## 11. Stagger

Stagger pode ajudar a revelar grupos.

Faixa recomendada:

```text
40–120ms
```

Pode ser utilizado em:

- listas;
- pequenos grupos;
- etapas;
- labels;
- itens de navegação.

Evitar sequências longas que atrasem acesso ao conteúdo.

---

## 12. Easing

Movimentos devem parecer naturais.

Preferir curvas suaves.

Direção conceitual:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

ou equivalentes adequados ao contexto.

Não transformar uma única curva em regra absoluta.

Diferentes interações podem exigir diferentes respostas.

Evitar easing excessivamente elástico como padrão.

---

## 13. Timing

Direção geral:

### Microinterações

```text
120–250ms
```

### UI transitions

```text
200–400ms
```

### Reveals

```text
400–800ms
```

### Storytelling / Wave

```text
800ms–3000ms+
```

Movimentos atmosféricos podem ser mais lentos quando não bloqueiam interação.

---

## 14. Microinterações

Microinterações são um dos principais locais onde a personalidade da Next Wave deve aparecer.

Exemplos:

- seta que responde ao hover;
- underline com comportamento de Wave;
- pequena deformação de linha;
- mudança sutil de trajetória;
- botão com movimento interno;
- Theme Toggle com transição proprietária;
- ícone com pequena resposta física;
- label reagindo ao estado;
- pequenas mudanças de spacing;
- linha que se reorganiza.

Esses detalhes devem ser descobertos naturalmente.

---

## 15. Hover

Hover deve oferecer feedback.

Permitido:

- pequena alteração de escala;
- translate;
- border;
- surface;
- underline;
- mudança controlada de cor;
- movimento interno;
- mudança de enquadramento de imagem.

Escala recomendada quando utilizada:

```text
1.01–1.02
```

Evitar elementos "pulando".

---

## 16. Hover não é requisito

Toda interação deve continuar compreensível sem hover.

Isso é especialmente importante para:

- touch;
- mobile;
- teclado;
- acessibilidade.

Hover é uma camada adicional.

Nunca a única forma de revelar informação essencial.

---

## 17. Magnetic interactions

Podem existir em CTAs importantes.

Movimento máximo recomendado:

```text
4–8px
```

A interação deve permanecer previsível.

Nunca dificultar o clique.

Desabilitar ou simplificar em:

- touch devices;
- reduced motion;
- dispositivos onde pointer tracking não faça sentido.

Não utilizar magnetic behavior em todos os botões.

---

## 18. Tilt

Tilt não é comportamento padrão.

Quando utilizado:

```text
2–4deg
```

Reservar para elementos específicos.

Possíveis contextos:

- projeto;
- mockup;
- elemento gráfico.

Evitar em:

- texto;
- navegação;
- todos os cards.

---

## 19. Parallax

Parallax deve ser discreto.

Seu objetivo é criar profundidade.

Não criar sensação de scroll artificial.

Evitar diferenças exageradas de velocidade.

Nunca utilizar scroll hijacking.

O usuário controla o scroll.

---

## 20. Scroll-driven motion

Motion pode responder ao progresso do scroll.

Exemplos:

- Wave;
- progressão do Process;
- pequenas transformações;
- mudanças de posição;
- máscaras;
- progress indicators.

Quando utilizar algo equivalente a:

```text
scrollYProgress
```

evitar atualizar React state continuamente.

Preferir APIs e abstrações adequadas para animação.

---

## 21. Scroll hijacking

É proibido como padrão.

Não:

- substituir scroll natural;
- prender o usuário em seções sem necessidade;
- exigir múltiplos scrolls para avançar uma animação;
- alterar artificialmente velocidade do scroll.

Experiências especiais precisam de justificativa clara antes de introduzir qualquer comportamento semelhante.

---

## 22. Partículas

Partículas podem existir.

Não são elemento permanente da identidade.

Se utilizadas:

- quantidade baixa;
- contraste baixo;
- função visual clara;
- custo de performance controlado;
- comportamento sutil.

Evitar partículas como sinônimo automático de tecnologia.

Partículas não devem fazer o site parecer:

- cyberpunk;
- sci-fi;
- gamer;
- demo de WebGL.

---

## 23. Gradientes animados

Permitidos somente quando agregarem valor.

Possíveis usos:

- Wave;
- pequeno detalhe;
- estado especial;
- CTA;
- transição.

Evitar grandes superfícies com gradiente constantemente animado.

A animação não deve chamar mais atenção que o conteúdo.

---

## 24. Glow animado

Glow deve ser raro.

Quando existir:

- amplitude pequena;
- blur controlado;
- baixo contraste;
- área limitada.

Evitar:

- pulsação constante em muitos elementos;
- cards iluminados;
- textos brilhantes;
- backgrounds neon.

---

## 25. Cursor

O cursor padrão deve continuar funcional.

Interações podem reagir ao ponteiro.

Exemplos:

- pequena deformação;
- movimento de uma linha;
- deslocamento de um detalhe;
- mudança de profundidade.

Não exigir cursor customizado.

Nunca esconder o cursor nativo apenas por estética.

---

## 26. Pointer interaction

Pointer-following deve ser utilizado com extremo cuidado.

Se utilizado:

- amplitude pequena;
- baixo custo;
- apenas desktop com pointer adequado;
- sem React state por frame;
- desabilitado em reduced motion.

A interação deve ser percebida como detalhe.

Não como efeito principal da página.

---

## 27. Typography Motion

Texto pode participar do motion.

Possibilidades:

- reveal por linha;
- reveal por palavra;
- mask;
- tracking;
- pequenas mudanças de posição;
- interferência sutil da Wave.

Evitar:

- animação individual de todas as letras;
- texto constantemente se movendo;
- efeitos que dificultem leitura.

Conteúdo primeiro.

---

## 28. Images Motion

Imagens podem possuir:

- reveal;
- clip;
- pequenas mudanças de escala;
- mudança de enquadramento;
- parallax discreto;
- hover editorial.

Evitar efeitos que façam projetos parecerem instáveis.

O conteúdo visual deve permanecer legível.

---

## 29. Cards Motion

Quando cards existirem, o hover pode utilizar:

- pequena mudança de superfície;
- border;
- translate;
- escala mínima;
- movimento de ícone;
- reveal de detalhe.

Não utilizar simultaneamente:

- scale;
- tilt;
- glow;
- blur;
- parallax;
- partículas;

em um único card sem motivo excepcional.

---

## 30. Buttons Motion

Botões devem responder rapidamente.

Possibilidades:

- deslocamento de seta;
- alteração de background;
- pequena mudança de scale;
- underline;
- Wave discreta;
- movimento interno.

Feedback deve ser imediato.

Nunca adicionar delays que façam a interface parecer lenta.

---

## 31. Links Motion

Links podem utilizar uma assinatura própria.

Exemplo:

uma linha inicialmente reta pode adquirir uma pequena curva semelhante à Wave durante hover/focus.

Isso pode se tornar uma microinteração característica da marca.

A implementação deve continuar simples e acessível.

---

## 32. Theme Transition

A troca Light/Dark pode possuir uma transição própria.

Objetivos:

- continuidade;
- personalidade;
- sensação de cuidado.

A Wave pode participar da transição se isso puder ser implementado sem complexidade excessiva.

Possibilidades:

- pequeno sweep;
- mudança localizada;
- transformação de linha;
- transição de surface.

Evitar:

- animações longas;
- flash;
- bloquear interação;
- transição cinematográfica a cada troca.

---

## 33. Theme Transition e reduced motion

Quando `prefers-reduced-motion: reduce` estiver ativo, a troca de tema deve acontecer praticamente de forma imediata.

Não executar sweep ou transformações significativas.

---

## 34. Loading

Não criar loading visual onde não existe necessidade técnica.

Não utilizar loaders apenas para mostrar animação.

Quando loading real existir, preferir:

- skeleton;
- progress;
- feedback contextual.

A interface deve comunicar claramente o estado.

---

## 35. Navigation Motion

O Header pode possuir pequenas mudanças conforme scroll.

Exemplos:

- ganhar surface;
- ganhar border;
- reduzir levemente;
- mudar contraste.

Essas mudanças devem ser suaves.

Evitar Header constantemente se movendo.

---

## 36. Mobile Navigation

A navegação mobile pode possuir uma entrada própria.

Priorizar:

- velocidade;
- clareza;
- acessibilidade.

Evitar menus excessivamente cinematográficos.

O usuário abriu o menu para navegar.

Não para assistir uma animação.

---

## 37. Section transitions

Seções podem possuir pequenas relações visuais entre si.

Isso pode acontecer através de:

- Wave;
- linha;
- cor;
- movimento;
- continuidade de um elemento;
- mudança de densidade.

Não é necessário criar uma transição explícita entre todas as seções.

---

## 38. Light Mode Motion

No tema claro, motion deve permanecer delicado.

Evitar compensar o fundo claro adicionando mais efeitos.

A identidade pode aparecer através de:

- pequenas transformações;
- linhas;
- Wave;
- tipografia;
- microinterações.

---

## 39. Dark Mode Motion

Dark Mode deve utilizar os mesmos princípios.

Não aumentar automaticamente:

- glow;
- partículas;
- neon;
- gradientes.

Dark não significa mais efeitos.

---

## 40. Motion Stack

Prioridade de implementação:

1. CSS;
2. SVG;
3. Motion;
4. bibliotecas adicionais somente quando justificadas.

Utilizar a solução mais simples capaz de entregar a experiência desejada.

---

## 41. CSS

CSS deve ser preferido para:

- hover;
- focus;
- transições simples;
- pequenas animações;
- transforms;
- opacity;
- Theme transitions simples.

Não utilizar JavaScript para algo que CSS resolve adequadamente.

---

## 42. SVG

SVG é recomendado para:

- Wave;
- paths;
- máscaras;
- linhas;
- progressões;
- elementos gráficos vetoriais.

SVG provavelmente será uma das principais ferramentas visuais da Next Wave.

---

## 43. Motion

Motion pode ser utilizado quando houver necessidade de:

- scroll progress;
- spring;
- orchestration;
- shared state de animação;
- gestures;
- animações mais complexas.

Não instalar ou utilizar apenas para fazer `opacity: 0 → 1`.

---

## 44. React Bits

React Bits pode ser utilizado como:

- referência;
- ponto de partida;
- implementação específica.

Não utilizar componentes sem adaptação.

Todo efeito precisa parecer pertencente à Next Wave.

O site nunca deve parecer uma galeria do React Bits.

---

## 45. Canvas

Canvas não é solução padrão.

Utilizar somente quando SVG/CSS não forem adequados.

Antes de escolher Canvas, avaliar:

- performance;
- acessibilidade;
- manutenção;
- mobile;
- reduced motion.

---

## 46. WebGL

WebGL não é solução padrão.

Somente utilizar se existir ganho visual significativo e justificável.

A experiência não precisa de 3D ou shaders para possuir personalidade.

---

## 47. Server / Client

Server Components continuam padrão.

Adicionar `"use client"` somente quando interação realmente exigir.

Componentes de motion devem possuir escopo pequeno.

Não transformar a página inteira em Client Component por conveniência.

---

## 48. React State

Não atualizar React state continuamente para:

- scroll;
- mouse position;
- animation frame;

quando isso puder ser resolvido por:

- CSS;
- Motion Values;
- refs;
- browser APIs;
- outras abordagens fora do ciclo de render.

---

## 49. Performance

Priorizar animação de:

```text
transform
opacity
```

Usar com cuidado:

- filter;
- blur;
- backdrop-filter;
- box-shadow;
- clip-path complexo.

Evitar propriedades que causem layout contínuo.

---

## 50. will-change

Não aplicar `will-change` indiscriminadamente.

Utilizar somente quando houver benefício real.

Uso excessivo pode aumentar consumo de memória.

---

## 51. Mobile

Mobile deve possuir estratégia própria.

Pode:

- reduzir quantidade de elementos;
- remover parallax;
- remover pointer interactions;
- simplificar Wave;
- reduzir partículas;
- reduzir blur;
- diminuir amplitude de movimento;
- reduzir quantidade de reveals.

Não tentar reproduzir obrigatoriamente desktop.

---

## 52. Touch

Interações não devem depender de hover.

Em touch:

- remover magnetic behavior;
- remover pointer-following;
- simplificar tilt;
- preservar feedback de toque;
- manter CTAs previsíveis.

---

## 53. Reduced Motion

`prefers-reduced-motion` é obrigatório.

Quando ativo:

- remover movimentos contínuos;
- remover parallax;
- remover pointer-following;
- reduzir transforms;
- remover animações decorativas;
- tornar Wave estática quando necessário;
- reduzir duração de transições;
- preservar todo conteúdo.

A experiência deve continuar bonita sem animação.

---

## 54. Reduced Motion não significa quebrar a identidade

A Wave pode continuar existindo visualmente.

A composição continua sendo Next Wave.

O que muda é o comportamento.

Não esconder elementos importantes apenas porque estavam associados a uma animação.

---

## 55. Accessibility

Motion nunca deve:

- impedir leitura;
- provocar flashes;
- dificultar foco;
- deslocar elementos inesperadamente durante interação;
- esconder conteúdo essencial;
- tornar navegação imprevisível.

Animações devem respeitar acessibilidade desde a implementação inicial.

---

## 56. Layout Stability

Motion não deve causar layout shift desnecessário.

Reservar espaço para:

- imagens;
- elementos carregados;
- componentes dinâmicos.

Preferir transforms em vez de alterar dimensões durante animações.

---

## 57. SEO

Conteúdo importante deve existir semanticamente no HTML.

Não depender de animação ou Canvas para conteúdo indexável.

Motion deve funcionar como progressive enhancement.

---

## 58. Motion Levels

Podemos pensar em três níveis.

### Level 1 — Ambient

Movimentos quase imperceptíveis.

Exemplos:

- Wave lenta;
- mudança de surface;
- pequeno deslocamento.

### Level 2 — Interaction

Resposta direta ao usuário.

Exemplos:

- hover;
- focus;
- button;
- card;
- Theme Toggle.

### Level 3 — Storytelling

Movimentos ligados à narrativa.

Exemplos:

- Process;
- transformação da Wave;
- progressão de uma ideia;
- transição importante.

Level 3 deve ser raro.

---

## 59. Calmaria e intensidade

A identidade deve utilizar contraste.

Uma seção visualmente calma aumenta o impacto da próxima seção mais expressiva.

Evitar manter Level 3 durante toda a página.

O conceito de equilíbrio depende dessa variação.

---

## 60. Tecnologia invisível

Um dos objetivos do motion é fazer o visitante perceber qualidade sem precisar entender a implementação.

O usuário pode pensar:

> "Isso é muito bem feito."

Sem necessariamente pensar:

> "Olha o efeito de SVG pathLength usando scroll progress."

A implementação técnica fica invisível.

O resultado fica evidente.

---

## 61. Teste de necessidade

Antes de adicionar uma animação, perguntar:

1. melhora compreensão?
2. melhora feedback?
3. reforça identidade?
4. melhora narrativa?
5. aumenta percepção de qualidade?

Se nenhuma resposta for "sim":

> provavelmente não precisamos da animação.

---

## 62. Teste de intensidade

Depois de implementar, perguntar:

> Eu percebi primeiro o conteúdo ou o efeito?

Se o efeito dominar sem motivo narrativo:

> reduzir intensidade.

---

## 63. Teste de repetição

Perguntar:

> Já utilizamos esse comportamento muitas vezes nesta página?

Se sim:

- variar;
- simplificar;
- remover.

Uma assinatura perde força quando utilizada em todos os lugares.

---

## 64. Teste de segmento

Perguntar:

> Essa animação faz a Next Wave parecer uma empresa exclusivamente voltada para tecnologia?

Se sim, avaliar se o efeito realmente contribui.

Motion deve demonstrar qualidade técnica.

Não nichar visualmente a empresa.

---

## 65. Teste mobile

Toda animação relevante deve ser avaliada em:

```text
320px
375px
390px
430px
768px
```

Não assumir que comportamento desktop funcionará adequadamente em telas menores.

---

## 66. QA

Ao finalizar uma experiência com motion, verificar:

- desktop;
- mobile;
- touch;
- keyboard;
- reduced motion;
- Light Mode;
- Dark Mode;
- performance;
- console;
- overflow;
- layout shift.

---

## 67. Evidências

Quando uma implementação de motion for relevante, screenshots podem não ser suficientes.

Quando possível, validar diretamente no browser.

Evidências estáticas continuam úteis para:

- composição;
- estados;
- responsividade.

Não criar evidências falsas.

---

## 68. Princípios fundamentais

### Princípio 1

> A Next Wave não representa o mar. Ela se comporta como ele.

### Princípio 2

> Movimento não significa quantidade de animação.

### Princípio 3

> Se tudo se move, nada parece importante.

### Princípio 4

> Motion melhora uma experiência que já funciona.

### Princípio 5

> Tecnologia deve ser percebida pela qualidade, não exibida como espetáculo.

### Princípio 6

> Calmaria também faz parte da experiência.

---

## 69. Regra final

> Melhor animação é mais importante que mais animação.

E:

> Se o usuário perceber o efeito antes de perceber o conteúdo, verificar se passamos do ponto.

Motion deve fazer a Next Wave parecer viva.

Não barulhenta.