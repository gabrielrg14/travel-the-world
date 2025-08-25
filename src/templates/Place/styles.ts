import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--x-large) var(--large);
`

export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: var(--x-small);
  margin-bottom: var(--large);
`

export const Heading = styled.h1`
  font-size: var(--x-large);
`

export const Body = styled.div`
  margin-bottom: var(--x-large);

  p {
    font-size: var(--medium);
    line-height: var(--large);
    margin-bottom: var(--medium);
  }
`

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
