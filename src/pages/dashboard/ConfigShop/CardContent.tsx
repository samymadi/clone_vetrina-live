import {memo} from 'react';

//material ui
import { Stack,Typography } from '@mui/material';

//Component 
import CompletedProgress from './CompletedProgress';

const CardContent = () => {
    return (
        <Stack >
                <CompletedProgress percentage={15} />
                <Typography 
                        paragraph 
                        fontSize='15px' 
                        color='primary'
                        mb='40px'>
                            Complete all the steps to have a complete shop to best present to your customers. 
                </Typography>
        </Stack>
    );
}

export default memo(CardContent);
