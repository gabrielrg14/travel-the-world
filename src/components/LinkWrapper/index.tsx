import * as S from './styles'
import Link, { LinkProps } from 'next/link'

type LinkWrapperProps = {
  children: React.ReactNode
}

export const LinkWrapper = ({
  children,
  ...rest
}: LinkProps & LinkWrapperProps) => (
  <S.Wrapper>
    <Link {...rest}>{children}</Link>
  </S.Wrapper>
)
