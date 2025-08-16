import * as S from './styles'
import Link, { LinkProps } from 'next/link'

type LinkWrapperProps = LinkProps & {
  title?: string
  children: React.ReactNode
}

export const LinkWrapper = ({ title, children, ...rest }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link title={title} {...rest}>
      {children}
    </Link>
  </S.Wrapper>
)
