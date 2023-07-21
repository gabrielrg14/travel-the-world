import { NextSeo } from 'next-seo'

import * as S from './styles'
import Image from 'next/image'
import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'

type ImageProps = {
  url: string
  width: number
  height: number
}

export type PlaceTemplateProps = {
  place: {
    id: string
    slug: string
    name: string
    location: {
      latitude: number
      longitude: number
    }
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  return (
    <>
      <NextSeo
        title={`${place.name} - Travel the World`}
        description={
          place.description?.text ||
          `Discover a little more about ${place.name}.`
        }
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
              alt: place.name
            }
          ]
        }}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/place/${place.slug}`}
      />

      <LinkWrapper href="/" ariaLabel="Go back to map">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery?.map((image, index) => (
              <Image
                key={`image-${index}`}
                src={image.url}
                width={image.width}
                height={image.height}
                quality={75}
                alt={place.name}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default PlaceTemplate
