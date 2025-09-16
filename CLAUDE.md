# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Architecture

This is a React-based landing page built with modern tooling for promoting an "Antifragile CEO" book/course.

### Tech Stack
- **Vite** - Build tool and dev server
- **React 18** - UI framework with TypeScript
- **shadcn/ui** - Component library built on Radix UI primitives
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **TanStack Query** - Server state management

### Key Structure
- `src/pages/` - Page components (Index.tsx is the main landing page)
- `src/components/` - Reusable components, organized as:
  - Landing page sections: `HeroSection`, `ProblemSection`, `WhatYoullLearnSection`, `HostBioSection`, `FinalCTASection`
  - `ui/` - shadcn/ui components (accordion, button, card, etc.)
- `src/lib/utils.ts` - Utility functions (includes `cn` for class merging)
- `src/hooks/` - Custom React hooks

### Styling Architecture
- Uses CSS custom properties defined in `src/index.css` for theming
- Custom color palette includes `charcoal`, `off-white`, and `gold` for premium branding
- Custom animations: `fade-in`, `slide-up`, `glow`
- Premium gradients and shadows defined as CSS variables

### Path Aliases
- `@/` maps to `./src/` for clean imports

### TypeScript Configuration
- Relaxed strictness settings (no implicit any warnings, no unused parameter errors)
- Multiple tsconfig files for different environments (app, node)

### Component Development
- All UI components follow shadcn/ui patterns with Radix UI primitives
- Uses `class-variance-authority` for component variants
- Tailwind classes combined with `cn()` utility from `@/lib/utils`

### Landing Page Structure
The main page (`src/pages/Index.tsx`) is composed of sequential sections that tell a story about antifragile leadership, built specifically for marketing Dr. Santiago's book and course.