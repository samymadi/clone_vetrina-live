import {memo,useEffect,useState} from 'react';

//Componets
import Card from '../../../components/reusable/Card/index';
import Actions from './Actions';
import CardContent from './CardContent';

import StyledSelect from 'src/components/reusable/StyledSelect';
import { PeriodeFunction } from '../DashboardContent/PeriodChange';

const Orders = ({orders,isLoading,p}:any) => {

    const {value,setValue,periodeView} = p
   
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
    p:PeriodeFunction    
}

