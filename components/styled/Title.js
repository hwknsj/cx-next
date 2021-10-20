import { css } from '@emotion/css'
import styled from '@emotion/styled'
import Link from 'next/link'
import { hueFlip, rotate, rotate3d } from '@/styled/Animations'

const TitleStyles = styled.h1`
  display: flex;
  ${({ theme }) => css({ ...theme.typeography.title1 })};
  font-weight: 950;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typeography.display1.fontSize};
  letter-spacing: -0.04em;
  white-space: nowrap;
  align-self: center;
  &:hover {
    animation-name: ${({ theme }) => hueFlip(theme)}, ${rotate3d};
    animation-duration: 1s, 0.5s;
    animation-timing-function: ease-in-out, ease-out;
    animation-iteration-count: once, once;
    animation-delay: 0s, 0.2s;
  }
`

const Title = ({ href, children }) => (
  <Link href={href || '/'}>
    <a>
      <TitleStyles>{children}</TitleStyles>
    </a>
  </Link>
)

export default Title
