import { Plugin } from 'vite'
import { existsSync } from 'fs'
import { join, resolve } from 'path'

const DIR_SRC = resolve(__dirname, '../../core')
const GITHUB_BLOB_URL = 'https://github.com/FastUse/utils/tree/main/packages/core'

export function MarkdownTransform(): Plugin {
  return {
    name: 'demo-to-md',
    enforce: 'pre',
    transform(code, id) {
      if(!id.match(/\.md$/)) return null
      const [pkg, name] = id.split('/').slice(-3)
      const dirname = join(DIR_SRC, pkg, name)
      const demoPath = existsSync(join(dirname, '/demo.vue'))
      const URL = `${GITHUB_BLOB_URL}/${pkg}/${name}`
      const Links = ([
        ['Source', `${URL}/index.ts`],
        demoPath ? ['Demo', `${URL}/demo.vue`] : undefined,
      ])
        .filter(i => i)
        .map(i => `[${i![0]}](${i![1]})`).join(' • ')
      if(demoPath) {
        code += (
`<script lang="ts" setup>
  import Demo from \'./demo.vue\'
</script>

## Demo

<DemoContainer>
  <Demo/>
</DemoContainer>`
)
      }
      
      code += (`\n\n## Source\n\n${Links}\n`)

      return code
    }
  }
} 