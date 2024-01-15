import { GetStaticProps } from 'next'

import { client } from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { IPlace } from 'interfaces'
import { HomeTemplate } from 'templates'

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 100
  })

  return {
    revalidate: 60, // 1 minute
    props: { places }
  }
}

type HomeProps = {
  places?: IPlace[]
}

const Home = ({ places }: HomeProps) => {
  return <HomeTemplate places={places} />
}

export default Home
