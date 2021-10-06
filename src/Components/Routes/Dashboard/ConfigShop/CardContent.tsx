import {memo} from 'react';

//material ui
import { Stack,Typography } from '@mui/material';

//Component 
import CompletedProgress from './CompletedProgress';

const CardContent = () => {
    return (
        <Stack >
                <CompletedProgress percentage={100} />
                <Typography 
                        paragraph 
                        fontSize='15px' 
                        color='primary'>
                            Complete all the steps to have a complete shop to best present to your customers. 
                </Typography>
        </Stack>
    );
}

export default memo(CardContent);
