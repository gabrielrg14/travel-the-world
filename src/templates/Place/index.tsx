import { NextSeo } from 'next-seo'

import * as S from './styles'
import Image from 'next/image'
import { IPlacePage } from 'interfaces'
import { ImageGallery, LinkWrapper } from 'components'
import { CloseOutline } from '@styled-icons/evaicons-outline'

type PlaceTemplateProps = {
  place: IPlacePage
}

export const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  const markerSrc = `/images/marker/${place.markerType}.png`

  return (
    <>
      <NextSeo
        title={place.name}
        description={place.description?.text || place.name}
        additionalLinkTags={[
          {
            rel: 'shortcut icon',
            href: markerSrc,
            sizes: '128x128'
          },
          {
            rel: 'apple-touch-icon',
            href: markerSrc,
            sizes: '128x128'
          }
        ]}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: `${place.name}, ${place.slug}`
          }
        ]}
        openGraph={{
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: place.gallery[0].caption || place.name
            }
          ]
        }}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/place/${place.slug}`}
      />

      <LinkWrapper href="/" title="Close" aria-label="Close place">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Title>
            <S.Heading>{place.name}</S.Heading>
            <Image
              src={markerSrc}
              title={`${place.markerType} marker`}
              alt={`${place.markerType} marker`}
              width={48}
              height={48}
            />
          </S.Title>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <ImageGallery name={place.name} gallery={place.gallery} />
        </S.Container>
      </S.Wrapper>
    </>
  )
}
