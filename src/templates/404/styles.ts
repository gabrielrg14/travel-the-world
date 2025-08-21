import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  max-width: var(--container);
  margin: auto;
  padding: var(--large) var(--medium);
`

export const Heading = styled.h1`
  font-size: var(--large);
  color: var(--highlight-color);
`

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--medium);
`
