/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-forest': '#1E3D2A',
        'forest':      '#3D6B4F',
        'sage':        '#7A9E7E',
        'clay':        '#C4956A',
        'earth':       '#8B6F47',
        'cream':       '#F5F0E8',
        'warm-white':  '#FDFAF5',
        'bark':        '#4A3728',
        'mist':        '#D4E4D6',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
