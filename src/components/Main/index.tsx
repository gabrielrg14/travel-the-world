import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="favicon.ico" alt="Ícone da Vercel" />
    <S.Title>NextJS</S.Title>
    <S.Description>
      Typescript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
