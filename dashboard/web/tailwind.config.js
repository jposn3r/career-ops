/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        plex: ['IBM Plex Sans', 'sans-serif'],
        'plex-mono': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
