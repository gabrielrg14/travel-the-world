import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--small);
  background-color: var(--dark-color);
  color: var(--light-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--x-small);
  z-index: 1100;

  a,
  span,
  small {
    font-size: var(--small);
    line-height: var(--small);
    text-align: center;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--small);
`

export const LegendIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`
