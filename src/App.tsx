import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';



//Test Component 
import Card from './Components/Card/index'
import StyledLink from './Components/StyledLink';
import Dashboard from './Components/Panel';
import NavigationBar from './Components/NavigationBar';

//material ui Styles
import globalTheme from "./Styles/GlobalTheme";
import { ThemeProvider,Typography } from "@mui/material";
import Layout from './Components/Layout';



function App() {
  return (
    <ThemeProvider theme={globalTheme}>
          <Router>
            <Switch>
              <Route exact  path='/test/card'>
                  <Card title='Visitors ' icon='eye' actions={<StyledLink to='/' target='_blank' title='Do you want more'/>} >
                    <Typography>
                      Some informations
                    </Typography>
                  </Card>
              </Route>
              <Route exact path='/dashboard'>
                  <Layout/>
              </Route>

              <Route exact path='/panel'>
                    <Dashboard />
              </Route>

            </Switch>
          </Router>
    </ThemeProvider>
  );
}

export default App;
