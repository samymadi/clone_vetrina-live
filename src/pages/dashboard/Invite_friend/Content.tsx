import { Typography } from '@mui/material';
import {memo} from 'react';


//style
import {typoStyle} from './style'

const Content = () => {
    return (
        <Typography 
                sx={typoStyle} 
                color='primary' 
                fontSize='16px'>

                    by inviting a friend who subscribes to a plan. 
                    Your friend will receive a 30% discount coupon valid for any plan.
        </Typography>
    );
}

export default memo(Content);
