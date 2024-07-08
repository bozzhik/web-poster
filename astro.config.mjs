import {defineConfig} from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  server: {
    port: 2000,
    open: true,
  },
  site: 'https://web-plakat.bozzhik.ru',

  integrations: [tailwind()],
})
