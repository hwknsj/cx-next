import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'

const CoverImageStyles = styled.figure`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  img,
  .cover-img {
    width: 100%;
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
  const img = (
    // eslint-disable-next-line
    <img
      src={src}
      alt={`${title} cover image`}
      aria-label={`${title} cover image`}
      className={`cover-img`}
    />
  )
  return (
    <CoverImageStyles height={height}>
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
