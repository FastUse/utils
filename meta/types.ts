export interface PackageManifest {
  name: string
  display: string
  description?: string
  external?: string[]
  globals?: Record<string, string>
  iife?: boolean
  cjs?: boolean
  mjs?: boolean
  dts?: boolean
}
