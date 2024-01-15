import * as S from './styles'
import Link from 'next/link'

type LinkWrapperProps = {
  href: string
  ariaLabel: string
  children: React.ReactNode
}

export const LinkWrapper = ({
  href,
  ariaLabel,
  children
}: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={href} aria-label={ariaLabel}>
      {children}
    </Link>
  </S.Wrapper>
)
