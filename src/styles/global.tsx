import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing-: antialiased;
    background-color: #110a12;
  }

  body, input, button {
    font-family: 'Jost', sans-serif;
    font-size: 16px;
  }

  a, button {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
