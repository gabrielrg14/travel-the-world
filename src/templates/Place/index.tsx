import { NextSeo } from 'next-seo'

import * as S from './styles'
import Image from 'next/image'
import { IPlace } from 'interfaces'
import { LinkWrapper } from 'components'
import { CloseOutline } from '@styled-icons/evaicons-outline'

type PlaceTemplateProps = {
  place: IPlace
}

export const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
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

      <LinkWrapper href="/" aria-label="Go back to map">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Title>
            <S.Heading>{place.name}</S.Heading>
            <Image
              src={`/images/marker/${place.markerType}.png`}
              width={48}
              height={48}
              alt={`${place.markerType} icon`}
            />
          </S.Title>

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
