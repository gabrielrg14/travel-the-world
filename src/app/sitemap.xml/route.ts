import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'

export async function GET() {
  const locBase = 'https://travel-the-world-gabrielrg.vercel.app'
  const lastmod = new Date().toISOString()
  const changefreq = 'daily'
  const priority = 0.7

  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  const fields: ISitemapField[] = places.map(({ slug }) => ({
    loc: `${locBase}/place/${slug}`,
    lastmod,
    changefreq,
    priority
  }))

  fields.push(
    {
      loc: locBase,
      lastmod,
      changefreq,
      priority
    },
    {
      loc: `${locBase}/about`,
      lastmod,
      changefreq,
      priority
    }
  )

  return getServerSideSitemap(fields)
}