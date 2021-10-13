import {memo,useEffect,useState} from 'react';

//Componet
import Card from '../../../components/reusable/Card/index';
import Actions from './Actions';
import CardContent from './CardContent';

import StyledSelect from 'src/components/reusable/StyledSelect';

const Orders = ({orders,isLoading,handleChange}:any) => {

    const [value,setValue] = useState<number>(0);
    const [periodeView,setPeriodView] = useState<string>('day')

    console.log(orders);
    useEffect(()=>{
            handleChange(setPeriodView,value);
    },[value])


   
    return (
        <Card 
            icon='list' 
            title='Orders'
            headerAction={<StyledSelect 
                                setValue={setValue} 
                                value={value} 
                                values={['Today','This week','This month']}/>} 
            actions={<Actions />}>
                <CardContent value={orders[periodeView]} isLoading={isLoading}/>
        </Card>
    );
}

export default memo(Orders);

interface Props{
    orders:any
    isLoading:boolean
    handleChange:any
}

