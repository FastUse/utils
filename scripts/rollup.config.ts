import type { RollupOptions, OutputOptions } from 'rollup'
import type { Options as ESBuildOptions } from 'rollup-plugin-esbuild'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import { packages } from '../meta/packages'

const configs: RollupOptions[] = []

const esbuildPlugin = esbuild()

const dtsPlugin = [dts()]

const externals: string[] = []

const esbuildMinifer = (options: ESBuildOptions) => {
  const { renderChunk } = esbuild(options)

  return {
    name: 'esbuild-minifer',
    renderChunk
  }
}

for (const { globals, name, external, iife, cjs, mjs, dts } of packages) {
  const iifeGlobals = {
    ...(globals || {})
  }

  const iifeName = 'fastUseUtils'
  const functionNames = ['index']

  for (const fn of functionNames) {
    const input = `packages/${name}/index.ts`

    const output: OutputOptions[] = []

    if (mjs !== false) {
      output.push({
        file: `packages/${name}/dist/${fn}.mjs`,
        format: 'es'
      })
    }

    if (cjs !== false) {
      output.push({
        file: `packages/${name}/dist/${fn}.cjs`,
        format: 'cjs'
      })
    }

    if (iife !== false) {
      output.push(
        {
          file: `packages/${name}/dist/${fn}.iife.js`,
          format: 'iife',
          name: iifeName,
          extend: true,
          globals: iifeGlobals
        },
        {
          file: `packages/${name}/dist/${fn}.iife.min.js`,
          format: 'iife',
          name: iifeName,
          extend: true,
          globals: iifeGlobals,
          plugins: [
            esbuildMinifer({
              minify: true
            })
          ]
        }
      )
    }

    configs.push({
      input,
      output,
      plugins: [esbuildPlugin, json()],
      external: [...externals, ...(external || [])]
    })

    if (dts !== false) {
      configs.push({
        input,
        output: {
          file: `packages/${name}/dist/${fn}.d.ts`,
          format: 'es'
        },
        plugins: dtsPlugin,
        external: [...externals, ...(external || [])]
      })
    }
  }
}

export default configs
