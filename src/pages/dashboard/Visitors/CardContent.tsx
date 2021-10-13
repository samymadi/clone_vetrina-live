import { Typography,CircularProgress } from '@mui/material';
import React from 'react';

//component
import { ManageLoading } from 'src/components/reusable';

const CardContent = ({value,isLoading}:Props) => {

    console.log('card component',value)
    return (
        <Typography 
            mt='30px' 
            mb='40px'
            color='primary' 
            fontSize='42px' 
            fontWeight="500">
                <ManageLoading loader={<CircularProgress size='30px' />} isLoading={isLoading}>
                    <>
                        {value}
                    </>
                </ManageLoading>  
        </Typography>
    );
}

export default CardContent;


interface Props{
    value:string
    isLoading:boolean
}
