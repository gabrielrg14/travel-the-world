import { DefaultSeoProps } from 'next-seo'

const siteUrl = 'https://travel-the-world-gabrielrg.vercel.app/'

const config: DefaultSeoProps = {
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Travel the World'
  }
}

export default config
