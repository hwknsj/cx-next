import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'

const CoverImageStyles = styled.figure`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1280px;
  img {
    object-fit: cover;
  }
  position: relative;
  display: block;
  @media (min-width: 640px) {
    margin-left: 0px;
    margin-right: 0px;
  }
  transition: filter 0.2s ${({ theme }) => theme.cubicBezier};
  &:hover {
    filter: brightness(0.8);
  }
  /* a {
    transition: box-shadow 0.5s ${({ theme }) => theme.cubicBezier};
    &:hover {
      box-shadow: 4px 4px 24px 4px ${({ theme }) => theme.colors.hoverBg};
    }
  } */
`

const CoverImage = ({ title, src, slug, height, width }) => {
  const image = (
    <Image
      src={src}
      alt={`${title} cover image`}
      aria-label={`${title} cover image`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug
      })}
      layout='responsive'
      width={width}
      height={height}
    />
  )
  return (
    <CoverImageStyles>
      {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </CoverImageStyles>
  )
}

export default CoverImage
