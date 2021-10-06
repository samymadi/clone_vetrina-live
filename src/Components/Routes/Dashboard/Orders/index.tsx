import {memo} from 'react';

//Componet
import Card from '../../../Card/index';
import Actions from './Actions';
import CardContent from './CardContent';

const Orders = () => {
    return (
        <Card 
            icon='list' 
            title='Orders' 
            actions={<Actions />}>
                <CardContent/>
        </Card>
    );
}

export default memo(Orders);
