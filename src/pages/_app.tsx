import type { AppProps } from 'next/app'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { Analytics as GoogleAnalytics } from 'components'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { GlobalStyles } from 'styles'
import NextNProgress from 'nextjs-progressbar'

const App = ({ Component, pageProps }: AppProps) => {
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
