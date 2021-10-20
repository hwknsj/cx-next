import PostTitle from '@/components/PostTitle'
import { Circle } from '@/styled/Circle'
import styled from '@emotion/styled'
import { useTheme } from '@/lib/ThemeContext'

const HeroStyles = styled.section`
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
  .cover {
    display: inline;
    height: 620px;
    white-space: nowrap;
    overflow-x: hidden;
    text-align: center;
    div {
      display: inline-flex;
      margin-right: -15%;
    }
  }
`

const circles = ['black', 'orange', 'red', 'green', 'white']

const Hero = () => {
  const { dark } = useTheme()
  return (
    <HeroStyles>
      <div className='mb-8 md:mb-16 cover'>
        <Circle color={'black'} />
        <Circle color={'grey2'} />
        <Circle color={'gradient'} />
        <Circle color={'red2'} />
        <Circle color={'green'} />
        <Circle color={'white'} />
      </div>
      <div className='mt-20 mb-20 text-center md:grid md:gap-x-16 lg:gap-x-8 md:mb-28'>
        <PostTitle subtitle='Everything with style'>Emotion 👩‍🎤</PostTitle>
      </div>
    </HeroStyles>
  )
}

export default Hero
