import Avatar from '@/components/Avatar'
import DateFormatter from '@/components/DateFormatter'
import CoverImage from '@/components/CoverImage'
import PostTitle from '@/components/PostTitle'

const PostHeader = ({ title, coverImage, date, author }) => (
  <>
    <div className='md:flex md:mb-12'>
      <PostTitle subtitle={<DateFormatter dateString={date} />}>
        {title}
      </PostTitle>
      <Avatar name={author.name} picture={author.picture} imgHeight={'40px'} />
    </div>
    <section className='mb-8 md:mb-16 sm:mx-0'>
      <CoverImage title={title} src={coverImage} height={620} width={1240} />
    </section>
  </>
)

export default PostHeader
