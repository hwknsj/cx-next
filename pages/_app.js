import { GlobalStyles } from '@/styles/globalStyles'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { GlobalStyles as TWGlobal } from 'twin.macro'
import { ThemeProvider } from '@/lib/ThemeContext'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='Nike CX | Next.js' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
      </Head>
      <TWGlobal />
      <ThemeProvider>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
