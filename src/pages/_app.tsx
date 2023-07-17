import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'
import NextNProgress from 'nextjs-progressbar'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress
        color="var(--highlight)"
        height={5}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
