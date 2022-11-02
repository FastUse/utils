export interface UrlObject {
  url: string
  query?: Record<string, any>
}

export interface StringifyUrlOptions {
  encode: boolean
}
