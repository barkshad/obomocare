# OBOMOCARE Website — Anti-Vibe Editorial Rebuild

## Goal
Strip all AI-vibe patterns from the OBOMOCARE website. Replace with intentional editorial design, human-sounding copy, and a proper design system.

## Stack
- React 18 + Vite + TypeScript (unchanged)
- Firebase + ContentContext for content management (unchanged)
- React Router (unchanged)
- **Tailwind demoted** to layout-only utilities (flex, grid, container)
- **Custom CSS** with `@layer` architecture for all visual design

## Architecture

```
website/
  src/
    styles/
      tokens.css       design tokens (colors, type, space, radius, shadow)
      reset.css        modern CSS reset
      base.css         html, body, typography
      layout.css       container, grid, section patterns
      components/
        button.css
        nav.css
        card.css
      sections/
        hero.css
        features.css
        stats.css
        toc.css
        kpi.css
        budget.css
        cta.css
      main.css          imports all layers
```

## Design Tokens

### Colors
- Brand: `#1A0FAB` (blue), `#E8751A` (orange) — kept, they're specific
- Neutral scale: `--ink-900` (#0D0D0D) through `--ink-50` (#F4F4F2)
- Surface: `--surface` (#FAFAF8), `--elevated` (#FFFFFF)
- Semantic: success, warning, error, info

### Typography
- Display: Playfair Display (editorial character)
- Body: Space Grotesk (distinctive, tech-human)
- Mono: JetBrains Mono (for data/numbers)
- Scale: Major Third 1.25 ratio from 0.64rem to 3.815rem, plus fluid hero

### Spacing
8-point grid: `--space-1` (4px) to `--space-32` (128px)

### Border Radius
Single primary `--radius-md: 8px`. Pills only for actual tags/badges.

### Shadows
3 levels: subtle card, elevated, brand-colored. No Tailwind defaults.

## Home Page Layout

| Section | Current | Rebuild |
|---------|---------|---------|
| Hero | Full-screen centered + stock photo overlay | Editorial split: headline left, CSS pattern right. One button. |
| Stats | Orange bar, 4 centered blocks | Full-bleed bordered grid, display font for numbers |
| About | Split + rotated Unsplash photos | Asymmetric 2/3 + 1/3, pull-quote, no images |
| Pillars | 2-column card grid + icons | Staggered editorial rows, no icons |
| Situation | 3-column cards + orange top border | Numbered editorial list, full width |
| Theory of Change | 3-column grid | Narrative scroll with sticky center visual |
| KPIs | 3-column card grid | Bento grid with size hierarchy |
| Budget | Vertical progress bar list | Editorial data viz with stacked bars |
| CTA | Orange section + 2 buttons | Footer editorial CTA, one action |

## Content Principles (anti-ai-writer)
- No "Learn More" or "Get Started" anywhere
- No hedges, no filler, no summary paragraphs
- Specific Kenyan details (counties, roads, actual figures)
- One position per argument, committed fully
- Sentence length variation

## Stock Images
Removed. Replaced with CSS-generated geometric patterns using brand colors.

## Animation
- Hero: GSAP entrance sequence (eyebrow → headline → CTA)
- Stats: count-up on scroll
- Theory of Change: scroll-triggered sticky reveal
- Page transitions: View Transitions API
- `prefers-reduced-motion`: always respected

## Accessibility
- Skip link, focus indicators, aria labels
- Color contrast 4.5:1 minimum
- All images have alt text or role="presentation"
- Keyboard nav for all interactive elements
