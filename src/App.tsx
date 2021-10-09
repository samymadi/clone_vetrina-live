//material ui Styles
import globalTheme from "./Styles/GlobalTheme";
import { ThemeProvider } from "@mui/material";

import Layout from './navigation/NavigationLayout';



function App() {
  return (
    <ThemeProvider theme={globalTheme}>
          <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
