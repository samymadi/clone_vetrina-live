import {memo} from 'react';

//material ui
import { Stack,Typography } from '@mui/material';


//style 
import  {textStyle,valueStyle,containerStyle} from './style';

const Item = ({text,value,valuePrefix}:Props) => {
    return (
        <Stack 
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={containerStyle}
            >
                
            <Typography sx={textStyle}>
                    {text}
            </Typography>

            <Typography 
                color='primary'
                sx={valueStyle}>
                    {` ${valuePrefix ||""} ${value}`}
            </Typography>
        </Stack>
    );
}

export default memo(Item);



interface Props{
        text:string
        value:string | number
        valuePrefix?:string
}
