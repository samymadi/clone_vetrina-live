import {memo} from 'react';

//componet 
import { Card } from 'src/components/reusable';
import CardContent from './CardContent';
import Actions from './Actions';





const index = () => {

    return (
        <Card 
            title='Extensions Marketplace' 
            icon='new app' 
            actions={<Actions/>}
            >
                <CardContent/>
       </Card>
    );
}

export default memo(index);
