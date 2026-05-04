# Vrindachain Landing Page - Visual Guide

## 🎨 Design System

### Color Palette

```
Primary Colors:
├── Cosmic Dark:    #0a0e27 (Background)
├── Cosmic Blue:    #1a1f3a (Secondary BG)
└── Cream:          #f5f1e8 (Text)

Accent Colors:
├── Saffron:        #ffa500 (Primary - Vibrant Orange)
├── Gold:           #ffd700 (Secondary)
├── Peacock Green:  #22c55e (Tertiary)
└── Peacock Blue:   #3b82f6 (Quaternary)
```

### Typography Scale

```
Headings:
├── H1: text-8xl font-black (Hero)
├── H2: text-6xl font-black (Section)
├── H3: text-3xl font-bold (Subsection)
└── H4: text-2xl font-bold (Card)

Body:
├── Large: text-xl font-semibold
├── Normal: text-base font-semibold
├── Small: text-sm font-semibold
└── Tiny: text-xs font-bold
```

### Spacing System

```
Sections:
├── Padding: py-24 (96px)
├── Max-width: max-w-7xl
└── Horizontal: px-4

Cards:
├── Padding: p-8 to p-12
├── Gap: gap-6 to gap-8
└── Border Radius: rounded-2xl

Elements:
├── Button Padding: px-8 py-4
├── Icon Size: w-16 h-16
└── Border: border-white/10
```

## 🎭 Component Styles

### Buttons

**Primary Button**
```
Background: Linear gradient (Saffron → Gold)
Color: Cosmic Dark
Padding: px-8 py-4
Border Radius: rounded-xl
Shadow: 0 0 30px rgba(255, 165, 0, 0.5)
Hover: Scale 1.05, Shadow increases
```

**Secondary Button**
```
Background: rgba(255, 255, 255, 0.05)
Border: 2px solid Saffron
Color: Saffron
Padding: px-8 py-4
Border Radius: rounded-xl
Hover: Background becomes rgba(255, 165, 0, 0.15)
```

### Cards

**Glass Card**
```
Background: rgba(255, 255, 255, 0.03)
Backdrop Filter: blur(20px)
Border: 1px solid rgba(255, 255, 255, 0.08)
Border Radius: rounded-2xl
Padding: p-8
Hover: Border color changes to Saffron/30
```

**Glass Strong Card**
```
Background: rgba(255, 255, 255, 0.08)
Backdrop Filter: blur(30px)
Border: 1px solid rgba(255, 255, 255, 0.15)
Border Radius: rounded-2xl
Padding: p-8 to p-12
Hover: Enhanced glow effect
```

## 🎬 Animation Patterns

### Floating Animation
```
Duration: 3-5 seconds
Y-axis: 0px → -20px → 0px
Easing: ease-in-out
Repeat: Infinite
```

### Hover Lift
```
Transform: translateY(-8px)
Duration: 0.3s
Shadow: Increases on hover
```

### Scale Animation
```
Scale: 1 → 1.1 → 1
Duration: 0.3s
Easing: ease-out
```

### Stagger Animation
```
Delay: 0.1-0.2s between items
Duration: 0.6-0.8s
Easing: ease-out
```

## 📱 Responsive Breakpoints

```
Mobile: < 768px
├── Font sizes: Reduced by 20%
├── Padding: Reduced by 30%
├── Button size: Maintained for touch
└── Grid: Single column

Tablet: 768px - 1024px
├── Font sizes: Normal
├── Padding: Normal
├── Grid: 2 columns
└── Layout: Optimized

Desktop: > 1024px
├── Font sizes: Full size
├── Padding: Full size
├── Grid: 3-4 columns
└── Layout: Full width
```

## 🌈 Gradient Combinations

### Primary Gradient
```
from-saffron to-gold
Direction: 135deg
Usage: Headings, primary buttons
```

### Secondary Gradient
```
from-peacock-green to-peacock-blue
Direction: 135deg
Usage: Accents, secondary elements
```

### Tertiary Gradient
```
from-gold to-saffron
Direction: 135deg
Usage: Highlights, special elements
```

## ✨ Glow Effects

### Soft Glow
```
Box-shadow: 0 0 20px rgba(color, 0.3)
Usage: Cards, buttons
```

### Medium Glow
```
Box-shadow: 0 0 30px rgba(color, 0.5)
Usage: Hover states
```

### Strong Glow
```
Box-shadow: 0 0 40px rgba(color, 0.7)
Usage: Active states, emphasis
```

## 🎯 Layout Patterns

### Hero Section
```
├── Background: Gradient + Animated orbs
├── Content: Centered, max-w-7xl
├── Spacing: pt-32, pb-20
├── Elements: Title, subtitle, CTA, stats
└── Animation: Staggered reveals
```

### Feature Section
```
├── Background: Transparent
├── Layout: 3-column grid
├── Cards: Glass effect, hover lift
├── Spacing: gap-8
└── Animation: Staggered on scroll
```

### Tokenomics Section
```
├── Layout: 2-column (chart + legend)
├── Chart: Responsive container
├── Legend: Staggered list
├── Info: 3-column grid
└── Animation: Smooth transitions
```

### Roadmap Section
```
├── Layout: 4-column grid
├── Cards: Status-based styling
├── Connecting: Lines between phases
├── Spacing: gap-6
└── Animation: Staggered reveals
```

## 🎨 Icon Usage

### Emoji Icons
```
Hero Stats: ⚡ 💨 🙏 🎵
Technologies: 💧 🙏 🪈 🐄 🎁 🔍
Roadmap: 🌱 🏛️ 🪈 🎭
Community: 💬 𝕏 📈 💰
```

### Lucide Icons
```
Navbar: Menu, X
Community: MessageCircle, Twitter, TrendingUp, ShoppingCart
Roadmap: CheckCircle2, Circle
```

## 🔄 Interaction States

### Button States
```
Default: Normal styling
Hover: Scale 1.05, enhanced shadow
Active: Scale 0.95, reduced shadow
Disabled: Opacity 0.5, no hover
```

### Card States
```
Default: Normal styling
Hover: Border color change, glow effect, lift
Focus: Outline visible
Active: Scale 0.98
```

### Link States
```
Default: Cream color
Hover: Saffron color, underline
Active: Gold color
Visited: Cream/70 color
```

## 📐 Sizing Guide

### Buttons
```
Small: px-4 py-2 text-sm
Normal: px-6 py-3 text-base
Large: px-8 py-4 text-lg
Extra Large: px-10 py-5 text-xl
```

### Icons
```
Small: w-4 h-4
Normal: w-6 h-6
Large: w-8 h-8
Extra Large: w-16 h-16
```

### Cards
```
Compact: p-4
Normal: p-6 to p-8
Large: p-10 to p-12
Extra Large: p-16
```

## 🎯 Visual Hierarchy

```
Level 1 (Most Important):
├── Hero headline (text-8xl)
├── Primary CTA buttons
└── Main section headings (text-6xl)

Level 2 (Important):
├── Subheadings (text-3xl)
├── Feature titles (text-2xl)
└── Secondary buttons

Level 3 (Supporting):
├── Body text (text-base)
├── Descriptions (text-sm)
└── Labels (text-xs)
```

## 🌟 Special Effects

### Shimmer Effect
```
Background: Linear gradient with animation
Duration: 2s
Direction: Left to right
Usage: Button hover effect
```

### Pulse Effect
```
Opacity: 1 → 0.5 → 1
Duration: 2s
Usage: Background orbs
```

### Rotate Effect
```
Rotation: 0° → 360°
Duration: 60-120s
Usage: Mandala rings
```

---

This visual guide ensures consistency across the entire landing page. Use these specifications when customizing or extending the design!
