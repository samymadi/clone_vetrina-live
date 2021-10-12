import {memo} from 'react';

import { Card } from 'src/components/reusable';

//component 
import Content from './Content';
import Actions from './Actions';

const index = () => {
    return (
        <Card icon='users' title='Invite friend' actions={<Actions/>} >
            <Content/>
        </Card>
    );
}

export default memo(index);
