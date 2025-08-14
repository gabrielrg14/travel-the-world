import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: var(--dark-color);
  color: var(--light-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  z-index: 1100;

  span {
    font-size: 1.2rem;
    line-height: var(--small);
    text-align: start;
  }

  a,
  small {
    font-size: 1rem;
    line-height: var(--small);
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const IconCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`
