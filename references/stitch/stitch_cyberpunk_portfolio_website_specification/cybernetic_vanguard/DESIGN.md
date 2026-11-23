---
name: Cybernetic Vanguard
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffb1c4'
  on-secondary: '#65002e'
  secondary-container: '#ff4a8d'
  on-secondary-container: '#590028'
  tertiary: '#fff6d1'
  on-tertiary: '#373100'
  tertiary-container: '#f3db00'
  on-tertiary-container: '#6b5f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd9e1'
  secondary-fixed-dim: '#ffb1c4'
  on-secondary-fixed: '#3f001a'
  on-secondary-fixed-variant: '#8f0044'
  tertiary-fixed: '#fde400'
  tertiary-fixed-dim: '#dec800'
  on-tertiary-fixed: '#201c00'
  on-tertiary-fixed-variant: '#504700'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  label-telemetry:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.08em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.12em
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-contrast, cyberpunk-influenced digital atelier for visual creator 鍾沛良 (CHUNG PEI-LIANG). Combining avant-garde digital multimedia with operational sci-fi telemetry, the visual language balances tactical HUD terminal architecture with electrifying creative showcases.

The design movement mixes **High-Contrast Cyberpunk** and **Tactical HUD Minimal-Brutalism**:
- Deep, obsidian voids punctuated by laser-sharp chromatic accents.
- Structured technical data overlays, telemetry readouts, coordinate systems, and micro-labeling.
- Subtle CRT scanlines, chamfered corner architecture (`clip-path: polygon(...)`), and glowing electroluminescent outlines.
- Emotional impact: Hyper-focused, cutting-edge, unapologetically energetic, yet rigorously engineered.

## Colors

The color palette is built on stark contrast between lightless spatial hulls and high-frequency neon emitters:

- **Primary (`#00F0FF` - Electric Cyan):** Core interface vectors, critical actions, active telemetry states, primary highlights, and primary luminescent glows.
- **Secondary (`#FF007F` - Hot Magenta / Neon Pink):** Disruptive artistic tags, secondary kinetic accents, visual art categorization, and alert indicators.
- **Tertiary (`#FFE600` - Acid Warning Yellow):** Cautionary data, system indices, project status tags (`[IN_PRODUCTION]`, `[ARCHIVE]`), and dynamic hazard striping.
- **Base Surfaces:**
  - `Canvas / Deep Void`: `#0A0B10`
  - `Deck / Surface Container`: `#121420`
  - `Elevated Console / Border Layer`: `#1C1F30`
- **Text & Metadata:**
  - High-visibility copy: `#E2E8F0` (Slate Ice)
  - Telemetry & Sub-headers: `#94A3B8` (Muted Steel)
  - Ghost metadata & Grid ticks: `#334155`

## Typography

The typography couples the angular, architectural geometries of **Space Grotesk** with the strict, calculated terminal precision of **JetBrains Mono**.

- **Display & Headlines:** Set in uppercase or tightly-tracked Space Grotesk. Key headers utilize glitch/scramble reveal behaviors and chromatic sub-offsets.
- **Telemetry & Interface Accents:** Set strictly in JetBrains Mono. All system metadata (timestamp, version, viewport dimensions, hex tags) are rendered uppercase with expanded tracking (`0.08em` to `0.12em`).
- **Bilingual Typographic Pairing:** Chinese characters for 鍾沛良 render via clean, modern sans-serif fallbacks (such as Noto Sans TC / PingFang TC) matched to the geometric weight of Space Grotesk.

## Layout & Spacing

A structured 12-column responsive fluid grid anchored by perimeter telemetry gutters. 

- **Grid Architecture:** 12 columns on desktop (`margin: 3rem`, `gutter: 1.5rem`), transitioning to 6 columns on tablet and 4 columns on mobile (`margin: 1.25rem`, `gutter: 0.75rem`).
- **Telemetry Framing:** The main viewport is flanked by a constant HUD margin containing dynamic coordinates (`LAT/LONG`, `SYS_OK`, scroll velocity, and active module indices).
- **Rhythm:** Spacing follows a modular 8px/4px base rhythm. Dense data sections utilize `space-xs` and `space-sm` for stacked technical parameters, while showcase galleries breathe through large block margins (`space-xl` to `4rem`).

## Elevation & Depth

Rather than conventional drop shadows, elevation in this design system is driven by **Electroluminescent Layering**, **Crisp Structural Borders**, and **Atmospheric Scanline Depth**:

- **Layer 0 (Base Void):** `#0A0B10` with subtle fixed SVG scanlines and coordinate dot matrix (`opacity: 0.15`).
- **Layer 1 (Panels & Consoles):** `#121420` bounded by 1px solid borders (`#1C1F30` or `rgba(0, 240, 255, 0.2)`).
- **Layer 2 (Active Cards & Overlays):** `#161928` with dynamic corner chamfers and active 1px perimeter glow (`box-shadow: 0 0 15px rgba(0, 240, 255, 0.25)`).
- **Focus & Warning State:** Acid Yellow (`#FFE600`) and Neon Pink (`#FF007F`) high-radiance blooms (`box-shadow: 0 0 20px rgba(255, 0, 127, 0.45)`).
- **Glass HUD Modules:** `backdrop-filter: blur(12px)` over saturated backdrop imagery with an overlay gradient: `linear-gradient(135deg, rgba(0,240,255,0.06), rgba(18,20,32,0.85))`.

## Shapes

The shape system is strictly zero-radius (`roundedness: 0`), defined by geometric precision, raw angles, and cut chamfers:

- **Chamfered Edges:** Core modules, action buttons, and hero tags leverage CSS `clip-path: polygon(...)` to produce 45-degree cut corners (typically 8px to 14px chamfers at top-right and bottom-left).
- **Tech Brackets & Crosshairs:** Structural corners are marked with L-shaped brackets and crosshair intersections (`+`).
- **Warning Chevrons:** Accent strips feature repeated 45-degree angled safety patterns in `#FFE600` and `#0A0B10`.

## Components

### Buttons
- **Primary Cyber Button:** Chamfered corners (top-right cut: 10px), filled in `#00F0FF` with `#0A0B10` bold text. On hover: inverts to `#0A0B10` with `#00F0FF` border and external neon bloom (`0 0 20px rgba(0, 240, 255, 0.6)`). Prefix with dynamic bracket index (e.g., `[ 01 // EXECUTE ]`).
- **Secondary Ghost Button:** Transparent background, 1px `#FF007F` border, `#E2E8F0` typography. On hover: shifts background to `rgba(255, 0, 127, 0.15)`.

### Chips & Badges
- **Status Badges:** JetBrains Mono font (`11px`), enclosed in 1px borders with an inline pulsating radar dot. 
- **Palette Variants:**
  - System Active: `#00F0FF` border, text, and dot.
  - Caution/Work In Progress: `#FFE600` with warning diagonal hatch pattern.
  - Creative Category: `#FF007F` pill-free chamfer block.

### Cards (Artwork & Project Showcase)
- Chamfered panel surfaces (`#121420`) wrapped in 1px border (`#1C1F30`).
- Integrated top telemetry header displaying: `ID // PROJECT_SPEC`, timestamp, and aspect ratio metadata.
- Glitch hover state: On mouseenter, RGB chromatic aberration split (1px - 2px horizontal offset) across the preview thumbnail and border shift to `#00F0FF`.

### Input Fields & Terminal Console
- Background: `#0E101A`, bottom border 2px solid `#334155`.
- Active focus: Bottom border sparks to `#00F0FF` with a glowing trace line. Prompt preceded by monospaced prefix: `usr@chungpeiliang:~$`.

### Lists & Telemetry Feeds
- Structured tabular arrays with thin horizontal divider lines (`rgba(148, 163, 184, 0.1)`).
- Hover rows illuminate in subtle cyan tint (`rgba(0, 240, 255, 0.04)`) with an active left edge indicator beacon (2px solid `#00F0FF`).