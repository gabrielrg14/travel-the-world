import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

import { client } from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'

export async function GET() {
  const locBase = process.env.NEXT_PUBLIC_SITE_URL
  const lastmod = new Date().toISOString()
  const changefreq = 'daily'
  const priority = 0.7

  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 100
  })

  const fields: ISitemapField[] = places.map(({ slug }) => ({
    loc: `${locBase}/place/${slug}`,
    lastmod,
    changefreq,
    priority
  }))

  fields.push(
    {
      loc: `${locBase}/`,
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
