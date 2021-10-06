import {memo} from 'react';

//Component 
import Card from '../../../Card/index' 
import CardContent from './CardContent';
import Actions from './Actions';

const ConfigShop = () => {
    return (
        <Card 
                icon='tool' 
                title='Configure your shop' 
                actions={<Actions />}>
                    <CardContent></CardContent>
        </Card>
    );
}

export default memo(ConfigShop);
