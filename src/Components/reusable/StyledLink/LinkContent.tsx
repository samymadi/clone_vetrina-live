import {memo} from 'react'
import {
        Stack,
        Typography,
        Theme} from '@mui/material';
import { SxProps } from '@mui/system';        


//component 
import Icons from 'src/components/Icons';


//style 
import { stackStyle } from './style';

//type 


const LinkSwitch = ({title,color,iconName,fontSize,sx}:Props) => {
    return (
        <Stack 
            direction='row' 
            alignItems='center' 
            sx={stackStyle}> 

                        <Typography 
                        color={color ? color : 'info'} 
                        fontFamily='Source Sans Pro' 
                        fontWeight={400} 
                        mr='15px' 
                        mb='5px'
                        fontSize={fontSize ? fontSize : '15px' }
                        sx={sx}>
                            {title}
                        </Typography>
                        <Icons 
                        iconName={ iconName ? iconName : 'rightArrow' }  
                        fontSize={fontSize ? fontSize : '18px' } 
                        color='#21B8F9'
                        />     
        </Stack>
    );
}

export default memo(LinkSwitch);


interface Props{
    title:string,
    color?:string,
    iconName?:string
    fontSize?:string
    sx?:SxProps<Theme>
} 
