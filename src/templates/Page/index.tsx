import { NextSeo } from 'next-seo'

import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'

export type PageTemplateProps = {
  heading: string
  body: {
    html: string
    text: string
  }
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <>
    <NextSeo
      title={`${heading} - Travel the World`}
      description={body.text}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: `${heading}`
        }
      ]}
    />

    <S.Content>
      <LinkWrapper href="/" ariaLabel="Go back to map">
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
