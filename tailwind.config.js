/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#14120F',
        'aged-vellum': '#E8DCC4',
        'manuscript-gold': '#C9A227',
        'scribe-teal': '#3A6B65',
        'rubric-red': '#8B3A3A',
        'faded-ash': '#6B655A',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

