import { Stack, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

//style 
import {stackStyle,typoStyle} from './style';



const RedirectionButton = (props:Props):JSX.Element => {

    const {children,color='info',fontSize='17px',icon,sx} = props

    return (
        <Stack direction='row' 
               alignItems='center' 
               sx={stackStyle}> 
                        <Typography  sx={{...typoStyle,...sx}} color={color} fontSize={fontSize}>
                            {children}
                        </Typography> 
                        {icon}
        </Stack>
    );
}

export default RedirectionButton;



interface Props{
    children:string,
    color?:string
    icon?:JSX.Element
    fontSize?:string
    sx?:SxProps<Theme>
} 

