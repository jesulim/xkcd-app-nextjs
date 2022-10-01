import Head from 'next/head'

import { NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
