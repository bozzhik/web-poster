import type {Config} from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xl: {max: '1536px'},
      lg: {max: '1280px'},
      md: {max: '1024px'},
      sm: {max: '428px'},
    },
    extend: {
      colors: {
        custom: {
          primary: '#FC4E2B',
        },
      },
    },
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({s: (value) => ({width: value, height: value})}, {values: api.theme('width')})
    }),
    require('@tailwindcss/typography'),
  ],
} satisfies Config

export default config
