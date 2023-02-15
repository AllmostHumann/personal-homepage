import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

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
        transition: background 0.3s;
        background-color: ${({ theme }) => theme.color.whiteLilac};
        letter-spacing: 0.05em;
}
`;
