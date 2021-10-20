import { fontFace } from 'polished'

export const fontFaces = [
  {
    fontFamily: 'Helvetica Neue',
    fontDisplay: 'swap',
    fontFilePath: 'fonts/Helvetica-Neue',
    localFonts: ['Helvetica Neue'],
    fileFormats: ['woff', 'ttf']
  },
  {
    fontFamily: 'Nike Futura ND',
    fontDisplay: 'swap',
    fontFilePath: 'fonts/Nike-Futura-ND',
    localFonts: ['Nike Futura ND'],
    fileFormats: ['woff2', 'woff', 'ttf']
  }
].map(font => ({ ...fontFace(font) }))
