import { DefaultSeoProps } from 'next-seo'

const siteUrl =
  process.env.SITE_URL || 'https://travel-the-world-gabrielrg.vercel.app/'

const config: DefaultSeoProps = {
  defaultTitle: 'Travel the World',
  themeColor: '#18a330',
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/img/icon-512.png',
      sizes: '512x512'
    },
    {
      rel: 'apple-touch-icon',
      href: '/img/icon-512.png',
      sizes: '512x512'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    },
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
      integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=',
      crossOrigin: ''
    }
  ],
  additionalMetaTags: [
    {
      name: 'google',
      content: 'notranslate'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en',
    url: siteUrl,
    siteName: 'Travel the World'
  }
}

export default config
