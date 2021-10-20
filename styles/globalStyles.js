import { css, Global } from '@emotion/react'
import { theme } from '@/styles/theme'
import { fontFaces } from '@/styles/fonts'
import { lighten, darken } from 'polished'
import facepaint from 'facepaint'
import { useTheme } from '@/lib/ThemeContext'
// import tw from 'twin.macro'
// import styled from '@emotion/styled'

const breakpoints = [320, 360, 375, 600, 959, 960, 1440, 1920]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const fonts = fontFaces.map(font => ({ ...font }))

const cssStyles = theme => css`
  ${fonts}
  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    background: ${theme.colors.bg};
    min-height: 100%;
    font-family: ${theme.typeography.fontFamily};
    font-size: 1.6rem;
    color: ${theme.colors.textPrimary};
  }
  main {
    ${css(
      mq({
        padding: [
          '0 1rem ',
          '0 1rem',
          '0 1rem',
          '1rem 2rem',
          '1rem 4rem',
          '2rem 8rem',
          '4rem 16rem'
        ]
      })
    )}
  }
  footer {
    padding: 0;
  }
  h1 {
    ${css({ ...theme.typeography.title1 })};
    small {
      display: block;
      ${css({ ...theme.typeography.subtitle1 })};
    }
  }
  h2 {
    ${css({ ...theme.typeography.title2 })};
    small {
      display: block;
      ${css({ ...theme.typeography.subtitle1 })};
    }
  }
  h3 {
    ${css({ ...theme.typeography.title3 })};
    small {
      display: block;
      ${css({ ...theme.typeography.subtitle2 })};
    }
  }
  h4 {
    ${css({ ...theme.typeography.title4 })};
    small {
      display: block;
      ${css({ ...theme.typeography.subtitle2 })};
    }
  }
  h5 {
    ${css({ ...theme.typeography.title5 })};
    small {
      display: block;
      ${css({ ...theme.typeography.subtitle3 })};
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    small {
      color: ${theme.colors.textSecondary};
    }
    &:hover {
      text-decoration: none;
    }
  }
  p,
  blockquote,
  section,
  article,
  main,
  table {
    color: ${theme.colors.textPrimary};
    a {
      color: ${theme.colors.link};
      transition: color 0.2s ${theme.cubicBezier},
        text-decoration 0.2s ${theme.cubicBezier};
      &:hover {
        text-decoration: underline;
        cursor: pointer;
        color: ${darken('0.2', theme.colors.link)};
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${theme.colors.textPrimary};
        transition: color 0.2s ${theme.cubicBezier};
        text-decoration: none;
        &:hover {
          color: ${theme.colors.hoverBorder};
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
  }
  .body1 {
    ${css({ ...theme.typeography.body1 })}
  }
  .body2 {
    ${css({ ...theme.typeography.body2 })}
  }
  .body3 {
    ${css({ ...theme.typeography.body3 })}
  }
  .title1 {
    ${css({ ...theme.typeography.title1 })}
  }
  .title2 {
    ${css({ ...theme.typeography.title2 })}
  }
`

export const GlobalStyles = () => {
  const { dark } = useTheme()
  const computedTheme = theme(dark)
  const styles = cssStyles(computedTheme)
  return <Global styles={styles} />
}
