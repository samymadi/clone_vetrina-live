//system imports 
import {BrowserRouter as Router} from 'react-router-dom';


//styles imports 
import { Root,Container,MainRouteContainer } from './style';


//custom components imports 


//navigations components imports 
import RoutingConfig from '../../RoutingConfig'
import { NavigationBar,AppBar,ErrorHandler } from 'src/navigation/components/';



const Layout = () => {
    return (
        <Root>
            <Router>
              <ErrorHandler>
                    <NavigationBar/>
                    <Container>
                            <AppBar/>
                            <MainRouteContainer>
                                    <RoutingConfig />
                            </MainRouteContainer>
                    </Container>
                </ErrorHandler>
            </Router>    
        </Root>
    );
}

export default Layout;
