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
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
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
