import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';


//Routes path
import {CATALOGUE,DASHBOARD,ROOT} from './CONSTANTS';



//Routes components 

import { Dashboard } from 'src/pages';

const RoutingConfig = () => {
    return (
            <Switch>
                <Route path={DASHBOARD}  exact component={Dashboard} />
                {/* <Route path={CATALOGUE}  exact component={} /> */}
                {/* <Route path={ROOT}  exact component={} /> */}
            </Switch>
    );
}

export default RoutingConfig;
