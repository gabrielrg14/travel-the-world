import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --highlight-color: #18a330;
    --dark-color: #161817;
    --light-color: #f7fcfe;
    --grey-color: #cccccc;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background-color: var(--dark-color);
    color: var(--light-color);
  }

  body {
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: var(--dark-color);
    border-radius: 0%;
  }

  ::-webkit-scrollbar-track-piece:hover {
    box-shadow: inset 0 1px 1px var(--light-color);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100%;
    background-color: var(--dark-color);
    background-image: -webkit-linear-gradient(90deg, transparent, var(--highlight-color) 45%, var(--highlight-color) 45%, transparent);
  }

  ::-webkit-scrollbar-thumb:hover {
    border-radius: 0%;
  }

  p, a {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight-color);
  }
`
