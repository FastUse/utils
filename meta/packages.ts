import { PackageManifest } from './types'

export const packages: PackageManifest[] = [
  {
    name: 'core',
    display: 'utils',
    description: 'Collection of utils',
    external: ['@/shared'],
    globals: {
      '@/shared': 'fastUseShared'
    }
  }
]
