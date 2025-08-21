import { NextSeo } from 'next-seo'

import * as S from './styles'
import { LinkWrapper } from 'components'
import { CloseOutline } from '@styled-icons/evaicons-outline'

export const PageNotFoundTemplate = () => {
  return (
    <>
      <NextSeo title="404 Error" />

      <S.Content>
        <LinkWrapper href="/" title="Close" aria-label="Close page">
          <CloseOutline size={32} />
        </LinkWrapper>

        <S.Heading>404 Error 🗺</S.Heading>

        <S.Body>The place or page was not found! 🧭</S.Body>
      </S.Content>
    </>
  )
}
