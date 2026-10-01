---
name: FATH Design System
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3d4946'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6d7a76'
  outline-variant: '#bcc9c4'
  surface-tint: '#006b5b'
  primary: '#006859'
  on-primary: '#ffffff'
  primary-container: '#008471'
  on-primary-container: '#f4fffa'
  inverse-primary: '#69d9c2'
  secondary: '#4e5f7d'
  on-secondary: '#ffffff'
  secondary-container: '#cadafe'
  on-secondary-container: '#4f5f7d'
  tertiary: '#006763'
  on-tertiary: '#ffffff'
  tertiary-container: '#00827e'
  on-tertiary-container: '#f3fffd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#86f6de'
  primary-fixed-dim: '#69d9c2'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#005144'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b6c7e9'
  on-secondary-fixed: '#091b36'
  on-secondary-fixed-variant: '#374764'
  tertiary-fixed: '#84f5ee'
  tertiary-fixed-dim: '#66d8d2'
  on-tertiary-fixed: '#00201e'
  on-tertiary-fixed-variant: '#00504d'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  teal-deep: '#0F766E'
  teal-surface: '#F0FDF9'
  teal-subtle: '#CCFBF1'
  navy-deep: '#0E1726'
  navy-surface: '#F8FAFC'
  canvas-base: '#FFFFFF'
  border-subtle: '#E2E8F0'
  accent-success: '#10B981'
  accent-warning: '#F59E0B'
  accent-error: '#EF4444'
typography:
  display-hero:
    fontFamily: IBM Plex Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 58px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: IBM Plex Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-xl-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-sm:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system is engineered for a contemporary, intelligent educational and technology platform. The visual spirit combines institutional authority with fresh, accessible digital elegance. Its mission is to empower learners and professionals through structured knowledge, clarity, and friction-free interactivity.

### Aesthetic Direction: Modern Corporate & Tactile Precision
The interface adopts a high-end corporate modern aesthetic elevated by gentle tactile feedback and micro-interactions:
- **Tone:** Authoritative, inspiring, technologically capable, and welcoming.
- **Visual Values:** Crisp structural alignments, generous breathing space, deliberate contrast, and purposeful use of signature brand hues.
- **RTL-First Craftsmanship:** Built natively to balance right-to-left Arabic visual cadence with bilingual English parity, maintaining visual optical harmony across scripts.

## Colors

The palette draws its anchor from the emblem: an authoritative deep midnight navy juxtaposed with an uplifting emerald teal. 

- **Primary (`#159A85`):** The catalytic emerald teal. Used for key call-to-actions, active indicators, achievement badges, and interactive feedback.
- **Secondary (`#192A45`):** Deep oceanic navy. Establishes institutional gravitas, framing headers, navigation bars, and solid structural foundations.
- **Tertiary (`#38B2AC`):** Bright mint teal. Applied sparingly for subtle glows, highlight rings, and supporting data-visualization segments.
- **Neutral (`#0F172A` / `#F8FAFC`):** Slate-tinted dark tone for ultra-crisp typography paired with crystalline slate-white surfaces for soft contrast.

### Surface Role Guidelines
- Canvas backgrounds utilize pure white (`#FFFFFF`) with section partitions rendered in soft slate tint (`#F8FAFC`).
- Interactive hover states layer `teal-surface` (`#F0FDF9`) beneath teal-dominant interactive elements.
- Text uses `#0F172A` for primary headlines, `#475569` for body copy, and `#94A3B8` for low-prominence metadata.

## Typography

The design system specifies **IBM Plex Sans** (with its native bilingual sibling **IBM Plex Sans Arabic** for RTL layouts) to establish technical exactness and human warmth. 

- **Headlines:** Set with confident medium-to-bold weights, delivering strong visual anchors for lesson modules, metrics, and navigation titles.
- **Body & Instructional:** Generously line-spaced (`1.5` to `1.6`) to maintain effortless legibility during long-form educational consumption and test-taking.
- **RTL Considerations:** Font scales are optically balanced so Arabic character sets align visually with Latin alphabets without jittering button heights or form inputs.

## Layout & Spacing

The structural framework is built upon an 8-point geometric scale, utilizing a 12-column responsive fluid grid on desktop viewports and a single-to-two column fluid grid on mobile devices.

### Breakpoints & Container Boundaries
- **Mobile (`< 640px`):** 4 columns, 16px (`1rem`) outer margins and gutters. Single-column stacked flows.
- **Tablet (`640px - 1024px`):** 8 columns, 24px (`1.5rem`) outer margins and gutters. Sidebars collapse into contextual drawers.
- **Desktop (`> 1024px`):** 12 columns, 32px (`2rem`) margins, max canvas width 1280px. Dual split-panes for dashboards, learning courses, and assessment tables.

### Vertical Rhythm
Section blocks adhere to `space-xl` gaps, while nested interface modules inside cards maintain tight, consolidated spacing via `space-sm` and `space-md` tokens.

## Elevation & Depth

Visual hierarchy uses a refined hybrid of **tonal layering** and **low-opacity ambient tinted shadows**. Harsh drop-shadows are avoided in favor of calm surfaces that reflect light naturally.

### Elevation Levels
- **Level 0 (Flat / Canvas):** Surface color `#FFFFFF` or `#F8FAFC`. Zero elevation, delimited by hairline borders (`1px solid #E2E8F0`).
- **Level 1 (Resting Cards & Modules):** `0px 2px 8px -2px rgba(25, 42, 69, 0.05), 0px 1px 3px 0px rgba(25, 42, 69, 0.03)`. Gives cards floating detachment over tinted backgrounds.
- **Level 2 (Hovered Cards & Dropdowns):** `0px 12px 24px -6px rgba(25, 42, 69, 0.08), 0px 4px 8px -2px rgba(21, 154, 133, 0.04)`. Adds slight emerald warmth beneath lifted interactive objects.
- **Level 3 (Modals, Overlays & Sticky Navbars):** `0px 20px 32px -8px rgba(14, 23, 38, 0.14)`. Creates definitive focal isolation for popups and critical confirmations.

## Shapes

The design system employs a **Rounded** (Level 2) shape philosophy, reflecting the curved crest-and-shield geometry evident in the brand emblem.

- **Inputs, Buttons, and Chips:** Standardized at `0.5rem` (`8px`) border-radius, creating friendly yet crisp interactive touchpoints.
- **Content Cards & Containers:** Standardized at `1rem` (`16px`) border-radius (`rounded-lg`), delivering a modern, tailored aesthetic.
- **Pills & Status Indicators:** Use fully circular ends (`9999px`) to immediately distinguish tags and contextual micro-labels from structural cards.

## Components

### Buttons
- **Primary:** Background `#159A85`, text `#FFFFFF`, font weight 600. On hover, shifts to `#0F766E` with Level 2 elevation and a subtle 1px translate up.
- **Secondary:** Deep Navy background `#192A45`, text `#FFFFFF`. Used for high-emphasis administrative or secondary actions.
- **Outlined:** Transparent background, border `1.5px solid #159A85`, text `#159A85`. On hover, background transitions to `teal-surface` (`#F0FDF9`).
- **Ghost:** Text `#192A45`, no border. Transitions to slate background `#F1F5F9` on hover.

### Inputs & Form Fields
- Height of 44px (touch friendly) with an 8px border radius.
- Default border `1px solid #E2E8F0`, background `#FFFFFF`.
- Focus state: Border shifts to `#159A85` with an accompanying subtle focus ring `box-shadow: 0 0 0 3px rgba(21, 154, 133, 0.18)`.
- RTL alignment mirrors icon placement (search icons, field clears, dropdown carets).

### Cards & Dashboards
- Base background `#FFFFFF`, border radius `16px`, hairline border `1px solid #E2E8F0`, and Level 1 elevation.
- Interactive course cards include a top accent strip or leading emblem tag utilizing `#159A85`.

### Chips & Badges
- Pill-shaped (`rounded-full`), padding `4px 12px`.
- Success / Active: Background `#F0FDF9`, text `#0F766E`, border `1px solid #CCFBF1`.
- Neutral / Progress: Background `#F8FAFC`, text `#475569`, border `1px solid #E2E8F0`.

### Selection Controls (Checkboxes & Radios)
- Checkboxes: 18px square with 4px border radius. Checked state fills with `#159A85` displaying a white checkmark.
- Radio buttons: 18px circular with an interior `#159A85` circle dot when active.

### Progress Bars & Learning Trackers
- Track height 6px to 8px with `9999px` rounded ends. Background `#E2E8F0`.
- Active fill: Smooth gradient from `#159A85` to `#38B2AC`.