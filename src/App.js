import { GlobalStyle } from "./features/Theme/GlobalStyle";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./features/Theme/theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./features/Theme/themeSlice";
import PersonalHomepage from "./features/PersonalHomepage";

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
