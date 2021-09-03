const helveticaNeue = `'Helvetica Neue', Helvetica, Arial, sans-serif`

const theme = {
  colors: {
    primary: '#111111',
    secondary: '#6A6A6A',
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
  typeography: {
    fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
    bodyFontSize: '1.6rem',
    displayFont: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
    display1: {
      fontFamily: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
      fontSize: '6.2rem'
    },
    display2: {
      fontFamily: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
      fontSize: '5.6rem'
    },
    display3: {
      fontFamily: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
      fontSize: '4.8rem'
    },
    display4: {
      fontFamily: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
      fontSize: '4.0rem'
    },
    display5: {
      fontFamily: `'Nike Futura ND', 'Nike Futura', 'Futura', Arial, sans-serif`,
      fontSize: '2.4rem'
    },
    title1: {
      fontSize: '4.8rem', // '3.6rem',
      fontWeight: 500,
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    title2: {
      fontSize: '3.2rem',
      fontWeight: 500,
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    title3: {
      fontSize: '2.8rem',
      fontWeight: 500,
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    title4: {
      fontSize: '2.4rem',
      fontWeight: 500,
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    title5: {
      fontSize: '2.0rem',
      fontWeight: 500,
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    title6: {
      fontSize: '1.6rem',
      fontWeight: 500,
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    subtitle1: {
      fontSize: '1.6rem',
      fontWeight: 500,
      lineHeight: '2.4rem',
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    subtitle2: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: '2.0rem',
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    subtitle3: {
      fontSize: '1.4rem',
      lineHeight: '1.6rem',
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    body1: {
      fontSize: '2.0rem',
      lineHeight: '2.8rem',
      fontWeight: 400,
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    body2: {
      fontSize: '1.6rem',
      lineHeight: '2.4rem',
      fontWeight: 400,
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    body3: {
      fontSize: '1.4rem',
      lineHeight: '2.0rem',
      fontWeight: 400,
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    legal: {
      fontSize: '1.2rem',
      lineHeight: '1.8rem',
      fontWeight: 400,
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    label: {
      fontSize: '1.0rem',
      lineHeight: '1.2rem',
      fontWeight: 400,
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    button1: {
      fontSize: '1.6rem',
      fontWeight: 500,
      lineHeight: '2.4rem',
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    button2: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: '2.0rem',
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    button3: {
      fontSize: '1.2rem',
      fontWeight: 500,
      lineHeight: '1.8rem',
      fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`
    },
    titleFont: helveticaNeue,
    subtitleFont: helveticaNeue,
    bodyFont: helveticaNeue,
    legalFont: helveticaNeue,
    buttonFont: helveticaNeue
  },
  cubicBezier: 'cubic-bezier(0.4, 0.01, 0.165, 0.99)'
}

const links = {
  color: theme.colors.link,
  body1: {
    ...theme.typeography.body1,
    color: theme.colors.link,
    '&:hover': { textDecoration: 'underline' }
  },
  body2: {
    ...theme.typeography.body1,
    color: theme.colors.link,
    '&:hover': { textDecoration: 'underline' }
  },
  body3: {
    ...theme.typeography.body1,
    color: theme.colors.link,
    '&:hover': { textDecoration: 'underline' }
  }
}

theme.links = links

// export default theme
export { theme }

// TODO: convert to function with dark/light param

export const themeDark = {
  black: '#111111',
  white: '#FFFFFF',
  grey1: '#B2B2B2',
  grey2: '#8B8B8B',
  grey3: '#757575',
  grey4: '#3A3A3A',
  grey5: '#222222',
  green: '#41A139',
  red: '#FF4D29'
}
