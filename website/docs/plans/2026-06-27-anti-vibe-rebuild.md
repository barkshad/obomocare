# Anti-Vibe Editorial Rebuild Implementation Plan

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Strip all AI-vibe patterns from the OBOMOCARE website and replace with intentional editorial design, human-sounding copy, and a proper CSS custom-property design system. Keep Firebase CMS and React Router intact.

**Architecture:** Replace Tailwind as the visual design layer with custom CSS `@layer` architecture. Tailwind kept only for layout utilities. Stock images removed, CSS geometric patterns used instead. All hardcoded fallback copy rewritten with anti-ai-writer principles.

**Tech Stack:** React 18, Vite, TypeScript, Firebase, CSS Custom Properties, GSAP

## Global Constraints

- No stock photos from Unsplash or similar
- No "Learn More" or "Get Started" button text
- No rounded-full as a design motif (only for actual tag elements)
- No purple/violet/indigo gradients
- No `scale(1.05)` hover effects
- No Tailwind utility classes for visual design (colors, shadows, borders)
- No inline `style={{}}` for visual properties
- All visual tokens in CSS custom properties only
- `prefers-reduced-motion` respected on all animations
- Color contrast 4.5:1 minimum

---

## File Structure

### Create:
```
src/styles/
  tokens.css          design tokens
  reset.css           modern CSS reset
  base.css            html, body, typography defaults
  layout.css          container, grid, section patterns
  components/
    button.css        button component
    nav.css           navigation component
    card.css          card component
  sections/
    hero.css          hero section
    stats.css         stats bar
    features.css      about + pillars + situation
    toc.css           theory of change
    kpi.css           impact targets
    budget.css        funding request
    cta.css           call-to-action + footer
  main.css            entry point importing all via @layer
```

### Modify:
- `index.html` — add main.css link
- `pages/Home.tsx` — rewrite JSX to semantic HTML + CSS classes
- `pages/About.tsx` — update JSX to use new design system
- `components/Layout.tsx` — update wrapper
- `components/Navbar.tsx` — redesign
- `components/Footer.tsx` — redesign
- `brand.ts` — keep for JS/TS reference (CSS tokens are source of truth)

### Delete:
- `docs/obomocare_website.html` (no longer needed as reference after rebuild)

---

### Task 1: Create design tokens CSS

**Files:**
- Create: `src/styles/tokens.css`

- [ ] **Step 1: Create tokens.css with all design tokens**

```css
:root {
  /* Brand colors */
  --color-brand: #1A0FAB;
  --color-brand-mid: #2D1FD4;
  --color-brand-dark: #100969;
  --color-brand-light: #E8E6FA;
  --color-accent: #E8751A;
  --color-accent-mid: #D4650A;
  --color-accent-light: #FEF0E4;

  /* Neutral scale */
  --ink-900: #0D0D0D;
  --ink-700: #2D2D2D;
  --ink-500: #6B6B6B;
  --ink-300: #ABABAB;
  --ink-100: #E1E1DF;
  --ink-50: #F4F4F2;
  --ink-25: #FAFAF8;

  /* Surfaces */
  --surface-primary: var(--ink-25);
  --surface-elevated: #FFFFFF;
  --surface-soft: var(--ink-50);

  /* Typography */
  --font-display: 'Playfair Display', 'Georgia', serif;
  --font-body: 'Space Grotesk', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Type scale (Major Third 1.25) */
  --text-xs: 0.64rem;
  --text-sm: 0.8rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.563rem;
  --text-2xl: 1.953rem;
  --text-3xl: 2.441rem;
  --text-4xl: 3.052rem;
  --text-5xl: 3.815rem;
  --text-hero: clamp(3rem, 8vw, 7rem);

  /* Spacing (8-point grid) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-pill: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 6px -2px rgba(0,0,0,0.05), 0 12px 24px -4px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 32px -8px rgba(0,0,0,0.12);
  --shadow-brand: 0 8px 24px -6px color-mix(in srgb, var(--color-brand) 30%, transparent);

  /* Layout */
  --container: min(90rem, 100% - 3rem);
  --section-gap: clamp(4rem, 10vw, 10rem);
}
```

- [ ] **Step 2: Verify file created**

```bash
Test-Path "src/styles/tokens.css"
```

---

### Task 2: Create CSS reset and base styles

**Files:**
- Create: `src/styles/reset.css`
- Create: `src/styles/base.css`

- [ ] **Step 1: Create reset.css**

```css
@layer reset {
  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; }
  html { -webkit-text-size-adjust: 100%; color-scheme: light; }
  body { line-height: 1.6; -webkit-font-smoothing: antialiased; font-family: var(--font-body); }
  img, video, svg { display: block; max-width: 100%; }
  input, button, textarea, select { font: inherit; }
  p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }
  h1, h2, h3 { line-height: 1.1; }
  a { color: inherit; text-decoration: none; }
  ul { list-style: none; padding: 0; }
}
```

- [ ] **Step 2: Create base.css**

```css
@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    color: var(--ink-700);
    background: var(--surface-primary);
    font-size: var(--text-base);
  }

  ::selection {
    background: var(--color-brand-light);
    color: var(--color-brand-dark);
  }

  .skip-link {
    position: absolute;
    top: -100%;
    left: var(--space-4);
    padding: var(--space-2) var(--space-4);
    background: var(--color-brand);
    color: #fff;
    z-index: 999;
    font-size: var(--text-sm);
    border-radius: var(--radius-sm);
  }
  .skip-link:focus { top: var(--space-4); }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
  }
}
```

---

### Task 3: Create layout CSS

**Files:**
- Create: `src/styles/layout.css`

- [ ] **Step 1: Create layout.css**

```css
@layer layout {
  .container {
    width: var(--container);
    margin-inline: auto;
  }

  .section {
    padding-block: var(--section-gap);
  }

  .section--compact {
    padding-block: calc(var(--section-gap) * 0.6);
  }

  .full-bleed {
    width: 100vw;
    margin-inline: calc(50% - 50vw);
  }

  .grid-auto {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
    gap: var(--space-8);
  }

  .split-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: center;
  }

  @media (max-width: 768px) {
    .split-layout { grid-template-columns: 1fr; gap: var(--space-8); }
  }

  .bento {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--space-4);
  }

  .bento__main { grid-column: span 8; grid-row: span 2; }
  .bento__side { grid-column: span 4; }
  .bento__wide { grid-column: span 12; }

  @media (max-width: 640px) {
    .bento > * { grid-column: span 12; }
  }
}
```

---

### Task 4: Create component CSS (buttons, nav, cards)

**Files:**
- Create: `src/styles/components/button.css`
- Create: `src/styles/components/nav.css`
- Create: `src/styles/components/card.css`

- [ ] **Step 1: Create button.css**

```css
@layer components {
  .btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    padding: 0.75em 1.5em;
    background: var(--color-brand);
    color: #fff;
    border: 2px solid transparent;
    border-radius: var(--radius-sm);
    font-size: var(--text-sm);
    font-weight: 600;
    letter-spacing: 0.025em;
    cursor: pointer;
    text-decoration: none;
    transition: background 200ms ease, transform 150ms ease, box-shadow 200ms ease;
  }

  .btn:hover {
    background: var(--color-brand-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-brand);
  }

  .btn:active { transform: translateY(0); box-shadow: none; }
  .btn:focus-visible { outline: 3px solid var(--color-brand); outline-offset: 3px; }

  .btn--accent {
    background: var(--color-accent);
  }
  .btn--accent:hover {
    background: var(--color-accent-mid);
  }

  .btn--ghost {
    background: transparent;
    color: var(--color-brand);
    border-color: currentColor;
  }
  .btn--ghost:hover {
    background: var(--color-brand-light);
    box-shadow: none;
  }

  .btn--light {
    background: #fff;
    color: var(--color-accent);
  }
  .btn--light:hover {
    background: var(--color-accent-light);
    box-shadow: none;
  }

  .btn--outline {
    background: transparent;
    color: #fff;
    border-color: rgba(255,255,255,0.5);
  }
  .btn--outline:hover {
    background: rgba(255,255,255,0.1);
    border-color: #fff;
  }
}
```

- [ ] **Step 2: Create nav.css**

```css
@layer components {
  .site-header {
    position: fixed;
    top: 0;
    inset-inline: 0;
    z-index: 100;
    background: color-mix(in srgb, var(--surface-elevated) 85%, transparent);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--ink-100);
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: var(--container);
    margin-inline: auto;
    padding-block: var(--space-3);
    height: 60px;
  }

  .nav__logo {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--color-brand);
    letter-spacing: -0.02em;
  }

  .nav__logo span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: var(--color-accent);
    border-radius: 50%;
    color: #fff;
    font-size: var(--text-xs);
    font-family: var(--font-body);
    margin-right: var(--space-2);
  }

  .nav__menu {
    display: flex;
    align-items: center;
    gap: var(--space-8);
  }

  .nav__menu a {
    font-size: var(--text-sm);
    color: var(--ink-500);
    transition: color 150ms ease;
  }
  .nav__menu a:hover { color: var(--color-brand); }

  .nav__toggle { display: none; }

  @media (max-width: 768px) {
    .nav__toggle {
      display: flex;
      background: none;
      border: none;
      cursor: pointer;
      padding: var(--space-2);
    }
    .nav__toggle__bar {
      display: block;
      width: 24px;
      height: 2px;
      background: var(--ink-900);
      position: relative;
      transition: background 0s 0.3s;
    }
    .nav__toggle__bar::before,
    .nav__toggle__bar::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--ink-900);
      transition: transform 0.3s ease;
    }
    .nav__toggle__bar::before { top: -8px; }
    .nav__toggle__bar::after { top: 8px; }
    .nav__toggle.open .nav__toggle__bar { background: transparent; }
    .nav__toggle.open .nav__toggle__bar::before { transform: translateY(8px) rotate(45deg); }
    .nav__toggle.open .nav__toggle__bar::after { transform: translateY(-8px) rotate(-45deg); }

    .nav__menu {
      position: fixed;
      inset: 0;
      background: var(--surface-elevated);
      flex-direction: column;
      justify-content: center;
      font-size: var(--text-2xl);
      translate: 100% 0;
      transition: translate 300ms ease;
    }
    .nav__menu.open { translate: 0; }
  }
}
```

- [ ] **Step 3: Create card.css**

```css
@layer components {
  .card {
    background: var(--surface-elevated);
    border: 1px solid var(--ink-100);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: border-color 200ms ease, box-shadow 200ms ease;
  }

  .card:hover {
    border-color: var(--color-brand);
    box-shadow: 0 8px 24px -8px color-mix(in srgb, var(--color-brand) 15%, transparent);
  }

  .card__body { padding: var(--space-6); }
  .card__tag {
    font-size: var(--text-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-brand);
    margin-bottom: var(--space-2);
  }
  .card__title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    line-height: 1.2;
    margin-bottom: var(--space-3);
  }
  .card__text {
    font-size: var(--text-sm);
    color: var(--ink-500);
    line-height: 1.7;
  }

  .card--pillar {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
    padding: var(--space-8);
    background: var(--surface-elevated);
    border: 1px solid var(--ink-100);
    border-radius: var(--radius-md);
  }

  .card--pillar:first-child { border-top: none; }
}
```

---

### Task 5: Create section CSS files

**Files:**
- Create: `src/styles/sections/hero.css`
- Create: `src/styles/sections/stats.css`
- Create: `src/styles/sections/features.css`
- Create: `src/styles/sections/toc.css`
- Create: `src/styles/sections/kpi.css`
- Create: `src/styles/sections/budget.css`
- Create: `src/styles/sections/cta.css`

- [ ] **Step 1: Create hero.css**

```css
@layer sections {
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    background: var(--color-brand);
    color: #fff;
    overflow: hidden;
  }

  .hero__content {
    padding: var(--space-16) var(--space-8) var(--space-16) clamp(2rem, 8vw, 8rem);
  }

  .hero__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-xs);
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--space-8);
  }

  .hero__eyebrow::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-accent);
  }

  .hero h1 {
    font-family: var(--font-display);
    font-size: var(--text-hero);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.04em;
    margin-bottom: var(--space-6);
    max-width: 14ch;
  }

  .hero h1 em {
    font-style: italic;
    color: var(--color-accent);
  }

  .hero p {
    font-size: var(--text-lg);
    color: rgba(255,255,255,0.75);
    line-height: 1.6;
    max-width: 48ch;
    margin-bottom: var(--space-10);
  }

  .hero__visual {
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: color-mix(in srgb, var(--color-brand-dark) 70%, #000);
  }

  .hero__pattern {
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background-image:
      radial-gradient(circle at 25% 25%, var(--color-accent) 0.5px, transparent 0.5px),
      radial-gradient(circle at 75% 75%, #fff 0.5px, transparent 0.5px);
    background-size: 40px 40px;
  }

  .hero__pattern::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 70% 40%, color-mix(in srgb, var(--color-accent) 8%, transparent) 0%, transparent 60%);
  }

  @media (max-width: 768px) {
    .hero { grid-template-columns: 1fr; min-height: auto; }
    .hero__content { padding: var(--space-24) var(--space-6) var(--space-12); }
    .hero__visual { height: 40vh; }
  }
}
```

- [ ] **Step 2: Create stats.css**

```css
@layer sections {
  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid var(--ink-100);
    border-bottom: 1px solid var(--ink-100);
  }

  .stat {
    padding: var(--space-12) var(--space-8);
    text-align: center;
    border-right: 1px solid var(--ink-100);
  }

  .stat:last-child { border-right: none; }

  .stat__number {
    font-family: var(--font-display);
    font-size: var(--text-4xl);
    font-weight: 700;
    color: var(--color-brand);
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .stat__label {
    font-size: var(--text-sm);
    color: var(--ink-500);
    margin-top: var(--space-2);
    max-width: 18ch;
    margin-inline: auto;
    line-height: 1.4;
  }

  @media (max-width: 640px) {
    .stats { grid-template-columns: repeat(2, 1fr); }
    .stat:nth-child(2) { border-right: none; }
  }
}
```

- [ ] **Step 3: Create features.css**

```css
@layer sections {
  .features-head {
    margin-bottom: var(--space-16);
  }

  .features-head__tag {
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-accent);
    margin-bottom: var(--space-4);
  }

  .features-head h2 {
    font-family: var(--font-display);
    font-size: var(--text-4xl);
    font-weight: 700;
    color: var(--ink-900);
    line-height: 1.05;
    letter-spacing: -0.03em;
    max-width: 16ch;
  }

  .features-head p {
    font-size: var(--text-base);
    color: var(--ink-500);
    max-width: 40ch;
    margin-top: var(--space-4);
    line-height: 1.7;
  }

  .feature-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-12);
    padding-block: var(--space-12);
    border-bottom: 1px solid var(--ink-100);
    align-items: center;
  }

  .feature-row:first-child { border-top: 1px solid var(--ink-100); }

  .feature-row:nth-child(even) .feature-row__visual { order: -1; }

  .feature-row__content h3 {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    color: var(--ink-900);
    margin-bottom: var(--space-4);
    line-height: 1.2;
  }

  .feature-row__content p {
    font-size: var(--text-sm);
    color: var(--ink-500);
    line-height: 1.8;
  }

  .feature-row__visual {
    aspect-ratio: 4/3;
    background: var(--color-brand-light);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .feature-row__visual::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 50%, color-mix(in srgb, var(--color-brand) 10%, transparent) 0%, transparent 70%);
  }

  .feature-row__visual svg {
    width: 60%;
    height: 60%;
    opacity: 0.2;
    color: var(--color-brand);
  }

  @media (max-width: 768px) {
    .feature-row { grid-template-columns: 1fr; gap: var(--space-6); }
    .feature-row:nth-child(even) .feature-row__visual { order: 0; }
  }

  .situation-list {
    counter-reset: situation;
  }

  .situation-item {
    counter-increment: situation;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-6);
    padding-block: var(--space-8);
    border-bottom: 1px solid var(--ink-100);
    align-items: start;
  }

  .situation-item:first-child { border-top: 1px solid var(--ink-100); }

  .situation-item__num {
    font-family: var(--font-display);
    font-size: var(--text-5xl);
    font-weight: 800;
    color: var(--color-accent);
    line-height: 0.8;
    letter-spacing: -0.04em;
    width: 2ch;
  }

  .situation-item h4 {
    font-size: var(--text-xl);
    color: var(--ink-900);
    font-weight: 600;
    margin-bottom: var(--space-2);
  }

  .situation-item p {
    font-size: var(--text-sm);
    color: var(--ink-500);
    line-height: 1.7;
    max-width: 55ch;
  }
}
```

- [ ] **Step 4: Create toc.css**

```css
@layer sections {
  .toc {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--space-8);
    align-items: center;
  }

  .toc__problems {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .toc__item {
    background: var(--surface-elevated);
    border: 1px solid var(--ink-100);
    border-radius: var(--radius-sm);
    padding: var(--space-4);
    font-size: var(--text-sm);
    color: var(--ink-500);
    line-height: 1.5;
  }

  .toc__item strong {
    display: block;
    color: var(--ink-900);
    font-weight: 600;
    margin-bottom: var(--space-1);
  }

  .toc__center {
    background: var(--color-brand);
    border-radius: var(--radius-md);
    padding: var(--space-8) var(--space-6);
    text-align: center;
    color: #fff;
    min-width: 140px;
  }

  .toc__center-title {
    font-family: var(--font-display);
    font-size: var(--text-lg);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: var(--space-3);
  }

  .toc__center-sub {
    font-size: var(--text-xs);
    opacity: 0.75;
    line-height: 1.5;
  }

  .toc__arrow {
    font-size: var(--text-3xl);
    text-align: center;
    color: var(--color-accent);
  }

  .impact-chain {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-2);
    margin-top: var(--space-8);
    justify-content: center;
  }

  .impact-chain__item {
    padding: var(--space-2) var(--space-4);
    background: var(--color-brand-light);
    color: var(--color-brand);
    border-radius: var(--radius-sm);
    font-size: var(--text-sm);
    font-weight: 500;
  }

  .impact-chain__item--final {
    background: var(--color-brand);
    color: #fff;
  }

  .impact-chain__arrow {
    color: var(--color-accent);
    font-size: var(--text-lg);
  }

  @media (max-width: 768px) {
    .toc { grid-template-columns: 1fr; }
    .toc__center { min-width: auto; }
  }
}
```

- [ ] **Step 5: Create kpi.css**

```css
@layer sections {
  .kpi-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-6);
  }

  .kpi {
    text-align: center;
    padding: var(--space-8) var(--space-6);
    background: var(--surface-elevated);
    border: 1px solid var(--ink-100);
    border-radius: var(--radius-md);
  }

  .kpi__number {
    font-family: var(--font-display);
    font-size: var(--text-4xl);
    font-weight: 700;
    color: var(--color-accent);
    line-height: 1;
    letter-spacing: -0.03em;
    margin-bottom: var(--space-3);
  }

  .kpi__label {
    font-size: var(--text-sm);
    color: var(--ink-500);
    line-height: 1.5;
    max-width: 28ch;
    margin-inline: auto;
  }

  .kpi__target {
    display: inline-block;
    margin-top: var(--space-4);
    padding: var(--space-1) var(--space-3);
    background: var(--color-accent-light);
    color: var(--color-accent);
    font-size: var(--text-xs);
    font-weight: 600;
    border-radius: var(--radius-pill);
  }

  @media (max-width: 768px) {
    .kpi-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 480px) {
    .kpi-grid { grid-template-columns: 1fr; }
  }
}
```

- [ ] **Step 6: Create budget.css**

```css
@layer sections {
  .budget-total {
    background: var(--color-brand);
    border-radius: var(--radius-md);
    padding: var(--space-12);
    text-align: center;
    color: #fff;
    margin-bottom: var(--space-8);
  }

  .budget-total__label {
    font-size: var(--text-sm);
    opacity: 0.75;
    margin-bottom: var(--space-3);
  }

  .budget-total__num {
    font-family: var(--font-display);
    font-size: var(--text-5xl);
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .budget-total__sub {
    font-size: var(--text-sm);
    opacity: 0.7;
    margin-top: var(--space-2);
  }

  .budget-lines {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .budget-line {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: var(--space-4);
    align-items: center;
    padding: var(--space-4) var(--space-6);
    background: var(--surface-elevated);
    border: 1px solid var(--ink-100);
    border-radius: var(--radius-sm);
  }

  .budget-line__name {
    font-size: var(--text-sm);
    color: var(--ink-500);
  }

  .budget-line__bar {
    height: 4px;
    background: var(--ink-100);
    border-radius: 2px;
    margin-top: var(--space-1);
    overflow: hidden;
  }

  .budget-line__bar-fill {
    height: 100%;
    background: var(--color-accent);
    border-radius: 2px;
  }

  .budget-line__pct {
    font-size: var(--text-xs);
    color: var(--ink-300);
    font-weight: 600;
  }

  .budget-line__amt {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--ink-900);
  }
}
```

- [ ] **Step 7: Create cta.css**

```css
@layer sections {
  .cta-section {
    background: var(--color-accent);
    padding: var(--space-20) var(--space-8);
    text-align: center;
  }

  .cta-section h2 {
    font-family: var(--font-display);
    font-size: var(--text-4xl);
    font-weight: 700;
    color: #fff;
    margin-bottom: var(--space-4);
    line-height: 1.1;
  }

  .cta-section p {
    font-size: var(--text-base);
    color: rgba(255,255,255,0.85);
    max-width: 55ch;
    margin-inline: auto;
    line-height: 1.7;
    margin-bottom: var(--space-8);
  }

  .cta-section .cta-actions {
    display: flex;
    gap: var(--space-4);
    justify-content: center;
    flex-wrap: wrap;
  }

  .site-footer {
    background: var(--color-brand);
    padding: var(--space-12) var(--space-8);
    color: rgba(255,255,255,0.7);
    font-size: var(--text-sm);
  }

  .footer__inner {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--space-12);
    width: var(--container);
    margin-inline: auto;
  }

  .footer__brand {
    font-weight: 600;
    color: #fff;
    margin-bottom: var(--space-3);
  }

  .footer p { line-height: 1.6; }
  .footer a { color: rgba(255,255,255,0.65); transition: color 150ms ease; }
  .footer a:hover { color: var(--color-accent); }

  .footer__contact {
    color: var(--color-accent) !important;
  }

  .footer__links {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  @media (max-width: 640px) {
    .footer__inner { grid-template-columns: 1fr; gap: var(--space-8); }
  }
}
```

---

### Task 6: Create main.css entry point

**Files:**
- Create: `src/styles/main.css`

- [ ] **Step 1: Create main.css**

```css
@import './tokens.css';
@import './reset.css';
@import './base.css';
@import './layout.css';
@import './components/button.css';
@import './components/nav.css';
@import './components/card.css';
@import './sections/hero.css';
@import './sections/stats.css';
@import './sections/features.css';
@import './sections/toc.css';
@import './sections/kpi.css';
@import './sections/budget.css';
@import './sections/cta.css';
```

- [ ] **Step 2: Update index.html to load main.css**

```diff
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
+ <link rel="stylesheet" href="./src/styles/main.css">
```

---

### Task 7: Rewrite Navbar component

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] **Step 1: Rewrite Navbar.tsx with new design system classes**

```tsx
import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { BRAND } from '../brand';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <ReactRouterDOM.Link to="/" className="nav__logo" aria-label="OBOMOCARE home">
          <span>OC</span>
          OBOMOCARE
        </ReactRouterDOM.Link>

        <button
          className={`nav__toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          <span className="nav__toggle__bar"></span>
        </button>

        <ul className={`nav__menu ${menuOpen ? 'open' : ''}`} id="nav-menu" role="list">
          <li><ReactRouterDOM.Link to="/" onClick={() => setMenuOpen(false)}>Home</ReactRouterDOM.Link></li>
          <li><ReactRouterDOM.Link to="/about" onClick={() => setMenuOpen(false)}>About</ReactRouterDOM.Link></li>
          <li><ReactRouterDOM.Link to="/programs" onClick={() => setMenuOpen(false)}>Our work</ReactRouterDOM.Link></li>
          <li><ReactRouterDOM.Link to="/get-involved" onClick={() => setMenuOpen(false)}>Get involved</ReactRouterDOM.Link></li>
          <li>
            <ReactRouterDOM.Link
              to="/contact"
              className="btn btn--accent"
              onClick={() => setMenuOpen(false)}
            >
              Support us
            </ReactRouterDOM.Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
```

---

### Task 8: Rewrite Footer component

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Read current Footer.tsx**
- [ ] **Step 2: Rewrite with new CSS classes**

```tsx
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">OBOMOCARE Community Based Organisation</div>
          <p>Gusii Region, Kenya · Kisii and Nyamira Counties<br />Established 2020 · Registered CBO, Kenya</p>
          <p style={{ marginTop: '0.5rem' }}>
            Contact: <a className="footer__contact" href="mailto:obomocare@gmail.com">obomocare@gmail.com</a>
          </p>
        </div>
        <div>
          <div className="footer__brand" style={{ marginBottom: '0.5rem' }}>Quick links</div>
          <div className="footer__links">
            <ReactRouterDOM.Link to="/about">About us</ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="/programs">Our programmes</ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="/get-involved">Get involved</ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="/contact">Contact</ReactRouterDOM.Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
```

---

### Task 9: Rewrite Home.tsx layout

**Files:**
- Modify: `pages/Home.tsx`

**Notes:** Complete JSX rewrite to use semantic section elements and CSS classes from the new design system. All inline `style={{}}` for visual properties removed. Stock Unsplash URLs removed. Content still comes from `useContent()`.

- [ ] **Step 1: Rewrite Home.tsx hero section**

Replace full-screen overlay hero with editorial split layout:

```tsx
<section className="hero">
  <div className="hero__content">
    <div className="hero__eyebrow">Gusii Region, Kenya · Est. 2020</div>
    <h1>Delivering care.<br /><em>Restoring dignity.</em></h1>
    <p>OBOMOCARE is a registered Community Based Organisation serving vulnerable households in Kisii and Nyamira Counties — bringing food, transport, personal care, and companionship to those left behind by formal systems.</p>
    <ReactRouterDOM.Link to="/get-involved" className="btn btn--accent">
      Support our work
    </ReactRouterDOM.Link>
  </div>
  <div className="hero__visual">
    <div className="hero__pattern"></div>
  </div>
</section>
```

- [ ] **Step 2: Rewrite stats section**

```tsx
<section className="section full-bleed">
  <div className="stats">
    {stats.map((stat) => (
      <div key={stat.id} className="stat">
        <div className="stat__number">{Number(stat.value).toLocaleString()}{stat.suffix}</div>
        <div className="stat__label">{stat.label}</div>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 3: Rewrite about section (asymmetric editorial)**

Asymmetric 2/3 + 1/3 layout with pull-quote as design element.

- [ ] **Step 4: Rewrite pillars as staggered feature rows**

Each pillar becomes a `feature-row` with alternating text/visual. No icons.

- [ ] **Step 5: Rewrite situation analysis as numbered editorial list**

Using `.situation-list` and `.situation-item` classes.

- [ ] **Step 6: Rewrite theory of change**

Using `.toc` grid layout.

- [ ] **Step 7: Rewrite KPIs as bento grid**

Using `.bento` layout with `.kpi` cards.

- [ ] **Step 8: Rewrite budget section**

Using `.budget-total` and `.budget-lines`.

- [ ] **Step 9: Rewrite CTA section**

Using `.cta-section` with `.btn--light` and `.btn--outline`.

- [ ] **Step 10: Remove all inline style={{}} for visual properties**

Verify no remaining `style={{ background`, `style={{ color`, or `style={{ border` for visual properties. Only allowed: layout overrides.

- [ ] **Step 11: Remove all stock Unsplash URLs**

Replace with empty `alt=""` and decorative CSS patterns.

---

### Task 10: Update Layout.tsx

**Files:**
- Modify: `components/Layout.tsx`

- [ ] **Step 1: Read current Layout.tsx**

- [ ] **Step 2: Ensure it uses Navbar and Footer components, and main content area is wrapped in `<main id="main">`**

```tsx
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main id="main">
        {children}
      </main>
      <Footer />
    </>
  );
};
```

---

### Task 11: Update About.tsx

**Files:**
- Modify: `pages/About.tsx`

- [ ] **Step 1: Rewrite About.tsx to use new design system classes**

Replace all Tailwind utility classes for visual design with CSS class names. Remove inline style objects for colors. Use semantic HTML.

---

### Task 12: Verify build

- [ ] **Step 1: Run build**

```bash
npm run build
```

Expected: Build succeeds, no errors.

- [ ] **Step 2: Verify no inline style objects remain for visual properties**

```bash
rg "style=\{\{" src/pages/ src/components/
```

Expected: Only non-visual inline styles (layout overrides) may remain.

---

### Task 13: Commit

- [ ] **Step 1: Stage and commit**

```bash
git add src/styles/ src/pages/ src/components/ index.html
git commit -m "feat: anti-vibe editorial rebuild

- Replace Tailwind visual design with custom CSS design system
- Tokens for colors, typography, spacing, radius, shadows
- Editorial layouts: magazine split, staggered rows, bento grid
- No stock images, CSS geometric patterns instead
- Remove all inline style={{}} for visual properties
- Anti-ai-writer copy principles applied to fallback content
- GSAP hero entrance, scroll-triggered reveals
- Respect prefers-reduced-motion"
```
