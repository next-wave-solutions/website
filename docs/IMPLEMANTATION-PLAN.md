# Next Wave Solutions — Implementation Plan

> Development roadmap for the Next Wave Solutions website.

This document defines the recommended implementation order, development rules and completion criteria.

Before implementing anything, read:

- `/AGENTS.md`
- `/docs/briefing.md`
- `/docs/DESIGN-SYSTEM.md`
- `/docs/MOTION-GUIDELINES.md`

For UI implementation, always consult the relevant approved wireframe in:

```text
/docs/wireframes/
```

---

# 1. Core Development Rule

Do NOT implement the entire website at once.

Development must happen incrementally.

The preferred workflow is:

```text
Foundation
↓
Design System
↓
Shared Components
↓
Section Structure
↓
Section Styling
↓
Section Motion
↓
Integration
↓
Quality Assurance
↓
SEO
↓
Deployment
```

Each phase should be validated before moving to the next.

---

# 2. AI Agent Rule

When an AI coding agent receives a task:

1. Read `/AGENTS.md`.
2. Read the relevant project documentation.
3. Inspect the existing codebase before modifying files.
4. Identify the current implementation phase.
5. Implement only the requested scope.
6. Do not redesign approved sections.
7. Do not introduce unnecessary dependencies.
8. Run available validation after implementation.
9. Report what was changed.
10. Report any unresolved issues or assumptions.

Never silently expand the task scope.

---

# 3. Definition of Done

A task is NOT complete only because:

```text
"the code compiles"
```

A UI task is complete when applicable requirements have been checked:

- [ ] Matches the approved wireframe
- [ ] Works on desktop
- [ ] Works on tablet
- [ ] Works on mobile
- [ ] Uses Design System tokens
- [ ] Uses semantic HTML
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Reduced motion is supported
- [ ] No horizontal overflow
- [ ] No obvious layout shift
- [ ] No unnecessary dependency was introduced
- [ ] TypeScript passes
- [ ] Lint passes
- [ ] Production build passes

For animated sections:

- [ ] Animation supports the content instead of hiding it
- [ ] Mobile motion has been considered separately
- [ ] `prefers-reduced-motion` works
- [ ] Performance remains acceptable

---

# 4. Phase 0 — Repository Preparation

Goal:

Prepare the repository and project documentation before application development.

Tasks:

- [ ] Confirm `/AGENTS.md`
- [ ] Confirm `/docs/briefing.md`
- [ ] Confirm `/docs/DESIGN-SYSTEM.md`
- [ ] Confirm `/docs/MOTION-GUIDELINES.md`
- [ ] Confirm `/docs/IMPLEMENTATION-PLAN.md`
- [ ] Create `/docs/wireframes`
- [ ] Add approved wireframes
- [ ] Ensure wireframes use clear filenames

Recommended structure:

```text
docs/
├── briefing.md
├── DESIGN-SYSTEM.md
├── MOTION-GUIDELINES.md
├── IMPLEMENTATION-PLAN.md
│
└── wireframes/
    ├── 00-master-concept.png
    ├── 01-hero.png
    ├── 02-solutions.png
    ├── 03-process.png
    ├── 04-technology.png
    ├── 05-projects.png
    ├── 06-about.png
    └── 07-cta-footer.png
```

Do not begin visual implementation before the relevant reference is available.

---

# 5. Phase 1 — Project Foundation

Goal:

Create a clean and stable Next.js foundation without implementing the Home sections yet.

Tasks:

- [ ] Initialize Next.js
- [ ] Enable TypeScript
- [ ] Configure Tailwind CSS
- [ ] Configure ESLint
- [ ] Configure project scripts
- [ ] Configure import aliases
- [ ] Configure basic directory structure
- [ ] Configure Manrope
- [ ] Configure Inter
- [ ] Create global styles
- [ ] Configure design tokens
- [ ] Create root layout
- [ ] Create basic metadata
- [ ] Confirm development build
- [ ] Confirm production build

Preferred architecture:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── motion/
│
├── lib/
│
└── config/
```

The exact structure may evolve when technically justified.

Avoid unnecessary abstraction during initial setup.

---

# 6. Phase 2 — Design System Foundation

Goal:

Translate `/docs/DESIGN-SYSTEM.md` into reusable code.

Implement:

- [ ] Brand colors
- [ ] Semantic colors
- [ ] Background colors
- [ ] Surface colors
- [ ] Foreground colors
- [ ] Border colors
- [ ] Radius tokens
- [ ] Container rules
- [ ] Typography rules
- [ ] Spacing conventions
- [ ] Focus styles
- [ ] Selection styles

Do not implement sections during this phase.

Validate the token system before proceeding.

---

# 7. Phase 3 — Base UI Components

Goal:

Create only the reusable primitives that are already justified by the approved design.

Possible components:

```text
Button
Container
Section
SectionLabel
GradientText
Badge
Card
```

Do not create abstractions speculatively.

Rule:

> Create reusable components because repetition exists or is clearly expected — not because a component might theoretically be useful later.

---

# 8. Phase 4 — Motion Foundation

Goal:

Prepare reusable motion infrastructure before complex animations are introduced.

Tasks:

- [ ] Install/configure Motion if not already available
- [ ] Create reduced-motion utilities
- [ ] Create reusable reveal primitives only if justified
- [ ] Establish viewport animation conventions
- [ ] Establish scroll progress conventions
- [ ] Establish motion timing conventions
- [ ] Validate mobile behavior

Possible structure:

```text
components/
└── motion/
    ├── Reveal.tsx
    ├── Stagger.tsx
    └── Wave/
```

Do not create a large internal animation framework.

Prefer Motion primitives whenever they already solve the problem.

---

# 9. Phase 5 — Header

Reference:

```text
/docs/wireframes/00-master-concept.png
/docs/wireframes/01-hero.png
```

Goal:

Implement the primary navigation.

Expected elements:

- [ ] Logo
- [ ] Navigation
- [ ] Primary CTA
- [ ] Responsive mobile navigation
- [ ] Scroll state
- [ ] Keyboard accessibility
- [ ] Focus states

Navigation should link to actual sections.

Possible anchors:

```text
#solutions
#process
#technology
#projects
#about
#contact
```

Do not add navigation links for nonexistent pages.

---

# 10. Phase 6 — Hero

Primary reference:

```text
/docs/wireframes/01-hero.png
```

Goal:

Reproduce the approved Hero composition with high visual fidelity.

Implementation order:

```text
Structure
↓
Typography
↓
Responsive layout
↓
CTA
↓
Wave visual
↓
Motion
↓
Polish
```

Checklist:

- [ ] Section structure
- [ ] Heading
- [ ] Supporting copy
- [ ] Primary CTA
- [ ] Secondary CTA if approved
- [ ] Hero visual
- [ ] Initial Wave
- [ ] Desktop responsive behavior
- [ ] Tablet behavior
- [ ] Mobile behavior
- [ ] Hero entrance motion
- [ ] Reduced-motion version

Do not implement the next section until the Hero is visually validated.

---

# 11. Phase 7 — Solutions

Primary reference:

```text
/docs/wireframes/02-solutions.png
```

Expected services:

```text
Sistemas Web
Aplicativos Mobile
Automações
Integrações
```

Checklist:

- [ ] Section label
- [ ] Heading
- [ ] Supporting copy
- [ ] Service cards
- [ ] Icons
- [ ] Hover states
- [ ] Wave continuity
- [ ] Responsive behavior
- [ ] Reduced-motion behavior

Focus on outcomes rather than framework names.

---

# 12. Phase 8 — Process

Primary reference:

```text
/docs/wireframes/03-process.png
```

This is one of the most important sections of the website.

Expected process:

```text
01 — Entendemos
02 — Planejamos
03 — Desenvolvemos
04 — Entregamos
05 — Evoluímos
```

The Wave must be the protagonist.

Implementation should be incremental.

## Step 1

Implement static structure.

## Step 2

Implement responsive SVG Wave.

## Step 3

Connect process nodes.

## Step 4

Implement scroll progression.

## Step 5

Implement active states.

## Step 6

Implement reduced-motion fallback.

Checklist:

- [ ] Matches approved composition
- [ ] SVG is responsive
- [ ] Path scales correctly
- [ ] Scroll reveals Wave progressively
- [ ] Process states remain readable
- [ ] Mobile version is intentionally adapted
- [ ] Reduced-motion version remains meaningful
- [ ] No scroll hijacking

Do NOT replace this section with a generic card timeline.

---

# 13. Phase 9 — Technology

Primary reference:

```text
/docs/wireframes/04-technology.png
```

Core message:

> Construímos hoje pensando no amanhã.

Supporting principle:

> Tecnologia é uma ferramenta. O resultado é o que importa.

Checklist:

- [ ] Section structure
- [ ] Technology presentation
- [ ] Consistent technology badges/logos
- [ ] Atmospheric Wave
- [ ] Responsive behavior
- [ ] Appropriate interactions
- [ ] Mobile simplification

Avoid turning this section into a technology logo wall.

---

# 14. Phase 10 — Projects

Primary reference:

```text
/docs/wireframes/05-projects.png
```

Core message:

> Ideias que viraram resultados.

Important:

Do NOT invent real business information.

Forbidden unless explicitly provided and approved:

- client names
- testimonials
- revenue
- conversion metrics
- growth percentages
- performance claims
- business results

During development, use clearly marked placeholders or approved demo projects.

Checklist:

- [ ] Featured project structure
- [ ] Secondary projects
- [ ] Project media
- [ ] Interaction states
- [ ] Responsive behavior
- [ ] Accessible controls
- [ ] Wave continuity

If no real projects are approved for production, the section must not falsely imply that placeholder projects are real clients.

---

# 15. Phase 11 — About

Primary reference:

```text
/docs/wireframes/06-about.png
```

Core message:

> Mais que código, parceria de verdade.

Current concepts:

```text
Proximidade
Soluções reais
Evolução contínua
Confiança
```

Checklist:

- [ ] Section composition
- [ ] Brand positioning
- [ ] Pillars
- [ ] Visual depth
- [ ] Responsive behavior
- [ ] Calm motion
- [ ] Wave continuity

Motion should become slightly calmer here.

---

# 16. Phase 12 — Final CTA

Primary reference:

```text
/docs/wireframes/07-cta-footer.png
```

Primary message:

> Ready for the next wave?

Supporting copy:

> Conte sua ideia para nós. Vamos transformar seu projeto em realidade.

Primary action:

```text
Falar com a Next Wave
```

Secondary action:

```text
Ver nossos serviços
```

Checklist:

- [ ] Strong visual conclusion
- [ ] Wave convergence
- [ ] Primary CTA
- [ ] Secondary CTA
- [ ] Responsive behavior
- [ ] Reduced-motion behavior
- [ ] Accessible interaction

The production WhatsApp number must come from approved configuration.

Do not invent it.

---

# 17. Phase 13 — Footer

Primary reference:

```text
/docs/wireframes/07-cta-footer.png
```

Possible structure:

```text
Brand
Navigation
Solutions
Contact
Social
Legal
```

Only include real information.

Do NOT invent:

- phone
- email
- physical address
- social accounts
- legal pages

If information is unavailable, omit it or use clearly marked development placeholders.

---

# 18. Phase 14 — Global Wave Integration

Goal:

Turn individually implemented Wave pieces into a coherent page experience.

Important:

The Wave does NOT necessarily need to be one enormous SVG covering the entire document.

Prefer the simplest robust architecture that visually creates continuity.

Possible strategy:

```text
Hero Wave
     ↓
transition

Solutions Wave
     ↓
transition

Process Wave
     ↓
transition

Technology Wave
     ↓

Projects
     ↓

About
     ↓

Final CTA convergence
```

Validate:

- [ ] Visual continuity
- [ ] Gradient continuity
- [ ] Section transitions
- [ ] Scroll behavior
- [ ] Responsive behavior
- [ ] Reduced motion
- [ ] Performance

Avoid architectural complexity purely to achieve literal SVG continuity.

Visual continuity matters more than implementation cleverness.

---

# 19. Phase 15 — Responsive QA

Test at multiple widths.

Minimum recommended checks:

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

Do not design exclusively for these exact widths.

They are checkpoints.

Validate:

- [ ] Typography
- [ ] Navigation
- [ ] Cards
- [ ] Wave
- [ ] Images
- [ ] CTA
- [ ] Footer
- [ ] Touch targets
- [ ] Horizontal overflow
- [ ] Content order

---

# 20. Phase 16 — Accessibility

Validate:

- [ ] Semantic landmarks
- [ ] Heading hierarchy
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Accessible buttons
- [ ] Accessible links
- [ ] Alt text
- [ ] Color contrast
- [ ] Reduced motion
- [ ] Mobile touch targets

Animations must not prevent access to content.

---

# 21. Phase 17 — Performance

Review:

- [ ] Client Component boundaries
- [ ] JavaScript bundle size
- [ ] Images
- [ ] Fonts
- [ ] SVG complexity
- [ ] Particle count
- [ ] Backdrop filters
- [ ] Blur
- [ ] Scroll listeners
- [ ] React re-renders
- [ ] Dynamic imports

Prefer:

```text
Server Components
+
small interactive Client Components
```

Do not convert the entire Home into a Client Component for convenience.

---

# 22. Phase 18 — SEO

Implement:

- [ ] Page title
- [ ] Meta description
- [ ] Canonical URL
- [ ] OpenGraph
- [ ] Twitter/X metadata if appropriate
- [ ] robots
- [ ] sitemap
- [ ] favicon
- [ ] manifest if justified
- [ ] structured data where appropriate

Potential structured data:

```text
Organization
WebSite
```

Only use real company information.

Do not fabricate organization details to complete structured data.

---

# 23. Phase 19 — Content Review

Before production, review all content.

Search specifically for:

```text
TODO
PLACEHOLDER
Lorem ipsum
example.com
fake phone numbers
fake emails
fake clients
fake metrics
temporary images
development URLs
```

No placeholder business information may reach production accidentally.

---

# 24. Phase 20 — Final Visual QA

Compare every section against its approved wireframe.

Review:

```text
Hero
Solutions
Process
Technology
Projects
About
Final CTA
Footer
```

For each section verify:

- [ ] Composition
- [ ] Typography
- [ ] Spacing
- [ ] Colors
- [ ] Wave
- [ ] Motion
- [ ] Responsive behavior
- [ ] Interaction
- [ ] Content accuracy

Do not use pixel-perfect reproduction as an excuse for poor responsiveness.

Preserve visual intent.

---

# 25. Phase 21 — Technical QA

Run all project validation commands.

Expected checks may include:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Use the scripts actually defined by the project.

Do not assume a script exists before checking `package.json`.

Resolve:

- TypeScript errors
- lint errors
- build errors
- hydration errors
- console errors
- broken links
- missing assets

---

# 26. Phase 22 — Browser QA

Test at minimum on current versions of major browser engines where practical.

Priority:

```text
Chromium
Safari/WebKit
Firefox
```

Pay special attention to:

- SVG animation
- backdrop-filter
- sticky elements
- viewport units
- mobile Safari
- font rendering

---

# 27. Phase 23 — Lighthouse / Core Web Vitals

Evaluate:

```text
Performance
Accessibility
Best Practices
SEO
```

Do not chase a perfect score by removing the identity of the website.

Instead, identify actual bottlenecks.

Pay particular attention to:

```text
LCP
CLS
INP
```

Optimize expensive effects where necessary.

---

# 28. Phase 24 — Vercel Preview

Before production:

- [ ] Deploy preview
- [ ] Test production build
- [ ] Test mobile on real device when possible
- [ ] Test navigation
- [ ] Test WhatsApp CTA
- [ ] Test metadata
- [ ] Test social preview
- [ ] Test performance
- [ ] Verify environment variables

Preview must be validated before connecting production traffic.

---

# 29. Phase 25 — Production

Production checklist:

- [ ] Approved production domain
- [ ] Vercel project configured
- [ ] Environment variables configured
- [ ] Domain configured
- [ ] HTTPS active
- [ ] WhatsApp number confirmed
- [ ] Production metadata confirmed
- [ ] Sitemap accessible
- [ ] robots configuration correct
- [ ] Analytics decision confirmed
- [ ] No placeholders
- [ ] No development logs
- [ ] No broken links

---

# 30. Dependency Policy

Before installing a dependency, answer:

```text
What problem does it solve?
Can the current stack already solve it?
What is the bundle impact?
Is it actively maintained?
Is the license appropriate?
Does it require a Client Component?
```

Preferred existing stack:

```text
Next.js
React
TypeScript
Tailwind CSS
Motion
React Bits where appropriate
```

Do not install libraries simply to save a few lines of code.

---

# 31. React Bits Policy

React Bits is an effect/component source, not the visual identity.

When considering a component:

```text
Does it reinforce the approved wireframe?
        ↓
YES → evaluate performance
        ↓
Does it work responsively?
        ↓
YES → adapt to Next Wave Design System
```

Never build a section around a React Bits effect simply because the effect looks impressive.

---

# 32. Code Quality

Prefer:

```text
simple
typed
readable
composable
testable
```

Avoid premature architecture.

Do not introduce:

- unnecessary repositories
- unnecessary service layers
- unnecessary state management
- unnecessary global state
- unnecessary context providers
- unnecessary abstraction

This is primarily a marketing website.

Architecture should reflect that.

---

# 33. TypeScript

Avoid:

```ts
any
```

unless technically unavoidable and documented.

Prefer explicit types at component boundaries.

Do not over-type trivial implementation details.

---

# 34. State Management

Do not install global state management by default.

Prefer:

```text
Server state
URL
component state
derived state
```

before introducing another state-management dependency.

A marketing website should require very little global client state.

---

# 35. Data

Static content may initially live in typed configuration objects when appropriate.

Example:

```text
services
technologies
process steps
navigation
```

Do not create a CMS or database without a real requirement.

---

# 36. Environment Variables

External configuration should use environment variables where appropriate.

Example:

```text
NEXT_PUBLIC_WHATSAPP_NUMBER
NEXT_PUBLIC_SITE_URL
```

Never commit:

- secrets
- tokens
- private credentials

Public configuration must still be intentionally managed.

---

# 37. Git

Keep commits focused.

Prefer Conventional Commits.

Examples:

```text
chore: initialize nextjs project

feat: add design system tokens

feat: implement hero section

feat: add scroll-driven process wave

fix: improve hero layout on mobile

perf: reduce particle rendering cost

a11y: support reduced motion for wave animations
```

Avoid commits such as:

```text
updates
changes
fix stuff
site done
```

---

# 38. AI Commit Rule

An AI agent should not bundle unrelated changes into the same implementation task.

If asked to implement:

```text
Hero
```

do not also redesign:

```text
Footer
Technology
Projects
```

unless required by a shared dependency and clearly reported.

---

# 39. Visual Validation

After implementing a visual section, compare it against the corresponding wireframe.

The comparison should evaluate:

```text
overall composition
visual hierarchy
spacing
typography
proportions
Wave placement
lighting
responsive behavior
```

Do not consider a section complete simply because all textual elements exist.

---

# 40. Evidence

When the development environment allows browser testing, important visual tasks should preferably include evidence.

Examples:

```text
desktop screenshot
mobile screenshot
```

Evidence is particularly useful for:

- Hero
- Process
- responsive fixes
- animation states
- final QA

Do not generate fake evidence.

Evidence must come from the actual running application.

---

# 41. Error Handling

If implementation differs from the wireframe because of a technical constraint:

Do NOT silently change the design.

Instead:

1. Identify the constraint.
2. Explain the impact.
3. Propose the closest alternative.
4. Wait for approval when the visual change is significant.

---

# 42. Scope Control

If a task requests:

```text
Implement the Hero
```

the agent should not interpret it as:

```text
Implement the entire landing page.
```

If a task requests:

```text
Configure the Design System
```

the agent should not begin creating service cards.

Respect task boundaries.

---

# 43. Recommended Development Sequence

Final sequence:

```text
00 Documentation
        ↓
01 Foundation
        ↓
02 Design System
        ↓
03 Base Components
        ↓
04 Motion Foundation
        ↓
05 Header
        ↓
06 Hero
        ↓
07 Solutions
        ↓
08 Process
        ↓
09 Technology
        ↓
10 Projects
        ↓
11 About
        ↓
12 Final CTA
        ↓
13 Footer
        ↓
14 Wave Integration
        ↓
15 Responsive QA
        ↓
16 Accessibility
        ↓
17 Performance
        ↓
18 SEO
        ↓
19 Content Review
        ↓
20 Visual QA
        ↓
21 Technical QA
        ↓
22 Browser QA
        ↓
23 Lighthouse
        ↓
24 Vercel Preview
        ↓
25 Production
```

---

# 44. Current Progress

Use this section to track high-level implementation progress.

```text
Documentation        [ ]
Foundation           [ ]
Design System        [ ]
Base Components      [ ]
Motion Foundation    [ ]
Header               [ ]
Hero                 [ ]
Solutions            [ ]
Process              [ ]
Technology           [ ]
Projects             [ ]
About                [ ]
Final CTA             [ ]
Footer               [ ]
Wave Integration     [ ]
Responsive QA        [ ]
Accessibility        [ ]
Performance          [ ]
SEO                  [ ]
Content Review       [ ]
Visual QA            [ ]
Technical QA         [ ]
Browser QA           [ ]
Lighthouse           [ ]
Vercel Preview       [ ]
Production           [ ]
```

Update this list only when a phase has actually been validated.

---

# 45. Final Rule

When choosing between:

```text
implementing more
```

and:

```text
implementing the current scope properly
```

always choose:

> **Implement the current scope properly.**

The objective is not to generate the website as quickly as possible.

The objective is to build a polished Next Wave Solutions experience incrementally, with visual fidelity, maintainable code and production quality.
