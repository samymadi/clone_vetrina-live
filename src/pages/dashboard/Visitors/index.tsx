//react
import {memo, useState} from 'react'

//Components
import Card from '../../../components/reusable/Card/index';
import Actions from './Actions';
import CardContent from './CardContent';
import StyledSelect from 'src/components/reusable/StyledSelect';


const Visitors = () => {

    const [value,setValue] = useState<number>(0);
    return (
        <Card 
            icon='eye' 
            title='Visitors'
            headerAction={<StyledSelect setValue={setValue} value={value} values={['Today','This week','This month']}/>} 
            actions={<Actions/>}>
                
                <CardContent/>
        </Card>
    );
}

export default memo(Visitors);
