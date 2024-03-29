import Link from 'next/link'
import styled from '@emotion/styled'
import Title from '@/styled/Title'
import { css } from '@emotion/react'

import tw from 'twin.macro'
import Img from 'next/image'

const navLinks = [
  {
    text: 'Onboarding',
    path: '/posts/onboarding'
  },
  {
    text: 'Authorizations',
    path: '/'
  },
  {
    text: 'Workflows',
    path: '/'
  },
  {
    text: 'Slack',
    path: '/'
  }
]
const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  /* justify-content: space-between; */
`

// prettier can format this format this for us
// it follows very familiar JS Object notation
// !!WE ALL KNOW AND USE JAVASCRIPT ALL THE TIME
// ?? who ever heard stylus before this job
const HeaderStyles = styled.header`
  background: white;
  height: 40rem;
  text-align: center;
  .logo {
    width: 100px;
  }
`
// const TitleStyled = styled.Title`
const epicTitleStyles = css`
  background: white;
  height: 40rem;
  text-align: center;
  .logo {
    width: 100px;
  }
`

const titleStyles = {
  fontWeight: 'bold',
  fontFamily: 'Helvetica Neue',
  lineHeight: '1.23rem'
}

const Swoosh = styled.span`
  align-self: center;
  box-align: center;
  margin-right: 2rem;
`
export const LinkList = tw.ul`
    flex lg:flex-row list-none lg:ml-auto md:w-full md:items-center
    lg:justify-center
`

const LinkContainer = styled.ul`
  position: relative;
  display: inline-grid;
  align-items: center;
  justify-content: flex-end;
  justify-items: space-between;
  grid-column-gap: 2rem;
  grid-auto-flow: column;
  /* flex-direction: row; */
  flex-wrap: nowrap;
  width: 100%;
  font-weight: 500;
`

export const ListItem = styled.li`
  display: inline;
  font-size: ${({ theme }) => theme.typeography.body1.fontSize};
  font-weight: bold;
  a {
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  .title {
    /* adjust epic styles */
  }
`

const Header = () => (
  <StyledHeader>
    <Swoosh>
      <Img className='logo' src='/assets/logo.svg' height={100} width={120} />
    </Swoosh>
    <Title className='title' styles={epicTitleStyles}>
      Nike CX
    </Title>
    <Nav>
      <LinkContainer>
        {navLinks.map(({ text, path }) => (
          <ListItem key={text}>
            <Link href={path}>
              <a>{text}</a>
            </Link>
          </ListItem>
        ))}
      </LinkContainer>
    </Nav>
  </StyledHeader>
)

export default Header
