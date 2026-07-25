# Portfolio Design System & Rules

This project follows an industrial, exposed-grid aesthetic inspired by modern developer portfolios and technical blueprints.

## Core Design Rules

### 1. No Rounded Corners (`rounded-none`)
- **Strict Requirement**: DO NOT use rounded corners (`rounded-xl`, `rounded-2xl`, `rounded-lg`, `rounded-full`, etc.) on layout boxes, section containers, buttons, metrics cards, or dialogs.
- All structural elements must use sharp 90-degree corners (`rounded-none` or default unrounded edges) to uphold the industrial blueprint aesthetic.

### 2. Exposed 1px Grid System
- Maintain 1px border lines between columns, rows, and section headers using `border-neutral-200` (light mode) and `border-neutral-800` (dark mode).
- Use full-bleed horizontal divider lines (`w-full border-b`) paired with `max-w-7xl mx-auto border-x` container boundaries.

### 3. Technical Monospace Typography
- Use monospace font styling for section labels, numbers (`01 //`), status indicators, system overview metadata, and technical tags (`[SYS_OVERVIEW]`).

### 4. Interactive & Scroll Reveals
- Keep scroll-driven section title transformations clean, mobile-responsive, and spacious using `AnimatedScrollSection`.
