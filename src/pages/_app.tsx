import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GoogleAnalytics from 'components/Analytics'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

import GlobalStyles from 'styles/global'
import NextNProgress from 'nextjs-progressbar'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GoogleAnalytics />
      <VercelAnalytics />
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
