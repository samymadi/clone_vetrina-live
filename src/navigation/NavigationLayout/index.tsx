import {BrowserRouter as Router} from 'react-router-dom';
//styles
import { Root,Container,MainRouteContainer } from './style';


//components
import { NavigationBar,AppBar } from 'src/components';


//navigation 
import RoutingConfig from '../RoutingConfig'

const Layout = () => {
    return (
        <Root>
            <Router>
                <NavigationBar/>
                <Container>
                        <AppBar/>
                        <MainRouteContainer>
                                <RoutingConfig />
                        </MainRouteContainer>
                </Container>
            </Router>    
        </Root>
    );
}

export default Layout;
