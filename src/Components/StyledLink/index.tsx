
import {Link} from 'react-router-dom'
import { Stack, Typography } from '@mui/material';
import Icons from '../Icons';


const StyledLink = ({title,...rest}:Props):JSX.Element => {

    return (
        <Link 
        {...rest} 
        style={{textDecorationColor:'#21B8F9'}} >   
                <Stack 
                direction='row' 
                alignItems='center' 
                sx={{color:'#21B8F9'}}> 

                            <Typography 
                            color='info' 
                            fontFamily='Source Sans Pro' 
                            fontWeight={400} mr='6px' 
                            fontSize="17px">
                                {title}
                            </Typography>
                            <Icons 
                            iconName='rightArrow' 
                            fontSize='18px' 
                            color='#21B8F9'/>     
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
