import { PackageManifest } from './types'

export const packages: PackageManifest[] = [
  {
    name: 'core',
    display: 'utils',
    description: 'Collection of utils',
    external: ['@FastUse/shared'],
    globals: {
      '@FastUse/shared': 'fastUseShared'
    }
  }
]
