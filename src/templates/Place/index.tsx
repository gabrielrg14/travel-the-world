import Image from 'next/image'

import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import * as S from './styles'

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
    }
    gallery: ImageProps[]
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
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
                width={800}
                height={500}
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
