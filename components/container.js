import styled from '@emotion/styled'
import { css } from '@emotion/react'
import tw from 'twin.macro'

const ContainerStyled = styled.div`
  ${css(tw`container px-5 mx-auto`)};
`

const Container = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
)

export default Container
