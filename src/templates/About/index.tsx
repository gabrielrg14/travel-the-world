import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>About</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        dignissimos illum vel, eos suscipit deserunt hic reiciendis facere minus
        adipisci velit. Repudiandae numquam autem voluptate unde sapiente eos,
        soluta ea?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
