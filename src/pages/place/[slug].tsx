import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { client } from 'graphql/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetPlacesQuery, GetPlaceBySlugQuery } from 'graphql/generated/graphql'
import { IPlacePage } from 'interfaces'
import { PlaceTemplate } from 'templates'

export const getStaticPaths: GetStaticPaths = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 12
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    revalidate: 60,
    props: { place }
  }
}

type PlaceProps = {
  place: IPlacePage
}

const Place = ({ place }: PlaceProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return <PlaceTemplate place={place} />
}

export default Place
