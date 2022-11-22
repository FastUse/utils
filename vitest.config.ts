import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@FastUse/shared': resolve(__dirname, 'packages/core/shared/index.ts')
    }
  },
  test: {
    environment: 'jsdom'
  }
})
