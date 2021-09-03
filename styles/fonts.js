// import { css } from '@emotion/react'
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

// export const fontFaces = css`
//   @font-face {
//     font-family: 'Helvetica Neue';
//     font-display: swap;
//     src: url('fonts/Helvetica-Neue.woff') format('woff'),
//       url('fonts/Helvetica-Neue.ttf') format('truetype');
//   }

//   @font-face {
//     font-family: 'Nike Futura ND';
//     font-display: swap;
//     src: url('fonts/Nike-Futura.woff2') format('woff2'),
//       url('fonts/Nike-Futura.woff') format('woff'),
//       url('fonts/Nike-Futura.ttf') format('truetype');
//   }
// `
