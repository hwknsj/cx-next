import styled from '@emotion/styled'
import tw, { css } from 'twin.macro'

const ContainerStyled = styled.div`
  ${css(tw`container px-0 mx-auto`)};
`

const Container = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
)

export default Container
