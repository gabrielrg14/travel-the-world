import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'

const IconLegend = () => (
  <S.Wrapper>
    <S.Icons>
      <S.IconCaption>
        <Link
          href="https://www.flaticon.com/free-icons/airplane"
          title="airplane icons"
          aria-label="Airplane icons created by juicy_fish - Flaticon"
          target="_blank"
        >
          <Image
            src="/img/marker-128.png"
            width={32}
            height={32}
            alt="Marker icon"
          />
        </Link>
        <span>Place visited</span>
      </S.IconCaption>
      <S.IconCaption>
        <Link
          href="https://www.flaticon.com/free-icons/goal"
          title="goal icons"
          aria-label="Goal icons created by juicy_fish - Flaticon"
          target="_blank"
        >
          <Image
            src="/img/target-128.png"
            width={32}
            height={32}
            alt="Target icon"
          />
        </Link>
        <span>Place to be visited</span>
      </S.IconCaption>
    </S.Icons>

    <span>
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
    </span>
  </S.Wrapper>
)

export default IconLegend
