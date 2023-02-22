import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";
import PersonalHomepage from "../../features/PersonalHomepage";

function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <Normalize />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
