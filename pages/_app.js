import Head from 'next/head'
import { I18NProvider } from 'context/i18n'
import { NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <I18NProvider>
        <Component {...pageProps} />
      </I18NProvider>
    </NextUIProvider>
  )
}

export default MyApp
