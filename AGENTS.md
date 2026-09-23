# Next Wave Solutions — AI Development Instructions

Before implementing or modifying UI, read:

- `/docs/PROJECT-BRIEF.md`
- `/docs/DESIGN-SYSTEM.md`
- `/docs/MOTION-GUIDELINES.md`
- Relevant wireframe in `/docs/wireframes`

## Core principle

This website is itself a showcase of Next Wave Solutions'
technical and design capabilities.

It must feel premium, technological, interactive and memorable.

Do not simplify the visual experience into a generic SaaS landing page.

## Visual source of truth

The approved wireframes in `/docs/wireframes` are the visual
source of truth.

When implementing a section:

1. Find its corresponding wireframe.
2. Preserve its composition and visual hierarchy.
3. Do not redesign the section without explicit approval.
4. Implement responsive behavior intentionally.
5. Preserve continuity of the Wave between sections.

## The Wave

The Wave is a core brand element, not decorative noise.

It represents the journey:

Idea → Discovery → Design → Code → Product → Evolution

The Wave should visually connect the website experience.

Prefer SVG + Motion for scroll-driven Wave animations.

Do not replace it with generic gradients or random decorative curves.

## Technology

Use:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion
- React Bits when appropriate

Do not install additional dependencies without a clear reason.

## Component architecture

Prefer:

- Server Components by default
- Client Components only when interaction requires them
- Small reusable components
- Typed props
- Semantic HTML

Avoid turning entire pages into Client Components just to support animation.

## Motion

Motion should reinforce hierarchy and interaction.

Allowed examples:

- scroll-driven animation
- SVG path animation
- text reveal
- stagger
- subtle parallax
- magnetic CTA
- spotlight
- hover glow
- subtle card tilt

Avoid:

- excessive bouncing
- unnecessary infinite animations
- animation that delays access to content
- effects that hurt readability

Always support `prefers-reduced-motion`.

## Performance

Visual impact must not come at the expense of usability.

Prioritize:

- Core Web Vitals
- lazy loading
- optimized images
- minimal client JavaScript
- code splitting for expensive effects
- avoiding unnecessary re-renders

## SEO

Important content must exist in semantic HTML.

Animations must enhance content, never be required to access it.

Use proper:

- headings
- metadata
- OpenGraph
- sitemap
- robots
- structured data where appropriate

## Design tokens

Never hardcode brand colors when an existing design token exists.

Use the tokens defined in `/docs/DESIGN-SYSTEM.md`.

## Copy

Do not invent:

- customers
- testimonials
- case studies
- metrics
- phone numbers
- email addresses
- company history
- business claims

Use approved copy or clearly marked placeholders.

## Quality

Before considering a section complete:

- compare it against its wireframe
- test desktop
- test tablet
- test mobile
- test keyboard navigation
- test reduced motion
- verify no horizontal overflow
- verify performance
