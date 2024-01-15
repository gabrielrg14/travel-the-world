import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { client } from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetPagesQuery, GetPageBySlugQuery } from 'graphql/generated/graphql'
import { IPage } from 'interfaces'
import { PageTemplate } from 'templates'

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    revalidate: 60,
    props: { page }
  }
}

type PageProps = {
  page: IPage
}

const Page = ({ page }: PageProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return <PageTemplate page={page} />
}

export default Page
