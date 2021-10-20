import Container from '@/components/Container'
import styled from '@emotion/styled'
import { REPO_URL } from '@/lib/constants'

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.grey4};
  a.btn {
    background: ${({ theme }) =>
      theme.mode === 'dark' ? theme.colors.white : theme.colors.black};
    color: ${({ theme }) =>
      theme.mode === 'dark' ? theme.colors.black : theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.black};
    transition: background 0.1s ${({ theme }) => theme.cubicBezier}, color 0.1s;
    &:hover {
      background: ${({ theme }) =>
        theme.mode === 'dark' ? theme.colors.grey3 : theme.colors.grey2};
      color: ${({ theme }) =>
        theme.mode === 'dark' ? theme.colors.white : theme.colors.black};
    }
  }
`

const Footer = () => (
  <FooterStyled>
    <Container>
      <div className='flex flex-col items-center py-28 lg:flex-row'>
        <h3 className='mb-10 text-4xl font-bold leading-tight tracking-tighter text-center lg:text-5xl lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2'>
          Statically Generated with Next.js.
        </h3>
        <div className='flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2'>
          Read about
          <a
            href='https://nextjs.org/docs/basic-features/pages'
            target='_blank'
            rel='noopener noreferrer'
            className='px-12 py-3 mx-3 mb-6 font-bold lg:px-8 lg:mb-0 btn'
          >
            Next.js
          </a>
          &nbsp; &amp; &nbsp;
          <a
            href='https://emotion.sh'
            target='_blank'
            rel='noopener noreferrer'
            className='px-12 py-3 mx-3 mb-6 font-bold lg:px-8 lg:mb-0 btn'
          >
            Emotion
          </a>
          <a
            href={`${REPO_URL}`}
            target='_blank'
            rel='noopener noreferrer'
            className='mx-3 font-bold hover:underline'
          >
            View on GitHub Enterprise
          </a>
        </div>
      </div>
    </Container>
  </FooterStyled>
)

export default Footer
