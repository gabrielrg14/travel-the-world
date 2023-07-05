import { GetStaticProps } from 'next'

import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'

import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 300, // 5 minutes
    props: { places }
  }
}

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}
