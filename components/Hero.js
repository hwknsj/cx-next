import PostTitle from '@/components/PostTitle'
import { Circle } from '@/styled/Circle'
import styled from '@emotion/styled'
import { useTheme } from '@/lib/ThemeContext'

const HeroStyles = styled.section`
  max-width: 100vw;
  display: grid;
  margin-left: 0;
  padding-left: 0;
  left: -50%;
  /* transform: translateX(-50%); */
  /* max-width: 1580px; */
  margin: 0;
  overflow-x: hidden;
  /* .cover {
    max-width: 100vw;
    min-width: 100vw;
    display: inline-flex;
    justify-content: space-evenly;
    height: 620px;
    white-space: nowrap;
    overflow-x: hidden;
    text-align: center;
    span {
      display: inline-flex;
      margin-right: -16%;
      transform: translateX(-50%);
    }
  } */
`

const CirclesDisplay = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 620px;
  white-space: nowrap;
  overflow-x: hidden;
  span.circle {
    display: inline-flex;
    margin-right: -14.285%;
    margin-left: -14.285%;
  }
`

const Hero = () => {
  const { dark } = useTheme()
  const circles = [
    dark ? 'grey5' : 'black',
    'grey2',
    'gradient',
    'red2',
    dark ? 'greenGradient' : 'green',
    'blueGradient',
    'white'
  ]
  return (
    <HeroStyles className='h-full'>
      <CirclesDisplay className='mb-8 md:mb-16 h-full'>
        {circles.map(color => (
          <Circle key={color} color={color} className='circle' />
        ))}
      </CirclesDisplay>
      <div className='mt-20 mb-20 text-center md:grid md:gap-x-16 lg:gap-x-8 md:mb-28'>
        <PostTitle subtitle={<em>everything with style</em>}>
          Emotion 👩‍🎤
        </PostTitle>
      </div>
    </HeroStyles>
  )
}

export default Hero
