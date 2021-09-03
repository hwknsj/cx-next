import { css, keyframes } from '@emotion/react'
import { lighten } from 'polished'

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const fadeMixin = (
  duration = '200ms',
  delay = 0,
  func = 'ease-in'
) => css`
  animation-name: ${fadeIn};
  animation-duration: ${duration};
  animation-iteration-count: once;
  animation-timing-function: ${func};
  animation-delay: ${delay};
`

export const hueFlip = theme => keyframes`
0% {
  filter: hue-rotate(0deg);
  filter: blur(0);
  filter: drop-shadow(0.5rem 1rem 2.3rem ${theme.colors.lightGreen});
  color: ${theme.colors.white};
  background-color: ${theme.orange}
}
25% {
  filter: hue-rotate(90deg);
  filter: blur(4px);
  filter: drop-shadow(0.5rem -1rem 1.8rem ${theme.colors.indigo});
  color: ${theme.colors.primary};
  background-color: ${theme.colors.deepOrange}
}
50% {
  filter: hue-rotate(180deg);
  filter: blur(8px);
  filter: drop-shadow(-0.5rem -0.5rem 2.2rem ${theme.colors.deepPurple});
  color: ${theme.colors.white};
  background-color: ${lighten(0.1, theme.colors.pink)}
}
75% {
  filter: hue-rotate(270deg);
  filter: blur(4px);
  filter: drop-shadow(-1rem 0.5rem 2rem ${theme.colors.pink});
  color: ${theme.colors.deepOrange};
  background-color: ${lighten(0.1, theme.colors.indigo)}
}
100% {
  filter: hue-rotate(360deg);
  filter: blur(0);
  filter: drop-shadow(0rem 0rem 0rem ${theme.colors.white});
  color: ${theme.colors.primary};
  background-color: transparent;
}
`

export const rotate = keyframes`
0% {
  transform: rotateY(0);
}
50% {
  transform: rotateY(0.5turn);
}
100% {
  transform: rotateY(1turn);
}
`

export const rotate3d = keyframes`
0% {
  transform: rotate3d(0, 0, 0, -7deg);
}
50% {
  transform: rotate3d(1, -1, 1, 0.5turn);
}
100% {
  transform: rotate3d(1, 1, 1, calc(1turn + 2deg));
}
`
