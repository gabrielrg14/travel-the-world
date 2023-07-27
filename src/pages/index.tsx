import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'

import { MapProps } from 'components/Map'
import HomeTemplate from 'templates/Home'

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 100
  })

  return {
    revalidate: 60, // 1 minute
    props: { places }
  }
}

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}
