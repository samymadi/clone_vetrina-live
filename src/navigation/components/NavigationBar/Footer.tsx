//system imports
import {memo} from 'react';


//third party imports 
import { MenuItem, Stack,TextField,Typography } from '@mui/material';


//custom components imports 
import { TextFieldSelect } from '../../../components/reusable';


//style imports
import { typoDateStyle } from './style';


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
