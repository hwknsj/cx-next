import { globalStyles } from '../styles/globalStyles'
import { theme } from '../styles/theme'
import { ThemeProvider } from '@emotion/react'
import Head from 'next/head'
import { GlobalStyles as TWGlobal } from 'twin.macro'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='PlatCap | Next.js' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
      </Head>
      <TWGlobal />
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
