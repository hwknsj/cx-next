import Image from 'next/image'
import styled from '@emotion/styled'

const AvatarStyles = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  border-left: 2px solid ${({ theme }) => theme.colors.black};
`

const Avatar = ({ name, picture }) => (
  <AvatarStyles>
    <Image
      src={picture}
      width={100}
      height={100}
      className='h-auto mr-4'
      objectFit
      alt={name}
    />
    <figcaption className='text-xl font-bold'>{name}</figcaption>
  </AvatarStyles>
)

export default Avatar
