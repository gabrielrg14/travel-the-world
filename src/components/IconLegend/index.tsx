import * as S from './styles'
import Image from 'next/image'
import { legendIcons, legendLinks } from 'utils'
import { LegendLink } from 'components'

export const IconLegend = () => {
  const juicyFishLink = legendLinks[0]
  const flaticonLink = legendLinks[1]

  return (
    <S.Wrapper>
      <S.Icons>
        {legendIcons.map((icon) => (
          <S.LegendIcon key={icon.name}>
            <LegendLink {...icon}>
              <Image
                src={`/images/marker/${icon.name}.png`}
                title={`${icon.title} icon`}
                alt={`${icon.title} icon`}
                width={32}
                height={32}
              />
            </LegendLink>
            <span>{icon.text}</span>
          </S.LegendIcon>
        ))}
      </S.Icons>

      <small>
        The icons on the map were created by <LegendLink {...juicyFishLink} />{' '}
        and published on the platform <LegendLink {...flaticonLink} />
      </small>
    </S.Wrapper>
  )
}
