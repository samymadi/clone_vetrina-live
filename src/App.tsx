// style imports 
import globalTheme from "./Styles/GlobalTheme";

//thirs party imports 
import { ThemeProvider } from "@mui/material";


//custom components imports 
import Layout from './navigation/components/NavigationLayout';



function App() {
  return (
    <ThemeProvider theme={globalTheme}>
          <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
