import styled from 'styled-components'

export const Wrapper = styled.div`
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
  flex-wrap: wrap;
  gap: 2rem;
  z-index: 1100;

  a,
  span {
    font-size: 1.3rem;
    line-height: 1.3;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const IconCaption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`
