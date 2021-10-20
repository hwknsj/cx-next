import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Button = styled.button`
  ${({ theme }) => css({ ...theme.buttons.primary })};
  ${({ theme }) => css({ ...theme.buttons.medium })};
  transition: background-color 0.1s ${({ theme }) => theme.cubicBezier},
    border 0.1s ${({ theme }) => theme.cubicBezier},
    transform 0.1s ${({ theme }) => theme.cubicBezier};
  &.primary {
    ${({ theme }) => css({ ...theme.buttons.primary })};
  }
  &.secondary {
    ${({ theme }) => css({ ...theme.buttons.secondary })};
  }
  &.small {
    ${({ theme }) => css({ ...theme.buttons.small })};
  }
  &.medium {
    ${({ theme }) => css({ ...theme.buttons.medium })};
  }
  &.large {
    ${({ theme }) => css({ ...theme.buttons.large })};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBg};
    border: 1px solid ${({ theme }) => theme.colors.hoverBorder};
    transform: translate(2px, 1px);
  }
`
