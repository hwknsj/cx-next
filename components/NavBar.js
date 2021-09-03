// import { Icon } from '@nike/epic-react-ui'
import tw, { styled } from 'twin.macro'
import Link from 'next/link'
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

// export const Nav = tw.nav`
//     relative flex flex-wrap items-center justify-between px-4 py-5
//     md:px-24 lg:px-8
// `

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const InnerNav = tw.div`
    container px-4 mx-auto flex flex-wrap items-center justify-between
`
export const InnerMost = tw.div`
    w-full relative flex justify-between lg:w-auto lg:static lg:block
    lg:justify-start
`
export const DropDown = styled.div(props => [
  tw`lg:flex flex-grow items-center`,
  props.open ? tw`flex` : tw`hidden`
])

// export const Logo = tw.a`
//     leading-relaxed inline mr-4 whitespace-nowrap
// `

const Swoosh = styled.span`
  display: inline;
  .logo {
    position: relative;
    display: inline-block;
    /* vertical-align: top; */
    height: 100%;
    /* padding: 0 0 0 48px; */
    display: flex;
    align-items: center;
    z-index: 2;
    .nikeLogo {
      transform: scale(1.3);
      margin-right: 22px;
      position: relative;
      top: -1px;
    }
    img {
      display: inline-block;
      /* vertical-align: top; */
      /* height: 30px; */
      margin-right: 10px;
    }
    .title {
      display: inline-block;
      vertical-align: top;
      letter-spacing: 0.5px;
      white-space: nowrap;
    }
  }
`

export const NavButton = tw.button`
    text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid 
    border-transparent rounded bg-transparent block lg:hidden outline-none 
    focus:outline-none
`
export const DropMenu = tw.ul`
    flex flex-col lg:flex-row list-none lg:ml-auto md:w-full md:items-center
    lg:justify-end
`
export const LinkList = tw.ul`
    flex lg:flex-row list-none lg:ml-auto md:w-full md:items-center
    lg:justify-center
`

const LinkContainer = styled.ul`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  justify-self: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  font-weight: 500;
`

export const ListItem = styled.li`
  display: inline;
  margin-left: 3rem;
  margin-right: 3rem;
  font-weight: 500;
  a {
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`
export const InnerItem = tw(Link)`
    px-3 py-2 flex items-center font-sans font-semibold text-lg tracking-wide
    text-gray-700 hover:text-gray-900
`
export const ExtraButton = tw.a`
    text-black bg-transparent border border-solid border-gray-900
    hover:bg-black hover:text-white active:bg-gray-600 font-sans font-semibold
    uppercase text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1
    mb-1 mt-4 lg:mt-0 lg:ml-24
`
export const Bars = tw.div`
    mt-2
`
export const Bar = tw.div`
    w-8 h-1 bg-black mb-1 align-middle
`

const NavBar = props => (
  <Nav>
    <Swoosh>
      <Img className='logo' src='/assets/logo.svg' height={40} width={80} />
    </Swoosh>
    <InnerNav>
      {/* <Img
            src='/assets/logo.svg'
            alt='logo'
            width={100}
            height={40}
            placeholder='none'
          /> */}

      <LinkContainer>
        {navLinks.map(({ text, path }) => (
          <ListItem key={text}>
            <Link href={path}>
              <a>{text}</a>
            </Link>
          </ListItem>
        ))}
      </LinkContainer>
    </InnerNav>
  </Nav>
)

export default NavBar
