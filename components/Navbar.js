import Link from 'next/link'
import styled from '@emotion/styled'
import Title from '@/styled/Title'
import { LinkContainer, ListItem } from '@/styled/LinkList'
import { Button } from '@/styled/Button'
import { Swoosh } from '@/styled/Swoosh'
import { css } from '@emotion/react'
import { useTheme } from '@/lib/ThemeContext'

const navLinks = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Styles',
    path: '/eds'
  },
  {
    text: 'Emotion',
    path: '/posts/emotion'
  }
]
const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 0 2rem;
`

const switchStyles = css`
  align-items: center;
  justify-content: flex-end;
`

const Navbar = () => {
  const { dark, toggle } = useTheme()
  return (
    <Nav>
      <Swoosh />
      <Title>Nike CX</Title>
      <LinkContainer>
        {navLinks.map(({ text, path }) => (
          <ListItem key={text}>
            <Link href={path}>
              <a>{text}</a>
            </Link>
          </ListItem>
        ))}
        <Button
          onClick={() => toggle()}
          className={`primary small`}
          styles={switchStyles}
        >
          {dark ? '☀️' : '🌑'}
        </Button>
      </LinkContainer>
    </Nav>
  )
}

export default Navbar
