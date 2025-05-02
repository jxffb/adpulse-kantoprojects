# Kanto Projects Design System

## Overview
This document outlines the design system used across the Kanto Projects website. It provides guidelines for maintaining consistency in design, typography, colors, spacing, and component styling.

## Colors

### Primary Colors
- Blue (Primary): `bg-blue-500`, `text-blue-500`
- Blue (Light): `bg-blue-100`, `text-blue-800`
- Blue (Dark): `bg-blue-900/30`, `text-blue-300`

### Text Colors
- Primary: `text-black dark:text-white`
- Secondary: `text-gray-600 dark:text-gray-400`
- Muted: `text-gray-500 dark:text-gray-400`

### Background Colors
- Base: `bg-white dark:bg-black`
- Translucent: `bg-white/70 dark:bg-black/70`
- Section: `bg-gray-50 dark:bg-gray-900/50`

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
```

### Font Weights
- Regular: Default
- Medium: `font-medium` (used for headings)

### Text Sizes
- H1: `text-4xl sm:text-5xl lg:text-6xl`
- H2: `text-3xl sm:text-4xl`
- H3: `text-2xl`
- Body: Default
- Small: `text-sm`

## Spacing

### Container
- Max Width: `max-w-4xl`
- Padding: `px-4 sm:px-6 lg:px-8`

### Section Spacing
- Vertical: `py-16 sm:py-24`
- Horizontal: `px-4`

### Grid System
- Default: `grid-cols-1`
- Two Column: `lg:grid-cols-2`
- Gap: `gap-12`

## Components

### Cards
```css
backdrop-blur-md bg-white/70 dark:bg-black/70 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-800/50
```

### Buttons
- Primary:
```css
px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200
```
- Secondary:
```css
px-6 py-3 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200
```

### Badges
```css
px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full
```

### Navigation
```css
backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200/50 dark:border-gray-800/50
```

## Animations & Transitions

### Duration
- Default: `duration-200`
- Long: `duration-700`

### Properties
- Colors: `transition-colors`
- Transform: `transition-transform`
- Scale: `group-hover:scale-105`

## Responsive Design

### Breakpoints
- Small (sm): 640px
- Large (lg): 1024px

### Mobile First
- Base styles are mobile
- Use `sm:` and `lg:` prefixes for larger screens

## Accessibility

### Dark Mode
- System preference detection
- Manual toggle available
- Consistent contrast ratios

### Semantic HTML
- Proper heading hierarchy
- ARIA labels where needed
- Focus states for interactive elements

## Implementation Notes

### Tailwind CSS
- All styles are implemented using Tailwind CSS utility classes
- Custom configurations in `tailwind.config.js`
- Base styles in `src/index.css`

### Component Structure
- Consistent layout patterns across components
- Reusable styles through Tailwind classes
- Responsive design considerations

## Best Practices

1. **Consistency**
   - Use predefined color classes
   - Follow spacing guidelines
   - Maintain typography hierarchy

2. **Responsive Design**
   - Start with mobile layout
   - Use responsive prefixes
   - Test across breakpoints

3. **Accessibility**
   - Maintain proper contrast
   - Use semantic HTML
   - Include ARIA attributes

4. **Performance**
   - Use Tailwind's utility-first approach
   - Minimize custom CSS
   - Optimize images and assets

## Examples

### Card Component
```jsx
<div className="backdrop-blur-md bg-white/70 dark:bg-black/70 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-800/50">
  <h3 className="text-lg font-medium mb-4">Title</h3>
  <p className="text-gray-600 dark:text-gray-400">Content</p>
</div>
```

### Button Component
```jsx
<button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
  Button Text
</button>
```

### Badge Component
```jsx
<span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
  Badge Text
</span>
``` 