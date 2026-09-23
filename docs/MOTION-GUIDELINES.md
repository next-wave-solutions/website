# Next Wave Solutions — Motion Guidelines

> Motion and interaction guidelines for the Next Wave Solutions website.

---

## 1. Purpose

Motion is a core part of the Next Wave Solutions digital identity.

The website should feel:

- premium
- technological
- fluid
- responsive
- modern
- interactive
- memorable

Animations must reinforce the brand and help tell the story of the page.

They must never exist only because an animation looks interesting.

The experience should communicate:

> Technology in motion. Ideas evolving into solutions.

The website itself should demonstrate the level of design and engineering
that Next Wave Solutions can deliver to its clients.

---

# 2. Core Motion Principle

Every animation must have at least one purpose:

1. Guide attention
2. Communicate hierarchy
3. Provide interaction feedback
4. Reinforce the Next Wave brand
5. Connect sections
6. Explain progression
7. Improve perceived quality

If an animation accomplishes none of these goals, it should probably not exist.

Avoid animation overload.

The desired feeling is:

> Sophisticated motion, not visual chaos.

---

# 3. The Wave

The Wave is the primary motion element of the website.

It is not a decorative background.

It represents the transformation journey:

Idea  
↓  
Discovery  
↓  
Planning  
↓  
Design  
↓  
Code  
↓  
Product  
↓  
Evolution

The Wave should visually connect the entire experience.

---

# 4. Wave Behavior

The Wave should feel alive.

It may:

- flow through sections
- react subtly to scroll
- change shape
- move vertically and horizontally
- glow
- reveal content
- connect process steps
- transition between purple and green
- react subtly to pointer movement
- carry particles or light points

However, movement must remain smooth and controlled.

Avoid:

- aggressive movement
- fast oscillations
- excessive distortion
- distracting looping
- random movement without purpose

---

# 5. Wave Color Progression

The Wave follows the official brand gradient.

Start:

```text
Purple
#8B5CF6
```

Transition:

```text
Purple
↓
Blue / Cyan transition
↓
Green
```

End:

```text
Green
#10B981
```

Conceptually:

```text
IDEA                                      EVOLUTION

🟣 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 🟢
```

The color progression reinforces the transformation from an initial idea
into an evolved digital product.

---

# 6. Global Wave Journey

The Wave should evolve throughout the website.

## Hero

Role:

**Birth of the Wave**

Behavior:

- subtle ambient movement
- slow flowing motion
- subtle glow
- possible pointer reaction
- particles may appear around it
- must not compete with the H1

The Wave should immediately establish the visual identity of the website.

---

## Solutions

Role:

**The Wave enters the solution ecosystem**

Behavior:

- travels through the background
- may interact visually with service cards
- glow may increase near interactive elements
- remains secondary to content

The Wave should visually connect the Hero with the Solutions section.

---

## Process — "Como Trabalhamos"

Role:

**The Wave becomes the protagonist**

This is the most important Wave interaction on the website.

The Wave connects:

```text
01
Entendemos

      02
      Planejamos

             03
             Desenvolvemos

                      04
                      Entregamos

                               05
                               Evoluímos
```

The SVG path should progressively reveal as the user scrolls.

Preferred implementation:

```text
SVG Path
+
Motion
+
scrollYProgress
+
pathLength
```

Conceptually:

```text
scroll = 0%

●


scroll = 25%

● ~~~~~~~~~


scroll = 50%

● ~~~~~~~~~~~~~~~~~~~~


scroll = 75%

● ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


scroll = 100%

● ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ●
```

Each process step may become active when the Wave reaches it.

Possible state progression:

```text
INACTIVE
↓
APPROACHING
↓
ACTIVE
↓
COMPLETED
```

Active states may receive:

- glow
- stronger color
- subtle scale
- icon illumination

Completed states should remain visible but less visually dominant than
the current step.

---

# 7. Technology Section

Role:

**The Wave becomes environmental again**

The technology content is the protagonist.

The Wave should:

- remain visible
- move slowly
- reinforce depth
- provide visual continuity

Avoid making technology logos move excessively.

Technology cards may react individually to pointer interaction.

---

# 8. Projects Section

Role:

**The Wave guides exploration**

The Wave may help visually connect project cards.

Possible interactions:

- horizontal movement
- carousel transitions
- subtle parallax
- image reveal
- card depth
- directional movement

The Wave should reinforce the direction in which projects are explored.

Do not create fake case studies or metrics for visual purposes.

---

# 9. About Section

Role:

**The Wave represents partnership and continuity**

Motion should become slightly calmer here.

The section should feel:

- confident
- human
- stable
- trustworthy

Use slower motion and subtle depth.

Avoid excessive interaction.

---

# 10. Final CTA

Role:

**The Wave completes its journey**

This section should visually close the experience.

The purple and green Wave elements may converge around the CTA.

Main message:

```text
Ready for the next wave?
```

The Wave should visually guide attention toward:

```text
Falar com a Next Wave
```

This should feel like the natural conclusion of the entire page.

The Wave started as an idea and finishes as an invitation.

---

# 11. Motion Technology

Preferred animation stack:

```text
Motion
React Bits
CSS
SVG
```

Use Motion as the primary animation engine.

React Bits may be used for specific visual effects when appropriate.

Examples:

- particles
- spotlight
- magnetic interaction
- gradient effects
- text effects
- hover effects

Do not install another animation library unless there is a clear technical
reason that cannot reasonably be solved with the existing stack.

---

# 12. Server vs Client Components

Animations must not cause the entire page to become a Client Component.

Prefer:

```text
Server Component
    ↓
Static semantic content
    ↓
Small Client Component
    ↓
Animation / interaction
```

Example:

```text
HeroSection (Server)
│
├── HeroContent
│
├── CTA
│
└── HeroWave (Client)
```

Avoid:

```text
"use client"

Entire Home Page
```

unless there is an exceptional technical reason.

---

# 13. Scroll Animations

Scroll-driven animations are encouraged.

Use them for:

- Wave progression
- section reveals
- parallax
- process progression
- subtle transforms
- visual storytelling

Avoid tying every element directly to scroll position.

The user should never feel that scrolling is fighting the interface.

---

# 14. Scroll Hijacking

Do NOT implement aggressive scroll hijacking.

Normal browser scrolling must remain functional.

Avoid:

- forced scroll positions
- blocking scroll
- excessive snap behavior
- artificial scroll speed
- long pinned sections without strong justification

Sticky or pinned experiences may be used sparingly when they clearly improve
the storytelling.

---

# 15. Section Reveal

Sections may reveal progressively when entering the viewport.

Preferred pattern:

```text
opacity
+
small translateY
+
stagger
```

Example:

```text
opacity: 0 → 1

translateY: 20px → 0
```

Avoid large movements such as:

```text
translateY: 200px
```

Content should feel like it naturally enters the experience.

---

# 16. Text Reveal

Large headings may use:

- mask reveal
- line reveal
- word stagger
- gradient reveal
- subtle blur-to-sharp transition

Do not animate every paragraph.

Body text should prioritize readability.

Hero and major section headings may receive stronger motion treatments.

---

# 17. Stagger

Stagger is encouraged for grouped content.

Examples:

```text
Service cards

01 → 02 → 03 → 04
```

or:

```text
Technology badges

React
   ↓
Next.js
   ↓
TypeScript
```

Recommended stagger range:

```text
40ms – 120ms
```

Avoid extremely long stagger sequences.

The user should not have to wait for content to become available.

---

# 18. Cards

Interactive cards may use:

- subtle scale
- border glow
- spotlight
- slight elevation
- gradient border
- small tilt
- icon movement

Recommended scale:

```text
1 → 1.01 / 1.02
```

Avoid aggressive scale effects.

Do not use:

```text
1 → 1.1
```

for standard cards.

---

# 19. Spotlight

Spotlight effects may follow pointer position inside cards.

Preferred behavior:

- subtle
- localized
- gradient based
- disappears smoothly when pointer leaves

The effect should reinforce interactivity without reducing text contrast.

---

# 20. Card Tilt

Tilt may be used on selected high-value components.

Maximum recommended tilt:

```text
2deg – 4deg
```

Avoid dramatic 3D rotations.

Cards should remain easy to read.

Mobile devices should not depend on tilt interactions.

---

# 21. Magnetic Buttons

Primary CTAs may use a subtle magnetic interaction.

Examples:

```text
Falar com a Next Wave
Conheça nossas soluções
```

Movement should remain small.

Recommended displacement:

```text
4px – 8px
```

The button should never feel difficult to click.

Disable magnetic behavior on touch devices.

---

# 22. Buttons

Button states must include:

```text
default
hover
focus
active
disabled
```

Hover may use:

- subtle glow
- gradient movement
- slight elevation
- arrow movement

Example:

```text
Falar com a Next Wave    →
                           ↗
```

Keep interactions fast and responsive.

---

# 23. Cursor Interaction

Pointer-based effects may be used sparingly.

Possible examples:

- spotlight
- particle attraction
- subtle Wave displacement
- magnetic CTA
- card tilt

Do not replace the native cursor globally unless there is a strong UX reason.

Never make important functionality depend on pointer position.

---

# 24. Particles

Particles should create atmosphere.

They must remain secondary.

Preferred characteristics:

```text
small
slow
low opacity
low density
brand colors
```

Particles may react subtly to pointer movement.

Avoid:

- particle explosions
- high density
- fast movement
- particles over important text
- large CPU/GPU usage

---

# 25. Parallax

Parallax may be used to create depth.

Possible layers:

```text
background
Wave
particles
content
foreground details
```

Movement differences should be subtle.

Avoid creating motion sickness or making text difficult to track.

---

# 26. Animation Timing

Microinteractions:

```text
120ms – 250ms
```

UI transitions:

```text
200ms – 400ms
```

Section reveals:

```text
400ms – 800ms
```

Large atmospheric animations:

```text
1s – 3s+
```

Ambient Wave movement may run continuously at a very slow speed.

---

# 27. Easing

Preferred easing should feel smooth and premium.

Good general choices:

```text
ease-out
ease-in-out
```

For Motion, spring animations may be used for interactive elements.

Springs should be controlled.

Avoid overly elastic or cartoon-like springs.

The Next Wave brand should feel technological, not playful.

---

# 28. Hover States

Hover interactions should provide immediate feedback.

Possible effects:

```text
glow
border highlight
icon movement
small translation
small scale
gradient shift
```

Avoid combining all effects at once.

One or two effects are usually enough.

---

# 29. Mobile Motion

Mobile must receive its own motion strategy.

Do not simply reproduce desktop interactions.

Remove interactions that depend on:

```text
hover
pointer tracking
cursor position
large parallax
complex tilt
```

Prefer:

```text
scroll reveal
Wave progression
tap feedback
subtle transitions
small parallax
```

Performance is more important on mobile.

---

# 30. Reduced Motion

The website MUST respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

Disable or simplify:

- parallax
- magnetic interactions
- pointer-following effects
- large Wave movement
- animated particles
- complex transitions
- unnecessary transforms

The Wave may remain visually present as a static brand element.

Content must remain completely accessible.

---

# 31. Accessibility

Animation must never:

- hide essential information permanently
- prevent keyboard navigation
- interfere with focus
- create flashing effects
- make text unreadable
- block interaction
- require precise pointer movement

Focus indicators must remain clearly visible.

---

# 32. Performance

Motion must not significantly degrade performance.

Prioritize:

```text
transform
opacity
```

Avoid frequently animating:

```text
width
height
top
left
large blur values
complex filters
```

when a transform-based solution is available.

Be careful with:

- backdrop-filter
- large blur
- multiple shadows
- huge SVG filters
- large particle counts
- canvas effects
- continuous pointer listeners

---

# 33. GPU Usage

Do not promote every element to its own compositor layer.

Use GPU acceleration intentionally.

Avoid unnecessary:

```css
will-change: transform;
```

across large numbers of elements.

Apply it only where it provides measurable benefit.

---

# 34. Lazy Loading

Expensive visual effects should load only when needed.

Examples:

```text
project carousel
particles
complex interactive backgrounds
large visual assets
```

Consider dynamic imports for expensive Client Components.

---

# 35. React Performance

Avoid triggering React state updates on every scroll or pointer event.

Prefer:

- Motion values
- transforms
- requestAnimationFrame when necessary
- CSS variables
- browser-native APIs

Avoid unnecessary React re-renders.

---

# 36. Layout Stability

Animations must not cause layout shifts.

Elements should reserve their final layout space before animation.

Avoid content appearing and pushing the rest of the page unexpectedly.

CLS must remain low.

---

# 37. Interaction Priority

Not every element should react.

Priority:

```text
1. Primary CTA
2. Wave
3. Main visual elements
4. Service cards
5. Project cards
6. Technology cards
7. Secondary decoration
```

This hierarchy prevents the interface from becoming noisy.

---

# 38. Animation Intensity

Use three motion levels.

## Level 1 — Ambient

Examples:

- particles
- background gradient
- slow Wave movement

Very subtle.

---

## Level 2 — Interaction

Examples:

- button hover
- card hover
- spotlight
- icon response

Clearly visible but restrained.

---

## Level 3 — Storytelling

Examples:

- Hero entrance
- Process Wave
- major section transitions
- Final CTA

Used sparingly for high-impact moments.

---

# 39. Visual Continuity

Sections must not feel like independent templates.

The Wave should help maintain continuity.

Transitions between sections may use:

- Wave positioning
- gradient changes
- background lighting
- particles
- shared visual elements

Avoid abrupt visual resets between sections.

---

# 40. Animation Choreography

Animations should follow a hierarchy.

Example section entrance:

```text
1. Wave/background becomes visible
        ↓
2. Section label
        ↓
3. Heading
        ↓
4. Supporting copy
        ↓
5. Main content
        ↓
6. Interactive details
```

Do not animate everything simultaneously.

---

# 41. Initial Page Load

The first experience should feel intentional.

Suggested Hero choreography:

```text
Logo / Header
        ↓
Section label
        ↓
Hero heading
        ↓
Supporting copy
        ↓
CTA
        ↓
Main visual / Wave
```

The entire sequence should remain quick.

Do not force users to watch an intro animation before accessing the website.

---

# 42. Navigation

Header motion should remain subtle.

Possible behavior:

```text
top of page
↓
transparent / integrated

scroll
↓
slightly blurred dark background
```

Navigation may shrink slightly after scrolling.

Avoid dramatic header animations.

---

# 43. Page Transitions

If additional pages are introduced later, transitions may use:

- opacity
- small translate
- Wave continuity
- gradient transition

Avoid long cinematic transitions that slow navigation.

---

# 44. Loading States

If loading states become necessary:

Prefer branded minimal indicators.

The Wave may inspire loaders.

Example:

```text
──────●~~~~~~
```

Avoid full-screen loaders unless technically necessary.

---

# 45. React Bits Usage

React Bits components should be treated as building blocks.

Do not copy an effect simply because it exists.

Before using a React Bits component, verify:

1. Does it support the design?
2. Does it reinforce the brand?
3. Is performance acceptable?
4. Does it work on mobile?
5. Does it respect reduced motion?

Customize components to match the Next Wave Design System.

The website must not look like a React Bits demo gallery.

---

# 46. Motion Usage

Motion is the preferred animation engine.

Use it for:

- gestures
- viewport animations
- scroll-linked animations
- layout transitions
- SVG animation
- springs
- sequencing

Prefer Motion primitives instead of manually creating complex animation
systems when Motion already solves the problem.

---

# 47. CSS Animation Usage

Use CSS for simple states such as:

- hover
- focus
- small transitions
- simple looping ambient effects

Do not use JavaScript when CSS is sufficient.

---

# 48. SVG Usage

SVG is preferred for the primary Wave.

Benefits:

- scalable
- lightweight
- animatable
- responsive
- accessible
- precise

The Wave should ideally be implemented using reusable SVG paths.

Do not use a large raster image for the main animated Wave.

---

# 49. Canvas / WebGL

Canvas or WebGL should NOT be the default solution.

They may only be introduced if the desired visual effect cannot reasonably
be achieved using:

```text
CSS
SVG
Motion
React Bits
```

Introducing WebGL must have a clear visual and technical justification.

SEO content must never depend on Canvas or WebGL.

---

# 50. SEO and Motion

Motion must be progressive enhancement.

The semantic content must exist independently of animation.

Correct:

```text
HTML content
↓
CSS layout
↓
Motion enhancement
```

Incorrect:

```text
JavaScript
↓
Animation
↓
Content becomes available
```

Search engines and users must be able to understand the page without
executing complex animations.

---

# 51. Quality Checklist

Before considering an animated section complete, verify:

### Visual

- [ ] Matches the approved wireframe
- [ ] Maintains the Next Wave visual identity
- [ ] Wave continuity is preserved
- [ ] Animation hierarchy is clear
- [ ] Effects do not overwhelm content

### Desktop

- [ ] Pointer interactions work
- [ ] Hover states work
- [ ] Scroll animation works
- [ ] No unexpected layout shifts

### Mobile

- [ ] No hover dependency
- [ ] Touch interactions work
- [ ] Motion is simplified where appropriate
- [ ] Performance remains smooth

### Accessibility

- [ ] Keyboard navigation works
- [ ] Focus states remain visible
- [ ] `prefers-reduced-motion` is respected
- [ ] Content remains accessible without animation

### Performance

- [ ] No unnecessary re-renders
- [ ] No excessive particle count
- [ ] Expensive effects are lazy loaded
- [ ] No unnecessary animation libraries
- [ ] Core Web Vitals remain acceptable

---

# 52. Final Rule

When deciding between:

```text
more animation
```

and:

```text
better animation
```

always choose:

> **Better animation.**

The goal is not to make everything move.

The goal is to make the Next Wave experience feel alive.
