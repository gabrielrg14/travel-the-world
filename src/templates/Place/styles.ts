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
