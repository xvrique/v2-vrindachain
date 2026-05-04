# Font Guide - Vrindachain AI Layer 2

## Font Stack: Tech Degen + Bollywood Chaos

### Typography System

#### 1. **Bungee** - Headings
**Usage**: All h1, h2, h3, h4, h5, h6 elements
**Character**: Bold, blocky, street-style font perfect for tech degen aesthetic
**Class**: `font-heading`

**Where it's used**:
- Hero headline: "Vrindachain AI Layer 2"
- Section titles: "What is Vrindachain?", "Chainomics", "How to Buy"
- All major headings throughout the site

**Why**: Creates strong visual hierarchy and gives that "street tech" vibe that matches the absurd, chaotic brand personality.

---

#### 2. **Space Grotesk** - Body Text
**Usage**: Default body font, paragraphs, descriptions
**Character**: Modern, geometric, tech-forward sans-serif
**Class**: `font-body` (default)

**Where it's used**:
- All paragraph text
- Descriptions
- Navigation links
- Buttons
- General UI text

**Why**: Highly readable, modern, and pairs perfectly with Bungee. Gives the "tech startup" credibility while maintaining readability.

---

#### 3. **Rubik Glitch** - Accent/Logo
**Usage**: Special elements, logo, glitchy effects
**Character**: Distorted, glitchy, chaotic
**Class**: `font-accent`

**Where it's used**:
- V2 logo in hero section
- $V2 logo in navbar
- Special accent text (optional)
- Error messages (optional)
- Loading states (optional)

**Why**: Adds the "chaos" element. Perfect for the absurd, broken, gutter aesthetic. Makes the brand feel unpredictable and memeable.

---

## Implementation

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Space+Grotesk:wght@300;400;500;600;700&family=Rubik+Glitch&display=swap" rel="stylesheet">
```

### Tailwind Config
```javascript
fontFamily: {
  sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  heading: ['Bungee', 'cursive'],
  accent: ['Rubik Glitch', 'cursive'],
}
```

### CSS Classes
```css
/* Automatic heading font */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Bungee', cursive;
  letter-spacing: 0.5px;
}

/* Manual classes */
.font-heading { font-family: 'Bungee', cursive; }
.font-accent { font-family: 'Rubik Glitch', cursive; }
.font-body { font-family: 'Space Grotesk', sans-serif; }
```

---

## Usage Examples

### Hero Section
```tsx
// V2 Logo - Rubik Glitch
<div className="text-9xl font-accent">V2</div>

// Headline - Bungee (automatic)
<h1>Vrindachain AI Layer 2</h1>

// Description - Space Grotesk (default)
<p>The first AI-powered Layer 2 born from gutter liquidity...</p>
```

### Navbar
```tsx
// Logo - Rubik Glitch
<div className="text-4xl font-accent">$V2</div>

// Links - Space Grotesk (default)
<a href="#how-to-buy">HOW TO BUY</a>
```

### Section Titles
```tsx
// All section titles automatically use Bungee
<h2>What is Vrindachain?</h2>
<h2>Chainomics</h2>
<h2>How to Buy</h2>
```

---

## Font Pairing Rationale

### Why This Combination Works

1. **Contrast**: Bungee (bold, blocky) vs Space Grotesk (clean, geometric) creates strong visual hierarchy

2. **Tech + Chaos**: Space Grotesk = professional tech startup, Rubik Glitch = broken chaos, Bungee = street credibility

3. **Readability**: Space Grotesk is highly readable for body text, while Bungee makes headings impossible to miss

4. **Meme-ability**: Rubik Glitch adds that "cursed" element that makes screenshots more shareable

5. **Brand Personality**: 
   - Bungee = "We're serious (but not really)"
   - Space Grotesk = "We know tech"
   - Rubik Glitch = "We're broken and we love it"

---

## Font Weights

### Space Grotesk
- 300 (Light) - Subtle text, captions
- 400 (Regular) - Body text, descriptions
- 500 (Medium) - Emphasized text
- 600 (Semi-Bold) - Subheadings, buttons
- 700 (Bold) - Strong emphasis

### Bungee
- Single weight (Regular) - All headings

### Rubik Glitch
- Single weight (Regular) - Logo, accents

---

## Accessibility Notes

- **Minimum font size**: 14px for body text
- **Line height**: 1.5-1.7 for body text
- **Letter spacing**: 0.3px for body, 0.5px for headings
- **Contrast**: All text meets WCAG AA standards against black background

---

## Performance

- **Font loading**: Preconnect to Google Fonts for faster loading
- **Display swap**: Fonts use `display=swap` to prevent FOIT (Flash of Invisible Text)
- **Subset**: Only Latin characters loaded
- **Total font weight**: ~50KB gzipped

---

## Alternative Uses

### Loading States
```tsx
<div className="font-accent text-saffron">
  Training the monkey AI...
</div>
```

### Error Messages
```tsx
<div className="font-accent text-red-500">
  Transaction stolen by monkey
</div>
```

### Success Messages
```tsx
<div className="font-heading text-india-green">
  Cow validator approved!
</div>
```

---

## Don't Use

❌ Don't use Rubik Glitch for body text (unreadable)
❌ Don't use Bungee for long paragraphs (too bold)
❌ Don't mix all three fonts in one sentence
❌ Don't use font sizes smaller than 14px for body text

---

## Do Use

✅ Bungee for all major headings
✅ Space Grotesk for all body text
✅ Rubik Glitch sparingly for logo and special accents
✅ Consistent font weights throughout
✅ Proper line height and letter spacing

---

## Brand Voice Through Typography

The font combination reinforces the brand narrative:

**"We look like a serious AI Layer 2 project (Space Grotesk), but we're actually chaotic street tech (Bungee) built by glitchy monkeys (Rubik Glitch)."**

This perfectly matches the core joke: **Looks legit, actually absurd.**

---

## Future Enhancements

- Add font-display: optional for even faster loading
- Consider variable fonts for better performance
- Add font subsetting for specific characters only
- Implement font loading strategy with FontFaceObserver

---

**Built different. Smells worse. Looks glitchy.** 🐄🐒💩
