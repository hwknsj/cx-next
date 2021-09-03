module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
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
        success: '#128A09',
        orange: '#FE5000',
        red2: '#FF0015',
        red: '#D43F21', // Used for error states.
        bg: '#FFFFFF',
        blue: '#0861B5',
        link: '#0861B5'
      },
      spacing: {
        28: '7rem'
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        base: ['62.5%', '2.4rem'],
        lg: '1.8rem',
        xl: '2.0rem',
        '2xl': '2.2rem',
        '3xl': '2.4rem',
        '4xl': '4.0rem',
        '5xl': '4.8rem',
        '6xl': '5.6rem',
        '7xl': '6.2rem',
        '8xl': '7rem'
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)'
      }
    }
  }
}
