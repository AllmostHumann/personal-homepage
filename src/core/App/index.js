import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import PersonalHomepage from "../../features/PersonalHomepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Normalize />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
