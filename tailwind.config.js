/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#09090a',
        gold: '#c4973a',
        'gold-light': '#dbb96a',
        'gold-dim': '#8a6b24',
        warm: '#eae4d8',
        muted: '#6e6860',
        faint: '#b8b0a2',
        surface: '#111010',
        surface2: '#191817',
        surface3: '#1f1e1c',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}