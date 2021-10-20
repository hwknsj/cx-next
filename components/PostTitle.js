import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'

const PostTitleStyled = styled.h1`
  ${({ theme }) => css({ ...theme.typeography.title1 })};
  font-family: ${({ theme }) => theme.typeography.titleFont};
  line-height: normal;
  font-weight: 500;
  a {
    transition: color 0.2s ${({ theme }) => theme.cubicBezier};
    &:hover {
      color: ${({ theme }) => theme.colors.hoverBorder};
      cursor: pointer;
      text-decoration: none;
    }
  }
`

const PostSubtitleStyled = styled.small`
  ${({ theme }) => css({ ...theme.typeography.title4 })};
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const PostTitle = ({ children, subtitle, as = null, href = null }) => (
  <PostTitleStyled>
    {href ? (
      <Link as={as || ''} href={href}>
        <a>{children}</a>
      </Link>
    ) : (
      children
    )}
    {subtitle && <PostSubtitleStyled>{subtitle}</PostSubtitleStyled>}
  </PostTitleStyled>
)

export default PostTitle
