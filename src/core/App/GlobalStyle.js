import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
    font-family: 'Inter', sans-serif;
        word-break: break-word;
        padding: 115px 40px 110px 40px;
}
`;

export default GlobalStyle;