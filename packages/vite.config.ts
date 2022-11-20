import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import Unocss from 'unocss/vite'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'

export default defineConfig({
  resolve: {
    alias: {
      '@FastUse/shared': resolve(__dirname, 'shared/index.ts')
    }
  },
  plugins: [MarkdownTransform(), Unocss()]
})
