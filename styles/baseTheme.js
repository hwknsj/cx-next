const helveticaNeue = `'Helvetica Neue', Helvetica, Arial, sans-serif`

const colorSchema = {
  light: {
    primary: '#111111',
    secondary: '#6A6A6A',
    textPrimary: '#111111',
    textSecondary: '#757575',
    btnPrimary: '#111111',
    btnSecondary: '#FFFFFF',
    black: '#111111', // Used for default text, icons and backgrounds.
    white: '#FFFFFF', // Used for backgrounds and icons.
    grey1: '#757575', // Used for disabled button text and product cards.
    grey2: '#CCCCCC', // Used for unselected icons and states.
    grey3: '#E5E5E5', // Used for borders, dividers and keylines.
    grey4: '#F5F5F5', // Used for product image backgrounds.
    grey5: '#FAFAFA', // Used for product image backgrounds.
    green: '#128A09', // Used for success states and confirmations.
    red: '#D43F21', // Used for error states.
    orange: '#FE5000',
    lightGreen: '#76FF03',
    indigo: '#304FFE',
    deepPurple: '#651FFF',
    deepOrange: '#FF3d00',
    kleinBlue: 'rgb(69, 68, 147)',
    blue: '#0861B5',
    pink: '#FF4081',
    link: '#0861B5',
    red2: '#FF0015',
    gradient:
      'linear-gradient(113.7deg, #FF0015 3.64%, #FE5000 50.92%, #FF6A00 97.26%)',
    bg: '#FFFFFF',
    hoverBg: '#F5F5F5',
    hoverBorder: '#757575',
    focusBorder: '#0861B5',
    activeBg: '#E5E5E5',
    activeBorder: '#111111',
    success: {
      background: '#128A09',
      text: '#1C7013',
      border: '#309E26'
    },
    danger: {
      background: '#D43F21',
      text: '#AD391F',
      border: '#E16443'
    },
    warning: {
      background: '#FACA40',
      text: '#895600',
      border: '#BC7C00'
    }
  },
  dark: {
    primary: '#6A6A6A',
    secondary: '#111111',
    textPrimary: '#FFFFFF',
    textSecondary: '#B2B2B2',
    btnPrimary: '#FFFFFF',
    btnSecondary: '#757575',
    link: '#3C8DD7',
    black: '#111111', // Used for default text, icons and backgrounds.
    white: '#FFFFFF', // Used for backgrounds and icons.
    grey1: '#B2B2B2', // Used for disabled button text and product cards.
    grey2: '#8B8B8B', // Used for unselected icons and states.
    grey3: '#757575', // Used for borders, dividers and keylines.
    grey4: '#3A3A3A', // Used for product image backgrounds.
    grey5: '#222222', // Used for product image backgrounds.
    green: '#41A139', // Used for success states and confirmations.
    red: '#FF4D29', // Used for error states.
    orange: '#FE5000',
    lightGreen: '#76FF03',
    indigo: '#304FFE',
    deepPurple: '#651FFF',
    deepOrange: '#FF3d00',
    kleinBlue: 'rgb(69, 68, 147)',
    blue: '#0861B5',
    pink: '#FF4081',
    red2: '#FF0015',
    gradient:
      'linear-gradient(113.7deg, #FF0015 3.64%, #FE5000 50.92%, #FF6A00 97.26%)',
    bg: '#111111',
    hoverBg: '#3A3A3A',
    hoverBorder: '#B2B2B2',
    focusBorder: '#51A9E8',
    activeBg: '#222222',
    activeBorder: '#FFFFFF',
    success: {
      background: '#128A09',
      text: '#1C7013',
      border: '#309E26'
    },
    danger: {
      background: '#D43F21',
      text: '#E16443',
      border: '#AD391F'
    },
    warning: {
      background: '#FACA40',
      text: '#BC7C00',
      border: '#895600'
    }
  }
}

const typeographySchema = colors => ({
  fontFamily: helveticaNeue,
  bodyFontSize: '1.6rem',
  displayFont: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
  color: colors.textPrimary,
  display1: {
    fontFamily: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
    fontSize: '6.2rem',
    color: colors.textPrimary
  },
  display2: {
    fontFamily: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
    fontSize: '5.6rem',
    color: colors.textPrimary
  },
  display3: {
    fontFamily: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
    fontSize: '4.8rem',
    color: colors.textPrimary
  },
  display4: {
    fontFamily: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
    fontSize: '4.0rem',
    color: colors.textPrimary
  },
  display5: {
    fontFamily: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
    fontSize: '2.4rem',
    color: colors.textPrimary
  },
  title1: {
    fontSize: '4.8rem', // '3.6rem',
    fontWeight: 500,
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  title2: {
    fontSize: '3.2rem',
    fontWeight: 500,
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  title3: {
    fontSize: '2.8rem',
    fontWeight: 500,
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  title4: {
    fontSize: '2.4rem',
    fontWeight: 500,
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  title5: {
    fontSize: '2.0rem',
    fontWeight: 500,
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  title6: {
    fontSize: '1.6rem',
    fontWeight: 500,
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  subtitle1: {
    fontSize: '1.6rem',
    fontWeight: 500,
    lineHeight: '2.4rem',
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  subtitle2: {
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: '2.0rem',
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  subtitle3: {
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  body1: {
    fontSize: '2.0rem',
    lineHeight: '2.8rem',
    fontWeight: 400,
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  body2: {
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    fontWeight: 400,
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  body3: {
    fontSize: '1.4rem',
    lineHeight: '2.0rem',
    fontWeight: 400,
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  legal: {
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
    fontWeight: 400,
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  label: {
    fontSize: '1.0rem',
    lineHeight: '1.2rem',
    fontWeight: 400,
    fontFamily: helveticaNeue,
    color: colors.textPrimary
  },
  button1: {
    fontSize: '1.6rem',
    fontWeight: 500,
    lineHeight: '2.4rem',
    fontFamily: helveticaNeue,
    color: colors.textPrimary,
    backgroundColor: colors.grey5,
    'color:disabled': colors.grey1
  },
  button2: {
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: '2.0rem',
    fontFamily: helveticaNeue,
    color: colors.textPrimary,
    'color:disabled': colors.grey1
  },
  button3: {
    fontSize: '1.2rem',
    fontWeight: 500,
    lineHeight: '1.8rem',
    fontFamily: helveticaNeue,
    color: colors.textPrimary,
    'color:disabled': colors.grey1
  },
  titleFont: helveticaNeue,
  subtitleFont: helveticaNeue,
  bodyFont: helveticaNeue,
  legalFont: helveticaNeue,
  buttonFont: helveticaNeue
})

// const buttons = theme => ({
//   // IDEA: is 'theme' going to be 'light' / 'dark' or is there enough overlap
//   // that it makes sense to 'apply' light or dark specifications over some defaults?
//   // fucking ux should do this shit mane: just give me the base, light, and dark variables...
//   default: {
//     primary: {
//       backgroundColor: theme.colors.btnPrimary

//     },
//     secondary: {
//       background
//     }
//   },

// })

const linkSchema = (colors, typeography) => ({
  color: colors.link,
  body1: {
    ...typeography.body1,
    color: colors.link,
    '&:hover': { textDecoration: 'underline' }
  },
  body2: {
    ...typeography.body1,
    color: colors.link,
    '&:hover': { textDecoration: 'underline' }
  },
  body3: {
    ...typeography.body1,
    color: colors.link,
    '&:hover': { textDecoration: 'underline' }
  }
})

// const baseStyles = theme => {
//   colors: colors[theme],
//   typeography: ${({ theme }) => typeography(theme)};
// }

// TODO: convert to function with dark/light param
// HACK: just make theme a function or w/e and be like
// if dark object.assign(darkVerisons)

// NOTE: could use a sort of themeBuilder function
export const theme = (setting = 'light') => {
  const colors = colorSchema[setting]
  const typeography = typeographySchema(colors)
  const links = linkSchema(colors, typeography)
  return {
    colors,
    typeography,
    links,
    cubicBezier: 'cubic-bezier(0.4, 0.01, 0.165, 0.99)'
  }
}

// export const themeDark = {
//   black: '#111111',
//   white: '#FFFFFF',
//   grey1: '#B2B2B2',
//   grey2: '#8B8B8B',
//   grey3: '#757575',
//   grey4: '#3A3A3A',
//   grey5: '#222222',
//   green: '#41A139',
//   red: '#FF4D29'
// }

// export const dark = {
//   colors: {
//     primary: '#6A6A6A',
//     secondary: '#111111',
//     textPrimary: '#FFFFFF',
//     textSecondary: '#B2B2B2',
//     link: '#3C8DD7',
//     black: '#111111', // Used for default text, icons and backgrounds.
//     white: '#FFFFFF', // Used for backgrounds and icons.
//     grey1: '#B2B2B2', // Used for disabled button text and product cards.
//     grey2: '#8B8B8B', // Used for unselected icons and states.
//     grey3: '#757575', // Used for borders, dividers and keylines.
//     grey4: '#3A3A3A', // Used for product image backgrounds.
//     grey5: '#222222', // Used for product image backgrounds.
//     green: '#41A139', // Used for success states and confirmations.
//     red: '#FF4D29', // Used for error states.
//     orange: '#FE5000',
//     lightGreen: '#76FF03',
//     indigo: '#304FFE',
//     deepPurple: '#651FFF',
//     deepOrange: '#FF3d00',
//     kleinBlue: 'rgb(69, 68, 147)',
//     blue: '#0861B5',
//     pink: '#FF4081',
//     red2: '#FF0015',
//     gradient:
//       'linear-gradient(113.7deg, #FF0015 3.64%, #FE5000 50.92%, #FF6A00 97.26%)',
//     bg: '#111111',
//     hoverBg: '#3A3A3A',
//     hoverBorder: '#B2B2B2',
//     focusBorder: '#51A9E8',
//     activeBg: '#222222',
//     activeBorder: '#FFFFFF',
//     success: {
//       background: '#128A09',
//       text: '#1C7013',
//       border: '#309E26'
//     },
//     danger: {
//       background: '#D43F21',
//       text: '#E16443',
//       border: '#AD391F'
//     },
//     warning: {
//       background: '#FACA40',
//       text: '#BC7C00',
//       border: '#895600'
//     }
//   }
// }
// it would be nice to spread over light theme if dark
// const theme = (light = true) => {
//   const baseTheme = {
//     colors: light ? colors.light : { ...colors.light, ...colors.dark },
//     typeographyr,
//     // ...
//     links,
//     cubicBezier: 'cubic-bezier(0.4, 0.01, 0.165, 0.99)'
//   }

//   if (dark) {
//   }

//   return {
//     colors,
//     typeography,
//     // ...
//     links,
//     cubicBezier: 'cubic-bezier(0.4, 0.01, 0.165, 0.99)'
//   }
// }

// theme.colors.textPrimary = theme.colors.black

// export default theme
export default theme
