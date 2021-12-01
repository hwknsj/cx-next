import Image from 'next/image'
// import { Image } from 'cloudinary-react'
import styled from '@emotion/styled'

const AvatarStyles = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-left: 2px solid ${({ theme }) => theme.colors.grey1};
  .avatar {
    object-fit: contain;
    max-height: ${props => props.imgHeight || '80px'};
    aspect-ratio: 1;
  }
  .name {
    font-weight: 500;
  }
`

const Avatar = ({ name, picture, imgHeight }) => (
  <AvatarStyles imgHeight={imgHeight}>
    {/* eslint-disable-next-line */}
    <img src={picture} className='h-auto mx-4 avatar' alt={name} />
    <figcaption className='text-xl name'>{name}</figcaption>
  </AvatarStyles>
)

export default Avatar
