import {memo} from 'react';

//component 
import { StyledLink } from 'src/components/reusable';
import { Link } from 'react-router-dom';


//material ui
import { Typography } from '@mui/material';
//style
import { Root } from "./style";



const Header = () => {
    return (
        <Root>
                <Typography variant='h6' fontSize='34px' color='#fff'>
                        Welcome Madi Samy
                </Typography>  
                    <StyledLink 
                            externalLink
                            target='_blank'  
                            color='#fff'
                            iconName='external-link'  
                            title='app.vetrinalive.com/samshop' 
                            to="https://app.vetrinalive.com/samshop"
                            sx={{fontWeight:'600',fontSize:'20px'}} />
                      
                          
        </Root>
    );
}

export default memo(Header);

export {};