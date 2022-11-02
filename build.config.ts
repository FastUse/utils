import { join } from 'path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  alias: {
    '@': join(__dirname, 'packages')
  }
})
