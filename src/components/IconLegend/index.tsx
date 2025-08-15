import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'

export const IconLegend = () => (
  <S.Wrapper>
    <S.Icons>
      <S.IconCaption>
        <Link
          href="https://www.flaticon.com/free-icons/maps-and-location"
          title="maps-and-location icons"
          aria-label="Maps-and-location icons created by juicy_fish - Flaticon"
          target="_blank"
        >
          <Image
            src="/images/marker/home.png"
            width={32}
            height={32}
            alt="home icon"
          />
        </Link>
        <span>My place</span>
      </S.IconCaption>
      <S.IconCaption>
        <Link
          href="https://www.flaticon.com/free-icons/airplane"
          title="airplane icons"
          aria-label="Airplane icons created by juicy_fish - Flaticon"
          target="_blank"
        >
          <Image
            src="/images/marker/travel.png"
            width={32}
            height={32}
            alt="travel icon"
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
            src="/images/marker/target.png"
            width={32}
            height={32}
            alt="target icon"
          />
        </Link>
        <span>Place to be visited</span>
      </S.IconCaption>
    </S.Icons>

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
  </S.Wrapper>
)
