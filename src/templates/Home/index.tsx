import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

import { MapProps } from 'components/Map'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import IconLegend from 'components/IconLegend'

const title = 'Travel the World'

const HomeTemplate = ({ places }: MapProps) => (
  <>
    <NextSeo
      title={title}
      description="A site to show pinned places that have already been visited or those that you must visit someday."
      openGraph={{
        images: [
          {
            url: 'https://travel-the-world-gabrielrg.vercel.app/img/cover.png',
            width: 1280,
            height: 720,
            alt: title
          }
        ]
      }}
    />

    <LinkWrapper href="/about">
      <InfoOutline size={32} aria-label="About" />
    </LinkWrapper>
    <Map places={places} />
    <IconLegend />
  </>
)

export default HomeTemplate
