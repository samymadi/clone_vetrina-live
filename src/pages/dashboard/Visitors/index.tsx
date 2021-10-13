//react
import {memo, useEffect, useState} from 'react'

//Components
import Card from '../../../components/reusable/Card/index';
import Actions from './Actions';
import CardContent from './CardContent';
import StyledSelect from 'src/components/reusable/StyledSelect';


const Visitors = ({views,isLoading,handleChange}:Props) => {

    const [value,setValue] = useState<number>(0);
    const [periodeView,setPeriodView] = useState<string>('day')
     console.log(value,views);



    useEffect(()=>{
            handleChange(setPeriodView,value);
    },[value]) 


    return (
        <Card 
            icon='eye' 
            title='Visitors'
            headerAction={<StyledSelect 
                        setValue={setValue} 
                        value={value} 
                        values={['Today','This week','This month']}/>} 
            actions={<Actions/>}>
                
                <CardContent value={views[periodeView]} isLoading={isLoading} />
        </Card>
    );
}

export default memo(Visitors);


interface Props {
    views:any
    isLoading:boolean
    handleChange:any
}
