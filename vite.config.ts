import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-md'
import voie from 'vite-plugin-voie'
import viteComponents from 'vite-plugin-components'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    voie({
      extensions: ['vue', 'md'],
    }),
    markdown({ wrapperClasses: 'prose mx-10 max-w-none prose-lg' }),
    viteComponents({
      extensions: ['vue', 'md'],
      customLoaderMatcher: (path) => path.endsWith('.md'),
    }),
    VitePWA(),
  ],
})
