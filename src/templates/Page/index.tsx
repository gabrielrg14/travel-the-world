import { NextSeo } from 'next-seo'

import * as S from './styles'
import { IPage } from 'interfaces'
import { LinkWrapper } from 'components'
import { CloseOutline } from '@styled-icons/evaicons-outline'

type PageTemplateProps = {
  page: IPage
}

export const PageTemplate = ({ page }: PageTemplateProps) => (
  <>
    <NextSeo
      title={`${page.heading} - Travel the World`}
      description={page.body.text}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: `${page.heading}`
        }
      ]}
      canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/${page.slug}`}
    />

    <S.Content>
      <LinkWrapper href="/" title="Close" aria-label="Close page">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{page.heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: page.body.html }} />
      </S.Body>
    </S.Content>
  </>
)
