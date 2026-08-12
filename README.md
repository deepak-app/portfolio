# The Scriptorium — Portfolio Website

A digital scriptorium — the portfolio of a developer who takes unstructured, messy data and turns it into clean, structured, verified output. Built using **React**, **TypeScript**, and **Tailwind CSS**.

The visual language borrows from illuminated manuscripts — ink, vellum, marginalia, rubric-red annotations, and wax-seal status marks — executed with modern web precision.

## Design Details

- **Color Palette**:
  - Ink Black (`#14120F`) - Primary background
  - Aged Vellum (`#E8DCC4`) - Primary text
  - Manuscript Gold (`#C9A227`) - Primary accent
  - Scribe Teal (`#3A6B65`) - Secondary accent
  - Rubric Red (`#8B3A3A`) - Status seals, marginalia
  - Faded Ash (`#6B655A`) - Muted elements & borders
- **Typography**:
  - Display face: `Fraunces` (variable optical sizing, warm serif style)
  - Body face: `Inter` (contemporary sans-serif)
  - Utility/mono: `IBM Plex Mono` (monospace codes, status seals, labels)
- **Signature Features**:
  - **Marginalia**: Key sections contain handwritten-style notes in the margin (desktop) collapsing to inline callouts (mobile).
  - **Deckled Edge Project Cards**: Folios styled with a torn-paper edge using responsive CSS clip-path masks.
  - **Wax Seal Badges**: Status badges (`LIVE`, `IN PROGRESS`, `ARCHIVED`) created using pure CSS bevels, gradients, and rotated labels.
  - **Ribbon Bookmark**: Scroll progress tracking bookmark hanging on the right side of the screen.

## Adding & Editing Projects

All project data is stored externally in `src/data/projects.json`. To add or modify projects:
1. Open `src/data/projects.json`.
2. Edit or add elements to the JSON array conforming to this structure:
   ```json
   {
     "id": "project-id",
     "title": "Project Title",
     "status": "LIVE",
     "description": "Short explanation of the project details.",
     "techStack": ["React", "TypeScript", "Node.js"],
     "githubUrl": "https://github.com/...",
     "demoUrl": "https://..."
   }
   ```
Changes are instantly reflected in development with HMR, and will be included in the next production build without needing to touch any React code.

## Tech Stack & Tooling

- **Core**: React 19 + TypeScript
- **Styling**: Tailwind CSS v3 + PostCSS
- **Build Tool**: Vite 8
- **Linter**: Oxlint (0 warnings, 0 errors)

## Getting Started

### Installation

```bash
npm install
```

### Run Locally (Dev Server)

```bash
npm run dev
```

### Production Build

```bash
npm run build
```
