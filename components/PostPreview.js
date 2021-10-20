// import Avatar from '@/components/Avatar'
import DateFormatter from '@/components/DateFormatter'
import CoverImage from '@/components/CoverImage'
// import Link from 'next/link'
import { css } from '@emotion/react'
import PostTitle from '@/components/PostTitle'
import styled from '@emotion/styled'

const PostPreviewStyles = styled.article`
  /* padding-left: 2rem;
  padding-right: 2rem; */
  padding: 2rem;
  /* margin-bottom: 2rem; */
  /* margin-top: 2rem; */
  transition: box-shadow 0.2s ${({ theme }) => theme.cubicBezier};
  &:hover {
    box-shadow: 4px 4px 24px 4px ${({ theme }) => theme.colors.hoverBg};
  }
  /* img {
    transition: filter 0.2s ${({ theme }) => theme.cubicBezier};
    &:hover {
      filter: brightness(0.8);
    }
  } */
  p.excerpt {
    text-align: justify;
    ${({ theme }) => css({ ...theme.typeography.body3 })};
  }
`

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }) => (
  <PostPreviewStyles>
    {/* <div className='mb-5'> */}
    <CoverImage
      slug={slug}
      title={title}
      src={coverImage}
      height={278}
      width={556}
    />
    {/* </div> */}
    <PostTitle
      as={`/posts/${slug}`}
      href='/posts/[slug]'
      subtitle={<DateFormatter dateString={date} />}
    >
      {title}
    </PostTitle>
    <p className='excerpt'>{excerpt}</p>
    {/* <Avatar name={author.name} picture={author.picture} /> */}
  </PostPreviewStyles>
)

export default PostPreview
