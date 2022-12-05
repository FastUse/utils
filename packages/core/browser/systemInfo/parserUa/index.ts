import UAParser from 'ua-parser-js'
import { ua } from '../utils/index'

const parser = new UAParser(ua)
export function parserUa() {
  return parser.getResult()
}
