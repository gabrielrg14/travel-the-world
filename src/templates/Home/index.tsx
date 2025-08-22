import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

import { IPlace } from 'interfaces'
import { LinkWrapper, IconLegend } from 'components'
import { InfoOutline } from '@styled-icons/evaicons-outline'

type HomeTemplateProps = {
  places?: IPlace[]
}

export const HomeTemplate = ({ places }: HomeTemplateProps) => {
  const title = 'Travel the World'
  const iconSrc = '/images/meta/icon-192.png'

  return (
    <>
      <NextSeo
        title={title}
        description="A site to show pinned places that have already been visited or those that you must visit someday."
        additionalLinkTags={[
          {
            rel: 'shortcut icon',
            href: iconSrc,
            sizes: '192x192'
          },
          {
            rel: 'apple-touch-icon',
            href: iconSrc,
            sizes: '192x192'
          }
        ]}
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
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/meta/cover.png`,
              width: 1280,
              height: 720,
              alt: title
            }
          ]
        }}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
      />

      <LinkWrapper href="/about" title="About" aria-label="Go to about page">
        <InfoOutline size={32} />
      </LinkWrapper>

      <Map places={places} />

      <IconLegend />
    </>
  )
}
