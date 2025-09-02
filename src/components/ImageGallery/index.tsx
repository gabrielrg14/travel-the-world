import Image from 'next/image'

import * as S from './styles'
import { IGalleryImage } from 'interfaces'

type ImageGalleryProps = {
  name: string
  gallery: IGalleryImage[]
}

export const ImageGallery = ({ name, gallery }: ImageGalleryProps) => (
  <S.Gallery>
    {gallery?.map((image, index) => (
      <S.ImageWrapper key={`image-${index}`}>
        <Image
          src={image.url}
          title={image.caption || name}
          alt={image.caption || name}
          data-testid={name}
          width={image.width}
          height={image.height}
          quality={75}
        />
        {image.caption && <S.Caption>{image.caption}</S.Caption>}
      </S.ImageWrapper>
    ))}
  </S.Gallery>
)
