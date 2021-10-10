//react
import {memo} from 'react'

//Components
import Card from '../../../components/reusable/Card/index';
import Actions from './Actions';
import CardContent from './CardContent';
import StyledSelect from 'src/components/reusable/StyledSelect';


const Visitors = () => {
    return (
        <Card 
            icon='eye' 
            title='Visitors'
            headerAction={<StyledSelect/>} 
            actions={<Actions/>}>
                
                <CardContent/>
        </Card>
    );
}

export default memo(Visitors);
