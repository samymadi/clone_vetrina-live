import {memo} from 'react';

//component 
import { Card } from 'src/components/reusable';

import Content from './Content';
import Actions from './Actions';

const index = () => {
    return (
        <Card title='Customer support' icon='headphones' actions={<Actions/>}>
            <Content/>
        </Card>
    );
}

export default memo(index)
