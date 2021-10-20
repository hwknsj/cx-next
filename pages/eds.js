import Container from '@/components/Container'
import MoreStories from '@/components/MoreStories'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Layout from '@/components/Layout'
import { getAllPosts } from '@/lib/api'
import Head from 'next/head'

const EDSPage = ({ allPosts }) => {
  const morePosts = allPosts.slice(1)
  return (
    <Layout>
      <Head>
        <title>Emotion & Enterprise</title>
      </Head>
      <Intro />
      {<Hero />}
      <Container>
        {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export default EDSPage

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
