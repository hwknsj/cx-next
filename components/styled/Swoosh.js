import styled from '@emotion/styled'

export const SwooshStyles = styled.span`
  display: flex;
  align-self: center;
  box-align: center;
  margin-right: 2rem;
  max-height: 100%;
  .logo {
    max-height: 100%;
    width: 120px;
    filter: invert(${({ theme }) => (theme.mode === 'dark' ? '100%' : '0')});
  }
`

export const Swoosh = () => (
  <SwooshStyles>
    {/* eslint-disable-next-line */}
    <img className='logo' src='/assets/logo.svg' alt='Nike Swoosh' />
  </SwooshStyles>
)

export default Swoosh
