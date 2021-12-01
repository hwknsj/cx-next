import styled from '@emotion/styled'

import tw from 'twin.macro'
export const LinkList = tw.ul`
    flex lg:flex-row list-none lg:ml-auto md:w-full md:items-center
    lg:justify-center
`

export const LinkContainer = styled.ul`
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

// HACK: PROP BASED STYLING AND VARIABLES
export const ListItem = styled.li`
  display: inline;
  font-size: ${({ theme }) => theme.typeography.body1.fontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.green};
  a {
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      text-decoration: underline;
    }
  }
`
