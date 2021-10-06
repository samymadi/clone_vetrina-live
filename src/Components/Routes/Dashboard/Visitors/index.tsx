//react
import {memo} from 'react'

//Components
import Card from '../../../Card/index';
import Actions from './Actions';
import CardContent from './CardContent';


const Visitors = () => {
    return (
        <Card 
            icon='eye' 
            title='Visitors' 
            actions={<Actions/>}>
                
                <CardContent/>
        </Card>
    );
}

export default memo(Visitors);
