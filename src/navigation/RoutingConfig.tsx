import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';


//Routes path
import {CATALOGUE,DASHBOARD,ROOT} from './CONSTANTS';
import { Link } from 'src/components/reusable';

import {ReactComponent as List} from '../assets/Icon/list.svg';
import CustomSvg from 'src/components/reusable/CustomSvg';


//Routes components 

import { Dashboard } from 'src/pages';

const RoutingConfig = () => {
    return (
            <Switch>
                <Route path={DASHBOARD}  exact component={Dashboard} />
                <Route path='/' exact render={()=><CustomSvg icon={<List/>}/>}/>
                {/* <Route path={CATALOGUE}  exact component={} /> */}
                {/* <Route path={ROOT}  exact component={} /> */}
            </Switch>
    );
}

export default RoutingConfig;
