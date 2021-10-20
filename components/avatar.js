import Image from 'next/image'
// import { Image } from 'cloudinary-react'
import styled from '@emotion/styled'

const AvatarStyles = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-left: 2px solid ${({ theme }) => theme.colors.grey1};
  .avatar {
    object-fit: contain;
    max-height: 100px;
  }
`

const Avatar = ({ name, picture }) => (
  <AvatarStyles>
    {/* eslint-disable-next-line */}
    <img src={picture} className='h-auto mx-4 avatar' alt={name} />
    <figcaption className='text-xl font-bold'>{name}</figcaption>
  </AvatarStyles>
)

export default Avatar
