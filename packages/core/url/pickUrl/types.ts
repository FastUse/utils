export type filterType =
  | string[]
  | ((key: string, val: string, obj: Record<string, string>) => boolean)
