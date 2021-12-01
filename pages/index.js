import Container from '@/components/Container'
import MoreStories from '@/components/MoreStories'
import HeroPost from '@/components/HeroPost'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'
import { getAllPosts } from '@/lib/api'
import Head from 'next/head'
import Hero from '@/components/Hero'

const Index = ({ allPosts }) => {
  const latestPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Head>
        <title>CX | Next.js & Emotion</title>
      </Head>
      <Intro />
      <Hero />
      <Container>
        {latestPost && (
          <HeroPost
            title={latestPost.title}
            coverImage={latestPost.coverImage}
            date={latestPost.date}
            author={latestPost.author}
            slug={latestPost.slug}
            excerpt={latestPost.excerpt}
          />
        )}
        {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts }
  }
}
