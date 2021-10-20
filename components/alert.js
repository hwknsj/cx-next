import Container from '@/components/Container'
import cn from 'classnames'
import { css, styled } from 'twin.macro'
import { REPO_URL } from '@/lib/constants'

const { NODE_ENV } = process.env

const AlertStyles = styled.div`
  ${({ theme }) => css({ ...theme.typeography.body2 })};
  a {
    ${({ theme }) => css({ ...theme.links.body2 })};
  }
`
const Alert = ({ preview }) => (
  <AlertStyles className={cn('border-b')}>
    <Container>
      <p className='py-2 text-center'>
        <>
          {preview ||
            (NODE_ENV === 'development' && (
              <div>⚠️ This page is a work in progress! ⚠️</div>
            ))}
          The source code is&nbsp;
          <a
            href={`${REPO_URL}`}
            target='_blank'
            rel='noopener noreferrer'
            className='underline transition-colors duration-200 hover:text-blue'
          >
            available on GitHub (Nike Enterprise)
          </a>
          .
        </>
      </p>
    </Container>
  </AlertStyles>
)

export default Alert
