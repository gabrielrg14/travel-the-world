import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100; // bigger than leaflet
  top: var(--large);
  right: var(--large);
  cursor: pointer;

  svg {
    color: var(--highlight-color);
    transition: ease-in 0.1s;
  }

  &:hover {
    svg {
      scale: 1.1;
    }
  }
`
