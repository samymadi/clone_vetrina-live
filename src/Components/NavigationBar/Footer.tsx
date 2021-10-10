import {memo} from 'react';

import { MenuItem, Stack,TextField,Typography } from '@mui/material';


//style
import { typoDateStyle } from './style';
//component 
import { TextFieldSelect } from '../reusable';
    
const Footer = () => {

    const date = Date();
    return (
        <Stack>
            <TextFieldSelect />
            <Typography 
                    color='primary' 
                    fontSize='9px'  sx={typoDateStyle}>
                {date}
            </Typography>
        </Stack>
    );
}

export default memo(Footer);
