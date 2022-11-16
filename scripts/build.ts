import { execSync } from 'node:child_process'
import consola from 'consola'

function build() {
  consola.info('Clean up')
  execSync('pnpm run clean', { stdio: 'inherit' })

  consola.info('Rollup')
  execSync('pnpm run build:rollup', { stdio: 'inherit' })

  consola.info('Fix types')
  // execSync('pnpm run types:fix', { stdio: 'inherit' })
}

build()
