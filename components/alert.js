import Container from './Container'
import cn from 'classnames'
import { REPO_URL } from '../lib/constants'

const { NODE_ENV } = process.env

const Alert = ({ preview }) => (
  <div
    className={cn('border-b', {
      'bg-accent-7 border-accent-7 text-white': preview,
      'bg-accent-1 border-accent-2': !preview
    })}
  >
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
  </div>
)

export default Alert
