import PostPreview from '@/components/PostPreview'

const MoreStories = ({ posts }) => (
  <section>
    <h2 className='mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl'>
      More Stories
    </h2>
    <div className='grid grid-cols-1 mb-32 md:grid-cols-1 md:gap-x-16 xl:grid-cols-2 xl:gap-x-32 gap-y-20 md:gap-y-32'>
      {posts.map(post => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  </section>
)

export default MoreStories
