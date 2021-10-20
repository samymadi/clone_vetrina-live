import {memo} from 'react';

//component 
import Link_To_Shop from './Link_To_Shop';
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
                          
                <Link_To_Shop/>    
        </Root>
    );
}

export default memo(Header);

export {};