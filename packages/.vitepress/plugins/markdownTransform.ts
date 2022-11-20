import { Plugin } from 'vite'
import { existsSync } from 'fs'
import { join, resolve } from 'path'

const DIR_SRC = resolve(__dirname, '../../core')

export function MarkdownTransform(): Plugin {
  return {
    name: 'demo-to-md',
    enforce: 'pre',
    transform(code, id) {
      if(!id.match(/\.md$/)) return null
      const [pkg, name] = id.split('/').slice(-3)
      const dirname = join(DIR_SRC, pkg, name)
      const demoPath = existsSync(join(dirname, '/demo.vue'))
      if(demoPath) {
        return (
`${code}
<script lang="ts" setup>
  import Demo from \'./demo.vue\'
</script>

## Demo

<DemoContainer>
  <Demo/>
</DemoContainer>`
)
      }
      return code
    }
  }
} 