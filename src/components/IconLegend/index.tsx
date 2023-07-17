import * as S from './styles'
import Link from 'next/link'

const IconLegend = () => (
  <S.Legend>
    <p>
      Icons created by{' '}
      <Link
        href="https://www.flaticon.com/authors/juicy-fish"
        title="juicy_fish icons"
        target="_blank"
      >
        juicy_fish
      </Link>{' '}
      and published on the platform{' '}
      <Link href="https://www.flaticon.com/" title="flaticon" target="_blank">
        Flaticon
      </Link>
    </p>
  </S.Legend>
)

export default IconLegend
