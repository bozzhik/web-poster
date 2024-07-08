import {defineConfig} from 'astro/config'

import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  server: {
    port: 2000,
    open: true,
  },
  site: 'https://web-plakat.bozzhik.ru',
  integrations: [tailwind(), react()],
})
