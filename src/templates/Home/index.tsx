import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

import { IPlace } from 'interfaces'
import { LinkWrapper, IconLegend } from 'components'
import { InfoOutline } from '@styled-icons/evaicons-outline'

const title = 'Travel the World'

type HomeTemplateProps = {
  places?: IPlace[]
}

export const HomeTemplate = ({ places }: HomeTemplateProps) => (
  <>
    <NextSeo
      title={title}
      description="A site to show pinned places that have already been visited or those that you must visit someday."
      additionalMetaTags={[
        {
          name: 'keywords',
          content:
            'Place, Places, Pinned, Travel, World, Travel the world, Visit, Visited'
        }
      ]}
      openGraph={{
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/img/cover.png`,
            width: 1280,
            height: 720,
            alt: title
          }
        ]
      }}
      canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
    />

    <LinkWrapper href="/about" ariaLabel="Go to About page">
      <InfoOutline size={32} />
    </LinkWrapper>

    <Map places={places} />

    <IconLegend />
  </>
)
