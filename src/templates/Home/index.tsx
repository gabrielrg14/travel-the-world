import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline'

import { MapProps } from 'components/Map'
import LinkWrapper from 'components/LinkWrapper'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const HomeTemplate = ({ places }: MapProps) => (
  <>
    <LinkWrapper href="/about">
      <InfoOutline size={32} aria-label="About" />
    </LinkWrapper>
    <Map places={places} />
  </>
)

export default HomeTemplate
