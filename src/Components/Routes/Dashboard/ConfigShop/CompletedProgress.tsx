import {memo, useEffect, useState} from 'react';

//material ui
import {Stack,Typography} from '@mui/material';


//style 
import {textStyle} from './style';

const intervale={
    low:40,
    medium:70,
    height:90
}

const CompletedProgress = ({percentage}:Props) =>{

    const [perColor,setperColor] =useState<string>('red');


    useEffect(()=>{
        if(percentage < intervale.low) setperColor('red')
            else if(percentage <=  intervale.medium) setperColor('#FFA26B')
                else setperColor('green');

    })
    return (
                <Typography  
                    mt='20px'  
                    sx={{color:perColor,...textStyle}}>
                        {percentage}%
                        <Typography 
                            mb='20px' 
                            mt='-6px' 
                            fontSize='14px'>
                            Completed
                        </Typography>
                </Typography>
               
    );
}

export default memo(CompletedProgress);



interface Props{
    percentage:number
}
