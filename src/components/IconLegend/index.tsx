import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'

export const IconLegend = () => (
  <S.Wrapper>
    <S.Icons>
      <S.IconCaption>
        <Link
          href="https://www.flaticon.com/free-icons/maps-and-location"
          title="Home"
          aria-label="Maps and location icons created by juicy_fish - Flaticon"
          target="_blank"
        >
          <Image
            src="/images/marker/home.png"
            width={32}
            height={32}
            alt="Home icon"
          />
        </Link>
        <span>My place</span>
      </S.IconCaption>
      <S.IconCaption>
        <Link
          href="https://www.flaticon.com/free-icons/maps-and-location"
          title="Car"
          aria-label="Maps and location icons created by juicy_fish - Flaticon"
          target="_blank"
        >
          <Image
            src="/images/marker/car.png"
            width={32}
            height={32}
            alt="Car icon"
          />
        </Link>
        <span>Visited by car</span>
      </S.IconCaption>
      <S.IconCaption>
        <Link
          href="https://www.flaticon.com/free-icons/airplane"
          title="Airplane"
          aria-label="Airplane icons created by juicy_fish - Flaticon"
          target="_blank"
        >
          <Image
            src="/images/marker/airplane.png"
            width={32}
            height={32}
            alt="Airplane icon"
          />
        </Link>
        <span>Visited by airplane</span>
      </S.IconCaption>
      <S.IconCaption>
        <Link
          href="https://www.flaticon.com/free-icons/goal"
          title="Target"
          aria-label="Goal icons created by juicy_fish - Flaticon"
          target="_blank"
        >
          <Image
            src="/images/marker/target.png"
            width={32}
            height={32}
            alt="Target icon"
          />
        </Link>
        <span>To be visited</span>
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
        title="Flaticon"
        aria-label="Flaticon"
        target="_blank"
      >
        Flaticon
      </Link>
    </small>
  </S.Wrapper>
)
