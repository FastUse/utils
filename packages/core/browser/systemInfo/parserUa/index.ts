import UAParser from 'ua-parser-js'
import { ua as defaultUa } from '../utils/index'

export function parserUa(ua = defaultUa) {
  const parser = new UAParser(ua)
  return parser.getResult()
}
