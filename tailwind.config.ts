import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  prefix: '',
  theme: {
    screens: {
      xl: {max: '1536px'},
      lg: {max: '1280px'},
      md: {max: '1024px'},
      sm: {max: '428px'},
    },
    extend: {
      fontFamily: {
        sans: ['SuisseIntl', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        book: '450',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        item: {
          DEFAULT: 'var(--item)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({s: (value) => ({width: value, height: value})}, {values: api.theme('width')})
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
} satisfies Config

export default config
