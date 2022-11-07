import { join } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, 'packages')
    }
  }
})
