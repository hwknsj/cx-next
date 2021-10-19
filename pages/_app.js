import { globalStyles } from '@/styles/globalStyles'
import { theme } from '@/styles/baseTheme'
import { ThemeProvider } from '@emotion/react'
// import { CloudinaryContext } from 'cloudinary-react'
import { useState } from 'react'
import Head from 'next/head'
import { GlobalStyles as TWGlobal } from 'twin.macro'

export default function MyApp({ Component, pageProps }) {
  console.log({ pageProps })
  const [themeMode, setThemeMode] = useState('light')
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
      {globalStyles('light')}
      <ThemeProvider theme={theme(themeMode)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
