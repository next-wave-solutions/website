# Next Wave Solutions — AI Development Instructions

This file defines the rules AI agents must follow when working on the Next Wave Solutions website.

These instructions apply to implementation, refactoring, visual work, motion, content and technical decisions.

---

## 1. Required reading

Before implementing or modifying UI, read:

- `/docs/PROJECT-BRIEF.md`
- `/docs/DESIGN-SYSTEM.md`
- `/docs/MOTION-GUIDELINES.md`
- `/docs/IMPLEMANTATION-PLAN.md`
- `/docs/references/next-wave-art-direction-v3.png`
- relevant references in `/docs/wireframes` when applicable

Do not implement UI based only on existing code.

The project has evolved visually, and some existing implementations or older wireframes represent previous directions.

---

## 2. Decision hierarchy

When instructions or references conflict, follow this order:

1. current explicit user-approved requirement;
2. latest approved visual direction;
3. `/docs/DESIGN-SYSTEM.md`;
4. `/docs/MOTION-GUIDELINES.md`;
5. `/docs/PROJECT-BRIEF.md`;
6. `/docs/references/next-wave-art-direction-v3.png`;
7. relevant approved wireframes that still match the current direction;
8. existing implementation;
9. library defaults.

The Art Direction image communicates the intended visual feeling.

The written documentation defines the actual implementation rules.

Older wireframes are references, not immutable specifications.

Do not reproduce outdated visual decisions simply because they already exist in a wireframe or in code.

---

## 3. Current visual reference

The primary visual reference for the current brand direction is:

`/docs/references/next-wave-art-direction-v3.png`

This image represents the approved overall Art Direction, including:

- Light-first experience;
- warm neutral surfaces;
- restrained Purple and Green accents;
- editorial composition;
- generous whitespace;
- subtle Wave presence;
- approachable visual language;
- premium but welcoming presentation;
- equivalent Dark Mode without cyberpunk aesthetics.

Use this image as a directional reference.

It is not a pixel-perfect specification.

Do not blindly reproduce every element shown in the reference.

In particular, do not assume that placeholder imagery, services, projects, copy or other illustrative content shown in the reference is approved production content.

The lighthouse/ocean imagery shown in the exploration is not a required Hero direction.

Prefer an abstract and proprietary visual treatment using composition, whitespace, the Wave and subtle motion before introducing literal maritime imagery.

The written Design System and Project Brief define the actual:

- content;
- services;
- tokens;
- typography;
- colors;
- behavior;
- implementation rules.

Older files in `/docs/wireframes` may still be used for structural and narrative reference, but their previous dark/neon visual direction is outdated.

---

## 4. Core principle

The website is itself a showcase of Next Wave Solutions' technical and design capabilities.

However, technical capability should be demonstrated through the quality of the experience rather than through an explicitly technological aesthetic.

The website should feel:

- clear;
- warm;
- premium;
- editorial;
- confident;
- approachable;
- custom-made;
- technologically refined;
- memorable.

It must not become a generic SaaS landing page.

It must also not become a technology showcase that feels designed only for developers or technology companies.

---

## 5. Current brand direction

The current approved visual direction is:

> Light-first.

The primary experience should feel natural, clean and welcoming.

Dark Mode is supported, but it represents the same brand.

Dark Mode must not be used as an excuse to introduce:

- cyberpunk;
- synthwave;
- excessive neon;
- excessive glow;
- gamer aesthetics;
- excessive particles.

Important principles:

> Cada ideia tem seu próprio fluxo.

> A Next Wave não representa o mar. Ela se comporta como ele.

> A Next Wave não precisa parecer tecnologia para demonstrar excelência tecnológica.

> Identidade está nos detalhes.

> Tecnologia é o meio. O resultado é o que importa.

---

## 6. Audience

The website must work for both technical and non-technical audiences.

A visitor may be:

- a freelancer;
- a small business owner;
- a clinic;
- a restaurant;
- an e-commerce business;
- a traditional company;
- a startup;
- a product team;
- a technology company.

Do not assume the visitor understands software terminology.

The experience must communicate value before technical implementation details.

When evaluating a screen, ask:

> Could a non-technical business owner see this and understand that Next Wave could build something valuable for their business?

If the answer is no because the interface feels targeted exclusively at the technology industry, reconsider the implementation.

---

## 7. Visual direction

Prefer:

- generous negative space;
- strong typography;
- editorial composition;
- subtle asymmetry;
- warm neutral surfaces;
- restrained use of brand colors;
- subtle borders;
- carefully designed interactions;
- intentional visual rhythm;
- clear hierarchy.

Avoid:

- generic SaaS layouts;
- excessive cards;
- excessive gradients;
- excessive glassmorphism;
- excessive glow;
- excessive particles;
- futuristic grids;
- terminal aesthetics;
- code used as decoration;
- technology logos as the main visual language;
- generic developer imagery;
- visual complexity without purpose.

The experience should feel designed, not decorated.

---

## 8. Brand colors

Purple and Green remain core brand colors.

They are signature accents.

They are not mandatory colors for every component.

Use the semantic tokens defined in:

`/docs/DESIGN-SYSTEM.md`

Prefer:

> neutrals first → hierarchy → composition → color.

Do not use Purple and Green simply because an element needs visual interest.

Do not hardcode brand colors when an appropriate token exists.

---

## 9. Gradients

The brand gradient remains part of the identity.

Use it intentionally.

Good contexts may include:

- the Wave;
- small visual details;
- selected words;
- special interactions;
- specific CTA moments;
- abstract brand graphics.

Avoid:

- every heading using gradient text;
- every button using a gradient;
- large animated gradient backgrounds without clear purpose;
- gradient borders on every card.

Principle:

> Gradient is a signature, not a fill strategy.

---

## 10. The Wave

The Wave is the primary proprietary visual element of Next Wave.

It represents:

- movement;
- transformation;
- continuity;
- adaptation;
- evolution;
- flow.

The Wave should not be interpreted as a requirement to display literal ocean waves.

It may appear as:

- a line;
- a path;
- multiple subtle lines;
- a distortion;
- a transition;
- an underline;
- a mask;
- a surface;
- a motion behavior;
- a connection between elements.

The Wave does not need to appear in every section.

Do not force visual continuity through one giant SVG or a permanent decorative path.

Continuity may be conceptual rather than literal.

---

## 11. Ocean references

The relationship with the ocean is conceptual and behavioral.

Avoid recurring use of:

- boats;
- anchors;
- helms;
- lighthouses;
- ocean photography;
- beaches;
- realistic waves;
- obvious nautical metaphors.

These elements are not forbidden when there is a real narrative reason to use them.

They must not become the visual identity of the company.

Principle:

> The Next Wave does not represent the ocean. It behaves like it.

---

## 12. Light and Dark themes

The application must support:

- Light Mode;
- Dark Mode;
- system preference when appropriate;
- manual user preference;
- persisted user preference.

Manual choice should take precedence over system preference.

Avoid incorrect theme flashes during initial rendering when technically possible.

Both themes must preserve:

- hierarchy;
- accessibility;
- personality;
- brand recognition.

Dark Mode should remain elegant and editorial.

It should not become neon or cyberpunk.

---

## 13. Typography

Follow `/docs/DESIGN-SYSTEM.md`.

Current direction:

### Headings

Manrope.

### Body and UI

Inter.

Use `next/font`.

Typography should contribute strongly to the visual identity.

Do not compensate for weak typography with unnecessary visual effects.

---

## 14. Wireframes

Wireframes remain useful references for:

- content;
- hierarchy;
- section purpose;
- layout ideas;
- narrative.

They are no longer automatically the visual source of truth.

Some wireframes were created before the current Light-first brand direction.

When implementing a section:

1. read the current documentation;
2. inspect the current Art Direction reference;
3. inspect the relevant wireframe;
4. identify what is still valid;
5. preserve useful structural decisions;
6. adapt outdated aesthetics to the current Design System.

Do not blindly reproduce old dark/neon treatments.

Do not redesign established content structure without a reason.

---

## 15. Component architecture

Prefer:

- Server Components by default;
- Client Components only when interaction requires them;
- small reusable components;
- typed props;
- semantic HTML;
- clear responsibilities;
- progressive enhancement.

Avoid turning entire pages into Client Components just to support animation.

Keep interactive boundaries small.

---

## 16. Reusability

Create reusable components when there is an actual recurring pattern.

Do not create abstractions prematurely.

Before creating a generic component, ask:

> Is this actually a reusable design pattern or does it only happen to look similar right now?

Do not force visually different sections into the same component architecture simply to reduce file count.

---

## 17. Cards

Do not automatically place every piece of content inside a card.

Before creating a card, consider:

- whitespace;
- typography;
- grid;
- border;
- separator;
- editorial composition.

Cards should exist when they improve grouping or interaction.

Avoid turning the entire site into a dashboard.

---

## 18. Motion

Motion should reinforce:

- hierarchy;
- feedback;
- narrative;
- continuity;
- personality.

Motion is not decoration by default.

Before adding an animation, ask:

1. Does it improve understanding?
2. Does it improve feedback?
3. Does it reinforce identity?
4. Does it improve narrative?
5. Does it improve perceived quality?

If none apply, the animation probably does not belong.

---

## 19. Motion intensity

Do not animate everything.

The page should contain moments of:

- calm;
- movement;
- intensity;
- rest.

Principle:

> If everything moves, nothing feels important.

The Process and selected brand moments may contain stronger motion.

Content-heavy sections should generally remain calmer.

---

## 20. Allowed motion examples

When appropriate:

- subtle scroll-driven animation;
- SVG path animation;
- text reveal;
- short stagger;
- subtle parallax;
- restrained magnetic CTA;
- subtle card movement;
- Wave transformations;
- image reveal;
- underline interaction;
- theme transition;
- small pointer reactions.

These are possibilities.

They are not requirements.

---

## 21. Motion to avoid

Avoid:

- excessive bouncing;
- unnecessary infinite animations;
- large entrance animations;
- animation that delays access to content;
- excessive tilt;
- constant pointer-following;
- repeated glow effects;
- scroll hijacking;
- animation that hurts readability;
- animation used only to make the site look more technological.

Always support:

`prefers-reduced-motion`.

---

## 22. Motion technology

Prefer, in order:

1. CSS;
2. SVG;
3. Motion;
4. additional libraries only when justified.

Do not use JavaScript when CSS provides an appropriate solution.

Do not use Motion simply for basic opacity transitions that CSS can handle cleanly.

---

## 23. React Bits

React Bits may be used when appropriate.

It is:

- a reference;
- a tool;
- a possible implementation source.

It is not the Next Wave Design System.

Do not copy components without adaptation.

Do not make the site look like a React Bits showcase.

Any imported effect must be adapted to the Next Wave identity.

---

## 24. Particles

Particles are optional.

They are not a default brand element.

If used:

- keep density low;
- keep contrast restrained;
- control performance;
- provide reduced-motion behavior;
- ensure they serve a visual purpose.

Do not use particles merely to communicate "technology".

---

## 25. Performance

Visual impact must not come at the expense of usability.

Prioritize:

- Core Web Vitals;
- optimized images;
- minimal client JavaScript;
- Server Components;
- code splitting for expensive effects;
- avoiding unnecessary re-renders;
- stable layout;
- efficient SVG;
- efficient animation.

Prefer animating:

- `transform`;
- `opacity`.

Use carefully:

- blur;
- filters;
- backdrop-filter;
- large shadows;
- complex clip paths.

Do not update React state every frame for pointer or scroll effects when a more appropriate mechanism exists.

---

## 26. Responsive behavior

Mobile is not a smaller desktop.

Each composition must be reconsidered for smaller screens.

Priorities:

1. content;
2. readability;
3. interaction;
4. hierarchy;
5. identity;
6. effects.

Decorative elements may be:

- simplified;
- repositioned;
- reduced;
- removed.

Desktop-only pointer interactions must not be required for understanding or navigation.

---

## 27. Accessibility

Accessibility is part of the design.

Always consider:

- semantic HTML;
- heading hierarchy;
- keyboard navigation;
- visible focus;
- contrast;
- touch targets;
- ARIA when necessary;
- reduced motion;
- screen readers;
- zoom;
- theme contrast.

Personality must never depend on making the interface harder to use.

---

## 28. SEO

Important content must exist in semantic HTML.

Animations must enhance content, never be required to access it.

Use proper:

- headings;
- metadata;
- Open Graph;
- canonical URLs;
- sitemap;
- robots;
- structured data where appropriate.

Do not place essential textual content exclusively inside:

- Canvas;
- images;
- animations;
- decorative SVG.

---

## 29. Copy

Do not invent:

- customers;
- testimonials;
- case studies;
- metrics;
- phone numbers;
- email addresses;
- company history;
- business claims;
- partners;
- awards;
- results;
- logos of companies supposedly served.

Use:

- approved copy;
- real information;
- clearly marked placeholders;
- Demo/Labs content when explicitly appropriate.

Never present placeholder content as real company information.

---

## 30. Projects

Projects must be real or explicitly identified as:

- placeholder;
- demo;
- lab;
- concept.

Do not create fake success metrics.

Do not add recognizable company logos simply to make the interface look credible.

When real projects become available, prioritize visual storytelling over generic card grids.

---

## 31. Temporary Coming Soon

The current Coming Soon experience is temporary.

It is intentionally isolated from the final Home.

Do not use its dark/neon visual treatment as the source of truth for the final website.

Do not remove or replace the Coming Soon without explicit approval.

The production Coming Soon should remain functional while the definitive website is developed.

---

## 32. Scope discipline

Implement only the requested phase.

Do not automatically continue to the next phase.

Do not perform unrelated visual redesigns or architectural refactors unless required.

Follow:

`/docs/IMPLEMANTATION-PLAN.md`

At the end of a phase:

1. validate;
2. report;
3. stop.

Wait for approval before continuing.

---

## 33. Dependencies

Do not install additional dependencies without a clear reason.

Before installing something, verify whether the problem can be solved with:

1. existing project capabilities;
2. CSS;
3. SVG;
4. browser APIs;
5. existing dependencies.

Consider:

- bundle impact;
- maintenance;
- accessibility;
- SSR compatibility;
- long-term value.

---

## 34. Design tokens

Never hardcode recurring brand or semantic values when an appropriate token exists.

Use tokens defined by:

`/docs/DESIGN-SYSTEM.md`

Tokens should cover recurring decisions such as:

- colors;
- surfaces;
- text;
- borders;
- radius;
- shadows;
- typography;
- spacing where appropriate.

A unique local composition does not automatically require a new global token.

---

## 35. Quality

Before considering a visual phase complete, when applicable:

- compare it against the current brand direction;
- compare it against `/docs/references/next-wave-art-direction-v3.png`;
- compare it against relevant wireframes;
- test Light Mode;
- test Dark Mode;
- test desktop;
- test tablet;
- test mobile;
- test keyboard navigation;
- test focus;
- test reduced motion;
- verify contrast;
- verify no horizontal overflow;
- verify layout stability;
- verify performance;
- check browser console.

Also run:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Do not report completion while known validation errors remain unexplained.

---

## 36. Visual review questions

Before considering a major section complete, ask:

### Clarity

> Is the content understandable before the effects are noticed?

### Audience

> Could a non-technical business owner understand what Next Wave offers?

### Technology

> Does the experience demonstrate technical quality without looking like a developer-only website?

### Brand

> Does this feel like Next Wave rather than a generic SaaS template?

### Art Direction

> Does this belong to the same visual family as the current Art Direction reference without blindly copying it?

### Ocean

> Is the ocean influencing behavior and flow rather than becoming a literal theme?

### Color

> Are Purple and Green acting as signatures rather than dominating the interface?

### Motion

> Does motion improve the experience or merely add activity?

### Accessibility

> Does the experience remain complete without hover and with reduced motion?

---

## 37. Final rule

Do not optimize for the maximum number of effects.

Do not optimize for the maximum amount of abstraction.

Do not optimize for visual novelty alone.

Optimize for:

- clarity;
- identity;
- quality;
- accessibility;
- performance;
- thoughtful interaction.

The goal is not to create the most visually complicated website possible.

The goal is to create a website that feels unmistakably Next Wave.