import { CMS_NAME } from '../lib/constants'
// import Title from './styled/Title'

const Intro = () => (
  <section className='flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12'>
    {/* <h1 className='text-6xl font-bold md:text-8xl md:pr-8'>Nike CX</h1> */}
    {/* <Title>Nike CX</Title> */}
    <h4 className='mt-5 text-center md:text-left'>
      A statically generated blog example using{' '}
      <a
        href='https://nextjs.org/'
        className='underline transition-colors duration-200 hover:text-blue'
      >
        Next.js
      </a>{' '}
      and {CMS_NAME}.
    </h4>
  </section>
)

export default Intro
