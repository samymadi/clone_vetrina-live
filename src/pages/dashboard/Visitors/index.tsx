//react
import {memo, useEffect, useState} from 'react'

//Components
import Card from '../../../components/reusable/Card/index';
import Actions from './Actions';
import CardContent from './CardContent';
import StyledSelect from 'src/components/reusable/StyledSelect';
import {PeriodeFunction} from '../DashboardContent/PeriodChange';


const Visitors = ({views,isLoading,p}:Props) => {

    const {value,setValue,periodeView} = p
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
    p:PeriodeFunction
}
