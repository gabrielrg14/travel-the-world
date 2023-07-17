import styled from 'styled-components'

export const Legend = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: var(--background);
  color: var(--white);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;

  a,
  small {
    font-size: 1.2rem;
    line-height: 1.3;
  }
`
