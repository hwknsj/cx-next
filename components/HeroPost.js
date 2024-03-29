import Avatar from '@/components/Avatar'
import DateFormatter from '@/components/DateFormatter'
import CoverImage from '@/components/CoverImage'
import PostTitle from '@/components/PostTitle'
// import styled from '@emotion/styled'

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }) => (
  <section>
    <div className='mb-8 md:mb-16'>
      <CoverImage
        title={title}
        src={coverImage}
        slug={slug}
        height={620}
        width={1240}
      />
    </div>
    <div className='mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28'>
      <div>
        <PostTitle
          as={`/posts/${slug}`}
          href='/posts/[slug]'
          subtitle={<DateFormatter dateString={date} />}
        >
          {title}
        </PostTitle>
        <div className='mb-4 body2 md:mb-0'>
          <p className='mb-4 body2'>{excerpt}</p>
        </div>
      </div>
      <Avatar name={author.name} picture={author.picture} imgHeight={'100px'} />
    </div>
  </section>
)

export default HeroPost
