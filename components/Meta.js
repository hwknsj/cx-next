import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '@/lib/constants'

const Meta = () => (
  <Head>
    <meta name='msapplication-TileColor' content='#111' />
    <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
    <meta name='theme-color' content='#111' />
    <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
    <link
      rel='icon'
      sizes='192x192'
      href='//www.nike.com/android-icon-192x192.png'
    />
    <link
      rel='icon'
      sizes='128x128'
      href='//www.nike.com/android-icon-128x128.png'
    />
    <link rel='apple-touch-icon' href='//www.nike.com/apple-touch-icon.png' />
    <link
      rel='apple-touch-icon'
      sizes='76x76'
      href='//www.nike.com/apple-touch-icon-76x76-precomposed.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='120x120'
      href='//www.nike.com/apple-touch-icon-120x120-precomposed.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='152x152'
      href='//www.nike.com/apple-touch-icon-152x152-precomposed.png'
    />
    <meta
      name='description'
      content={`A statically generated blog example using Next.js and Emotion.`}
    />
    <meta property='og:image' content={`${HOME_OG_IMAGE_URL}`} />
  </Head>
)

export default Meta
