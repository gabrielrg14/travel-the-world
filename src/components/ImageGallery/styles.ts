import styled from 'styled-components'

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--large);

  img {
    width: 100%;
    height: 100%;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }

      100% {
        background-position: 40rem 0;
      }
    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Caption = styled.small`
  font-size: var(--small);
  margin-top: var(--x-small);
  text-align: center;
`
