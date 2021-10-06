
import {Link} from 'react-router-dom'
import { Stack, Typography } from '@mui/material';
import Icons from '../Icons';


//style 
import { linkStyle,stackStyle } from './style';


const StyledLink = ({title,...rest}:Props):JSX.Element => {

    return (
        <Link 
        {...rest} 
        style={linkStyle} >   
                <Stack 
                direction='row' 
                alignItems='center' 
                sx={stackStyle}> 

                            <Typography 
                            color='info' 
                            fontFamily='Source Sans Pro' 
                            fontWeight={400} 
                            mr='15px' 
                            mb='5px'
                            fontSize="17px">
                                {title}
                            </Typography>
                            <Icons 
                            iconName='rightArrow'   
                            fontSize='18px' 
                            color='#21B8F9'
                            />     
                </Stack>
        </Link>
    );
}

export default StyledLink;


interface Props{
    to:string
    title:string
    target?:string
}
