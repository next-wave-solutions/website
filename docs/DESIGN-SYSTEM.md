# Next Wave Solutions — Design System

> Visual design system and UI implementation guidelines for the Next Wave Solutions website.

This document is the source of truth for visual consistency.

For animation and interaction behavior, also read:

- `/docs/MOTION-GUIDELINES.md`

For project context and product decisions, read:

- `/docs/briefing.md`

Approved wireframes remain the visual source of truth for section composition.

---

# 1. Design Philosophy

The Next Wave Solutions visual identity should feel:

- technological
- premium
- modern
- innovative
- confident
- immersive
- clean
- precise

The website should visually demonstrate the quality of software and digital experiences that Next Wave Solutions can build.

The experience should NOT look like:

- a generic SaaS template
- a generic corporate website
- a component library demo
- a cyberpunk game interface
- an excessively futuristic concept
- a collection of unrelated visual effects

The desired balance is:

> Technology + sophistication + motion + clarity.

---

# 2. Brand Concept

The Next Wave brand represents:

- movement
- evolution
- transformation
- technology
- progress
- partnership

The visual system is built around two main colors:

```text
Purple → Idea / Technology / Innovation
Green  → Evolution / Result / Growth
```

These colors are connected by the official brand gradient.

The Wave is the visual element responsible for connecting this transformation throughout the experience.

---

# 3. Primary Brand Colors

## Primary

```css
--primary: #8B5CF6;
```

Usage:

- primary actions
- important highlights
- interactive elements
- selected states
- brand accents
- Wave starting color

---

## Primary Hover

```css
--primary-hover: #6D28D9;
```

Usage:

- primary button hover
- interactive purple elements
- emphasized states

---

## Primary Strong

```css
--primary-strong: #4C1D95;
```

Usage:

- dark purple surfaces
- strong accents
- gradient depth

Do not use it as the default primary color.

---

# 4. Accent Colors

## Accent

```css
--accent: #10B981;
```

Usage:

- success-like brand accents
- evolution
- growth
- secondary highlights
- Wave ending color
- CTA details

---

## Accent Hover

```css
--accent-hover: #047857;
```

---

## Accent Strong

```css
--accent-strong: #064E3B;
```

Use darker accent colors sparingly.

---

# 5. Brand Gradient

The primary Next Wave gradient is:

```css
linear-gradient(
  90deg,
  #8B5CF6 0%,
  #10B981 100%
);
```

Conceptually:

```text
PURPLE                         GREEN
IDEA                         EVOLUTION

#8B5CF6  ───────────────────  #10B981
```

The gradient may appear in:

- Wave
- important text
- primary CTA
- borders
- highlights
- selected icons
- visual effects

Do not apply the gradient to everything.

The gradient should remain special.

---

# 6. Extended Gradient

For large atmospheric elements, the gradient may transition through blue/cyan.

Example:

```css
linear-gradient(
  90deg,
  #8B5CF6 0%,
  #6366F1 30%,
  #3B82F6 50%,
  #06B6D4 70%,
  #10B981 100%
);
```

Use this version primarily for:

- large Wave elements
- ambient backgrounds
- glow
- large visual compositions

The official brand endpoints must remain:

```text
#8B5CF6
→
#10B981
```

---

# 7. Background

The production website should primarily use a dark theme.

The wireframes define the general visual direction.

Recommended base:

```css
--background: #070B14;
```

Alternative dark layers:

```css
--background-secondary: #0B1020;
--background-tertiary: #111827;
```

The background should NOT be pure black.

Avoid:

```css
#000000
```

as the main website background.

The slight blue/navy tone reinforces the technological identity.

---

# 8. Surface Colors

Cards and elevated elements should use subtle contrast against the background.

```css
--surface: #111827;
--surface-secondary: #151D2E;
--surface-hover: #1B2436;
```

Glass surfaces may use transparent versions.

Example:

```css
background: rgba(17, 24, 39, 0.65);
```

with:

```css
backdrop-filter: blur(...);
```

Use backdrop blur carefully due to performance cost.

---

# 9. Foreground and Text Colors

## Main Foreground

```css
--foreground: #F9FAFB;
```

Use for:

- H1
- H2
- important content

---

## Text Primary

```css
--text-primary: #F3F4F6;
```

---

## Text Secondary

```css
--text-secondary: #D1D5DB;
```

---

## Text Muted

```css
--text-muted: #9CA3AF;
```

---

## Text Subtle

```css
--text-subtle: #6B7280;
```

Avoid using muted text when information is essential.

Contrast must remain accessible.

---

# 10. Border Colors

Default:

```css
--border: rgba(255, 255, 255, 0.10);
```

Strong:

```css
--border-strong: rgba(255, 255, 255, 0.18);
```

Interactive purple:

```css
--border-primary: rgba(139, 92, 246, 0.50);
```

Interactive green:

```css
--border-accent: rgba(16, 185, 129, 0.50);
```

Borders should usually be subtle.

---

# 11. Semantic Colors

Semantic colors must not reuse brand colors when the semantic meaning could become ambiguous.

## Information

```css
--info: #3B82F6;
```

Use for:

- informational states
- informational messages
- neutral notices

---

## Warning

```css
--warning: #F59E0B;
```

Use for:

- warnings
- attention states
- non-destructive alerts

---

## Error

```css
--error: #EF4444;
```

Use for:

- validation errors
- failed actions
- destructive feedback

---

## Success

The brand accent may be used carefully for success:

```css
--success: #10B981;
```

Because green is already part of the brand, context must clearly communicate when it represents a success state.

---

# 12. Focus

Keyboard focus must always remain visible.

Recommended:

```css
--focus: #8B5CF6;
```

Example:

```css
outline: 2px solid var(--focus);
outline-offset: 3px;
```

Gradient effects must never replace accessible focus indicators.

---

# 13. Selection

Recommended selection:

```css
::selection {
  background: rgba(139, 92, 246, 0.35);
  color: #F9FAFB;
}
```

---

# 14. Typography

The official typography combination is:

```text
Headings / Display
→ Manrope

Body / UI
→ Inter
```

Both should be loaded using Next.js font optimization.

Prefer:

```text
next/font
```

Do not load fonts through arbitrary third-party runtime scripts.

---

# 15. Manrope

Use Manrope for:

- H1
- H2
- H3
- large numbers
- important CTA text
- strong brand statements

Recommended weights:

```text
600
700
800
```

Avoid using very light Manrope weights for major headings.

---

# 16. Inter

Use Inter for:

- body text
- navigation
- labels
- metadata
- badges
- descriptions
- UI controls

Recommended weights:

```text
400
500
600
```

---

# 17. Typography Scale

Use fluid typography when appropriate.

## Display / Hero

Desktop target:

```text
64px – 80px
```

Mobile target:

```text
40px – 52px
```

Recommended:

```css
font-size: clamp(2.75rem, 6vw, 5rem);
```

---

## H1

```text
48px – 72px desktop
40px – 52px mobile
```

---

## H2

```text
40px – 56px desktop
32px – 40px mobile
```

---

## H3

```text
24px – 32px
```

---

## Body Large

```text
18px – 20px
```

---

## Body

```text
16px – 18px
```

---

## Small

```text
14px
```

---

## Label

```text
12px – 14px
```

Labels may use uppercase with increased letter spacing.

Example:

```text
01. SOLUÇÕES
02. COMO TRABALHAMOS
03. TECNOLOGIA
```

---

# 18. Line Height

Large headings:

```text
0.95 – 1.1
```

Body:

```text
1.5 – 1.7
```

UI labels:

```text
1.2 – 1.4
```

Do not use excessively tight body text.

---

# 19. Letter Spacing

Display headings:

```text
-0.02em → -0.04em
```

Body:

```text
normal
```

Uppercase labels:

```text
0.08em → 0.14em
```

---

# 20. Text Width

Avoid extremely wide paragraphs.

Recommended readable body width:

```text
55ch – 70ch
```

Hero supporting text:

```text
45ch – 60ch
```

---

# 21. Layout Container

Use a consistent page container.

Recommended maximum width:

```css
--container-max: 1440px;
```

Standard desktop content may use:

```text
1200px – 1360px
```

depending on the section.

Large atmospheric effects such as the Wave may escape the container.

Content should not.

---

# 22. Horizontal Padding

Recommended:

Desktop:

```text
48px – 80px
```

Tablet:

```text
32px – 48px
```

Mobile:

```text
20px – 24px
```

Prefer fluid spacing where appropriate.

---

# 23. Section Spacing

The website should feel spacious.

Recommended vertical section spacing:

Desktop:

```text
120px – 180px
```

Mobile:

```text
80px – 120px
```

Important storytelling sections may intentionally occupy more vertical space.

Do not compress sections simply to reduce page length.

Whitespace is part of the premium experience.

---

# 24. Spacing Scale

Prefer a consistent spacing system.

Suggested base:

```text
4px
```

Scale:

```text
4
8
12
16
20
24
32
40
48
64
80
96
120
160
```

Avoid arbitrary values unless required by the composition.

---

# 25. Border Radius

The visual identity uses modern rounded geometry.

Suggested tokens:

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-2xl: 32px;
--radius-full: 9999px;
```

Usage:

```text
Buttons       → 12px / 16px / full depending on design
Cards         → 16px / 24px
Large panels  → 24px / 32px
Badges        → full
```

Do not use a different arbitrary radius for every component.

---

# 26. Buttons

Primary button:

```text
Background:
Purple → Green gradient

Text:
Light

Font:
Manrope / 600

Shape:
Rounded
```

Primary buttons should feel premium, not oversized.

Possible visual behavior:

```text
default
↓
subtle gradient

hover
↓
slightly stronger glow
slight elevation
arrow movement
```

Motion behavior is defined in:

`/docs/MOTION-GUIDELINES.md`

---

# 27. Secondary Button

Recommended style:

```text
transparent background
subtle border
light foreground
```

Hover:

```text
slightly brighter surface
stronger border
```

Secondary buttons should not compete with the primary CTA.

---

# 28. Button Sizes

Recommended:

Small:

```text
36px – 40px height
```

Medium:

```text
44px – 48px
```

Large:

```text
52px – 56px
```

Touch targets should remain accessible.

---

# 29. Cards

Cards should feel integrated into the environment.

Recommended characteristics:

```text
dark surface
subtle border
soft glow
large radius
comfortable spacing
```

Cards should not look like isolated white rectangles placed on a dark page.

Possible base:

```css
background:
  linear-gradient(
    180deg,
    rgba(255,255,255,0.04),
    rgba(255,255,255,0.015)
  );

border:
  1px solid rgba(255,255,255,0.10);
```

---

# 30. Interactive Cards

Interactive cards may introduce:

- gradient border
- spotlight
- glow
- icon highlight
- subtle depth

Do not permanently show every interactive effect.

The resting state should remain clean.

---

# 31. Glassmorphism

Glass may be used selectively.

Good candidates:

- header
- floating panels
- important technology panels
- small overlays

Avoid turning every card into glass.

Glassmorphism should reinforce depth, not become the entire design language.

---

# 32. Glow

Glow is part of the visual identity but must remain controlled.

Purple:

```css
rgba(139, 92, 246, ...)
```

Green:

```css
rgba(16, 185, 129, ...)
```

Cyan may appear as a transitional atmospheric color.

Use glow for:

- Wave
- primary CTA
- active process step
- interactive cards
- major visual elements

Avoid glowing all text.

---

# 33. Shadows

Traditional dark drop shadows should remain subtle.

Prefer atmospheric glow and surface contrast.

Example:

```css
box-shadow:
  0 20px 60px rgba(0, 0, 0, 0.35);
```

Avoid extremely sharp shadows.

---

# 34. Icons

Use a consistent icon library.

Prefer simple outline icons.

Icons should feel:

- modern
- geometric
- clean

Do not mix multiple icon styles.

Avoid using emojis as production UI icons.

---

# 35. Icon Containers

Service icons may appear inside:

```text
rounded square
circle
subtle glass container
```

with brand-colored glow.

Icons should not overpower headings.

---

# 36. Badges

Badges are appropriate for:

- technologies
- project categories
- section metadata

Recommended:

```text
dark surface
subtle border
small radius/full radius
Inter 500
```

Technology badges should not resemble colorful advertising stickers.

---

# 37. Technology Logos

Official technology logos may retain recognizable brand identity where appropriate.

However:

- avoid excessive visual color noise
- keep sizing consistent
- do not let logos dominate the section
- maintain accessible contrast

Technology exists to support the message, not become the product.

---

# 38. Section Labels

Major sections should use a consistent numbered label.

Example:

```text
01. SOLUÇÕES
02. COMO TRABALHAMOS
03. TECNOLOGIA
04. PROJETOS
05. SOBRE A NEXT WAVE
```

Style:

```text
Inter
500 / 600
uppercase
small size
increased tracking
purple or gradient accent
```

The numbering may be adjusted according to the final approved page order.

Do not derive final numbering from generated wireframe text without checking the actual page structure.

---

# 39. The Wave

The Wave is a brand component.

Visual properties:

```text
fluid
continuous
luminous
purple → green
technological
organic but controlled
```

The Wave may use:

- gradient stroke
- soft glow
- particles
- layered paths
- subtle transparency

Do not replace the Wave with generic decorative blobs.

Detailed animation behavior:

`/docs/MOTION-GUIDELINES.md`

---

# 40. Wave Thickness

The Wave may have multiple representations.

Ambient Wave:

```text
thin / subtle
```

Process Wave:

```text
more visible
```

Hero / CTA Wave:

```text
large / atmospheric
```

Thickness should adapt to context.

Do not force one SVG style everywhere.

The visual identity should remain consistent even when the Wave changes scale.

---

# 41. Background Decoration

Allowed:

- subtle grid
- particles
- gradient light
- Wave
- blurred light sources
- minimal noise texture
- subtle geometric lines

Avoid combining all decorations at maximum intensity.

Content readability always wins.

---

# 42. Grid

A subtle technological grid may appear in selected backgrounds.

It should have very low contrast.

Example:

```css
rgba(255,255,255,0.02)
```

The grid should almost disappear when the user focuses on content.

---

# 43. Noise / Texture

Very subtle noise may be used to prevent gradients from feeling overly digital or flat.

Keep opacity extremely low.

Do not use visible grain that reduces text clarity.

---

# 44. Images

When real imagery becomes available:

Prefer:

- authentic project screenshots
- product interfaces
- team/work environment when appropriate
- real company material

Avoid generic stock imagery whenever possible.

Do not invent people, clients, offices or products and present them as real Next Wave assets.

---

# 45. Project Screenshots

Project imagery should be presented as premium product showcases.

Possible treatments:

- browser frame
- device frame
- floating UI
- perspective
- subtle depth
- controlled glow

Do not distort screenshots so much that the actual product becomes impossible to understand.

---

# 46. Responsive Design

Responsive behavior must be intentionally designed.

Do not treat mobile as:

> desktop but smaller.

Desktop may use:

- horizontal composition
- atmospheric negative space
- pointer interaction
- layered depth

Mobile should prioritize:

- vertical storytelling
- readability
- touch interaction
- simplified atmospheric effects
- performance

---

# 47. Mobile Typography

Hero headings must remain impactful without consuming the entire viewport.

Avoid single words creating awkward line breaks when possible.

Test important headings around:

```text
320px
375px
390px
430px
```

widths.

---

# 48. Mobile Cards

Cards generally stack vertically.

Maintain:

- comfortable padding
- visible hierarchy
- accessible touch targets
- reduced motion complexity

Do not shrink desktop cards until they become unreadable.

---

# 49. Desktop

The desktop experience should take advantage of space.

Recommended design behavior:

- asymmetric compositions
- larger typography
- deeper visual layering
- larger Wave presence
- pointer interactions
- generous whitespace

Avoid simply centering every section.

---

# 50. Header

Header should remain visually lightweight.

Recommended structure:

```text
Logo

Soluções
Como trabalhamos
Projetos
Sobre

CTA
```

At the top of the page it may visually integrate with the Hero.

After scroll it may receive:

```text
dark translucent surface
subtle blur
subtle border
```

Do not make the header visually heavier than the Hero.

---

# 51. Logo

Use the official Next Wave Solutions logo.

Preferred production asset:

```text
SVG
```

The logo should have:

- transparent background
- light version
- dark-compatible version if necessary
- symbol-only version

Do not redraw the logo with CSS.

Do not modify logo proportions.

Do not apply random effects to the logo.

---

# 52. Logo Clear Space

Always maintain visual breathing room around the logo.

Do not place:

- text
- borders
- icons
- Wave paths

directly against it.

---

# 53. Hero

The Hero is the highest-impact area of the website.

Priorities:

```text
1. Brand
2. Value proposition
3. Primary CTA
4. Visual impact
5. Wave
```

The visual effect must not reduce the clarity of the value proposition.

The user should understand what Next Wave does within seconds.

---

# 54. Solutions

Service cards should communicate outcomes before technologies.

Examples:

```text
Sistemas Web
Aplicativos
Automações
Integrações
```

Avoid turning the section into a list of frameworks.

---

# 55. Process

The Process section should use the Wave as the primary storytelling mechanism.

Steps:

```text
01 Entendemos
02 Planejamos
03 Desenvolvemos
04 Entregamos
05 Evoluímos
```

Do not transform this section into a generic card grid.

The Wave must visually connect the stages.

---

# 56. Technology

The Technology section should communicate:

> We choose modern technology to create reliable solutions.

Not:

> Look how many frameworks we know.

Technology should remain secondary to business outcomes.

---

# 57. Projects

Projects should receive strong visual emphasis when real cases become available.

Do not invent:

- clients
- results
- percentages
- revenue numbers
- performance improvements
- testimonials

Placeholders must be clearly identified during development.

---

# 58. About

The About section should communicate partnership and credibility.

Avoid generic statements such as:

```text
We are passionate about technology.
```

Prefer concrete positioning.

The visual tone may become slightly calmer than previous sections.

---

# 59. Final CTA

The Final CTA is the visual conclusion of the experience.

Primary message:

```text
Ready for the next wave?
```

The Wave should visually converge toward the CTA.

Primary action:

```text
Falar com a Next Wave
```

The action should eventually lead to the approved WhatsApp contact.

Do not invent a production WhatsApp number.

---

# 60. Footer

Footer should be clean and functional.

Possible groups:

```text
Brand
Navigation
Solutions
Contact
Social
Legal
```

Do not add links to pages that do not exist.

Do not invent:

- email
- phone
- address
- social profiles

Use placeholders only during development and clearly mark them.

---

# 61. Visual Hierarchy

Every section should clearly communicate:

```text
Label
↓
Heading
↓
Supporting text
↓
Primary content
↓
Secondary interaction
```

Do not give every element equal visual weight.

---

# 62. Content Density

Prefer fewer, stronger elements.

Avoid:

- excessive cards
- excessive badges
- long walls of text
- repeated CTAs
- unnecessary decorative components

The website should feel rich because of quality, not because of quantity.

---

# 63. Accessibility

Minimum requirements:

- semantic HTML
- keyboard navigation
- visible focus
- sufficient contrast
- meaningful alt text
- touch-friendly controls
- reduced motion support

Visual design must not compromise accessibility.

---

# 64. Color Contrast

Text must maintain appropriate contrast against dark backgrounds.

Never place low-opacity gray text over complex gradients without checking readability.

Gradient text should primarily be used for large decorative headings.

Important body content should use solid foreground colors.

---

# 65. Performance

Visual sophistication must remain performant.

Be cautious with:

- multiple backdrop blurs
- large shadows
- giant gradients
- SVG filters
- particles
- continuous animations
- huge images

Reuse effects whenever possible.

---

# 66. Design Tokens

Brand values must be represented through reusable design tokens.

Do NOT repeatedly hardcode:

```css
#8B5CF6
#10B981
#070B14
```

inside arbitrary components.

Define them centrally.

Components should consume semantic tokens.

---

# 67. Suggested Token Structure

Example conceptual structure:

```css
:root {
  --background: #070B14;
  --background-secondary: #0B1020;

  --surface: #111827;
  --surface-secondary: #151D2E;

  --foreground: #F9FAFB;

  --text-primary: #F3F4F6;
  --text-secondary: #D1D5DB;
  --text-muted: #9CA3AF;

  --primary: #8B5CF6;
  --primary-hover: #6D28D9;
  --primary-strong: #4C1D95;

  --accent: #10B981;
  --accent-hover: #047857;
  --accent-strong: #064E3B;

  --info: #3B82F6;
  --warning: #F59E0B;
  --error: #EF4444;
  --success: #10B981;

  --border: rgba(255, 255, 255, 0.10);
  --border-strong: rgba(255, 255, 255, 0.18);

  --focus: #8B5CF6;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 32px;

  --container-max: 1440px;
}
```

The actual implementation may adapt this structure to the selected Tailwind version and architecture.

Do not duplicate the same values across multiple systems unnecessarily.

---

# 68. Tailwind

Tailwind should consume the design system.

Do not use arbitrary values everywhere.

Avoid:

```text
text-[#8B5CF6]
bg-[#070B14]
rounded-[19px]
```

when an equivalent project token exists.

Arbitrary values are acceptable only for intentional one-off composition details.

---

# 69. Component Variants

Reusable components should expose meaningful variants.

Example:

```text
Button

variant:
- primary
- secondary
- ghost
- destructive

size:
- sm
- md
- lg
```

Avoid creating:

```text
PurpleButton
GreenButton
BigPurpleButton
HeroButton
```

when variants solve the problem.

---

# 70. shadcn/ui

shadcn/ui may be used as a structural foundation.

However:

> Default shadcn styling is NOT the Next Wave Design System.

Components must be customized to match:

- colors
- radius
- typography
- interaction
- motion
- dark theme

Do not let the site look like a default shadcn project.

---

# 71. React Bits

React Bits components must also be adapted to the Design System.

Never assume their default appearance is approved.

Customize:

- colors
- intensity
- typography
- radius
- animation
- spacing

The final result must look native to Next Wave.

---

# 72. Wireframes

Approved wireframes in:

```text
/docs/wireframes/
```

are the visual reference for:

- composition
- hierarchy
- relative scale
- visual rhythm
- section identity

Wireframes are NOT a license to reproduce:

- fake metrics
- fake clients
- fake emails
- fake phone numbers
- generated placeholder copy

Visual structure should be preserved while content is validated separately.

---

# 73. Source of Truth Priority

When instructions conflict, use this order:

```text
1. Explicit current project requirement
2. Approved wireframe for the specific section
3. DESIGN-SYSTEM.md
4. MOTION-GUIDELINES.md
5. briefing.md
6. Existing implementation
7. Library defaults
```

Do not silently redesign an approved section because a library component has a different default structure.

---

# 74. Consistency Rule

Before introducing a new:

```text
color
font
radius
shadow
spacing pattern
button style
card style
animation style
```

check whether the Design System already provides an appropriate solution.

Prefer consistency over novelty.

---

# 75. Final Principle

The Next Wave Solutions website should communicate technical excellence before the visitor reads a single technology name.

Every visual decision should support:

> clarity  
> quality  
> movement  
> innovation  
> trust

The final experience should feel unmistakably:

> **Next Wave.**
