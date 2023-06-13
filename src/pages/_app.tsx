import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globlal'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Travel the World</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A site to show pinned places that have already been visited or those that you must visit someday."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
