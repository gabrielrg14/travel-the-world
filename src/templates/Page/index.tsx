import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: {
    html: string
    text: string
  }
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <>
    <NextSeo title={`${heading} - Travel the World`} description={body.text} />

    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body.html }} />
      </S.Body>
    </S.Content>
  </>
)

export default PageTemplate
