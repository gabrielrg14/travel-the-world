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
  margin-bottom: var(--large);
  color: var(--highlight-color);
`

export const Body = styled.div`
  p,
  blockquote {
    font-size: var(--medium);
    line-height: var(--medium);
    margin-bottom: var(--medium);
  }
`
