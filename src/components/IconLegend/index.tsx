import * as S from './styles'
import Link from 'next/link'

const IconLegend = () => (
  <S.Legend>
    <small>
      The icons on the map were created by{' '}
      <Link
        href="https://www.flaticon.com/authors/juicy-fish"
        title="juicy_fish icons"
        aria-label="juicy_fish"
        target="_blank"
      >
        juicy_fish
      </Link>{' '}
      and published on the platform{' '}
      <Link
        href="https://www.flaticon.com/"
        title="flaticon"
        aria-label="Flaticon"
        target="_blank"
      >
        Flaticon
      </Link>
    </small>
  </S.Legend>
)

export default IconLegend
