---
name: Atmospheric Glass
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#c0c8cb'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#8b9295'
  outline-variant: '#41484a'
  surface-tint: '#a3cddb'
  primary: '#d0f3ff'
  on-primary: '#023641'
  primary-container: '#add8e6'
  on-primary-container: '#355f6b'
  inverse-primary: '#3a6470'
  secondary: '#c6c6cb'
  on-secondary: '#2e3035'
  secondary-container: '#47494d'
  on-secondary-container: '#b7b8bd'
  tertiary: '#ffeadb'
  on-tertiary: '#48290c'
  tertiary-container: '#fbc79e'
  on-tertiary-container: '#775131'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#beeaf8'
  primary-fixed-dim: '#a3cddb'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#214c58'
  secondary-fixed: '#e2e2e7'
  secondary-fixed-dim: '#c6c6cb'
  on-secondary-fixed: '#1a1c20'
  on-secondary-fixed-variant: '#45474b'
  tertiary-fixed: '#ffdcc2'
  tertiary-fixed-dim: '#efbc94'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#623f20'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-temp:
    fontFamily: Geist
    fontSize: 96px
    fontWeight: '200'
    lineHeight: 100px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding-desktop: 40px
  container-padding-mobile: 20px
  gutter: 16px
  card-gap: 24px
---

## Brand & Style
The design system focuses on a high-tech, ethereal aesthetic tailored for a premium weather experience. It leverages **Glassmorphism** to create a sense of depth and airiness against a deep, infinite background. The personality is professional and precise, mimicking the interface of a sophisticated meteorological instrument while remaining accessible for daily use.

Visuals are defined by high-quality typography and translucent layering. The interface should feel "live," with background blurs reacting to the content beneath them. Every element is designed to feel lightweight, as if floating in a dark, atmospheric void.

## Colors
The palette is rooted in a "Deep Space" philosophy. The primary background uses a near-black charcoal to ensure maximum contrast for the glass effects.

- **Primary (#ADD8E6):** Used for active states, weather icons, and critical data points like precipitation or temperature highs.
- **Surface:** Semi-transparent variants of the neutral and secondary colors are used to create the glass effect.
- **Text:** Pure white is reserved for primary readings (Current Temp, Location), while a muted slate grey is used for labels and secondary metadata to maintain visual hierarchy.

## Typography
This design system utilizes **Geist** for its technical precision and clean, sans-serif terminals. The typographic scale is dramatic, using ultra-light weights for large temperature displays to emphasize the "airy" brand pillar.

All labels should use the `label-caps` style to provide a structured, "instrument-panel" feel. Tracking is tightened on headlines for a modern look but loosened on small labels to ensure legibility against blurred backgrounds.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous safe areas to prevent the UI from feeling cluttered. 

- **Desktop:** A 12-column grid with high-margin side gutters (80px+) to keep weather data centered and focused.
- **Mobile:** A single-column stack with 20px horizontal margins.
- **Rhythm:** Spacing follows a 4px baseline. Components are grouped using "Airy Spacing"—favoring larger gaps (24px+) between distinct weather modules (e.g., 10-day forecast vs. Air Quality) to reinforce the lightweight feel.

## Elevation & Depth
Elevation is achieved through **Backdrop Blurs** rather than traditional shadows. This creates a "Frosted Glass" hierarchy:

1.  **Level 0 (Background):** Deep charcoal/black (#0A0A0B).
2.  **Level 1 (Main Cards):** Background blur (20px) with a 10% white tint and a subtle 1px inner border (white at 15% opacity) to catch the light.
3.  **Level 2 (Modals/Popovers):** Background blur (40px) with a 20% white tint.

Shadows, if used at all, should be "Ambient Shadows"—extremely soft, large radius, and zero spread, used only to subtly lift floating action buttons.

## Shapes
Shapes are consistently **Rounded** (0.5rem base) to soften the "high-tech" edge and make the app feel approachable. 

Large containers (like the daily summary card) should use `rounded-xl` (1.5rem) to create a distinct, nested container feel. Icons and small data chips use a full pill-shape to differentiate them from structural layout elements.

## Components
- **Weather Cards:** The core component. Must feature a `backdrop-filter: blur(20px)` and a thin, semi-transparent stroke. No solid backgrounds.
- **Buttons:** Primary buttons use the Light Blue accent color with black text. Secondary buttons are "Ghost" style with a glass background and white text.
- **Data Chips:** Small, pill-shaped elements used for UV Index, Humidity, and Wind. These should have a slightly darker glass tint than the main card they sit on.
- **Graphs/Charts:** Use thin lines (1.5px) for temperature trends. The area under the line should feature a subtle gradient of the accent color fading to transparent.
- **Inputs:** Search bars should be fully transparent with only a bottom stroke or a very subtle glass fill, emphasizing the "Minimal" requirement.
- **Icons:** Use thin-stroke (Lightweight) custom icons in the primary accent color or white. Avoid filled icon sets.